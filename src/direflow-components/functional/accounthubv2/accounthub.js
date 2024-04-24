import React from "react";
import { useEffect, useState } from "react";
import PageHead from "../../layouts/head/head";
import DynamicForm from "../../core/dynamic-form/dynamic-form";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import { paginationOptions } from "../../core/data-table/constant";
import NProgress from "nprogress";
import { LoadNextPage } from "../utilities/helpers/accounthub";

const { SearchBar } = Search;

const AccountHubV2 = (props) => {
    const {
        AccountHubColummns,
        PageTitle,
        PageDesc,
        advanceFilterModelSchema,
        onSchemaChange,
        selectDropdownModel,
        advanceSearch,
        resetForm,
        expandRow,
        favicon,
        onPageChange,
        apiKey,
        assets,
        maxItemCount = 100,
        searchFields = [],
        base,
        query,
        ProcessAccountHubData,
        errorHandler
    } = props;
    const [accounthub, setAccountHub] = useState([]);
    const [accounthubModel, setAccounthubModel] = useState(props.accounthubModel);
    const [showFilters, setShowFilters] = useState(false);
    const [message, setMessage] = useState(props.message);
    const [hidePagination, setHidePagination] = useState(false);

    // Optimization variables & Methods start
    const [page, setPage] = useState(1);
    const [sizePerPage, setSizePerPage] = useState(10);
    const [totalSize, setTotalSize] = useState(0);
    const [currRecordsCnt, setCurrRecordCnt] = useState(0);
    const [currRecords, setCurrRecords] = useState([]);
    const [prevPage, setPrevPage] = useState(0);
    const [sortOrder, setSortOrder] = useState("none");
    const [sortField, setSortField] = useState("none");
    const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
    const [totalDBRecords, setTotalDBRecords] = useState(0);

    const sliceData = (record) => {
        const offset = (parseInt(page) - 1) * sizePerPage;
        const data = record ? record.slice(offset, offset + sizePerPage) : currRecords.slice(offset, offset + sizePerPage);
        return sortFunction(data, sortOrder, sortField);
    }

    const sortFunction = (data, order, field) => {
        if (order === "none" || field === "none") return data;

        return data.sort((a, b) => {
            if (typeof a[field] === "number") {
                return (order === "asc" ? 1 : -1) * (a[field] - b[field])
            }
            else {
                if (order === "asc") {
                    return a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1
                }
                return a[field].toLowerCase() < b[field].toLowerCase() ? 1 : -1
            }
        });
    }

    const OnTablePaginationChange = (type, newState) => {
        console.log("Remote Action Called...");
        if (type === "pagination") {
            setPrevPage(page);
            if (newState.sizePerPage != sizePerPage) {
                setPage(Math.min(Math.floor((currRecordsCnt * maxItemCount) / newState.sizePerPage), newState.page))
            }
            else {
                setPage(newState.page);
            }
            setSizePerPage(newState.sizePerPage);
        }
        else if (type === "sort") {
            setSortOrder(newState.sortOrder);
            setSortField(newState.sortField);
            const data = sortFunction(currRecords, newState.sortOrder, newState.sortField);
            setAccountHub(sliceData(data));
        }
        else if (type === "search") {
            const data = currRecords.filter(item => {
                let flag = false;
                for (const [k, v] of Object.entries(item)) {
                    if (searchFields.length && searchFields?.includes(k) && v?.toLowerCase()?.includes(newState.searchText?.toLowerCase())) {
                        flag = true;
                        break;
                    }
                    else if ((typeof v === "string" || typeof v === "number") && v?.toString()?.toLowerCase()?.includes(newState.searchText?.toLowerCase())) {
                        flag = true;
                        break;
                    }
                }
                return flag;
            });
            if (data.length == 0) {
                setMessage("No Records Found");
            }
            if (newState.searchText?.length == 0) {
                setTotalSize(totalDBRecords);
            }
            else {
                setTotalSize(data.length)
            }
            setPage(1);
            setAccountHub(sliceData(data));
        }
    }

    const fetchNextRecords = async (resetSize) => {
        console.log("fetchNextRecords");
        try {
            if ((currRecordsCnt * maxItemCount / sizePerPage) < page) {
                NProgress.start();
                let size = maxItemCount;
                let flag = false;
                if (page >= prevPage && (prevPage + 1) != (page) && parseInt(page - prevPage) * sizePerPage >= size) {
                    if (parseInt(page - prevPage) * sizePerPage % size === 0) {
                        size = parseInt((parseInt(page - prevPage) * sizePerPage) / size) * size;
                    }
                    else {
                        size = (parseInt((parseInt(page - prevPage) * sizePerPage) / size) + 1) * size;
                    }
                    flag = true;
                }
                const { data, totalCnt } = await LoadNextPage(currRecordsCnt, maxItemCount, size, resetSize ? 0 : totalSize, base, query.GETBYPAGINATION, ProcessAccountHubData);
                setTotalSize(totalCnt);
                setTotalDBRecords(totalCnt);
                setCurrRecordCnt(prev => {
                    return flag ? prev + parseInt(page - prevPage) : ++prev;
                });
                setCurrRecords(prev => {
                    if (prev) return [...prev, ...data];
                    return [...data];
                });
                return;
            }
            setAccountHub(sliceData());
        } catch (error) {
            console.log("Error>>>>>>", error);
            errorHandler && errorHandler(error);
        }
        finally {
            NProgress.done()
        }
    }

    const updateTableProperties = async (data) => {
        if (data.length == 0) {
            setMessage("No Records Found");
        }
        setTotalSize(data.length);
        setIsAdvancedSearch(true);
        setAccountHub(data);
        await (() => new Promise(res => setTimeout(res, 100)))()
        setPage(1);
        setCurrRecordCnt(0);
        setSizePerPage(10);
        setCurrRecords([]);
        setPrevPage(0);
    }
    // end

    const onPolicyStatusChange = async (model, key) => {
        try {
            if (!key) return;
            if (key === "status" && model.policystatus.length === 0) {
                setMessage("Loading...");
                setIsAdvancedSearch(false);
                fetchNextRecords(true);
                return;
            }
            setAccountHub([]);
            const data = await onSchemaChange(model, key);
            updateTableProperties(data);
        } catch (error) {
            errorHandler && errorHandler(error);
        }
    }
    const onAdvancedSearch = async (model) => {
        try {
            setAccountHub([]);
            const data = await advanceSearch(model);
            updateTableProperties(data);
        } catch (error) {
            errorHandler && errorHandler(error);
        }
    }
    const onResetForm = () => {
        if (isAdvancedSearch) {
            setIsAdvancedSearch(false);
            fetchNextRecords(true);
        }
        resetForm();
    }
    const toggle = () => {
        setShowFilters(!showFilters);
        let tempmodel = accounthubModel;
        tempmodel.showAdvanceFilters = !showFilters;
        setAccounthubModel(tempmodel);
    };

    useEffect(() => {
        if (!isAdvancedSearch) {
            console.log("Curreent Records>>>>", currRecords.length)
            console.log("Curreent Cnt>>>>", currRecordsCnt);
            setAccountHub(sliceData())
        }
    }, [currRecords]);

    useEffect(() => {
        if (!isAdvancedSearch) {
            fetchNextRecords();
        }
    }, [page, sizePerPage]);

    useEffect(() => {
        setAccounthubModel(props.accounthubModel);
    }, [props.accounthubModel]);

    useEffect(() => {
        setMessage(props.message);
    }, [props.message]);

    useEffect(() => {
        if (!hidePagination) {
            let elements = document.getElementsByClassName('dropdown-item');
            Array.from(elements).forEach((el) => {
                el.removeAttribute('href');
            });
        }
    }, [hidePagination, accounthub]);

    return (
        <div>
            <PageHead title={PageTitle} description={PageDesc} favicon={favicon} />
            <div className="main-content mt-3">
                <div className="content3">
                    <div className="businessStartDiv col-100 floatLft">
                        <div className="commonHead">
                            <h2>ACCOUNT HUB</h2>
                        </div>
                        <div className="clearfix"></div>
                        <div className="boxWrapper pt-0">
                            <div id="divPolicyList" name="accounthubTable">
                                <ToolkitProvider
                                    bootstrap4
                                    keyField={props.keyField}
                                    data={accounthub}
                                    columns={AccountHubColummns}
                                    search={{
                                        afterSearch: (searchStr) => {
                                            debugger;
                                            if (searchStr.length === 0) {
                                                setMessage("No Records Found");
                                                setHidePagination(true);
                                            }
                                            else {
                                                setMessage(props.message);
                                                setHidePagination(false);
                                            }
                                        }
                                    }}
                                >
                                    {(props) => (
                                        <div className="singleBox customDataTable p-4">
                                            <div>
                                                <div className="row m-auto mb-4">
                                                    <div className="col-md-4 ps-0">
                                                        <div name="statusTest">
                                                            <div name="statusDropdown">
                                                                <DynamicForm
                                                                    key="statusDropdown"
                                                                    formId="statusDropdown"
                                                                    title=""
                                                                    onChangeValidateForm="true"
                                                                    positionClass="form"
                                                                    titlePositionClass="form-title"
                                                                    formPositionClass="dynamic-form"
                                                                    actionsPositionClass="form-actions"
                                                                    submitPositionClass="btn btn-primary m-3 float-right"
                                                                    defaultValues={accounthubModel}
                                                                    validators={[]}
                                                                    model={selectDropdownModel}
                                                                    dataModel={accounthubModel}
                                                                    onChange={(accounthubModel, key) => {
                                                                        onPolicyStatusChange(accounthubModel, key);
                                                                    }}
                                                                    onBlur={(model, key) => { }}
                                                                    apiKey={apiKey}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 ms-auto pe-0 d-flex align-items-end justify-content-end">
                                                        <div name="searchSection" className="searchSection">
                                                            <SearchBar {...props.searchProps} />
                                                        </div>

                                                        <button
                                                            onClick={toggle}
                                                            className="advSearch tooltipUi filterIconButt ms-3"
                                                            title="Advance Filter"
                                                        >
                                                            <div className="filterIconSet">
                                                                <img src={assets?.funnel || "images/funnel.png"} width="22" />
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                                {accounthubModel.showAdvanceFilters && (
                                                    <div className="col-md-12 mb-4">
                                                        <div name="advFilter" className="advFilter">
                                                            <div name="advanceFilterOptions">
                                                                <DynamicForm
                                                                    key="advanceFilterOptions"
                                                                    formId="advanceFilterOptions"
                                                                    title=""
                                                                    onChangeValidateForm="true"
                                                                    positionClass="form"
                                                                    titlePositionClass="form-title"
                                                                    formPositionClass="dynamic-form"
                                                                    actionsPositionClass="form-actions"
                                                                    submitPositionClass="btn btn-primary m-3 float-right"
                                                                    defaultValues={accounthubModel}
                                                                    validators={[]}
                                                                    model={advanceFilterModelSchema}
                                                                    dataModel={accounthubModel}
                                                                    onSubmit={(model) => {
                                                                        onAdvancedSearch(model);
                                                                    }}
                                                                    onChange={(accounthubModel, key) => {
                                                                        onSchemaChange(accounthubModel, key);
                                                                    }}
                                                                    onBlur={(model, key) => { }}
                                                                    apiKey={apiKey}
                                                                />
                                                            </div>
                                                            <div className="col-md-12 mt-3">
                                                                <button
                                                                    form="advanceFilterOptions"
                                                                    type="submit"
                                                                    name="submitSearch"
                                                                    id="submitAdvSearch"
                                                                    className="btnStyle btnPrim"
                                                                >
                                                                    Apply
                                                                </button>
                                                                <button
                                                                    type="reset"
                                                                    name="reset"
                                                                    id="resetBtn"
                                                                    className="btnStyle btnReject"
                                                                    onClick={onResetForm}
                                                                >
                                                                    Reset
                                                                </button>{" "}
                                                                {/** TODO fix this :- html input type reset not working */}
                                                                <button
                                                                    type="button"
                                                                    name="closeSearch"
                                                                    id="closeSearchBtn"
                                                                    className="btnStyle btnClose"
                                                                    onClick={toggle}
                                                                >
                                                                    Close
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {
                                                <div className="mt-4">
                                                    <BootstrapTable
                                                        {...props.baseProps}
                                                        remote={{ pagination: isAdvancedSearch ? false : true, filter: false, sort: false }}
                                                        onTableChange={OnTablePaginationChange}
                                                        bordered={false}
                                                        pagination={
                                                            accounthub.length > 0 &&
                                                            paginationFactory(
                                                                isAdvancedSearch ? {
                                                                    ...paginationOptions,
                                                                    onPageChange: (page, sizePerPage) => {
                                                                        debugger;
                                                                        if (onPageChange) {
                                                                            onPageChange(page, sizePerPage);
                                                                        }
                                                                    },
                                                                    hideSizePerPage: hidePagination
                                                                } : {
                                                                    ...paginationOptions,
                                                                    onPageChange: (page, sizePerPage) => {
                                                                        debugger;
                                                                        if (onPageChange) {
                                                                            onPageChange(page, sizePerPage);
                                                                        }
                                                                    },
                                                                    hideSizePerPage: hidePagination,
                                                                    totalSize,
                                                                    sizePerPage,
                                                                    page
                                                                }
                                                            )
                                                        }
                                                        noDataIndication={message}
                                                        expandRow={expandRow}
                                                    />
                                                </div>
                                            }
                                        </div>
                                    )}
                                </ToolkitProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountHubV2;
