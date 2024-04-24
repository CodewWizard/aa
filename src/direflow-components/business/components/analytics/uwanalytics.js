import { faFileCsv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from "moment";
import NProgress from "nprogress";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import { AnalyticsCharts, DynamicForm } from "../../../../component-exports";
import { UWAChartsDTColumns, paginationOptions } from "./constants/constants";
import { AnalyticsConst } from "./utilities/chartengine";
import { filterPoliciesByModel, getFilterKey, removeDuplicateColumns, updateFilters, updateFiltersByKey, updateFiltersFormData } from "./utilities/helpers";
const { SearchBar, ClearSearchButton } = Search;

const UWAnalyticsComponent = (props) => {

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
  const uwAnalytics = analyticsConst.underWriterAnalyticsConfig(policies, 2023)
  const [filtersFormData, setFiltersFormData] = useState(props.FiltersFormData);
  const [uWData, setUWData] = useState([]);
  const [updatedPolicies, setUpdatedPolicies] = useState(uwAnalytics);
  const [filteredPolicies, setFilteredPolicies] = useState(policies);
  const [policyYear, setPolicyYear] = useState("2022");
  const [showUWData, setShowUWData] = useState(false);
  const { ExportCSVButton } = CSVExport;
  const [incr, setIncr] = useState(0);

  const [filters, setFilters] = useState(props.filters);
  const [showMonthly, setShowMonthly] = useState(false);
  const [hidePagination, setHidePagination] = useState(false);
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
  const ChartsDTColummns = [...UWAChartsDTColumns, TableIndexObject]
  const [tableColumns, setTableColumns] = useState(ChartsDTColummns)

  const attributesToCompare = ['Lob', 'UnderwriterName', 'UnderwriterCode', 'TransactionType', 'TransactionMonth', 'TransactionYear', 'State', 'TransactionYearMonth'];
  const [tableAttributes, setTableAttributes] = useState(attributesToCompare);
  useEffect(() => {
    const filterPolicy = policies.filter(policy => {
      return ((Object.values(props.statusKeys).includes(policy.TransactionType) && policy.IsUwData == true))
    });

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
    if (props?.tableconfigUA) {
      let columns = props?.tableconfigUA?.columns;
      let isOverrideColumns = props?.tableconfigUA?.overrideColumns;
      if (isOverrideColumns) {
        let attributes = [];
        columns.forEach((col) => {
          if (col.dataField.toLowerCase() != 'count') {
            attributes.push(col.dataField);
          }
        })
        setTableAttributes(attributes)
        columns.push(TableIndexObject)
        setTableColumns(columns)
      } else {

        let newColumns = removeDuplicateColumns(ChartsDTColummns, columns, 'dataField')
        newColumns.forEach((column) => {
          attributesToCompare.push(column.dataField)
          setTableAttributes(attributesToCompare)
        })
        ChartsDTColummns.push(...newColumns)
        setTableColumns(ChartsDTColummns)
      }
    }

    setPolicies(filterPolicy)
    NProgress.done();
  }, []);

  useEffect(() => {
    callUWPolicies(policies);
  }, [policies]);


  const [reload, setReload] = useState(true);
  useEffect(() => {
    setReload(false);
    setTimeout(() => {
      setReload(true);
    }, 100);
  }, [tableColumns])


  function callUWPolicies(pol) {
    setData(policies);
  }

  const setData = (summed) => {
    setUWData(summed);
  }

  useEffect(() => {
    applyFilters();
    const filterConstant = chartFilters.find(x => x.tabName == 'policyanalytics' && x.chartName == uwAnalytics.YearwiseCount.chartKey);
    const filtersIndex = filters.findIndex(x => x.key == filterConstant.chartFilterName);
    if (filtersIndex == -1) setShowMonthly(false);
  }, [filters]);

  useEffect(() => {

    let elements = document.getElementsByClassName('dropdown-item');
    Array.from(elements).forEach((el) => {
      el.removeAttribute('href');
    });

  }, []);


  const applyFilters = () => {
    let tempPolicies = [...policies];
    setUWData([]);
    filters.forEach(filter => {
      tempPolicies = tempPolicies.filter(x => x[filter.key] == filter.value);
    });
    if (tempPolicies.length == 0) {
      props.toast && props.toast("No record found for matching filters.", true);
      return false;
    }
    setFilteredPolicies(tempPolicies);
    setShowUWData(!showUWData);
    setUpdatedPolicies(analyticsConst.underWriterAnalyticsConfig(tempPolicies, policyYear));
    callUWPolicies(tempPolicies);
  }

  const CloseFilter = (filterIndex) => {
    const tempFilters = updateFilters(filters, filterIndex)
    setFilters(tempFilters);
    let tempdata = updateFiltersFormData(filtersFormData, tempFilters)
    setFiltersFormData(tempdata);
  }

  const OnFilterSchemaChange = (model, key) => {
    setFiltersFormData(model);
    let tempPolicies = filterPoliciesByModel(model, policies);
    let tempFilters = updateFiltersByKey(filters, model, key);
    tempFilters.forEach(filter => {
      tempPolicies = [...tempPolicies.filter(x => x[filter.key] == filter.value)];
    });
    if (tempPolicies.length == 0) {
      let tempdata = updateFiltersFormData(model, filters)
      setFiltersFormData(tempdata)
      props.toast && props.toast("No record found for matching filters.", true);
      return false;
    }
    setFilteredPolicies(tempPolicies);
    setShowUWData(!showUWData);
    callUWPolicies(tempPolicies);
    onSetFilters(model, key);
  }

  const TypeFilterPolicies = (chartName, keyName, keyValue) => {
    if (chartName == uwAnalytics.NewrenewelwiseCount.chartKey)
      keyName = keyName == "New Business" ? "NB" : "RB";
    if (chartName == uwAnalytics.YearwiseCount.chartKey) {
      setShowMonthly(true);
      setPolicyYear(keyName)
    }
    onFilterPolicies('policyanalytics', chartName, keyName, keyValue)
  }

  const onSetFilters = (model, key) => {
    let tempFilters = updateFiltersByKey(filters, model, key);
    setFilters(tempFilters);
  }

  const onFilterPolicies = (tabName, chartName, keyName, keyValue) => {
    let tempFilters = [...filters];
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
          <h5 className="primaryColor3 graphik-Medium pb-2">Underwriter Analytics</h5>
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-md-12'>
          {
            filters.map((filter, indx) => {
              return (
                <div className="divTitle" id="divTitle" key={indx}>
                  <div className="divFilter">
                    <img className="closeFilter" src={props?.assets?.closefilter || "images/close-16v2.png"} id="P" alt="closeFilter" onClick={() => CloseFilter(indx)} />
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
            onChange={(model, key) => OnFilterSchemaChange(model, key)}
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
          <AnalyticsCharts
            chartPositionClass={updatedPolicies.StatuswiseCount.chartPositionClass}
            chartTitle={updatedPolicies.StatuswiseCount.chartTitle}
            chartKey={updatedPolicies.StatuswiseCount.chartKey}
            chartType={updatedPolicies.StatuswiseCount.chartType}
            chartOptions={updatedPolicies.StatuswiseCount.chartOptions}
            chartData={updatedPolicies.StatuswiseCount.chartData}
            chartClicked={(keyName, keyValue) => TypeFilterPolicies(updatedPolicies.StatuswiseCount.chartKey, keyName, keyValue)}
          />
        </div>
      </div>
      {reload &&

        <ToolkitProvider
          bootstrap4
          keyField={'Index'}
          data={uWData}
          columns={tableColumns}
          search={{}}
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

  );

}

export default UWAnalyticsComponent;

