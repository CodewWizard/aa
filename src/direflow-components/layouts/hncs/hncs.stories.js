import React from "react";
import HeaderNavigationContentSidebar from "./hncs";

const checkValidUser = () => {
  let validUser = checkTokenValidity();
  if (validUser) {
    // alert(alertMsgs.Shared.TimeOut);
    setTimeout(() => {
      userLogout();
    }, 2000);
  }
};

const userLogout = () => {
  logoutUser();
  window.location.href = process.env.NEXT_PUBLIC_BASE_PATH;
};

const logoutUser = () => {
  console.log();
};

const checkTokenValidity = () => {
  console.log();
};

const store = {
  getState: () => {
    return {
      loggedInUserReducer: {
        encodedJWT: "123",
      },
      applicationReducer: {},
    };
  },
};

const sharedSetNavigation = (navigationIndex) => {
  console.log(navigationIndex);
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
        alert("Unable to fetch schema. Kindly re-login");
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
  console.log();
};

const sharedSetProgress = () => {
  console.log();
};

const Menus = [
  {
    Key: "AccountHub",
    // Label: "Account Hub",
    Src: "images/sidebar-uiElement.svg",
    Href: "/dashboard/accounthub",
    Childs: [],
  },
  {
    Key: "GenerateQuote",
    // Label: "Generate Quote",
    Src: "images/sidebar-form.svg",
    Href: "/commercial/auto/quote/riskqualifiers",
    Childs: [],
  },
];

const currentPageCheck = (indx, hurl) => {
  return window.location.href.includes(hurl);
};

const onHandleProgressClick = (e, formName, redirectPage) => {
  e.preventDefault();
  let pageinfo = document.getElementById(formName).checkValidity();
  if (!pageinfo) {
    alert("Please fill/select all mandatory fields");
    return pageinfo;
  }
};

const ProgressMilestones = {
  quote: {
    key: "Quote",
    submitForm: "pageChangeForm",
    milestones: [
      {
        Key: "riskqualifiers",
        Label: "Risk Qualifiers",
        Href: "/commercial/auto/quote/riskqualifiers",
        Childs: [],
      },
      {
        Key: "businessinfo",
        Label: "Business Information",
        Href: "/commercial/auto/quote/businessinfo",
        Childs: [],
      },
      {
        Key: "vehicleinfo",
        Label: "Vehicle Information",
        Href: "/commercial/auto/quote/vehicleinfo",
        Childs: [],
      },
      {
        Key: "coverageinfo",
        Label: "Coverages",
        Href: "/commercial/auto/quote/coverageinfo",
        Childs: [],
      },
    ],
  },
  application: {
    key: "Application",
    submitForm: "pageChangeForm",
    milestones: [
      {
        Key: "riskqualifiers",
        Label: "Risk Qualifiers",
        Href: "/commercial/auto/application/riskqualifiers",
        Childs: [],
        Hidden: true,
      },
      {
        Key: "BusinessInformation",
        Label: "Business Information",
        Href: "/commercial/auto/application/businessinfo",
        Childs: [],
      },
      {
        Key: "VehicleInformation",
        Label: "Vehicle & Coverages",
        Href: "/commercial/auto/application/vehicleinfo",
        Childs: [],
      },
      {
        Key: "TruckTrailerMapping",
        Label: "Trailer Mapping",
        Href: "/commercial/auto/application/trucktrailer",
        Childs: [],
        Hidden: true,
      },
      {
        Key: "DriverInformation",
        Label: "Driver Information",
        Href: "/commercial/auto/application/driverinfo",
        Childs: [],
      },
    ],
  },
  endorsement: {
    key: "Endorsement",
    submitForm: "pageChangeForm",
    milestones: [
      {
        Key: "BusinessInformation",
        Label: "Business Information",
        Href: "/commercial/auto/endorsement/businessinfo",
        Childs: [],
      },
      {
        Key: "VehicleInformation",
        Label: "Vehicle & Coverages",
        Href: "/commercial/auto/endorsement/vehicleinfo",
        Childs: [],
      },
      {
        Key: "TruckTrailerMapping",
        Label: "Trailer Mapping",
        Href: "/commercial/auto/endorsement/trucktrailer",
        Childs: [],
      },
      {
        Key: "DriverInformation",
        Label: "Driver Information",
        Href: "/commercial/auto/endorsement/driverinfo",
        Childs: [],
      },
    ],
  },
  renewal: {
    key: "Renewal",
    submitForm: "pageChangeForm",
    milestones: [
      {
        Key: "BusinessInformation",
        Label: "Business Information",
        Href: "/commercial/auto/renewal/businessinfo",
        Childs: [],
      },
      {
        Key: "VehicleInformation",
        Label: "Vehicle & Coverages",
        Href: "/commercial/auto/renewal/vehicleinfo",
        Childs: [],
      },
      {
        Key: "TruckTrailerMapping",
        Label: "Trailer Mapping",
        Href: "/commercial/auto/application/trucktrailer",
        Childs: [],
      },
      {
        Key: "DriverInformation",
        Label: "Driver Information",
        Href: "/commercial/auto/renewal/driverinfo",
        Childs: [],
      },
    ],
  },
};

let schema = {
  quote: {
    key: "Quote",
    submitForm: "pageChangeForm",
    milestones: [
      {
        Key: "riskqualifiers",
        Label: "Risk Qualifiers",
        Href: "/commercial/auto/quote/riskqualifiers",
        Childs: [],
      },
      {
        Key: "businessinfo",
        Label: "Business Information",
        Href: "/commercial/auto/quote/businessinfo",
        Childs: [],
      },
      {
        Key: "vehicleinfo",
        Label: "Vehicle Information",
        Href: "/commercial/auto/quote/vehicleinfo",
        Childs: [],
      },
      {
        Key: "coverageinfo",
        Label: "Coverages",
        Href: "/commercial/auto/quote/coverageinfo",
        Childs: [],
      },
    ],
  },
  application: {
    key: "Application",
    submitForm: "pageChangeForm",
    milestones: [
      {
        Key: "riskqualifiers",
        Label: "Risk Qualifiers",
        Href: "/commercial/auto/application/riskqualifiers",
        Childs: [],
      },
      {
        Key: "BusinessInformation",
        Label: "Business Information",
        Href: "/commercial/auto/application/businessinfo",
        Childs: [],
      },
      {
        Key: "VehicleInformation",
        Label: "Vehicle & Coverages",
        Href: "/commercial/auto/application/vehicleinfo",
        Childs: [],
      },
      {
        Key: "TruckTrailerMapping",
        Label: "Trailer Mapping",
        Href: "/commercial/auto/application/trucktrailer",
        Childs: [],
      },
      {
        Key: "DriverInformation",
        Label: "Driver Information",
        Href: "/commercial/auto/application/driverinfo",
        Childs: [],
      },
    ],
  },
  endorsement: {
    key: "Endorsement",
    submitForm: "pageChangeForm",
    milestones: [
      {
        Key: "BusinessInformation",
        Label: "Business Information",
        Href: "/commercial/auto/endorsement/businessinfo",
        Childs: [],
      },
      {
        Key: "VehicleInformation",
        Label: "Vehicle & Coverages",
        Href: "/commercial/auto/endorsement/vehicleinfo",
        Childs: [],
      },
      {
        Key: "TruckTrailerMapping",
        Label: "Trailer Mapping",
        Href: "/commercial/auto/endorsement/trucktrailer",
        Childs: [],
      },
      {
        Key: "DriverInformation",
        Label: "Driver Information",
        Href: "/commercial/auto/endorsement/driverinfo",
        Childs: [],
      },
    ],
  },
  renewal: {
    key: "Renewal",
    submitForm: "pageChangeForm",
    milestones: [
      {
        Key: "BusinessInformation",
        Label: "Business Information",
        Href: "/commercial/auto/renewal/businessinfo",
        Childs: [],
      },
      {
        Key: "VehicleInformation",
        Label: "Vehicle & Coverages",
        Href: "/commercial/auto/renewal/vehicleinfo",
        Childs: [],
      },
      {
        Key: "TruckTrailerMapping",
        Label: "Trailer Mapping",
        Href: "/commercial/auto/application/trucktrailer",
        Childs: [],
      },
      {
        Key: "DriverInformation",
        Label: "Driver Information",
        Href: "/commercial/auto/renewal/driverinfo",
        Childs: [],
      },
    ],
  },
};

const CommonArgs = {
  store: store,
  checkValidUser: checkValidUser,
  userLogout: userLogout,
  sharedSetNavigation: sharedSetNavigation,
  onMenuSelected: onMenuSelected,
  Menus: Menus,
  currentPageCheck: currentPageCheck,
  onHandleProgressClick: onHandleProgressClick,
  ProgressMilestones: ProgressMilestones,
  currentPage: "quote",
  MilestoneIndex: [],
  schema: schema,
  saveForLater: logoutUser,
  back: logoutUser,
  currentStage: "application",
  needBack: true,
  needCancel: true,
  needSaveForLater: true,
  needNext: true,
  backBtnText: "",
  cancelBtnText: "",
  saveBtnText: "",
  nextBtnText: "",
  
  nextBtnClass: "",
  saveBtnClass: "",
  closeBtnClass: "",
  backBtnClass: ""
};

export default {
  title: "Design System/Layouts/HNCS",
  component: HeaderNavigationContentSidebar,
  argTypes: {
    store: {
      description:
        " Cross-browser storage for all use cases, used across the web",
      table: {
        category: "Key Params",
      },
    },
    checkValidUser: {
      description:
        " individual accessing a checkValidUser through a web browser",
      table: {
        category: "Key Params",
      },
    },
    userLogout: {
      description: " Provides controllers for logout from browser",
      table: {
        category: "Key Params",
      },
    },
    sharedSetNavigation: {
      description:
        " individual accessing a sharedSetNavigation through a web browser",
      table: {
        category: "Key Params",
      },
    },
    onMenuSelected: {
      description:
        " individual accessing a object onMenuSelected through a web browser",
      table: {
        category: "Key Params",
      },
    },
    Menus: {
      description: " Describe about the Menus Valid for a website",
      table: {
        category: "Key Params",
      },
    },
    currentPageCheck: {
      description:
        " individual accessing a currentPageCheck through a web browser",
      table: {
        category: "Key Params",
      },
    },
    onHandleProgressClick: {
      description:
        " individual accessing a onHandleProgressClick through a web browser",
      table: {
        category: "Key Params",
      },
    },
    ProgressMilestones: {
      description:
        " individual accessing progress of Milestones through a web browser",
      table: {
        category: "Key Params",
      },
    },
    currentPage: {
      description: " individual accessing a currentPage through a web browser",
      table: {
        category: "Key Params",
      },
    },
    MilestoneIndex: {
      description:
        " index of the sorted milestones array when that milestone has been passed",
      table: {
        category: "Key Params",
      },
    },
    schema: {
      description: " new way of describing object schemas",
      table: {
        category: "Key Params",
      },
    },
    saveForLater: {
      description:
        " index of the sorted milestones array when that milestone has been passed",
      table: {
        category: "Key Params",
      },
    },
    back: {
      description: " new way of describing object schemas",
      table: {
        category: "Key Params",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "HNCS emits about HeaderNavigationContentSidebar",
      },
    },
  },
};

const Template = (args) => <HeaderNavigationContentSidebar {...args} />;

export const NavigationSidebar = Template.bind({});
NavigationSidebar.args = CommonArgs;
