import React from "react";
import renderer from "react-test-renderer";
import GooglePlacesAutoCompleteWithEdit from "../autocompletewithedit";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

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
        key: "streetAddress",
        label: "AddressLine 1*",
        props: {
          required: true,
          class: "inputText",
          placeholder: "AddressLine 1",
          maxlength: "50",
          minlength: "0",
        },
        errorMessage: "Please enter AddressLine 1",
        inputClass: "flex-nowrap",
        positionClass: "col-xl-3 col-md-3 mb-4 align-self-end",
        isColummnDisplay: false,
        dataPath: "AddressLine1",
      },
      {
        key: "addressline2",
        label: "AddressLine 2",
        props: {
          required: false,
          class: "inputText",
          placeholder: "AddressLine 2",
          maxlength: "50",
          minlength: "0",
        },
        errorMessage: "Please enter AddressLine 2",
        inputClass: "flex-nowrap",
        positionClass: "col-xl-3 col-md-3 mb-4 align-self-end",
        isColummnDisplay: false,
        dataPath: "AddressLine2",
      },
      {
        key: "city",
        label: "City*",
        props: {
          required: true,
          class: "inputText",
          placeholder: "City",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter City",
        inputClass: "flex-nowrap",
        positionClass: "col-xl-3 col-md-3 mb-4 align-self-end",
        isColummnDisplay: false,
        dataPath: "City",
      },
      {
        key: "state",
        label: "State*",
        props: {
          required: true,
          class: "inputText",
          placeholder: "State",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter State",
        inputClass: "flex-nowrap",
        positionClass: "col-xl-3 col-md-3 mb-4 align-self-end",
        isColummnDisplay: false,
        dataPath: "State",
      },
      {
        key: "zip",
        label: "Zip*",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Zip",
          maxlength: "6",
          minlength: "2",
        },
        errorMessage: "Please enter Zip",
        inputClass: "flex-nowrap",
        positionClass: "col-xl-3 col-md-3 mb-4 align-self-end",
        isColummnDisplay: false,
        dataPath: "Zip",
      },
      {
        key: "country",
        label: "Country*",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Country",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter Country",
        inputClass: "flex-nowrap",
        positionClass: "col-xl-3 col-md-3 mb-4 align-self-end",
        isColummnDisplay: false,
        dataPath: "Country",
      },
      {
        key: "addresstype",
        label: "Address Types*",
        type: "search-dropdown",
        props: {
          class: "inputText",
          placeholder: "Select Address Types",
          required: true,
        },
        errorMessage: "Please select Interest",
        inputClass: "flex-nowrap",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4 align-self-end",
        isColummnDisplay: false,
        dataPath: "AddressType",
        options: [
          { key: "select", label: "Select Interest", value: "" },
          {
            key: "mailingaddress",
            label: "Mailing Address",
            value: "Mailing Address",
          },
          {
            key: "primarygaragingaddress",
            label: "Primary Garaging Address",
            value: "Primary Garaging Address",
          },
          {
            key: "garagingaddress",
            label: "Garaging Address",
            value: "Garaging Address",
          },
        ],
      },
    ],
  },
];

const manualAddressFormModel = {
  AddressLine1: "",
  AddressLine2: "",
  City: "",
  State: "",
  Country: "",
  Zip: "",
  AddressType: "",
};

const GooglePlacesAutoCompleteWithEditArgs = {
  apiKey: "AIzaSyDJxGtUg3q4Gh52-JO1HBr2xsM2X8MtOYE",
  manualAddressFormModel: manualAddressFormModel,
  manualAddressSchema: manualAddressSchema,
  isCountryShort: false,
  isStateShort: false,
  setAddress: (model, key) => {
    console.log([model, key]);
  },
  isSaveBtn: true,
  onSaveAddress: (data) => {
    console.log(data);
  },
  excludedFields: [], //add this to prevent from adding showing in full address
};

it("should render given schema correctly", () => {
  const testRenderer = renderer.create(<GooglePlacesAutoCompleteWithEdit {...GooglePlacesAutoCompleteWithEditArgs} />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
  testRenderer.unmount();
});
