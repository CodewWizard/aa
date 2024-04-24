import React from "react";
import OfferQuote from "./offerQuote";

const offerQuoteSchema = [
  {
    key: "offerQuoteCard",
    type: "Card",
    title: "Formal Quote",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "mb-4 pb-4",
    controls: [
      {
        key: "enterAssurantValue",
        value: "Email",
        type: "label",
        props: { class: "" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-12 align-self-start",
        isColummnDisplay: false,
        dataPath: "",
      },
      {
        key: "enterAssurantValue",
        props: { class: "inputText" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-12 align-self-start mt-2",
        isColummnDisplay: false,
        dataPath: "",
      },
      {
        key: "enterAssurantValue",
        value: "Subjectivity",
        type: "label",
        props: { class: "" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-12 align-self-start mt-4",
        isColummnDisplay: false,
        dataPath: "",
      },
      {
        key: "enterOnHoldRemark",
        label: "",
        type: "textarea",
        props: { required: true, class: "inputText", rows: "4", cols: "50", placeholder: "Add subjectivity text here.", maxlength: "200" },
        labelClass: "inputLabel",
        positionClass: "col-md-12 mt-2",
        isColummnDisplay: false,
        errorMessage: "Please enter valid Remark",
        dataPath: "Transaction.Remarks"
      }
    ],
  },
  {
    key: "bindingDocumentsCard",
    type: "Card",
    title: "Select Forms",
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
  }
];

const offerQuoteModel = {
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
 
const OfferQuoteArgs = {
  showOfferQuoteModal: true,
  offerQuoteData: offerQuoteModel,
  offerQuoteSchema: offerQuoteSchema,
  toggleCheckbox: () => {},
  onFormSubmit: () => {},
  onSchemaChange: (model, key) => {
    onChange(model, key);
  },
};

export default {
  title: "Design System/Business/Modals/OfferQuote",
  component: OfferQuote,
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

const Template = (args) => <OfferQuote {...args} />;

export const offerQuoteModal = Template.bind({});
offerQuoteModal.args = OfferQuoteArgs;
