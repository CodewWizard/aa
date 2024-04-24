const storeKeys = {
    StoreMilestoneIndex: "MilestoneIndex",
    StoreNavigationIndex: "NavigationIndex",
    ShowLoader: "ShowLoader",
    IsAnalyticsDataLoaded: "IsAnalyticsDataLoaded",
    AnalyticsData: "AnalyticsData",
    ApplicationReducer: "applicationReducer",
    LoggedInUserReducer: "loggedInUserReducer",
    MasterReducer: "masterReducer",
    PolicyReducer: "policyReducer",
    SchemaReducer: "schemaReducer",
    MasterCoverageTemplates: "coverageTemplates",
    MultipleRatingResponse: "multipleRate"
};

const alertMsgs = {
  Login: {
      LoginFailed: "Login Failed !!!"
  },
}

const commonKeys = {
    Code: "Code",
    Description: "Description",
    Value: "Value",
    Text: "Text",
    IsErrored: "IsErrored",
    Valid: "Valid",
    Errors: "Errors",
    EmptyString: "",
    DefaultTemplate: "Default Template",
    ModuleQuote: "Quote",
    ModuleApplication: "Application",
    ModuleEndorsement: "Endorsement",
    ModuleRenewal: "Renewal",
    ModuleCancel: "Cancel",
    ModuleReinstate: "Reinstate",
    RoleAgent: "Agent",
    RoleUW: "UW",
    RoleSUW: "SUW",
    ActionAllow: "Allow",
    ActionRefer: "Refer",
    ActionBlock: "Block",
    ActionEmailQuote: "EmailQuote",
    ActionEmailFormalQuote: "EmailFormalQuote",
    ActionPrintQuote: "PrintQuote",
    ActionSmsQuote: "SmsQuote",
    ActionEmailAndDownload:"ActionEmailAndDownload",
    NotificationTypeSMS: "S",
    NotificationTypeEmail: "E",
    NotificationFormatHTML: "html",
    NotificationFormatPDF: "pdf",
    NotificationFormatTEXT: "text",
    TemplateNameNotificationQuote: "engs/commercial/auto/common/ca_email.html",
    TemplateNameNotificationFormalQuote: "engs/commercial/auto/common/formalquote.html",
    TemplateNameNotificationFormalQuoteMessageBody: "engs/commercial/auto/common/formalquotemessagebody.html",
    TemplateNameCancelReinstate: "engs/commercial/auto/common/REI_CAN_document.html",
    TrueString: "true",
    FalseString: "false",
    PageChangeFormName: "pageChangeForm",
    New: 'new',
    SubmitAndAddAnother: 'submitAndAddAnother',
    SubmitOnly: 'SubmitOnly',
    CloseModal: 'closeModal',
    Completed: 'completed',
    Errored: 'errored',
    DatatTableMode: 'checkbox',
    AddNewDriver: "addnewDriver"
}

const getStoreState = (key) => {
    try {
      let state = store.getState();
      switch (key) {
        case storeKeys.ApplicationReducer:
          return state[storeKeys.ApplicationReducer];
        case storeKeys.LoggedInUserReducer:
          return state[storeKeys.LoggedInUserReducer];
        case storeKeys.MasterReducer:
          return state[storeKeys.MasterReducer];
        case storeKeys.PolicyReducer:
          return state[storeKeys.PolicyReducer];
        case storeKeys.SchemaReducer:
          return state[storeKeys.SchemaReducer];
        default:
          return state;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const validatePageSubmit = (pageName= '', flowKey = '') => {
    try {
      let currentPolicy = getStoreState(storeKeys.PolicyReducer);
      pageName = pageName.length > 0 ? pageName : window.location.href.toLowerCase();
      let currentPageName = pageName;
      let currentFlowName = flowKey;
      if(!(pageName.length > 0 && flowKey.length > 0)) {
        pageName = pageName.split('/');
        currentPageName = pageName[pageName.length - 2];
        currentFlowName = pageName[pageName.length - 3];
      }     
      let isPageInValid = false;
      switch(currentPageName) {
        case 'vehicleinfo':
        //   currentPolicy = validateVehicles(currentPolicy, currentFlowName);
          if(currentPolicy?.Risks?.Vehicles?.filter(v=>v.Status == commonKeys.IsErrored)?.length > 0) {
            isPageInValid = true;
          } else if(currentPolicy?.Risks?.Vehicles?.length == 0) {
            // toast.error(alertMsgs.Vehicles.AtleastOneVehicle);
            isPageInValid = true;
          }
          break;
        case 'driverinfo':
          currentPolicy = validateDrivers(currentPolicy, currentFlowName);
          const carrierDriverResponse = checkCarrierDriverMapping(currentPolicy.Risks);
          if(currentPolicy?.Risks?.Drivers?.filter(u=>u.Status == commonKeys.IsErrored)?.length > 0) {
            // toast.error(alertMsgs.Drivers.DriversWithErrors);
            isPageInValid = true;
          } else if(currentPolicy?.Risks?.Drivers?.length == 0) {
            if(currentPolicy.Risks.Vehicles.filter(x => staticItems.PowerUnits.includes(x.VehicleType)).length > 0){
            //   toast.error(alertMsgs.Drivers.AtleastOneDriver);
              isPageInValid = true;
            }
          } else if(currentPolicy?.Risks?.Vehicles?.length == 0) {
            // toast.error(alertMsgs.Vehicles.AtleastOneVehicle);
            isPageInValid = true;
          } else if(carrierDriverResponse.length > 0) {
            carrierDriverResponse.forEach((error)=>{
              if(error.Carrier == 'GAIC') {
                if(error.PowerUnits === 0)
                alert(`There are no power units for GAIC hence, please do not add any driver(s) for GAIC.`);
                else
                  alert(`No. of Drivers(${error.Drivers}) is less than No. of Power Units(${error.PowerUnits}) for GAIC`);
              }
              if(error.Carrier == 'ASSURANT') {
                if(error.PowerUnits === 0)
                  alert(`There are no power units for ASSURANT hence, please do not add any driver(s) for ASSURANT.`);
                else
                  alert(`No. of Drivers(${error.Drivers}) is less than No. of Power Units(${error.PowerUnits}) for Assurant`);
              }
            })
            isPageInValid = true;
          } 
          break;
        default:
          break;
      }
      return isPageInValid;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  export{
    storeKeys,
    commonKeys,
    getStoreState,
    validatePageSubmit,
    alertMsgs
  }