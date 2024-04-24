import React from "react";
import GoogleMaps from "./googlemaps";

const manualAddressSchema = [
  {
    key: "manualAddressKey",
    type: "",
    title: "",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "mt-4",
    // "conditionalDisplay": [{
    //   "src": "0.Risks.Vehicles",
    //   "exp": "any",
    //   "needRefComp": false,
    //   "target": "x=> x.Carrier=='ASSURANT'",
    //   "connector": "&&"
    // }],
    controls: [
      {
        "key": "streetAddress",
        "label": "Street Address*",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Street Address",
          "maxlength": "50",
          "minlength": "2"
        },
        "errorMessage": "Please enter Street Address",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "streetAddress",
      },
      {
        "key": "city",
        "label": "City*",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "City",
          "maxlength": "50",
          "minlength": "2"
        },
        "errorMessage": "Please enter City",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "city",
      },
      {
        "key": "state",
        "label": "State*",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "State",
          "maxlength": "50",
          "minlength": "2"
        },
        "errorMessage": "Please enter State",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "state",
      },
      {
        "key": "zip",
        "label": "Zip*",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Zip",
          "maxlength": "6",
          "minlength": "2"
        },
        "errorMessage": "Please enter Zip",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "zip",
      },
    ]
  }
];

const manualAddressFormModel = {
  streetAddress: "",
  city: "",
  state: "",
  zip: ""
}

const GoogleMapsArgs = {
  type: 'array',
  apiKey: 'AIzaSyDJxGtUg3q4Gh52-JO1HBr2xsM2X8MtOYE',
  value: [],
  LocationTypes: ["Mailing Address", "Primary Garaging Address", "Garaging Address"],
  addObjType: "normal",
  mailingImgPath: 'images/mailing-add.png',
  garagingImgPath: 'images/pin-address.png',
  showManualAddressEnableOption: true,
  manualAddressFormModel: manualAddressFormModel,
  manualAddressSchema: manualAddressSchema,
  validators: [],
  disableSaveButton: false,
  onChange: (val)=>{console.log(val);},
  addressErrorMessage: "Please Select atleast one Address"
  // addObjType: "normal"
};

export default {
  title: 'Design System/Core/GoogleAutoComplete',
  component: GoogleMaps,
  argTypes: {
    type: {
      description: "Type of address component.",
      table: {
        category: 'Key Params'
      }
    },
    apiKey: {
      description: "Google api key.",
      table: {
        category: 'Key Params'
      }
    },
    value: {
      description: "Input or default address.",
      table: {
        category: 'Key Params'
      }
    },
    addObjType: {
      control: 'text',
      description: "helps to created location datapath object by passing value normal for ENGS and blank for CA-UI",
      table: {
        category: 'Element'
      }
    },
    mailingImgPath: {
      control: 'text',
      description: "pass Image path for Mailing address in dataTable",
      table: {
        category: 'Element'
      }
    },
    garagingImgPath: {
      control: 'text',
      description: "pass Image path for Garaging address in dataTable",
      table: {
        category: 'Element'
      }
    },
    setAddress: {
      action: value => console.log(value),
      description: "Emits the events as soon as user selects an address",
      table: {
        category: 'Events'
      }
    },
    showManualAddressEnableOption: {
      control: "boolean",
      description: "show or hide manual address toggle button",
      table: {
        category: 'Element'
      }
    },
    manualAddressSchema: {
      description: "UI schema which gets passes as the JSON of the child elements with thier attributes to render on screen.",
      table: {
        category: 'Key Params'
      }
    },
    manualAddressFormModel: {
      description: "Holds the input captured from user and gets emits as part of onChange & onSumit events.",
      table: {
        category: 'Key Params'
      }
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Dynamic form component will generate the html form with child html elements based on Ui schema also captures user input and emits as an event with updated data model.',
      },
    },
  }
};
const Template = (args) => <GoogleMaps {...args} />;
export const AutoComplete = Template.bind({});
AutoComplete.args = GoogleMapsArgs;