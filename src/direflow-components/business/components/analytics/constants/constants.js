import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import moment from "moment";

Chart.register(ChartDataLabels)
const policyStatusMaster = {
  Lead: 'Lead',
  Quote: 'Quote', // for every new policy created
  Application: 'Application', // when we move from Quote to Application
  FormalQuote: 'Formal Quote',
  QuoteOffered: 'Quote Offered', // When UW approve and offer Quote submitted to him by agent
  RetailerQuoteDeclined: 'Rejected', // When Agent rejects the policy
  UWReferral: 'Sr. Underwriter Referral', // Particularly for the case when UW rule is violated
  BindRequestDeclinedbyUW: 'Rejected By Sr. UW', // UW declined bind request by Agent
  BindRequestonHold: 'On Hold', // UW put policy in application on Hold coz some documents or something
  PolicyInForceBind: 'Policy In Force-Bind', // UW Approves the policy
  EndorsementInitiated: 'Endorsement Initiated',
  PolicyInForceEndorsementRequestOnHold: 'Policy In Force - Endorsement Request On Hold', // UW puts endorsement policy submitted on hold 
  PolicyInForceEndorsementRequestRejected: 'Policy In Force - Endorsement Request Rejected', // UW rejects endorsement policy submitted 
  PolicyInForceEndorsed: 'Policy In Force-Endorsed', // UW approves endorsed policy submitted
  PolicyInForceCancellationRequestOnHold: 'Policy In Force - Cancellation On Hold', // When policy cancellation request is put on hold by UW coz of some conflict
  PolicyInForceCancellationRequestPendingApproval: 'Policy In Force - Cancellation Request Pending Approval', // Agents cancels a policy but Waiting for UW approval
  PolicyInForceCancellationRequestRejected: 'Policy In Force - Cancellation Rejected', // When policy cancellation request is Rejected by UW
  PolicyCancelled: 'Policy Cancelled', // Policy is cancelled by UW
  PolicyCancelledReinstatementRequestOnHold: 'Policy Cancelled - Reinstatement On Hold', // Policy is cancelled, reinstated policy is put on hold by UW
  PolicyCancelledReinstatementRequestRejected: 'Policy Cancelled - Reinstatement Rejected', // Policy is cancelled, reinstated policy is Rejected by UW
  PolicyInForceReInstated: 'Policy In Force-ReInstated', // Policy is Reinstated
  EndorsementInitiated: 'Endorsement Initiated',
  CancellationInitiated: 'Cancellation Initiated',
  ReinstateInitiated: 'Reinstate Initiated',
}

const consoleLogs = {
  Utilities: {
    Shared: {
      Helpers: {
        AxiosPost: "Utilities.Shared.Helpers.AxiosPost",
        AxiosGet: "Utilities.Shared.Helpers.AxiosGet",
        InvalidType: "Utilities.Shared.Helpers.InvalidType",
        CallAPI: "Utilities.Shared.Helpers.CallAPI",
        ValidateJWT: "Utilities.Shared.Helpers.ValidateJWT"
      },
    }
  }
};

const axiosKeys = {
  PostAction: "POST",
  GetAction: "GET"
}

const chartFilters = [
  { tabName: 'policyanalytics', chartName: 'transactionTypeWiseCountDoughnut', chartFilterName: 'TransactionType', chartFilterValueField: 'keyName' },
  { tabName: 'policyanalytics', chartName: 'yearwiseCountBar', chartFilterName: 'TransactionYear', chartFilterValueField: 'keyName' },
  { tabName: 'policyanalytics', chartName: 'newRenewelWiseCountDoughnut', chartFilterName: 'RenewalFlag', chartFilterValueField: 'keyName' },
  { tabName: 'policyanalytics', chartName: 'monthwiseCountBar', chartFilterName: 'TransactionMonth', chartFilterValueField: 'keyName' }
]

const paginationOptions = {
  pageStartIndex: 1, // first page will be 0, default is 1
  sizePerPage: 10,  // the pagination bar size, default is 10
  showTotal: true, // display pagination information
  sizePerPageList: [
    { text: '5', value: 5 },
    { text: '10', value: 10 },
    { text: '20', value: 20 },
    { text: '50', value: 50 },
    { text: '100', value: 100 }
  ], // A numeric array is also available: [5, 10]. the purpose of above example is custom the text
  withFirstAndLast: false, // hide the going to first and last page button
  alwaysShowAllBtns: true, // always show the next and previous page button
  firstPageText: 'First', // the text of first page button
  prePageText: 'Prev', // the text of previous page button
  nextPageText: 'Next', // the text of next page button
  lastPageText: 'Last', // the text of last page button
  nextPageTitle: 'Go to next', // the title of next page button
  prePageTitle: 'Go to previous', // the title of previous page button
  firstPageTitle: 'Go to first', // the title of first page button
  lastPageTitle: 'Go to last', // the title of last page button
  hideSizePerPage: false, // hide the size per page dropdown
  hidePageListOnlyOnePage: true, // hide pagination bar when only one page, default is false
  // onPageChange: (page, sizePerPage) => {}, // callback function when page was changing
  // onSizePerPageChange: (sizePerPage, page) => {}, // callback function when page size was changing
  // paginationTotalRenderer: (from, to, size) => {}  // custom the pagination total
};

const tabList = [
  'Policy Analytics'
]

const PolicyChartsDTColummns = [
  {
    dataField: 'AgentCode',
    text: 'Agent#',
    sort: true,
    headerStyle: () => {
      return { width: "8%" };
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {

      if (order === 'asc') {
        return parseInt(a) - parseInt(b);
      }
      return parseInt(b) - parseInt(a); // desc
    }
  },
  {
    dataField: 'AgentName',
    text: 'Agent Name',
    sort: true,
    headerStyle: () => {
      return { width: "12%" };
    }
  },
  {
    dataField: 'PolicyNumber',
    text: 'Policy Number',
    sort: true,
    headerStyle: () => {
      return { width: "12%" };
    }
  },
  {
    dataField: 'Lob',
    text: 'LOB',
    sort: true,
    headerStyle: () => {
      return { width: "8%" };
    }
  },
  {
    dataField: 'InsuredFirstName',
    text: 'Insured Name',
    sort: true,
    headerStyle: () => {
      return { width: "13%" };
    },
    filterValue: (cell, row) => {
      return !cell ? "-" : row.InsuredFirstName + " " + row.InsuredLastName;
    },
    formatter: (cell, row) => {
      return !cell ? "-" : row.InsuredFirstName + " " + row.InsuredLastName;
    },
    csvFormatter: (cell, row) => {
      return !cell ? "-" : row.InsuredFirstName + " " + row.InsuredLastName;
    },
  },
  {
    dataField: 'PolicyEffectiveDate',
    text: 'Effective Date',
    sort: true,
    headerStyle: () => {
      return { width: "12%" };
    },
    filterValue: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    formatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    csvFormatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
  },
  {
    dataField: 'PolicyExpirationDate',
    text: 'Expiration Date',
    sort: true,
    headerStyle: () => {
      return { width: "12%" };
    },
    filterValue: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    formatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    csvFormatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
  },
  {
    dataField: 'TransactionType',
    text: 'Transaction Type',
    sort: true,
    headerStyle: () => {
      return { width: "12%" };
    }
  },
  {
    dataField: 'Premium',
    text: '$ Premium',
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
    formatter: (cell, row) => {
      const premium = parseFloat(row.Premium);
      const premiumFormatted = premium.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return typeof (row.Premium) == "number" ? premiumFormatted : "-";
    },
    csvFormatter: (cell, row) => {
      const premium = parseFloat(row.Premium);
      const premiumFormatted = premium.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return typeof (row.Premium) == "number" ? premiumFormatted : "-";
    },
    filterValue: (cell, row) => {
      const premium = parseFloat(row.Premium);
      const premiumFormatted = premium.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return typeof (row.Premium) == "number" ? premiumFormatted : "-";
    },
  }
];

const QuoteChartsDTColummns = [
  {
    dataField: 'AgentCode',
    text: 'Agent#',
    sort: true,
    headerStyle: () => {
      return { width: "8%" };
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {

      if (order === 'asc') {
        return parseInt(a) - parseInt(b);
      }
      return parseInt(b) - parseInt(a); // desc
    }
  },
  {
    dataField: 'AgentName',
    text: 'Agent Name',
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    }
  },
  {
    dataField: 'Initiator',
    text: 'Initiator',
    sort: true,
    headerStyle: () => {
      return { width: "12%" };
    },
  },
  {
    dataField: 'QuoteNumber',
    text: 'Quote Number',
    sort: true,
    headerStyle: () => {
      return { width: "12%" };
    }
  },
  {
    dataField: 'InsuredFirstName',
    text: 'Insured Name',
    sort: true,
    headerStyle: () => {
      return { width: "11%" };
    },
    filterValue: (cell, row) => {
      return !cell ? "-" : row.InsuredFirstName + " " + row.InsuredLastName;
    },
    formatter: (cell, row) => {
      return !cell ? "-" : row.InsuredFirstName + " " + row.InsuredLastName;
    },
    csvFormatter: (cell, row) => {
      return !cell ? "-" : row.InsuredFirstName + " " + row.InsuredLastName;
    },
  },
  {
    dataField: 'Lob',
    text: 'LOB',
    sort: true,
    headerStyle: () => {
      return { width: "8%" }
    }
  },
  {
    dataField: 'PolicyEffectiveDate',
    text: 'Effective Date',
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
    filterValue: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    formatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    csvFormatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
  },
  {
    dataField: 'PolicyExpirationDate',
    text: 'Expiration Date',
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
    filterValue: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    formatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    csvFormatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
  },
  {
    dataField: 'TransactionType',
    text: 'Transaction Type',
    sort: false,
    headerStyle: () => {
      return { width: "10%" };
    }
  },

];

const BAChartsDTColumns = [
  {
    dataField: 'AgentCode',
    text: 'Agent#',
    sort: true,
    headerStyle: () => {
      return { width: "8%" };
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {

      if (order === 'asc') {
        return parseInt(a) - parseInt(b);
      }
      return parseInt(b) - parseInt(a);
    }
  },
  {
    dataField: 'AgentName',
    text: 'Agent Name',
    sort: true,
    headerStyle: () => {
      return { width: "8%" };
    }
  },
  {
    dataField: 'Initiator',
    text: 'Initiator',
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
    //   formatter: (cell, row) => {
    //     return row.AccountType == 'Agent' ? row.AgentName : row.UnderwriterName
    //   }
  },
  {
    dataField: 'PolicyNumber',
    text: 'Policy Number',
    sort: true,
    headerStyle: () => {
      return { width: "11%" };
    }
  },
  {
    dataField: 'InsuredFirstName',
    text: 'Insured Name',
    sort: true,
    headerStyle: () => {
      return { width: "12%" };
    },
    filterValue: (cell, row) => {
      return !cell ? "-" : row.InsuredFirstName + " " + row.InsuredLastName;
    },
    formatter: (cell, row) => {
      return !cell ? "-" : row.InsuredFirstName + " " + row.InsuredLastName;
    },
    csvFormatter: (cell, row) => {
      return !cell ? "-" : row.InsuredFirstName + " " + row.InsuredLastName;
    },
  },
  {
    dataField: 'Lob',
    text: 'LOB',
    sort: true,
    headerStyle: () => {
      return { width: "8%" }
    }
  },
  {
    dataField: 'PolicyEffectiveDate',
    text: 'Effective Date',
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
    filterValue: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    formatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    csvFormatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
  },
  {
    dataField: 'PolicyExpirationDate',
    text: 'Expiration Date',
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
    filterValue: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    formatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
    csvFormatter: (cell, row) => {
      let currdate = moment(cell);
      return currdate.format('MM-DD-YYYY')
    },
  },
  {
    dataField: 'TransactionType',
    text: 'Transaction Type',
    sort: true,
    headerStyle: () => {
      return { width: "11%" };
    }
  },
  {
    dataField: 'Premium',
    text: '$ Premium',
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
    formatter: (cell, row) => {
      const premium = parseFloat(row.Premium);
      const premiumFormatted = premium.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return typeof (row.Premium) == "number" ? premiumFormatted : "-";
    },
    csvFormatter: (cell, row) => {
      const premium = parseFloat(row.Premium);
      const premiumFormatted = premium.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return typeof (row.Premium) == "number" ? premiumFormatted : "-";
    },
    filterValue: (cell, row) => {
      const premium = parseFloat(row.Premium);
      const premiumFormatted = premium.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return typeof (row.Premium) == "number" ? premiumFormatted : "-";
    },
  }
];

const UWAChartsDTColumns = [

  {
    dataField: 'Carrier',
    text: 'Carrier',
    sort: true
  },
  {
    dataField: 'Lob',
    text: 'LOB',
    sort: true,
    headerStyle: () => {
      return { width: "8%" };
    }
  },
  {
    dataField: 'State',
    text: 'State',
    sort: true,
    headerStyle: () => {
      return { width: "13%" };
    },
  },
  {
    dataField: 'TransactionYearMonth',
    text: 'Year-Month',
    sort: true,
    headerStyle: () => {
      return { width: "13%" };
    },
    formatter: (cell, row) => {
      // return row.TransactionYearMonth.substring(0,4) + " - " + row.TransactionYearMonth.substring(4);
      return row.TransactionYear + " - " + row.TransactionMonth
    },
    csvFormatter: (cell, row) => {
      return row.TransactionYear + " - " + row.TransactionMonth
    },
    filterValue: (cell, row) => {
      return row.TransactionYear + " - " + row.TransactionMonth
    },
  },
  {
    dataField: 'UnderwriterName',
    text: 'Underwriter Name',
    sort: true,
    headerStyle: () => {
      return { width: "13%" };
    }
  },
  {
    dataField: 'AgencyName',
    text: 'Agency',
    sort: true
  },
  {
    dataField: 'TransactionType',
    text: 'Status',
    sort: true,
    headerStyle: () => {
      return { width: "12%" };
    }
  },
  {
    dataField: 'count',
    text: 'Count',
    sort: true,
    headerStyle: () => {
      return { width: "12%" };
    },
  }
];

const transactionTypeMaster = {

  QUOTE: 'Quote', // for all the Transaction > Type before bind
  APPLICATION: 'Application',
  POLICY: 'Policy', // when policy is bound
  ENDORSEMENT: 'Endorsement', // for all endorsement transactions
  CANCELLATION: 'Cancellation', // for all cancellation
  REINSTATE: 'Reinstate', // for all reinstatement
  RENEWAL: 'Renewal', // for all renewal
}

const chartOptionsForMultiChartPreview = {
  responsive: true,
  maintainAspectRatio: true,
  stacked: false,
  normalized: true,
  // animation: false,
  // parsing: false,

  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        display: true
      },
      grid: {
        display: true,
        drawBorder: true,
        drawTicks: true,
        drawOnChartArea: true
      }
    },
    y1: {
      beginAtZero: true,
      grid: {
        drawOnChartArea: true
      }
    },
  },
  plugins: {
    legend: {

      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'rectRounded',
        borderRadius: 0,
      }
    },
    title: {
      display: false,
      text: 'Chart.js Chart',
    },
  },
};

const chartOptionsForMultiChart = {
  responsive: true,
  maintainAspectRatio: true,
  stacked: false,
  normalized: true,
  layout: {
    padding: {
      top: 30,

    }
  },
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        display: true
      },
      grid: {
        display: true,
        drawBorder: true,
        drawTicks: true,
        drawOnChartArea: true
      }
    },
    y1: {
      title: {
        display: true,
        text: "Transaction Count",
        font: {
          size: 13
        }
      },
      beginAtZero: true,
      grid: {
        drawOnChartArea: true
      }
    },
    y2: {
      title: {
        display: true,
        text: "Ratio %",
        font: {
          size: 13
        }
      },
      ticks: {
        format: {
          style: 'percent'
        },
        callback: function (value) {
          return (value * 100).toFixed(0) + '%';
        },
        // display: true
        // max: Math.max.apply(null, value) + 1, 
      },
      beginAtZero: true,
      type: 'linear',
      display: true,
      position: 'right',
      setLineDash: [5, 15],

      grid: {
        drawOnChartArea: false,
      },
    },
  },
  plugins: {
    legend: {

      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'rectRounded',
        borderRadius: 0,
      }

    },
    datalabels: {
      display: false,
      //   anchor: 'end',
      //   align: 'top',
      //   clip: false,
      //   // padding: {
      //   //   // bottom : 50,
      //   //   // top: 50
      //   // },
      //   // formatter: Math.round,
      //   labels: {
      //     title: {
      //       // color: "rgba(73, 0, 50, 1)"
      //     }
      //   }
    },
    title: {
      display: false,
      text: 'Chart.js Chart',
    },
  },
};

const chartOptionsWithoutScales = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1,
  // cutout: 110,
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        display: false
      },
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
        drawOnChartArea: false
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        display: false
      },
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
        drawOnChartArea: false
      }
    }
  },
  plugins: {
    legend: {
      // onClick: (...a) => {
      //   console.log("Legends>>>>", a);
      // },
      position: 'right',
      // padding: 50
      // fullSize:true,
      maxWidth: 500,
      rtl: true,
      labels: {
        usePointStyle: true,
        pointStyle: 'rectRounded',
        borderRadius: 0,
      }
    },
    datalabels: {
      display: false
    },
    title: {
      display: false,
      text: 'Chart.js Chart',
    },
  },

};

const chartOptionsWithoutScalesUW = {
  // height:500,
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1,
  // cutout: 110,
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        display: false
      },
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
        drawOnChartArea: false
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        display: false
      },
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
        drawOnChartArea: false
      }
    }
  },
  plugins: {

    datalabels: {
      display: false
    },
    legend: {
      display: true,
      position: 'right',
      // padding: 50,
      fullSize: false,
      maxWidth: 500,
      maxHeight: 550, // Set the maximum height for the legend

      scroll: {
        enabled: true,
      },
      rtl: true,
      labels: {
        textAlign: 'start',
        stretch: 'true',
        align: 'start',
        usePointStyle: true,
        pointStyle: 'rectRounded',
        borderRadius: 0,
      }
    },
    title: {
      display: false,
      text: 'Chart.js Chart',
    },
  }

};

const chartOptionsWithScales = {
  layout: {
    padding: {
      top: 30,
    }
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        display: true
      },
      grid: {
        display: true,
        drawBorder: true,
        drawTicks: true,
        drawOnChartArea: true
      }
    },
    y: {
      title: {
        display: true,
        text: "Policy Count",
        font: {
          size: 13
        }
      },
      beginAtZero: true,
      ticks: {
        display: true
      },
      grid: {
        display: true,
        drawBorder: true,
        drawTicks: true,
        drawOnChartArea: true
      }
    },
  },
  plugins: {
    datalabels: {
      display: "auto",
      anchor: 'end',
      align: 'top',
      clip: false,
    },
    legend: {
      position: 'bottom',

      labels: {
        usePointStyle: true,
        pointStyle: 'rectRounded',
        borderRadius: 0,
      }
    },
  },
};

const chartOptionsWithScalesUW = {
  layout: {
    padding: {
      top: 30,
    }
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        display: true
      },
      grid: {
        display: true,
        drawBorder: true,
        drawTicks: true,
        drawOnChartArea: true
      }
    },
    y: {
      title: {
        display: true,
        text: "Transaction Count",
        font: {
          size: 13
        }
      },
      beginAtZero: true,
      ticks: {
        display: true
      },
      grid: {
        display: true,
        drawBorder: true,
        drawTicks: true,
        drawOnChartArea: true
      }
    },
  },
  plugins: {
    datalabels: {
      display: "auto",
      anchor: 'end',
      align: 'top',
      clip: false,
    },
    legend: {
      display: false,
      position: 'top',
    },
  },
};

export { BAChartsDTColumns, PolicyChartsDTColummns, policyStatusMaster as PolicyStatusMaster, QuoteChartsDTColummns, UWAChartsDTColumns, axiosKeys, chartFilters, chartOptionsForMultiChart, chartOptionsForMultiChartPreview, chartOptionsWithScales, chartOptionsWithScalesUW, chartOptionsWithoutScales, chartOptionsWithoutScalesUW, consoleLogs, paginationOptions, tabList, transactionTypeMaster };

