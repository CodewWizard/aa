import React from "react";
import GooglePlacesAutoCompleteWithEdit from "./autocompletewithedit";


const manualAddressSchema = [
  {
    key: "manualAddressKey",
    type: "",
    title: "",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "mt-4",
    controls: [
      {
        "key": "streetAddress",
        "label": "AddressLine 1*",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "AddressLine 1",
          "maxlength": "50",
          "minlength": "0"
        },
        "errorMessage": "Please enter AddressLine 1",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xl-3 col-md-3 mb-4 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "AddressLine1",
      },
      {
        "key": "addressline2",
        "label": "AddressLine 2",
        "props": {
          "required": false,
          "class": "inputText",
          "placeholder": "AddressLine 2",
          "maxlength": "50",
          "minlength": "0"
        },
        "errorMessage": "Please enter AddressLine 2",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xl-3 col-md-3 mb-4 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "AddressLine2",
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
        "positionClass": "col-xl-3 col-md-3 mb-4 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "City",
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
        "positionClass": "col-xl-3 col-md-3 mb-4 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "State",
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
        "positionClass": "col-xl-3 col-md-3 mb-4 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "Zip",
      },
      {
        "key": "country",
        "label": "Country*",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Country",
          "maxlength": "50",
          "minlength": "2"
        },
        "errorMessage": "Please enter Country",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xl-3 col-md-3 mb-4 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "Country",
      },
      // {
			// 	"key": "addresstype",
			// 	"label": "Address Types*",
			// 	"type": "search-dropdown",
			// 	"props": {
			// 		"class": "inputText",
			// 		"placeholder": "Select Address Types",
      //     "required":true,
			// 	},
			// 	"errorMessage": "Please select Interest",
			// 	"inputClass": "flex-nowrap",
			// 	"positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 mb-4 align-self-end",
			// 	"isColummnDisplay": false,
			// 	"dataPath": "AddressType",
			// 	"options": [
			// 		{ "key": "select", "label": "Select Interest", "value": "" },
			// 		{ "key": "mailingaddress", "label": "Mailing Address", "value": "Mailing Address" },
			// 		{ "key": "primarygaragingaddress", "label": "Primary Garaging Address", "value": "Primary Garaging Address" },
			// 		{ "key": "garagingaddress", "label": "Garaging Address", "value": "Garaging Address" }
			// 	]
			// },
    ]
  }
];

const manualAddressFormModel = {
  // AddressLine1: "",
  // AddressLine2:"",
  // City: "",
  // State: "",
  // Country: "",
  // Zip: "",
  // AddressType:"",
}

const GooglePlacesAutoCompleteWithEditArgs = {
  apiKey: "AIzaSyDJxGtUg3q4Gh52-JO1HBr2xsM2X8MtOYE",
  controlKey: "Address",
  manualAddressFormModel: manualAddressFormModel,
  manualAddressSchema: manualAddressSchema,
  isCountryShort: false,
  isStateShort: false,
  setAddress: (model, key)=>{console.log([model, key]);},
  isSaveBtn: true,
  onSaveAddress: (data)=>{console.log(data);},
  // excludedFields: [], //add this to prevent from adding showing in full address
  includedFields: ['AddressLine1', 'AddressLine2', "City", "State", "Zip"], //field to include in full address
};

export default {
  title: "Design System/Core/GooglePlacesAutoCompleteWithEdit",
  component: GooglePlacesAutoCompleteWithEdit,
  parameters: {
    docs: {
      description: {
        component:
          "GooglePlaceAutocompleteEdit Component allows to edit autocompleted field. Client types in google autocomplete field which autocompletes the structure went through prop which is likewise accessible to see in full location field beneath.",
      },
    },
  },
  argTypes: {
    manualAddressFormModel: {
      description: "Data Model where address will be stored.",
      table: {
        category: "schema"
      }
    },
    manualAddressSchema: {
      description: "Ui Schema that to be passed in dynamic form.",
      table: {
        category: "schema"
      }
    },
    apiKey: {
      description: "Google API key",
      table: {
        category: "key"
      }
    },
    isCountryShort: {
      description: "Display country in short(E.g US) if true otherwise false",
      table: {
        category: "boolean"
      }
    },
    isStateShort: {
      description: "Display state in short(E.g TX) if true otherwise false",
      table: {
        category: "boolean"
      }
    },
    isSaveBtn: {
      description: "Show save button if true otherwise false",
      table: {
        category: "boolean"
      }
    },
    setAddress: {
      description: "Event is triggered whenever fields are filled",
      table: {
        category: "event"
      }
    },
    onSaveAddress: {
      description: "Event triggered when Save button is clicked.",
      table: {
        category: "event"
      }
    },
    excludedFields: {
      description: "Array of string(key) that are not to be displayed in full address.",
      table: {
        category: "array"
      }
    },
    includedFields:{
      description: "Array of string(key) that are to be displayed in full address.",
      table: {
        category: "array"
      }
    }
  }  
};

const Template = (args) => <GooglePlacesAutoCompleteWithEdit {...args} />;
export const AutoCompleteEdit = Template.bind({});
AutoCompleteEdit.args = GooglePlacesAutoCompleteWithEditArgs;
