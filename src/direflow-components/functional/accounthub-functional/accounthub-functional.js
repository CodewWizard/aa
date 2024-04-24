import React, { useState, useEffect, useCallback } from "react";
import AccountHub from "../../business/components/accounthub/accounthub";
import DataTable from "../../core/data-table/datatable";
import NProgress from 'nprogress';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const FunctionalAccountHub = (props) => {
  const {
    LoggedInUser,
    PageTitle,
    PageDesc,
    favicon,
    AdvanceFilterModelSchema,
    AccounthubModel,
    SelectDropdownModel,
    AccountHubColummns,
    AccountHubExpandCols,
    ExpandRowFilter,
    GetQuery,
    LoadAccountHub,
    assets
  } = props;

  const [message, setMessage] = useState("No Data Found");
  const [accounthub, setAccounthub] = useState([]);
  const [advanceFilterModelSchema, setAdvanceFilterModelSchema] = useState(AdvanceFilterModelSchema);
  const [accounthubModel, setAccounthubModel] = useState(AccounthubModel);
  const [masterAccounthub, setMasterAccounthub] = useState([]);

  const LoadData = async (model, isInitialLoad) => {
    NProgress.start();
    setMessage('Loading...')
    setAccounthubModel(model);
    if (model.fromdate && model.fromdate.length > 0 && model.todate === null && !isInitialLoad) {
      console.error('Please select to date as well.');
      props.toast && props.toast("Please select to date as well.", true);
      NProgress.done();
      return false;
    }

    const Result = await LoadAccountHub(isInitialLoad, model, LoggedInUser.decodedJWT.role, GetQuery);
    setAccounthub(Result);
    if (Result?.length === 0) setMessage('No Data Found');
    NProgress.done();
  }

  useEffect(() => {
    LoadData(accounthubModel, true);
  }, []);

  const onResetForm = async () => {
    await LoadData({ ...AccounthubModel }, true);

    let tempModel = {
      policystatus: null,
      policynumber: null,
      quoteNumber: null,
      agentid: null,
      agentname: null,
      agentstates: null,
      insuredname: null,
      fromdate: null,
      todate: null,
      propertyaddress: null,
      underwriterid: null,
      businessname: null,
      transactiondate: null,
      lob: null,
      showAdvanceFilters: true
    }

    setAccounthubModel(tempModel);

  }

  const onSearchSchemaChange = useCallback(async (model, key) => {
    switch (key) {
      case "status":
        await LoadData(model);
        break;

      case "fromdate":
        advanceFilterModelSchema[0].controls = advanceFilterModelSchema[0].controls.map(c => {
          if (c.key === "todate") { c.props.minDate = moment(`${model.fromdate}`); }
          return c;
        })
        setAdvanceFilterModelSchema(advanceFilterModelSchema);
        break;

      default:
        break;
    }

  }, []);

  const onAdvanceSearch = useCallback(async (model, isInitialLoad = false) => {
    await LoadData(model, isInitialLoad);
  }, []);

  const expandRow = useCallback({
    renderer: (row) => {
      let tableRows = ExpandRowFilter(accounthub, row);
      return (
        <div name="">
          <div className="row m-auto expandRows">
            <div className="col-lg-12 p-0 ">
              <div className="row-expansion-style accountHubAccordion expandRows">
                <DataTable
                  tableKey="QuoteNumber"
                  cols={AccountHubExpandCols}
                  rows={tableRows}
                  isBordered={false} needPagination={false}
                // ColumnStyle={ColumnStyle} TODO:- add styles
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    showExpandColumn: AccountHubExpandCols && AccountHubExpandCols.length > 0,
    expandByColumnOnly: true,
    onlyOneExpanding: true,
    expandColumnPosition: 'right',
    expandColumnRenderer: ({ expanded }) => {
      if (expanded) {
        return <FontAwesomeIcon icon={faAngleUp} size="lg" />
      }
      return <FontAwesomeIcon icon={faAngleDown} size="lg" />
    }
  }, [accounthub]);

  return (
    <AccountHub
      PageTitle={PageTitle}
      PageDesc={PageDesc}
      advanceFilterModelSchema={advanceFilterModelSchema}
      onSchemaChange={onSearchSchemaChange}
      selectDropdownModel={SelectDropdownModel}
      advanceSearch={onAdvanceSearch}
      resetForm={onResetForm}
      accounthubModel={accounthubModel}
      accounthub={accounthub.filter((x) => x.IsMaster === true)}
      AccountHubColummns={AccountHubColummns}
      expandRow={expandRow}
      onBlur={() => { }}
      keyField={"PolicyNumber"}
      favicon={favicon}
      message={message}
      assets={assets}
    />
  );
};

export default FunctionalAccountHub;
