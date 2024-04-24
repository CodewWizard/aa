import React from 'react';
import FunctionalAccountHub from './accounthub-functional';
import { advanceFilterModel, accountHubColummns, selectDropdownModel, accountHubModel, accountHubExpandCols } from './utilities/config';
import { GETACCOUNTHUB } from './utilities/queries';



const AccountHubArgs = {
  LoggedInUser: { decodedJWT: { role: 'Agent' } },
  PageTitle: 'Page displays list of policies',
  PageDesc: 'Commercial Auto - AccountHub',
  favicon: '',
  AdvanceFilterModelSchema: advanceFilterModel,
  AccountHubColummns: accountHubColummns,
  SelectDropdownModel: selectDropdownModel,
  AccounthubModel: accountHubModel,
  AccountHubExpandCols: accountHubExpandCols,
  ExpandRowFilter: () => { },
  GetQuery: GETACCOUNTHUB,
  AdvanceSearch: () => { },
  onSchemaChange: () => { },
  ResetForm: () => { },
  LoadAccountHub: async () => { return Promise.resolve([]) }
};

export default {
  title: 'Design System/Functional/Accounthub/Expandable Rows',
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

// export const FunctionalAccountHubComp = Template.bind({});
// FunctionalAccountHubComp.args = AccountHubArgs;
