import { faFileCsv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { CSVExport, Search } from "react-bootstrap-table2-toolkit";
import { DynamicForm } from "../../../../component-exports";
import AnalyticsCharts from "../../../core/charts/charts";
import { paginationOptions } from "../../../core/data-table/constant";
import { PolicyChartsDTColummns } from "./constants/constants";
import { AnalyticsConst } from "./utilities/chartengine";
import { filterPoliciesByModel, getFilterKey, removeDuplicateColumns, updateFilters, updateFiltersByKey, updateFiltersFormData } from "./utilities/helpers";

const { SearchBar, ClearSearchButton } = Search;

const PolicyAnalytics = (props) => {

    const {
        chartFilters,
        advanceFilterModel,
        customReportConfig
    } = props

    let arg = {
        policyStatusMaster: props.statusKeys,
        transactionTypeMaster: props.transactionKeys
    }

    const analyticsConst = new AnalyticsConst(arg, props.styles)
    const [policies, setPolicies] = useState(props.policiesData);
    const [filteredPolicies, setFilteredPolicies] = useState(policies);
    const policyAnalytics = analyticsConst.policyAnalyticsConfig(policies, 2023)
    const [updatedPolicies, setUpdatedPolicies] = useState(policyAnalytics);
    const [filtersFormData, setFiltersFormData] = useState(props.FiltersFormData);
    const [policyYear, setPolicyYear] = useState("2022");
    const [chartName, setChartName] = useState("");
    const [incr, setIncr] = useState(0);
    const [hidePagination, setHidePagination] = useState(false);
    const [reload, setReload] = useState(true);

    const TableIndexObject = {
        dataField: 'Index',
        text: '',
        sort: true,
        hidden: true,
        csvExport: false,
        headerStyle: () => {
            return { width: "10%" };
        },
        formatter: (cell, row) => {
            setIncr(p => p + 1);
            return incr
        }
    }

    let ChartsDTColummns = [...PolicyChartsDTColummns, TableIndexObject]
    const [tableColumns, setTableColumns] = useState(ChartsDTColummns)
    const { ExportCSVButton } = CSVExport;
    const [filters, setFilters] = useState(props.filters);//
    const [showMonthly, setShowMonthly] = useState(false);

    useEffect(() => {

        if (props?.filterModel) {
            Object.entries(props.filterModel).forEach(entry => {
                const existingFilter = filters.find(filter => filter.key === entry[0] && filter.value === entry[1]);
                if (!existingFilter) {
                    filters.push({ "key": entry[0], "value": entry[1] });
                }
            });

            setFilters(filters);
        } else {
            let initialFilters = filters.map((item => {
                Object.entries(item).forEach(k => {
                    item[k] = ""
                })
            }))
            setFilters(initialFilters)
        }


        if (props?.tableConfigPA) {
            let columns = props?.tableConfigPA?.columns;
            let isOverrideColumns = props?.tableConfigPA?.overrideColumns;
            if (isOverrideColumns) {
                columns.push(TableIndexObject)
                setTableColumns(columns)
            } else {
                let newColumns = removeDuplicateColumns(ChartsDTColummns, columns, 'dataField')
                ChartsDTColummns.push(...newColumns)
                setTableColumns(ChartsDTColummns)
            }
        }
    }, [])

    useEffect(() => {
        applyFilters();
        const filterConstant = chartFilters.find(x => x.tabName == "policyanalytics" && x.chartName == policyAnalytics.YearwiseCount.chartKey);
        const filterIndex = filters.findIndex(x => x.key == filterConstant.chartFilterName);
        if (filterIndex == -1) {
            setShowMonthly(false);
        }
    }, [filters])

    useEffect(() => {

        let elements = document.getElementsByClassName('dropdown-item');
        Array.from(elements).forEach((el) => {
            el.removeAttribute('href');
        });

    }, [reload]);


    useEffect(() => {
        setReload(false);
        setTimeout(() => {
            setReload(true);
        }, 100);
    }, [tableColumns])

    const applyFilters = () => {
        let tempPolicies = [...policies];
        if (tempPolicies.length == 0) return false;
        filters.forEach(filter => {
            let temp2Policies = JSON.parse(JSON.stringify(tempPolicies))
            tempPolicies = temp2Policies.filter(x => x[filter.key] == filter.value);
        });
        if (tempPolicies.length == 0) {
            props.toast && props.toast("No record found for matching filters.", true);
            // alert("no matching data found");
            return false;
        }
        setFilteredPolicies(tempPolicies);
        setUpdatedPolicies(analyticsConst.policyAnalyticsConfig(tempPolicies, policyYear));
    }

    const CloseFilter = (filterIndex) => {
        let updatedFilters = updateFilters(filters, filterIndex)
        setFilters(updatedFilters);
        let tempdata = updateFiltersFormData(filtersFormData, updatedFilters)
        setFiltersFormData(tempdata);
    }

    const OnFilterSchemaChange = (model, key) => {
        if (!key) return
        setFiltersFormData(model);

        let nonquotepolicies = policies.filter(policy => {
            return ((Object.values(props.transactionKeys).includes(policy.TransactionType) && policy.IsUwData == false))
        })
        let tempPolicies = filterPoliciesByModel(model, nonquotepolicies);
        let tempFilters = updateFiltersByKey(filters, model, key);
        tempFilters.forEach(filter => {
            tempPolicies = [...tempPolicies.filter(x => x[filter.key] == filter.value)];
        });
        if (tempPolicies.length == 0) {
            let tempdata = updateFiltersFormData(model, filters)
            setFiltersFormData(tempdata)
            props.toast && props.toast("No record found for matching filters.", true);
            // alert("no matching results found")
            return false;
        }
        setFilteredPolicies(tempPolicies);
        onSetFilters(model, key);
    }

    const onSetFilters = (model, key) => {
        let tempFilters = updateFiltersByKey(filters, model, key);
        setFilters(tempFilters);
    }

    const TypeFilterPolicies = (chartName, keyName, keyValue) => {
        if (chartName == policyAnalytics.NewrenewelwiseCount.chartKey) {
            keyName = keyName == "New Business" ? "NB" : "RB";
        }
        if (chartName == policyAnalytics.YearwiseCount.chartKey) {
            setShowMonthly(true);
            setPolicyYear(keyName)
        }
        onFilterPolicies('policyanalytics', chartName, keyName, keyValue)
    }

    const onFilterPolicies = (tabName, chartName, keyName, keyValue) => {

        // let tempFilters = [...filters];
        let tempFilters = JSON.parse(JSON.stringify(filters))
        const filterConstant = chartFilters.find(x => x.tabName == tabName && x.chartName == chartName);
        const filterIndex = tempFilters.findIndex(x => x.key == filterConstant.chartFilterName);
        if (filterIndex > -1) {
            tempFilters[filterIndex].value = filterConstant.chartFilterValueField == 'keyName' ? keyName : keyValue;
        } else {
            tempFilters.push({ key: filterConstant.chartFilterName, value: filterConstant.chartFilterValueField == 'keyName' ? keyName : keyValue });
        }
        setFilters(tempFilters);
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <h5 className="primaryColor3 graphik-Medium pb-2">Policy Analytics</h5>
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-md-12'>
                    {
                        filters.map((filter, indx) => {
                            return (
                                <div className="divTitle" id="divTitle" key={indx}>
                                    <div className="divFilter">
                                        <img className="closeFilter" src={props.assets?.closefilter || "images/close-16v2.png"} id="P" alt="closeFilter" onClick={() => CloseFilter(indx)} />
                                        {getFilterKey(filter.key) ? getFilterKey(filter.key) : filter.key} - {filter.key == 'TransactionMonth' ? moment().month(filter.value - 1).format('MMMM') : filter.value}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='col-md-12 pt-2 pb-4'>

                    <DynamicForm
                        key="advanceFilterOptions"
                        formId="advanceFilterOptions"
                        title=""
                        onChangeValidateForm="true"
                        positionClass="form"
                        titlePositionClass="form-title"
                        formPositionClass="dynamic-form"
                        defaultValues={filtersFormData}
                        validators={[]}
                        model={advanceFilterModel}
                        dataModel={filtersFormData}
                        onSubmit={model => {
                        }}
                        onChange={(model, key) => {
                            OnFilterSchemaChange(model, key);
                        }}
                    />

                </div>
            </div>
            <div className='row'>
                {
                    !showMonthly &&
                    <div className='col-md-6'>
                        <AnalyticsCharts
                            chartPositionClass={updatedPolicies.YearwiseCount.chartPositionClass}
                            chartTitle={updatedPolicies.YearwiseCount.chartTitle}
                            chartKey={updatedPolicies.YearwiseCount.chartKey}
                            chartType={updatedPolicies.YearwiseCount.chartType}
                            chartOptions={updatedPolicies.YearwiseCount.chartOptions}
                            chartData={updatedPolicies.YearwiseCount.chartData}
                            // debugger
                            chartClicked={(keyName, keyValue) => TypeFilterPolicies(updatedPolicies.YearwiseCount.chartKey, keyName, keyValue)}
                        />
                    </div>
                }
                {
                    showMonthly &&
                    <div className='col-md-6'>
                        <AnalyticsCharts
                            chartPositionClass={updatedPolicies.MonthwiseCount.chartPositionClass}
                            chartTitle={updatedPolicies.MonthwiseCount.chartTitle}
                            chartKey={updatedPolicies.MonthwiseCount.chartKey}
                            chartType={updatedPolicies.MonthwiseCount.chartType}
                            chartOptions={updatedPolicies.MonthwiseCount.chartOptions}
                            chartData={updatedPolicies.MonthwiseCount.chartData}
                            chartClicked={(keyName, keyValue) => TypeFilterPolicies(updatedPolicies.MonthwiseCount.chartKey, moment().month(keyName).format('MM'), keyValue)}
                        />
                    </div>
                }
                <div className='col-md-6'>
                    <div className='mb-4'>
                        <AnalyticsCharts
                            chartPositionClass={updatedPolicies.NewrenewelwiseCount.chartPositionClass}
                            chartTitle={updatedPolicies.NewrenewelwiseCount.chartTitle}
                            chartKey={updatedPolicies.NewrenewelwiseCount.chartKey}
                            chartType={updatedPolicies.NewrenewelwiseCount.chartType}
                            chartOptions={updatedPolicies.NewrenewelwiseCount.chartOptions}
                            chartData={updatedPolicies.NewrenewelwiseCount.chartData}
                            chartClicked={(keyName, keyValue) => TypeFilterPolicies(updatedPolicies.NewrenewelwiseCount.chartKey, keyName, keyValue)}
                        />
                    </div>
                    <div>
                        {
                            (chartName === updatedPolicies.TransactiontypewiseCount.chartTitle)
                                ?
                                <AnalyticsCharts
                                    chartPositionClass={updatedPolicies.TransactiontypewiseCount.chartPositionClass}
                                    chartTitle={updatedPolicies.TransactiontypewiseCount.chartTitle}
                                    chartKey={updatedPolicies.TransactiontypewiseCount.chartKey}
                                    chartType={updatedPolicies.TransactiontypewiseCount.chartType}
                                    chartOptions={updatedPolicies.TransactiontypewiseCount.chartOptions}
                                    chartData={updatedPolicies.TransactiontypewiseCount.chartData}
                                    chartClicked={(keyName, keyValue) => TypeFilterPolicies(updatedPolicies.TransactiontypewiseCount.chartKey, keyName, keyValue)}
                                />
                                :
                                <AnalyticsCharts
                                    chartPositionClass={updatedPolicies.TransactiontypewiseCount.chartPositionClass}
                                    chartTitle={updatedPolicies.TransactiontypewiseCount.chartTitle}
                                    chartKey={updatedPolicies.TransactiontypewiseCount.chartKey}
                                    chartType={updatedPolicies.TransactiontypewiseCount.chartType}
                                    chartOptions={updatedPolicies.TransactiontypewiseCount.chartOptions}
                                    chartData={updatedPolicies.TransactiontypewiseCount.chartData}
                                    chartClicked={(keyName, keyValue) => TypeFilterPolicies(updatedPolicies.TransactiontypewiseCount.chartKey, keyName, keyValue)}
                                />
                        }

                    </div>
                </div>
            </div>

            {reload &&
                <ToolkitProvider
                    bootstrap4
                    keyField={'Index'}
                    data={filteredPolicies.filter(policy => {
                        return (Object.values(props.transactionKeys).includes(policy.TransactionType) && (policy.IsUwData === false && policy.IsPolicyBind === true))
                    })}
                    columns={tableColumns}
                    search={{}}
                    exportCSV
                >
                    {
                        props => (
                            <div>
                                {
                                    customReportConfig?.isCustomDataCollected &&
                                    (<p className="my-3" style={{ float: "left" }}>
                                        {customReportConfig.dataCollectionStartTimestampText || `The data represented in the reports is collected since ${moment.utc(customReportConfig.dataCollectionStartTimestamp).local().format("DD MMMM yy")}`}
                                    </p>)
                                }

                                <div className='singleBox customDataTable'>
                                    <div className='d-flex justify-content-end my-3'>
                                        <div name="searchSection" className='searchSection'>
                                            <SearchBar {...props.searchProps} placeholder="Search" />
                                        </div>
                                        <ExportCSVButton {...props.csvProps} className="btn btn-sm btnIcon ms-3">
                                            <FontAwesomeIcon icon={faFileCsv} size="2x" />
                                        </ExportCSVButton>
                                    </div>
                                    <BootstrapTable
                                        {...props.baseProps}
                                        bordered={false}
                                        pagination={paginationFactory(
                                            {
                                                ...paginationOptions,
                                                hideSizePerPage: hidePagination
                                            })
                                        }
                                        noDataIndication={'No Results Found !!!'}
                                    />
                                </div>
                            </div>
                        )
                    }
                </ToolkitProvider>
            }
        </>
    )
}
export default PolicyAnalytics;