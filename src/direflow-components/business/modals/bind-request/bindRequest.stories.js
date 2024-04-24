import React from "react";
import BindRequest from "./bindRequest";

const bindRequestSchema = [
  {
    key: "bindRequestCard",
    type: "Card",
    title: "Bind Request",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "mb-4 pb-4",
    controls: [
      {
        key: "enterAssurantValue",
        value:
          "Please ensure that the following details are correct and the documents required before binding is received before sending for Approval.",
        type: "label",
        props: { class: "" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-12 align-self-start mb-4",
        isColummnDisplay: false,
        dataPath: "",
      },
      {
        key: "enterAssurantValue",
        label: "Policy Effective Date",
        type: "date",
        props: {
          required: true,
          class: "inputText",
          dayPlaceholder: "dd",
          monthPlaceholder: "mm",
          yearPlaceholder: "yyyy",
          format: "MM-dd-y",
          disableClock: true,
          clearIcon: false,
        },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-6 align-self-start",
        isColummnDisplay: false,
        errorMessage: "Please select valid date",
        dataPath: "Date1",
      },
      {
        key: "enterAssurantValue",
        label: "Policy Expiration Date",
        type: "date",
        props: {
          required: true,
          class: "inputText",
          dayPlaceholder: "dd",
          monthPlaceholder: "mm",
          yearPlaceholder: "yyyy",
          format: "MM-dd-y",
          disableClock: true,
          clearIcon: false,
        },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-6 align-self-start",
        isColummnDisplay: false,
        errorMessage: "Please select valid date",
        dataPath: "Date2",
      },
    ],
  },
  {
    key: "bindingDocumentsCard",
    type: "Card",
    title: "Binding Documents",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "border-0 noBorder",
    controls: [
      {
        key: "newAlpine",
        label: "New Alpine - Commercial Auto Application",
        type: "checkbox",
        props: { required: true, class: "checkmark" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-12 align-self-start",
        isColummnDisplay: false,
        dataPath: "Checkbox1",
        options: [{ key: "a", name: "a", value: true }],
      },
      {
        key: "accord",
        label: "Accord-125-126-General-Liability",
        type: "checkbox",
        props: { required: true, class: "checkmark" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-12 align-self-start",
        isColummnDisplay: false,
        dataPath: "Checkbox2",
        options: [{ key: "b", name: "b", value: true }],
      },
      {
        key: "enterAssurantValue",
        label: "Canopius APD APP 1.0",
        type: "checkbox",
        props: { required: true, class: "checkmark" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-12 align-self-start",
        isColummnDisplay: false,
        dataPath: "Checkbox3",
        options: [{ key: "c", name: "c", value: true }],
      },
      {
        key: "enterAssurantValue",
        label: "Canopius MTC APP 1.0",
        type: "checkbox",
        props: { required: true, class: "checkmark" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-12 align-self-start",
        isColummnDisplay: false,
        dataPath: "Checkbox4",
        options: [{ key: "d", name: "d", value: true }],
      },
    ],
  },
  {
    key: "bindingDocumentsCard",
    type: "Card",
    title: "",
    className: "clearfix mt-5",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "border-0 noBorder",
    controls: [
      {
        key: "toggleYes4",
        label: "upload copy of maintenance or safety program",
        type: "file",
        props: {
          class: "mt-2",
          placeholder: "",
          required: true,
        },
        errorMessage: "Please enter Valid Text",
        labelClass: "col-md-12 mt-2",
        inputClass: "col-md-6 mt-2 d-flex",
        positionClass: "col-md-6",
        isColummnDisplay: true,
        dataPath: "File",
      },
    ],
  },
];

const bindRequestModel = {
  Date1: "",
  Date2: "",
  Checkbox1: "",
  Checkbox2: "",
  Checkbox3: "",
  Checkbox4: "",
  File: "",
};

const onChange = (model, key) => {
  console.log("onChange.....", model, key);
};

const BindRequestArgs = {
  showBindRequestModal: true,
  bindRequestData: bindRequestModel,
  bindRequestSchema: bindRequestSchema,
  toggleCheckbox: () => {},
  onFormSubmit: () => {},
  onSchemaChange: (model, key) => {
    onChange(model, key);
  },
};

export default {
  title: "Design System/Business/Modals/BindRequest",
  component: BindRequest,
  argTypes: {
    showBindRequestModal: {
      control: "boolean",
      description: "sets condition to show and hide modal.",
      table: {
        category: "Element",
      },
    },

    onFormSubmit: {
      action: (e) => {
        console.log(e);
      },
      description:
        "Emits the events as soon as forms get submitted with updated data model.",
      table: {
        category: "Events",
      },
    },

    onSchemaChange: {
      action: (model, key) => {
        console.log(key, model);
      },
      description:
        "Emits this event whenever any of the child elements triggers change event with changed data model & element key",
      table: {
        category: "Events",
      },
    },
  },
};

const Template = (args) => <BindRequest {...args} />;

export const bindRequestModal = Template.bind({});
bindRequestModal.args = BindRequestArgs;
