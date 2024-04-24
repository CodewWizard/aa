import React from "react";
import AnalyticsLanding from "./analyticslanding";

export default {
  title: 'Design System/Business/Components/Analytics/AnalyticsLanding',
  component: AnalyticsLanding,
};

const styles = {
  backgroundColor: [
    'rgba(56, 182, 255, 1)',
    'rgba(103, 89, 162, 1)',
    'rgba(73, 0, 50, 1)',
    'rgba(92, 225, 230, 1)',
    'rgba(23, 135, 186, 1)',
    'rgba(45, 48, 109, 1)',
    'rgba(0, 194, 203, 1)',
    'rgba(0, 106, 162, 1)',
    'rgba(15, 23, 85, 1)',
    'rgba(3, 152, 158, 1)',
    'rgba(171, 194, 228, 1)',
    'rgba(94, 23, 235, 1)',
    'rgba(26, 62, 202, 1)',
    'rgba(140, 82, 255, 1)',
    'rgba(0, 188, 255, 1)',
    'rgba(0, 255, 255, 1)',
    'rgba(203, 108, 230, 1)',
    'rgba(93, 72, 159, 1)',
    'rgba(46, 52, 119, 1)',
    'rgba(255, 102, 196, 1)',
    'rgba(139, 64, 165, 1)',
    'rgba(0, 32, 111, 1)',
    'rgba(255, 87, 87, 1)',
    'rgba(162, 0, 110, 1)',
    'rgba(98, 0, 110, 1)',
    'rgba(255, 22, 22, 1)',
    'rgba(255, 120, 177, 1)',
    'rgba(255, 209, 255, 1)',
    'rgba(255, 145, 77, 1)',
    'rgba(187, 47, 93, 1)',
    'rgba(255, 145, 77, 1)',
    'rgba(187, 47, 93, 1)',
    'rgba(135, 9, 94, 1)',
    'rgba(255, 189, 89, 1)',
    'rgba(118, 132, 39, 1)',
    'rgba(0, 67, 22, 1)',
    'rgba(176, 194, 77, 1)',
    'rgba(108, 161, 76, 1)',
    'rgba(52, 126, 74, 1)',
    'rgba(201, 226, 101, 1)',
    'rgba(41, 158, 120, 1)',
    'rgba(0, 119, 115, 1)',
    'rgba(126, 217, 87, 1)',
    'rgba(0, 185, 128, 1)',
    'rgba(0, 105, 149, 1)',
    'rgba(0, 128, 55, 1)',
    'rgba(29, 192, 154, 1)',
    'rgba(109, 255, 255, 1)',
    'rgba(0, 74, 173, 1)',
    'rgba(136, 34, 133, 1)',
    'rgba(164, 1, 66, 1)',
  ],
  borderColor: [
    'rgba(56, 182, 255, 1)',
    'rgba(103, 89, 162, 1)',
    'rgba(73, 0, 50, 1)',
    'rgba(92, 225, 230, 1)',
    'rgba(23, 135, 186, 1)',
    'rgba(45, 48, 109, 1)',
    'rgba(0, 194, 203, 1)',
    'rgba(0, 106, 162, 1)',
    'rgba(15, 23, 85, 1)',
    'rgba(3, 152, 158, 1)',
    'rgba(171, 194, 228, 1)',
    'rgba(94, 23, 235, 1)',
    'rgba(26, 62, 202, 1)',
    'rgba(140, 82, 255, 1)',
    'rgba(0, 188, 255, 1)',
    'rgba(0, 255, 255, 1)',
    'rgba(203, 108, 230, 1)',
    'rgba(93, 72, 159, 1)',
    'rgba(46, 52, 119, 1)',
    'rgba(255, 102, 196, 1)',
    'rgba(139, 64, 165, 1)',
    'rgba(0, 32, 111, 1)',
    'rgba(255, 87, 87, 1)',
    'rgba(162, 0, 110, 1)',
    'rgba(98, 0, 110, 1)',
    'rgba(255, 22, 22, 1)',
    'rgba(255, 120, 177, 1)',
    'rgba(255, 209, 255, 1)',
    'rgba(255, 145, 77, 1)',
    'rgba(187, 47, 93, 1)',
    'rgba(255, 145, 77, 1)',
    'rgba(187, 47, 93, 1)',
    'rgba(135, 9, 94, 1)',
    'rgba(255, 189, 89, 1)',
    'rgba(118, 132, 39, 1)',
    'rgba(0, 67, 22, 1)',
    'rgba(176, 194, 77, 1)',
    'rgba(108, 161, 76, 1)',
    'rgba(52, 126, 74, 1)',
    'rgba(201, 226, 101, 1)',
    'rgba(41, 158, 120, 1)',
    'rgba(0, 119, 115, 1)',
    'rgba(126, 217, 87, 1)',
    'rgba(0, 185, 128, 1)',
    'rgba(0, 105, 149, 1)',
    'rgba(0, 128, 55, 1)',
    'rgba(29, 192, 154, 1)',
    'rgba(109, 255, 255, 1)',
    'rgba(0, 74, 173, 1)',
    'rgba(136, 34, 133, 1)',
    'rgba(164, 1, 66, 1)',
  ]
}


const agencyList = [
  { value: "OR Test Agency", label: "OR Test Agency" },
]

const uwList = [
  { value: "Mark Rothert", label: "Mark Rothert" },
  { value: "Training Underwriter", label: "Training Underwriter" },
]
const stateList = [
  { value: "TX", label: "TX" },
  { value: "OR", label: "OR" },
]

// const PAconfig = {
//   columns: [

//     {
//       dataField: 'Lob',
//       text: 'Lob #',
//       sort: true,
//       headerStyle: () => {
//         return { width: "8%" };
//       }
//     },
//     {
//       dataField: 'Premium',
//       text: '$$ Premium',
//       sort: true,
//       headerStyle: () => {
//         return { width: "10%" };
//       },
//       // formatter: (cell, row) => {
//       //   // console.log(typeof (row.Premium));
//       //   return typeof (row.Premium) == "number" ? "$ " + parseFloat(row.Premium).toFixed(2) : "-";
//       // }
//     },
//     {
//       dataField: 'UnderwriterName',
//       text: 'Underwriter Name',
//       sort: true,
//       headerStyle: () => {
//         return { width: "13%" };
//       }
//     },
//   ],
//   OverrideColumns: true
// }

const PAconfig = {
  columns: [
    {
      dataField: 'InsuredFirstName',
      text: 'Insured Name',
      sort: true
    },
    {
      dataField: 'PolicyNumber',
      text: 'Policy Number',
      sort: true
    },
    {
      dataField: 'AgentCode',
      text: 'Agent Code',
      sort: true
    },
    {
      dataField: 'AgentName',
      text: 'Agent Name',
      sort: true
    },
    {
      dataField: 'AgencyName',
      text: 'Agency',
      sort: true
    },
    {
      dataField: 'Lob',
      text: 'Lob',
      sort: true,
      // formatter: getLobName
    },
    {
      dataField: 'PolicyEffectiveDate',
      text: 'Effective Date',
      sort: true,
      // formatter: DateFormat,
      // filterValue: DateFormat
    },

    {
      dataField: 'PolicyExpirationDate',
      text: 'Expiration Date',
      sort: true,
      // formatter: DateFormat,
      // filterValue: DateFormat
    },
    {
      dataField: 'Premium',
      key: 'Ab',
      text: '$ Premium',
      sort: true,
      // formatter: EffectivePremiumFormatter,
      // filterValue: EffectivePremiumFormatter,
      // csvFormatter: EffectivePremiumFormatter
    },
    // {
    //   dataField: 'TransactionType',
    //   text: 'Transaction Type',
    //   sort: true
    // },
    {
      dataField: 'TransactionType',
      text: 'Transaction Type',
      sort: true
    },
  ],
  overrideColumns: true
}


const UWAconfig = {
  columns: [
    {
      dataField: 'Lob',
      text: 'Lob',
      sort: true,
      headerStyle: () => {
        return { width: "8%" };
      },
      // formatter: getLobName
    },
    {
      dataField: 'State',
      text: 'State',
      sort: true,
      headerStyle: () => {
        return { width: "13%" };
      }
    },
    {
      dataField: 'TransactionYearMonth',
      text: 'Month/Year',
      sort: true,
      // headerStyle: () => {
      //     return { width: "13%" };
      // },
      // formatter: (data) => {
      //     return moment(data).format('MM/YYYY')
      // },
      // filterValue: (data) => {
      //     return moment(data).format('MM/YYYY')
      // },
      // csvFormatter: (data) => {
      //     return moment(data).format('MM/YYYY')
      // }
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
      dataField: 'TransactionType',
      text: 'Status',
      sort: true,
      headerStyle: () => {
        return { width: "12%" };
      }
    },
    {
      dataField: "AgencyName",
      text: 'Agency',
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
      }
    },

  ],
  overrideColumns: true
}

// const UWAconfig = {
//   columns : [

//       {
//           dataField: 'Lob',
//           text: 'Lob #',
//           sort: true,
//           headerStyle: () => {
//               return { width: "8%" };
//           }
//       },
//       {
//         dataField: 'Premium',
//         text: 'Premium',
//         sort: true,
//         headerStyle: () => {
//             return { width: "10%" };
//         },
//         formatter: (cell, row) => {
//             // console.log(typeof (row.Premium));
//             return typeof (row.Premium) == "number" ?  "$ " + parseFloat(row.Premium).toFixed(2) : "-";
//           }
//     },
//   ],
//   OverrideColumns: true
// }

const BAconfig = {
  columns: [

    {
      dataField: 'Lob',
      text: 'Lob #',
      sort: true,
      headerStyle: () => {
        return { width: "8%" };
      }
    },
    {
      dataField: 'Premium',
      text: '$$ Premium',
      sort: true,
      headerStyle: () => {
        return { width: "10%" };
      },
      formatter: (cell, row) => {
        return typeof (row.Premium) == "number" ? "$ " + parseFloat(row.Premium).toFixed(2) : "-";
      }
    },
  ],
  overrideColumns: false
}

const QAconfig = {
  columns: [

    {
      dataField: 'Lob',
      text: 'Lob #',
      sort: true,
      headerStyle: () => {
        return { width: "8%" };
      }
    },
    {
      dataField: 'Premium',
      text: '$$ Premium',
      sort: true,
      headerStyle: () => {
        return { width: "10%" };
      },
      formatter: (cell, row) => {
        // console.log(typeof (row.Premium));
        return typeof (row.Premium) == "number" ? "$ " + parseFloat(row.Premium).toFixed(2) : "-";
      }
    },
  ],
  overrideColumns: false
}

const LOBsList = [{ value: "HO3", label: "HO3" }, { value: "HO6", label: "HO6" }]
const CustomFiltersConfig = {
  controlsSchema: [
    {
      key: "AccountType",
      type: "search-dropdown",
      label: "AccountType",
      props: { required: true, class: "inputText" },
      labelClass: "inputLabel ddlUnderwriterList",
      positionClass: "col-xxl-4 col-lg-3 col-md-2",
      isColummnDisplay: false,
      dataPath: "AccountType",
      options: [{ value: "Underwriter", label: "Underwriter" }, { value: "Agent", label: "Agent" }]
    },
  ],
  filtersData: ["AccountType"]
}
let customschema = [{
  key: "advanceSearch",
  type: "Card",
  title: "",
  className: "",
  titleClassName: "commonHead commonHeadPadding",
  childsClassName: "",
  controls: [
    {
      key: "State",
      type: "search-dropdown",
      value: "",
      label: "Select State",
      props: { required: true, class: "inputText", placeholder: "State" },
      labelClass: "inputLabel ddlUnderwriterList",
      positionClass: "col-xxl-3 col-lg-4 col-md-2",
      isColummnDisplay: false,
      dataPath: "State",
      options: []
    },
    {
      key: "UnderwriterName",
      value: "",
      label: "Select UW",
      type: "search-dropdown",
      props: { class: "inputText", placeholder: "testing uw" },
      labelClass: "inputLabel ddlUnderwriterList",
      positionClass: "col-xxl-3 col-lg-4 col-md-2",
      isColummnDisplay: false,
      dataPath: "UnderwriterName",
      options: []
    },

  ]
}
]
const customReportConfig = {
  // "dataCollectionStartTimestampText" : "The Data is collected from",
  // "dataCollectionStartTimestamp" : new Date('2024-06-17T02:03:00')
  "dataCollectionStartTimestamp": new Date('2024-06-17'),
  "isCustomDataCollected": true
}
const FitlersFormdata = {
  "Lob": "HO3",
  "State": "OR"
}

const analyticsPolicyStatusMaster = {
  RateIndication: 'Rate Indication',
  QuoteApplication: 'Quote Application',
  FormalQuote: "Quote Offered",
  Quoted: 'Quoted',
  // QuoteOffered: 'Quote Offered',
  QuoteDeclined: 'Quote Declined',
  QuoteExpired: 'Quote Expired',
  PolicyInForce: 'Policy In Force',
  BindSignaturePending: 'Bind Signature Pending',
  BindSignatureCompleted: 'Bind Signature Completed',
  PolicyInForce: 'Policy In Force',
  EndorsementInitiated: "Endorsement Initiated",
  EndorsementReferred: "Endorsement Referred",
  CancellationInitiated: "Cancellation Initiated",
  PolicyInForceCancellationRequestPendingApproval: "Cancellation Request - Awaiting UW Approval",
  PolicyCancelled: 'Policy Cancelled',
  ReInstatementInitiated: "Reinstate Initiated",
}

const analyticsTransactionTypeMaster = {
  // APPLICATION: 'Application',
  POLICY: 'Policy', // when policy is bound
  ENDORSEMENT: 'Endorsement', // for all endorsement transactions
  CANCELLATION: 'Cancellation', // for all cancellation
  REINSTATE: 'Reinstate', // for all reinstatement
  RENEWAL: 'Renewal', // for all renewal
}
const policyanalyticsArgs = {
  pageTitle: "Analyticss",
  pageDesc: "Analytics Module",
  statusKeys: analyticsPolicyStatusMaster,
  transactionKeys: analyticsTransactionTypeMaster,
  styles: styles,
  agencyList: agencyList,
  uwList: uwList,
  userType: "underwriter",
  stateList: stateList,
  lobsList: LOBsList,
  jobAPIEndPoint: "https://prodanalyticsjob.azurewebsites.net/api/get-data",
  client: 'JEB',
  accountId: '14091',
  primaryColor: 'rgba(56, 182, 255, 1)',
  customReportConfig: customReportConfig,
  // schema: customschema
  tableConfigPA: PAconfig,
  // customFiltersConfig: CustomFiltersConfig,
  // tableconfigUA:UWAconfig,
  // filterModel: FitlersFormdata
  // tableConfigQA:QAconfig,
  // tableConfigBA:BAconfig
}

const Template = (args) => <AnalyticsLanding {...args} />;
export const analyticsLanding = Template.bind({});
analyticsLanding.args = policyanalyticsArgs;