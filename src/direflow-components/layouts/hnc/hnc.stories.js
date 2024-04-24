import React from 'react';
import HeaderNavigationContent from './hnc';
// import {Navigation} from '../Navbar/navbar.stories';
// import {Header} from '../Header/header.stories'

const checkValidUser = () => {
  let validUser = checkTokenValidity();
  if (validUser) {
    // alert(alertMsgs.Shared.TimeOut);
    setTimeout(() => { userLogout() }, 2000);
  }
}

const userLogout = () => {
  logoutUser();
  window.location.href = process.env.NEXT_PUBLIC_BASE_PATH;
}

const logoutUser = () => {
  console.log()
}
const checkTokenValidity = () => {
  console.log()
}

const store= {
  getState:()=>{return {
    "loggedInUserReducer" : {
    "encodedJWT": "123",    
    },
    "applicationReducer": {
    
    }
    }}
};

const sharedSetNavigation = (navigationIndex) => {
  console.log(navigationIndex)
 };

 const onMenuSelected = async (indx, e, key, url) => {
  e.preventDefault();
  // sharedSetNavigation(indx);
  switch (key) {
    case "AccountHub":
      // resetPolicy();
      // setStoreInternalState(storeKeys.ApplicationReducer, storeKeys.MultipleRatingResponse, {});
      // Router.push(url.toLowerCase());
      break;

    case "GenerateQuote":
      if (schemaTest()) {
        alert('Unable to fetch schema. Kindly re-login');
        return false;
      }
      sharedSetProgress(-1);
      // resetPolicy();
      // setUserRole();
      // Router.push(url.toLowerCase());
      break;

    case "Analytics":
      // triggerAnalyticsData();
      break;

    default:
      break;
  }
};

const schemaTest = () => {
  console.log()
}

const sharedSetProgress = () => {
  console.log()
}
const Menus = [
  {
      Key: "AccountHub",
      // Label: "Account Hub",
      Src: "images/sidebar-uiElement.svg",
      Href: "/dashboard/accounthub",
      Childs: []
  },
  {
      Key: "GenerateQuote",
      // Label: "Generate Quote",
      Src: "images/sidebar-form.svg",
      Href: "/commercial/auto/quote/riskqualifiers",
      Childs: []
  },
];

const CommonArgs = {
  store:store,
  checkValidUser:checkValidUser,
  userLogout:userLogout,
  sharedSetNavigation:sharedSetNavigation,
  onMenuSelected:onMenuSelected,
  Menus:Menus


};

export default {
    title: "Design System/Layouts/HNC",
    component: HeaderNavigationContent,
    argTypes: {
        store: {
            description: " Cross-browser storage for all use cases, used across the web",
            table: {
                category: 'Key Params'
            }
        },
        checkValidUser: {
          description: " individual accessing a checkValidUser through a web browser",
          table: {
              category: 'Key Params'
          }
      },
      userLogout: {
          description: " Provides controllers for logout from browser",
          table: {
              category: 'Key Params'
          }
      },
      sharedSetNavigation: {
          description: " individual accessing a sharedSetNavigation through a web browser",
          table: {
              category: 'Key Params'
          }
      },
      onMenuSelected: {
          description: " individual accessing a object onMenuSelected through a web browser",
          table: {
              category: 'Key Params'
          }
        },
        Menus: {
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

const Template = (args) => <HeaderNavigationContent {...args} />;

export const Navigation = Template.bind({});
Navigation.args = CommonArgs;