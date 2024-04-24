import React from 'react';
import TransactionHistory from "./transaction-history";

const tableRows = [
  {
    TaxNo: 0,
    TransactionType: "Application",
    TransactionDate: "03/01/2023",
    EffectiveDate: "03/01/2023",
    Premium:"2120",
    PremiumWithFeesAndTax: "2220.76",
    ApprovedBy: "Matt Young",
    Uri:"https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
    LOB: "AL"
  },
  {
    TaxNo: 0,
    TransactionType: "Endorsement",
    TransactionDate: "03/04/2024",
    EffectiveDate: "03/04/2024",
    Premium:"2120",
    PremiumWithFeesAndTax: "2220.76",
    ApprovedBy: "Matt Young",
    Uri:"https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
    LOB: "PD"
  },
  {
    TaxNo: 2,
    TransactionType: "Application",
    TransactionDate: "03/01/2023",
    EffectiveDate: "03/01/2023",
    Premium:"2120",
    PremiumWithFeesAndTax: "2220.76",
    ApprovedBy: "Matt Young",
    Uri:"https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
    LOB: "AL"
  },
  {
    TaxNo: 2,
    TransactionType: "Endorsement",
    TransactionDate: "03/04/2024",
    EffectiveDate: "03/04/2024",
    Premium:"2120",
    PremiumWithFeesAndTax: "2220.76",
    ApprovedBy: "Matt Young",
    Uri:"https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
    LOB: "PD"
  },
  {
    TaxNo: 3,
    TransactionType: "Cancellation",
    TransactionDate: "03/04/2024",
    EffectiveDate: "03/04/2024",
    Premium:"2120",
    PremiumWithFeesAndTax: "2220.76",
    ApprovedBy: "Matt Young",
    Uri:"https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
    LOB: "PD"
  },
  {
    TaxNo: 1,
    TransactionType: "Application",
    TransactionDate: "03/01/2023",
    EffectiveDate: "03/01/2023",
    Premium:"2120",
    PremiumWithFeesAndTax: "2220.76",
    ApprovedBy: "Matt Young",
    Uri:"https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
    LOB: "CG"
  },
  {
    TaxNo: 2,
    TransactionType: "Endorsement",
    TransactionDate: "03/04/2024",
    EffectiveDate: "03/04/2024",
    Premium:"2120",
    PremiumWithFeesAndTax: "2220.76",
    ApprovedBy: "Matt Young",
    Uri:"https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
    LOB: "CG"
  },
  {
    TaxNo: 1,
    TransactionType: "Application",
    TransactionDate: "03/01/2023",
    EffectiveDate: "03/01/2023",
    Premium:"2120",
    PremiumWithFeesAndTax: "2220.76",
    ApprovedBy: "Matt Young",
    Uri:"https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
    LOB: "GL"
  },
  {
    TaxNo: 2,
    TransactionType: "Endorsement",
    TransactionDate: "03/04/2024",
    EffectiveDate: "03/04/2024",
    Premium:"2120",
    PremiumWithFeesAndTax: "2220.76",
    ApprovedBy: "Matt Young",
    Uri:"https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
    LOB: "GL"
  },
  {
    TaxNo: 3,
    TransactionType: "Cancellation",
    TransactionDate: "03/04/2024",
    EffectiveDate: "03/04/2024",
    Premium:"2120",
    PremiumWithFeesAndTax: "2220.76",
    ApprovedBy: "Matt Young",
    Uri:"https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
    LOB: "GL"
  },
  {
    TaxNo: 4,
    TransactionType: "Reinstatement",
    TransactionDate: "03/04/2024",
    EffectiveDate: "03/04/2024",
    Premium:"2120",
    PremiumWithFeesAndTax: "2220.76",
    ApprovedBy: "Matt Young",
    Uri:"https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
    LOB: "GL"
  },
];

const LOBList = {
  AL: "Auto Liability",
  PD: "Auto Physical Damage",
  CG: "Motor Truck Cargo",
  GL: "Truckers' General Liability"
}


const currencyFormat = (num) => {
  let formattedResp = "";
  try {
    if (typeof num == "string" && num.length > 0) {
      num = num.replaceAll(",", "");
    }
    if (parseInt(num) == 0 || (num && !isNaN(num) && isFinite(num))) {
      num = num.toString();
      return (formattedResp =
        "$" +
        parseFloat(num)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
    } else return "$0.00";
  } catch (error) {
    console.error("Utilities.Shared.Helpers.CurrencyFormat ", error);
    throw Error();
  }
};

const tableCols = [
  {
    dataField: "LOB",
    text: "LOB",
    sort: false,
    headerStyle: () => {
      return { width: "13%", textAlign: "left" };
    },
    formatter: (data) => {
      let lob = LOBList[data];
      return lob;
    },
    style: ()=>{ //row specific styling
      return {textAlign: "left"}
    }
  },
  {
    dataField: "TaxNo",
    text: "TXN NO.",
    sort: false,
    headerStyle: () => {
      return { width: "5%", textAlign: "center" };
    },
  },
  {
    dataField: "TransactionType",
    text: "Transaction Type.",
    sort: false,
    headerStyle: () => {
      return { width: "12%", textAlign: "center" };
    },
  },
  {
    dataField: "TransactionDate",
    text: "Transaction Date",
    sort: false,
    hidden: false,
    headerStyle: () => {
      return { width: "12%", textAlign: "center" };
    },
  },
  {
    dataField: "EffectiveDate",
    text: "EFFECTIVE DATE",
    sort: false,
    hidden: false,
    headerStyle: () => {
      return { width: "12%", textAlign: "center" };
    },
  },
  {
    dataField: 'Premium',
    text: 'Transaction Premium',
    sort: false,  
    hidden: false,
    headerStyle: () => {
      return { width: "12%", textAlign: "center" };
    },
    customFormatter: currencyFormat
  },
  {
    dataField: 'PremiumWithFeesAndTax',
    text: 'TXN Premium with Fees And Taxes',
    sort: false,  
    hidden: false,
    headerStyle: () => {
      return { width: "15%", textAlign: "center" };
    },
    customFormatter: currencyFormat
  },
  {
    dataField: 'ApprovedBy',
    text: 'Approved By',
    sort: false,  
    hidden: false,
    headerStyle: () => {
      return { width: "15%", textAlign: "center" };
    },  
  }
];

const groupRows = [
  {
      "LOB": "AL",
      "Index": "0",
      "headerStyle": {
          "textAlign": "center"
      }
  },
  {
      "LOB": "PD",
      "Index": "1",
      "headerStyle": {
          "textAlign": "center"
      }
  },
  {
      "LOB": "CG",
      "Index": "2",
      "headerStyle": {
          "textAlign": "center"
      }
  },
  {
      "LOB": "GL",
      "Index": "3",
      "headerStyle": {
          "textAlign": "center"
      }
  }
];

const CommonArgs = {
  title: "Transaction History",
  tableKey: "LOB",
  policy:'GAPA009001646',  //can be number or entire policy object
  container:'versions',
  fetchHistory:()=>{return new Promise(res=>setTimeout(res(tableRows), 500))},
  tableCols,
  groupRows,
  parentClass: "",
  titleClass:"",
  tableClass: "",
  isExpandRow: true,
  needActionBtn: false,
  isShowExpandCol: true,
  groupColumnName: "LOB",
  needSorting: true,
  sortColumnName: "TaxNo"
};

const NonGroupedArgs = {
  title: "Transaction History",
  policy:'GAPA009001646',  //can be number or entire policy object
  container:'versions',
  fetchHistory:()=>{return new Promise(res=>setTimeout(res(tableRows), 1000))},
  tableCols,
  needActionBtn: true,
  parentClass: "",
  titleClass:"",
  tableClass: "",
  sortColumnName: "TaxNo"
};

export default {
  title: "Design System/Core/TransactionHistory",
  component: TransactionHistory,
  parameters: {
    docs: {
      description: {
        component:
          "TransactionHistory Component will generate the table to view various transaction in course of policy are being done.",
      },
    },
  },
  argTypes: {
    title: {
      description: "Header Title",
      table: {
        category: "Element",
      },
    },
    fetchHistory: {
      description: "Ui utility function to fetch various transaction.",
      table: {
        category: "Function"
      }
    },
    container: {
      description: "name container E.g versions",
      table:{
        category: "String"
      }
    },
    policy:{
      description: "It can be policy number or entire policy model depending on the usage in fetchHistory utility function.",
      table: {
        category: "Schema/String"
      }
    },
    parentClass: {
      description: "Class to provide additional styling using bootstrap.",
      table: {
        category: "Class"
      }
    },
    titleClass: {
      description: "Class to provide additional styling to title of the table using bootstrap.",
      table: {
        category: "Class"
      }
    },
    tableClass: {
      description: "Class to provide additional styling to table using bootstrap.",
      table: {
        category: "Class"
      }
    },
    tableCols: {
      description: "Schema to display Columns. Includes Field like dataField(must match one with table row field.The Uri field is fixed), sort, hidden, text, etc. Actions are added automatically.",
      table: {
        category: "Schema",
      }
    },
    groupRows: {
      description: "Schema to display Group Rows. Includes Data to display in parent row for expand section.",
      table: {
        category: "Schema",
      }
    },
    isExpandRow: {
      description: "Whether to use expandable columns or not.",
      table: {
        category: "Boolean",
      }
    },
    needActionBtn: {
      description: "Whether to use action button or not.",
      table: {
        category: "Boolean",
      }
    },
    isShowExpandCol: {
      description: "Whether to show expand icon or not.",
      table: {
        category: "Boolean",
      }
    },
    needSorting: {
      description: "Whether to sort the data or not.",
      table: {
        category: "Boolean",
      }
    },
    groupColumnName: {
      description:
          "Datafield name of column based on which rows will be grouped. E.g: Line of business",
      table: {
          category: "string",
      },
    },
    sortColumnName: {
      description:
          "Datafield name of dataPath from rows based on which nested rows in expand section will be sorted. E.g: row.EffectiveDate or row.TransactionNumber",
      table: {
          category: "string",
      },
    }
    

  },
};

const Template = (args) => <TransactionHistory {...args} />;

export const TransactionHistoryComp = Template.bind({});
TransactionHistoryComp.args = CommonArgs;

export const NonGrouped = Template.bind({});
NonGrouped.args = NonGroupedArgs;

