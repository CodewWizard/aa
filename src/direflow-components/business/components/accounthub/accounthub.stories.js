import React, {useEffect, useState} from 'react';
import AccountHub from './accounthub';
// import NProgress from 'nprogress';
// import { toast } from 'react-toastify';


const blankAccountHubModel = {
    policystatus: null,
    policynumber: null,
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
};
// const [accountHubModel, setAccountHubModel] = useState(blankAccountHubModel);
const accountHubModel = blankAccountHubModel;
const AccountHubColummns = [
    {
        dataField: 'BusinessName',
        text: 'Business Name',
        sort: false,
        headerStyle: () => {
            return {width: "12%"};
        },
        headerClasses: "text-capitalize"
    },
    {
        dataField: 'Location',
        text: 'Location',
        sort: false,
        headerStyle: () => {
            return {width: "20%"};
        },
        headerClasses: "text-capitalize"
    },
    {
        dataField: 'PolicyNumber',
        text: 'POLICY NO.',
        headerStyle: () => {
            return {width: "12%"};
        },
        // hidden : policyInfo.PolicyNumber == "" ? true : false
    },
    {
        dataField: 'IsQuoteNumber',
        text: 'QUOTE NO.',
        sort: false,
        hidden: true
    },
    {
        dataField: 'IsRenew',
        text: 'Renewal',
        sort: false,
        hidden: true
    },
    {
        dataField: 'Agent',
        text: 'AGENT',
        sort: false,
        headerStyle: () => {
            return {width: "12%"};
        }
    },
    {
        dataField: 'Underwriter',
        text: 'UNDERWRITER',
        sort: false,
        headerStyle: () => {
            return {width: "12%"};
        }
    },
    {
        dataField: 'LastUpdatedDate',
        text: 'LAST UPDATE',
        headerStyle: () => {
            return {width: "12%"};
        },
        sort: true
    },
    {
        dataField: 'Status',
        text: 'STATUS',
        sort: false,
        headerStyle: () => {
            return {width: "10%"};
        }
    },
    {
        dataField: 'actions',
        text: 'ACTIONS',
        isDummyField: true,
        csvExport: false,
        headerStyle: () => {
            return {width: "10%"};
        }
    }
];

let d = new Date();
let dformat = (
    d.getFullYear().toString().padStart(2, '0') + "-" +
    (d.getMonth() + 1).toString().padStart(2, '0') + "-" +
    d.getDate().toString().padStart(2, '0')
);

const advanceFilterModel = [
    {
        key: "advanceSearch",
        type: "Card",
        title: "",
        className: "",
        titleClassName: "commonHead commonHeadPadding",
        childsClassName: "",
        controls: [
            {
                key: "agentName",
                label: "AGENT NAME",
                type: "select",
                props: {
                    class: "inputText",
                    placeholder: 'Please enter Agent Name Min 2 - Max 50 alphabets',
                    pattern: '[.a-zA-Z ]*$',
                    maxlength: '50',
                    minlength: '2'
                },
                labelClass: "inputLabel",
                positionClass: "col-md-4 mb-4",
                isColummnDisplay: false,
                dataPath: "agentid",
                errorMessage: "Please enter valid Agent Name",
                conditionalDisplay: [{
                    src: "showAdvanceFilters",
                    exp: "==",
                    needRefComp: false,
                    target: "true",
                    connector: "&&"
                }],
                options: [
                    {value: "1", label: "One"},
                    {value: "2", label: "Two"},
                    {value: "3", label: "Three"}
                ]
            },
            {
                key: "underwriterName",
                label: "UNDERWRITER NAME",
                type: "select",
                props: {
                    class: "inputText",
                    placeholder: 'Please enter Underwriter Name Min 2 - Max 50 alphabets',
                    pattern: '[.a-zA-Z ]*$',
                    maxlength: '50',
                    minlength: '2'
                },
                labelClass: "inputLabel",
                positionClass: "col-md-4 mb-4",
                isColummnDisplay: false,
                dataPath: "underwriterid",
                errorMessage: "Please enter valid Underwriter Name",
                conditionalDisplay: [{
                    src: "showAdvanceFilters",
                    exp: "==",
                    needRefComp: false,
                    target: "true",
                    connector: "&&"
                }],
                options: [
                    {value: "1", label: "One"},
                    {value: "2", label: "Two"},
                    {value: "3", label: "Three"}
                ]
            },
            {
                key: "businessName",
                label: "BUSINESS NAME",
                props: {
                    class: "inputText",
                    placeholder: 'Please enter Business Name Min 2 - Max 50 alphabets',
                    pattern: '[.&a-zA-Z ]*$',
                    maxlength: '50',
                    minlength: '2'
                },
                labelClass: "inputLabel",
                positionClass: "col-md-4 mb-4",
                isColummnDisplay: false,
                dataPath: "businessname",
                errorMessage: "Please enter valid Business Name",
                conditionalDisplay: [{
                    src: "showAdvanceFilters",
                    exp: "==",
                    needRefComp: false,
                    target: "true",
                    connector: "&&"
                }]
            },
            {
                key: "fromdate",
                label: "FROM DATE",
                type: "date",
                props: {
                    class: "inputText",
                    // format: "mm - yyyy",
                    // format: "m - yyyy",
                    // format: "M - yyyy",
                    format: "MM - yyyy",
                    // format: "MMM - yyyy",
                    // format: "mmm - yyyy",
                    defaultView: "decade",
                    // onDrillDown:({ activeStartDate, view }) => console.log(view) ,
                    placeholder: "Enter Date",
                    monthPlaceholder: "mm",
                    datePlaceholder: "dd",
                    yearPlaceholder: "yyyy",
                    // maxDetail:"hour",
                    // view:"year",
                    clearIcon: false
                },
                labelClass: "inputLabel",
                positionClass: "col-md-4 mb-4",
                isColummnDisplay: false,
                dataPath: "fromdate",
                conditionalDisplay: [{
                    src: "showAdvanceFilters",
                    exp: "==",
                    needRefComp: false,
                    target: "true",
                    connector: "&&"
                }]
            },
            {
                key: "todate",
                label: "TO DATE",
                type: "date",
                props: {
                    class: "inputText",
                    max: dformat,
                    placeholder: "Enter Date",
                    monthPlaceholder: "mm",
                    datePlaceholder: "dd",
                    yearPlaceholder: "yyyy",
                    clearIcon: false
                },
                labelClass: "inputLabel",
                positionClass: "col-md-4 mb-4",
                isColummnDisplay: false,
                dataPath: "todate",
                conditionalDisplay: [{
                    src: "showAdvanceFilters",
                    exp: "==",
                    needRefComp: false,
                    target: "true",
                    connector: "&&"
                }]
            }
        ]
    }
];

const paginationOptions = {
    pageStartIndex: 1, // first page will be 0, default is 1
    sizePerPage: 10,  // the pagination bar size, default is 10
    showTotal: true, // display pagination information
    sizePerPageList: [
        {text: '5', value: 5},
        {text: '10', value: 10},
        {text: '20', value: 20},
        {text: '50', value: 50},
        {text: '100', value: 100}
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

const selectDropdownModel = [
    {
        key: "advanceSearch",
        type: "Card",
        title: "",
        className: "",
        titleClassName: "commonHead commonHeadPadding",
        childsClassName: "",
        controls: [
            {
                key: "status",
                type: "select",
                value: "select",
                props: {class: "inputText"},
                labelClass: "p-0",
                positionClass: "col-md-12",
                isColummnDisplay: false,
                dataPath: "policystatus",
                options: [{value: "1", label: "One"},
                    {value: "2", label: "Two"},
                    {value: "3", label: "Three"}]
            }
        ]
    }
];

const accounthub = [
    {
        "BusinessName": "For Yash",
        "Location": "311 West Illinois Street, Chicago, IL, USA",
        "PolicyNumber": "QENGS1IL230561",
        "IsQuoteNumber": true,
        "TransactionDate": "2023-01-04",
        "LastUpdatedDate": "2023-01-04T09:30:25.499Z",
        "Underwriter": "Renee Ranallo",
        "Status": "Formal Quote",
        "EffectiveDate": "2023-01-04",
        "ExpirationDate": "2024-01-04",
        "Agent": "Maria Fonseca",
        "IsRenew": false,
        "QuoteNumber": "QENGS1IL230561"
    },
    {
        "BusinessName": "Mayank Smoke Test",
        "Location": "311 Illinois Route 59, North Barrington, IL, USA",
        "PolicyNumber": "GAEIA1IL230457",
        "IsQuoteNumber": false,
        "TransactionDate": "2023-01-03",
        "LastUpdatedDate": "2023-01-04T06:04:26.060Z",
        "Underwriter": "Roman Hunter",
        "Status": "Policy In Force - Cancellation Request Pending Approval",
        "EffectiveDate": "2023-01-03",
        "ExpirationDate": "2024-01-03",
        "Agent": "Maria Fonseca",
        "IsRenew": false,
        "QuoteNumber": "QENGS1IL230556"
    },
    {
        "BusinessName": "",
        "PolicyNumber": "",
        "IsQuoteNumber": true,
        "TransactionDate": "2023-01-04",
        "LastUpdatedDate": "2023-01-04T06:01:59.332Z",
        "Underwriter": "",
        "Status": "Quote",
        "EffectiveDate": "2023-01-04",
        "ExpirationDate": "2024-01-04",
        "Agent": "",
        "IsRenew": false,
        "QuoteNumber": ""
    },
    {
        "BusinessName": "For Yash",
        "Location": "311 West Illinois Street, Chicago, IL, USA",
        "PolicyNumber": "QENGS1IL230561",
        "IsQuoteNumber": true,
        "TransactionDate": "2023-01-04",
        "LastUpdatedDate": "2023-01-04T09:30:25.499Z",
        "Underwriter": "Renee Ranallo",
        "Status": "Formal Quote",
        "EffectiveDate": "2023-01-04",
        "ExpirationDate": "2024-01-04",
        "Agent": "Maria Fonseca",
        "IsRenew": false,
        "QuoteNumber": "QENGS1IL230561"
    },
    {
        "BusinessName": "Mayank Smoke Test",
        "Location": "311 Illinois Route 59, North Barrington, IL, USA",
        "PolicyNumber": "GAEIA1IL230457",
        "IsQuoteNumber": false,
        "TransactionDate": "2023-01-03",
        "LastUpdatedDate": "2023-01-04T06:04:26.060Z",
        "Underwriter": "Roman Hunter",
        "Status": "Policy In Force - Cancellation Request Pending Approval",
        "EffectiveDate": "2023-01-03",
        "ExpirationDate": "2024-01-03",
        "Agent": "Maria Fonseca",
        "IsRenew": false,
        "QuoteNumber": "QENGS1IL230556"
    },
    {
        "BusinessName": "For Yash",
        "Location": "311 West Illinois Street, Chicago, IL, USA",
        "PolicyNumber": "QENGS1IL230561",
        "IsQuoteNumber": true,
        "TransactionDate": "2023-01-04",
        "LastUpdatedDate": "2023-01-04T09:30:25.499Z",
        "Underwriter": "Renee Ranallo",
        "Status": "Formal Quote",
        "EffectiveDate": "2023-01-04",
        "ExpirationDate": "2024-01-04",
        "Agent": "Maria Fonseca",
        "IsRenew": false,
        "QuoteNumber": "QENGS1IL230561"
    },
    {
        "BusinessName": "Mayank Smoke Test",
        "Location": "311 Illinois Route 59, North Barrington, IL, USA",
        "PolicyNumber": "GAEIA1IL230457",
        "IsQuoteNumber": false,
        "TransactionDate": "2023-01-03",
        "LastUpdatedDate": "2023-01-04T06:04:26.060Z",
        "Underwriter": "Roman Hunter",
        "Status": "Policy In Force - Cancellation Request Pending Approval",
        "EffectiveDate": "2023-01-03",
        "ExpirationDate": "2024-01-03",
        "Agent": "Maria Fonseca",
        "IsRenew": false,
        "QuoteNumber": "QENGS1IL230556"
    },
    {
        "BusinessName": "For Yash",
        "Location": "311 West Illinois Street, Chicago, IL, USA",
        "PolicyNumber": "QENGS1IL230561",
        "IsQuoteNumber": true,
        "TransactionDate": "2023-01-04",
        "LastUpdatedDate": "2023-01-04T09:30:25.499Z",
        "Underwriter": "Renee Ranallo",
        "Status": "Formal Quote",
        "EffectiveDate": "2023-01-04",
        "ExpirationDate": "2024-01-04",
        "Agent": "Maria Fonseca",
        "IsRenew": false,
        "QuoteNumber": "QENGS1IL230561"
    },
    {
        "BusinessName": "Mayank Smoke Test",
        "Location": "311 Illinois Route 59, North Barrington, IL, USA",
        "PolicyNumber": "GAEIA1IL230457",
        "IsQuoteNumber": false,
        "TransactionDate": "2023-01-03",
        "LastUpdatedDate": "2023-01-04T06:04:26.060Z",
        "Underwriter": "Roman Hunter",
        "Status": "Policy In Force - Cancellation Request Pending Approval",
        "EffectiveDate": "2023-01-03",
        "ExpirationDate": "2024-01-03",
        "Agent": "Maria Fonseca",
        "IsRenew": false,
        "QuoteNumber": "QENGS1IL230556"
    },
    {
        "BusinessName": "For Yash",
        "Location": "311 West Illinois Street, Chicago, IL, USA",
        "PolicyNumber": "QENGS1IL230561",
        "IsQuoteNumber": true,
        "TransactionDate": "2023-01-04",
        "LastUpdatedDate": "2023-01-04T09:30:25.499Z",
        "Underwriter": "Renee Ranallo",
        "Status": "Formal Quote",
        "EffectiveDate": "2023-01-04",
        "ExpirationDate": "2024-01-04",
        "Agent": "Maria Fonseca",
        "IsRenew": false,
        "QuoteNumber": "QENGS1IL230561"
    },
    {
        "BusinessName": "Mayank Smoke Test",
        "Location": "311 Illinois Route 59, North Barrington, IL, USA",
        "PolicyNumber": "GAEIA1IL230457",
        "IsQuoteNumber": false,
        "TransactionDate": "2023-01-03",
        "LastUpdatedDate": "2023-01-04T06:04:26.060Z",
        "Underwriter": "Roman Hunter",
        "Status": "Policy In Force - Cancellation Request Pending Approval",
        "EffectiveDate": "2023-01-03",
        "ExpirationDate": "2024-01-03",
        "Agent": "Maria Fonseca",
        "IsRenew": false,
        "QuoteNumber": "QENGS1IL230556"
    }
]

// useEffect(() => {
//   // to disable browser back button
//   window.history.pushState(null, document.title, window.location.href);
//   window.addEventListener('popstate', function (event) {
//     window.history.pushState(null, document.title, window.location.href);
//   });
// }, []);

//
//   const LoadAccountHub = async (initialLoad, accounthubModel) => {
//     try {
//       let input = {
//         input: {
//           clause: [
//             { src: "1", def: "1", exp: "=", operator: "" },
//             { src: "r.Attributes.IsActive", def: "true", exp: "=", operator: "AND" },
//           ],
//           containerName: "policy",
//           // "LIMIT":100
//         },
//       };
//       if (!initialLoad) {
//         const dbKeys = {
//           policystatus: "r.PolicyStatus",
//           agentid: "r.Agent.Name",
//           underwriterid: "r.UnderWriter.Name",
//           businessname: "r.InsuredAccount.BusinessInfo.BusinessName",
//           fromdate: "r.EffectiveDate",
//           todate: "r.EffectiveDate",
//           transactiondate: "r.Transaction.Date",
//         };
//         for (const key in accounthubModel) {
//           if (accounthubModel[key]?.length > 0) {
//             console.log(key, accounthubModel[key], dbKeys[key]);
//             let expression = "";
//             if (key === "fromdate") expression = ">=";
//             else if (key === "todate") expression = "<=";
//             else if (["agentid", "underwriterid", "businessname"].includes(key)) expression = "LIKE";
//             else expression = "=";
//             if (["agentid", "underwriterid", "businessname"].includes(key)) {
//               input.input.clause.push({
//                 src: `UPPER(${dbKeys[key]})`,
//                 def: "'%" + accounthubModel[key].toUpperCase() + "%'",
//                 exp: expression,
//                 operator: "AND",
//               });
//             } else {
//               input.input.clause.push({
//                 src: dbKeys[key],
//                 def: "'" + accounthubModel[key] + "'",
//                 exp: expression,
//                 operator: "AND",
//               });
//             }
//           }
//         }
//       }
//       input.input.clause.push({
//         src: "r.Attributes.Carrier",
//         def: "'ENGS' ORDER BY r.Audit.LastUpdatedOn DESC",
//         exp: "=",
//         operator: "AND",
//       });
//       const resp = await ExecuteQuery(GetApolloClient(gqlEndPoint), GETACCOUNTHUB, input);
//       let data = [];
//       if (resp) {
//         data = await ProcessAccountHubData(resp.data[apolloKeys.GetByFilter]);
//       }
//       return data != null || data != undefined ? data : null;
//     } catch (error) {
//       logAPIErrorData(error, { initialLoad, accounthubModel }, consoleLogs.Utilities.Apollo.Operations.LoadAccountHub);
//     }
//   };
//
//   const LoadData = async () => {
//     NProgress.start();
//     if (status?.length > 0) {
//       const schma = accounthubModel;
//       schma.policystatus = status;
//       setAccounthubModel(schma);
//     }
//     const resp = await LoadAccountHub(status?.length <= 0, accounthubModel);
//     setAccounthub(resp?.length > 0 ? resp : []);
//     if(resp && resp.length === 0) setMessage('No Data Found');
//     sharedSetNavigation(1);
//     NProgress.done();
//   }
//   LoadData();
// }, []);
//
// useEffect(()=>{
//   let elements = document.getElementsByClassName('dropdown-item');
//   Array.from(elements).forEach((el) => {
//     el.removeAttribute('href');
//   });
// },[accounthub]);

// const advanceSearch = async (model, isInitialLoad = false) => {
//   // NProgress.start();
//   setAccountHubModel(model);
//   if(model.fromdate && model.fromdate.length > 0 && model.todate === null && !isInitialLoad) {
//     // toast.error('Please select to date as well.');
//     let inputToDate = document.getElementById('todate');
//     // inputToDate.classList?.add("error-show");
//     // inputToDate.setCustomValidity('Please select todate');
//     return false;
//   }
//   const filteredResult = await LoadAccountHub(isInitialLoad, model);
//   setAccounthub(filteredResult);
//   if(filteredResult?.length == 0) setMessage('No Data Found');
//   // NProgress.done();
// };
//
// const onSchemaChange = (changedSchema, key) => {
//   setAccounthubModel(changedSchema);
//   if (key === "status") {
//     advanceSearch(changedSchema);
//     setAccounthubModel({ //for filters
//       policystatus: null,
//       agentid: null,
//       underwriterid: null,
//       businessname: null,
//       fromdate: null,
//       todate: null,
//       transactiondate: null,
//       showAdvanceFilters: false
//     });
//   }
//   if(key === "fromdate"){
//     advanceFilterModelSchema[0].controls = advanceFilterModelSchema[0].controls.map(c=> {
//       if(c.key === "todate"){
//         c.props.min = changedSchema.fromdate;
//       }
//       return c;
//     })
//   }
//   setAdvanceFilterModelSchema(advanceFilterModelSchema);
// };
//

const dummyFunction = () => {
}

const AccountHubArgs = {
    advanceFilterModelSchema: advanceFilterModel,
    AccountHubColummns: AccountHubColummns,
    accounthub: accounthub,
    PageTitle: "Accounthub",
    PageDesc: "Account Dashboard for the user",
    accounthubModel: accountHubModel,
    onFormChange: dummyFunction,
    onSchemaChange: dummyFunction,
    paginationOptions: paginationOptions,
    selectDropdownModel: selectDropdownModel,
    toggle: dummyFunction,
    advanceSearch: dummyFunction,
    resetForm: dummyFunction,
    message: "Loading...",
    keyField: 'PolicyNumber',
    onPageChange: ()=>{
         document.documentElement.scrollTop = 0
    }
}


export default {
    title: 'Design System/Business/Components/Accounthub',
    component: AccountHub,
    argTypes: {
        AccountHubColummns: {
            description: " Cross-browser storage for all use cases, used across the web",
            table: {
                category: 'Key Params'
            }
        },
        accounthub: {
            description: " individual accessing a checkValidUser through a web browser",
            table: {
                category: 'Key Params'
            }
        },
        PageTitle: {
            description: " Provides controllers for logout from browser",
            table: {
                category: 'Key Params'
            }
        },
        PageDesc: {
            description: " individual accessing a sharedSetNavigation through a web browser",
            table: {
                category: 'Key Params'
            }
        },
        accounthubModel: {
            description: " individual accessing a object onMenuSelected through a web browser",
            table: {
                category: 'Key Params'
            }
        },
        onFormChange: {
            description: " Describe about the Menus Valid for a website",
            table: {
                category: 'Key Params'
            }
        },
        advanceFilterModelSchema: {
            description: " Describe about the Menus Valid for a website",
            table: {
                category: 'Key Params'
            }
        },
        onSchemaChange: {
            description: " Describe about the Menus Valid for a website",
            table: {
                category: 'Key Params'
            }
        },
        paginationOptions: {
            description: " Describe about the Menus Valid for a website",
            table: {
                category: 'Key Params'
            }
        },
        resetForm: {
            description: " Describe about the Menus Valid for a website",
            table: {
                category: 'Key Params'
            }
        },
        keyField: {
            description: " Describe about the Menus Valid for a website",
            table: {
                category: 'Key Params'
            }
        },
        selectDropdownModel: {
            description: " Describe about the Menus Valid for a website",
            table: {
                category: 'Key Params'
            }
        },
    },
    parameters: {
        docs: {
            description: {
                component: "HNc emits about HeaderNavigationContent.",
            },
        },
    }
};

const Template = (args) => <AccountHub {...args} />;

export const AccountHubComp = Template.bind({});
AccountHubComp.args = AccountHubArgs;
