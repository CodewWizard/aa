import React from 'react';
import FunctionalAccountHub from './accounthub-functional';
import { advanceFilterModel, accountHubColummns, selectDropdownModel, accountHubModel, accountHubExpandCols } from './utilities/config';
import { GETACCOUNTHUB } from './utilities/queries';

const accounthub = [
  {
      "BusinessName": "ROTHERT",
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
      "IsMaster": true,
      "QuoteNumber": "QENGS1IL230561"
  },
  {
      "BusinessName": "TOGA",
      "Location": "311 Illinois Route 59, North Barrington, IL, USA",
      "PolicyNumber": "GAEIA1IL230459",
      "IsQuoteNumber": false,
      "TransactionDate": "2023-01-03",
      "LastUpdatedDate": "2023-01-04T06:04:26.060Z",
      "Underwriter": "Roman Hunter",
      "Status": "Quote Offered",
      "EffectiveDate": "2023-01-03",
      "ExpirationDate": "2024-01-03",
      "Agent": "Maria Fonseca",
      "IsMaster": true,
      "QuoteNumber": "QENGS1IL230556"
  },
  {
      "BusinessName": "ENGS",
      "Location": "311 Illinois Route 59, North Barrington, IL, USA",
      "PolicyNumber": "GAEIA1IL230407",
      "IsQuoteNumber": false,
      "TransactionDate": "2023-01-03",
      "LastUpdatedDate": "2023-01-04T06:04:26.060Z",
      "Underwriter": "Roman Hunter",
      "Status": "Policy In Force",
      "EffectiveDate": "2023-01-03",
      "ExpirationDate": "2024-01-03",
      "Agent": "Maria Fonseca",
      "IsMaster": true,
      "QuoteNumber": "QENGS1IL230556"
  },
  {
      "BusinessName": "BSG",
      "Location": "311 Illinois Route 59, North Barrington, IL, USA",
      "PolicyNumber": "GAEIA1IL230347",
      "IsQuoteNumber": false,
      "TransactionDate": "2023-01-03",
      "LastUpdatedDate": "2023-01-04T06:04:26.060Z",
      "Underwriter": "Roman Hunter",
      "Status": "Quote Indication",
      "EffectiveDate": "2023-01-03",
      "ExpirationDate": "2024-01-03",
      "Agent": "Maria Fonseca",
      "IsMaster": true,
      "QuoteNumber": "QENGS1IL230556"
  },
  {
      "BusinessName": "NEEE",
      "Location": "311 West Illinois Street, Chicago, IL, USA",
      "PolicyNumber": "QENGS1IL230456",
      "IsQuoteNumber": true,
      "TransactionDate": "2023-01-04",
      "LastUpdatedDate": "2023-01-04T09:30:25.499Z",
      "Underwriter": "Renee Ranallo",
      "Status": "Formal Quote",
      "EffectiveDate": "2023-01-04",
      "ExpirationDate": "2024-01-04",
      "Agent": "Maria Fonseca",
      "IsMaster": true,
      "QuoteNumber": "QENGS1IL230456"
  },
  {
      "BusinessName": "RPS",
      "Location": "311 Illinois Route 59, North Barrington, IL, USA",
      "PolicyNumber": "GAEIA1IL230897",
      "IsQuoteNumber": false,
      "TransactionDate": "2023-01-03",
      "LastUpdatedDate": "2023-01-04T06:04:26.060Z",
      "Underwriter": "Roman Hunter",
      "Status": "Cancellation Initiated",
      "EffectiveDate": "2023-01-03",
      "ExpirationDate": "2024-01-03",
      "Agent": "Maria Fonseca",
      "IsMaster": true,
      "QuoteNumber": "QENGS1IL230556"
  },
  {
      "BusinessName": "SGIH",
      "Location": "311 West Illinois Street, Chicago, IL, USA",
      "PolicyNumber": "QENGS1IL230987",
      "IsQuoteNumber": true,
      "TransactionDate": "2023-01-04",
      "LastUpdatedDate": "2023-01-04T09:30:25.499Z",
      "Underwriter": "Renee Ranallo",
      "Status": "Formal Quote",
      "EffectiveDate": "2023-01-04",
      "ExpirationDate": "2024-01-04",
      "Agent": "Maria Fonseca",
      "IsMaster": true,
      "QuoteNumber": "QENGS1IL230987"
  },
  {
      "BusinessName": "ENGS",
      "Location": "311 Illinois Route 59, North Barrington, IL, USA",
      "PolicyNumber": "GAEIA1IL230457",
      "IsQuoteNumber": false,
      "TransactionDate": "2023-01-03",
      "LastUpdatedDate": "2023-01-04T06:04:26.060Z",
      "Underwriter": "Roman Hunter",
      "Status": "Quote Offered",
      "EffectiveDate": "2023-01-03",
      "ExpirationDate": "2024-01-03",
      "Agent": "Maria Fonseca",
      "IsMaster": true,
      "QuoteNumber": "QENGS1IL230556"
  }
]

const AccountHubArgs = {
  LoggedInUser: { decodedJWT: { role: 'Agent' } },
  PageTitle: 'Page displays list of policies',//
  PageDesc: 'Commercial Auto - AccountHub',//
  favicon: '',//
  AdvanceFilterModelSchema: advanceFilterModel,//
  AccountHubColummns: accountHubColummns,//
  SelectDropdownModel: selectDropdownModel,//
  AccounthubModel: accountHubModel,//
  AccountHubExpandCols: [],
  ExpandRowFilter: () => { },
  GetQuery: GETACCOUNTHUB,
  // AdvanceSearch: () => { },
  // onSchemaChange: () => { },
  // ResetForm: () => { },
  LoadAccountHub: async (ms, model) => await new Promise(res => setTimeout(() => {
    res(accounthub);
}, 2000))
};

export default {
  title: 'Design System/Functional/Accounthub',
  component: FunctionalAccountHub,
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

const Template = (args) => <FunctionalAccountHub {...args} />;

export const Normal = Template.bind({});
Normal.args = AccountHubArgs;

export const ExpandedRows = Template.bind({});
ExpandedRows.args = {...AccountHubArgs, AccountHubExpandCols: accountHubExpandCols};
