import React from "react";
import { useEffect, useState } from "react";
import PageHead from "../../../layouts/head/head";
import DynamicForm from "../../../core/dynamic-form/dynamic-form";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import DataTable from "../../../core/data-table/datatable";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import { paginationOptions } from "../../../core/data-table/constant";

const { SearchBar } = Search;

const AccountHub = (props) => {
  const {
    AccountHubColummns,
    PageTitle,
    PageDesc,
    advanceFilterModelSchema,
    onSchemaChange,
    selectDropdownModel,
    advanceSearch,
    resetForm,
    // message,
    expandRow,
    favicon,
    onPageChange,
    apiKey,
    assets
  } = props;
  const [accounthub, setAccountHub] = useState(props.accounthub);
  const [accounthubModel, setAccounthubModel] = useState(props.accounthubModel);
  const [showFilters, setShowFilters] = useState(false);
  const [message, setMessage] = useState(props.message);
  const [flag, setFlag] = useState(false);
  const [hidePagination, setHidePagination] = useState(false);

  const toggle = () => {
    setShowFilters(!showFilters);
    let tempmodel = accounthubModel;
    tempmodel.showAdvanceFilters = !showFilters;
    setAccounthubModel(tempmodel);
  };

  useEffect(() => {
    setAccountHub(props.accounthub);
  }, [props.accounthub]);

  useEffect(() => {
    setAccounthubModel(props.accounthubModel);
  }, [props.accounthubModel]);

  useEffect(() => {
    setMessage(props.message);
  }, [props.message]);

  useEffect(()=>{
    if(!hidePagination){
      let elements = document.getElementsByClassName('dropdown-item');
      Array.from(elements).forEach((el) => {
        el.removeAttribute('href');
      });
    }
  }, [hidePagination, accounthub]);

  // useEffect(() => {
  //   // to disable browser back button
  //   window.history.pushState(null, document.title, window.location.href);
  //   window.addEventListener("popstate", function (event) {
  //     window.history.pushState(null, document.title, window.location.href);
  //   });
  // }, []);

  // useEffect(() => {
  //   let elements = document.getElementsByClassName("dropdown-item");
  //   Array.from(elements).forEach((el) => {
  //     el.removeAttribute("href");
  //   });
  // }, [props.accounthub]);

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
                  search ={{
                    afterSearch: (searchStr)=>{
                      if(searchStr.length === 0){
                        setMessage("No Records Found");
                        setHidePagination(true);
                      }
                      else{
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
                                    onSchemaChange(accounthubModel, key);
                                  }}
                                  onBlur={(model, key) => {}}
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
                                    advanceSearch(model);
                                  }}
                                  onChange={(accounthubModel, key) => {
                                    onSchemaChange(accounthubModel, key);
                                  }}
                                  onBlur={(model, key) => {}}
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
                                  onClick={resetForm}
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
                            bordered={false}
                            pagination={
                              accounthub.length > 0 &&
                              paginationFactory(
                                {...paginationOptions,
                                  onPageChange: (page, sizePerPage) => {
                                    debugger;
                                    if(onPageChange){
                                      onPageChange(page, sizePerPage);
                                    }
                                  },
                                  hideSizePerPage: hidePagination
                              })
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

export default AccountHub;
