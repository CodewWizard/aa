import React from "react";
import GenericForms from "./genericForms";

var maxDate = new Date();

let maxDateFormat =
  maxDate.getFullYear().toString().padStart(2, "0") +
  "-" +
  (maxDate.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  maxDate.getDate().toString().padStart(2, 0);

const GenericFormsModel = {
  Employer: "",
  Date: "",
  TypesOfUnitsOperated: "",
  CommoditiesHauled: "",
  RadiusDriven: "",
};

const GenericFormsSchema = [
  {
    key: "genericFormsCard",
    type: "Card",
    title: "Prior Driving History",
    className: " mt-4",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "",
    controls: [
      {
        key: "employer",
        label: "Employer",
        type: "email",
        props: {
          class: "inputText",
          placeholder: "Pleaseter Employer",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter valid Employer",
        inputClass: "mb-3 flex-nowrap",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        dataPath: "0.Employer",
      },
      {
        key: "employmentDate",
        label: "Date of Employment",
        type: "date",
        props: {
          className: "inputText react-datetime-picker__wrapper react-datetime-picker__inputGroup react-datetime-picker__calendar-button__icon react-datetime-picker__calendar-button",
          clearIcon: false,
          dayPlaceholder: "dd",
          // format: "y",
          monthPlaceholder: "mm",
          yearPlaceholder: "yyyy",
          defaultView: "decade",
          tileClassName: "basic ",
          max: maxDateFormat,
        },
        errorMessage: "Must be in MM/DD/YYY format",
        labelClass: "col-md-2",
        inputClass: "col-md-2",
        positionClass: "col-xxl-3 col-md-6 mb-4",
        isColummnDisplay: false,
        dataPath: "0.Date",
      },
      {
        key: "typesOfUnitsOperated",
        label: "Typed of Units Operated",
        type: "email",
        props: {
          class: "inputText",
          placeholder: "Please enter types of Units Operated",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter valid Units Operated",
        inputClass: "mb-3 flex-nowrap",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        dataPath: "0.TypesOfUnitsOperated",
      },
      {
        key: "commoditiesHauled",
        label: "Commodities Hauled",
        props: {
          class: "inputText",
          placeholder: "Please enter Commodities Hauled",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter valid Commodities Hauled",
        inputClass: "mb-3 flex-nowrap",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        dataPath: "0.CommoditiesHauled",
      },
      {
        key: "radiusDriven",
        label: "Radius Driven",
        props: {
          class: "inputText",
          placeholder: "Please enter Radius Driven",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter valid Radius Driven",
        inputClass: "mb-3 flex-nowrap",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        dataPath: "0.RadiusDriven",
      },
      {
        key: "0.remove",
        name: "0.remove",
        type: "button",
        value: "Remove",
      },
    ],
  },
];

const LossPayeeData = {
  LossPayeeName: "",
  Address: "",
  Loan: "",
};

const LossPayeeModel = [
  {
    key: "lossPayeeCard",
    type: "Card",
    title: "Loss Payee",
    className: " mt-4",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "",
    controls: [
      {
        key: "lossPayeeName",
        label: "Loss Payee Name",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Please enter Loss Payee Name",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter valid Loss Payee Name",
        inputClass: "mb-3 flex-nowrap",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        dataPath: "LossPayeeName",
      },
      {
        key: "address",
        label: "Address",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Please enter Address",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter valid Address",
        inputClass: "mb-3 flex-nowrap",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        dataPath: "Address",
      },
      {
        key: "loan",
        label: "Loan",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Please enter Loan Number",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter valid Loan Number",
        inputClass: "mb-3 flex-nowrap",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        dataPath: "Loan",
      },
    ],
  },
];

const CommonArgs = {
  formKey: "genericForms",
  formId: "setGenericForms",
  value: [],
  infoSchema: GenericFormsSchema,
  infoDataModel: GenericFormsModel,
  addLabel: "Add",
  removeLabel: "Remove",
};

const LossPayeeArgs = {
  formKey: "lossPayee",
  formId: "setLossPayee",
  value: [],
  infoSchema: LossPayeeModel,
  infoDataModel: LossPayeeData,
  addLabel: "Add",
  removeLabel: "Remove",
};

export default {
  title: "Design System/Core/GenericForms",
  component: GenericForms,
  argTypes: {
    formKey: {
      description: "Holds key value for html form.",
    },
    formId: {
      description: "Holds id value for html form.",
    },
    value: {
      description: "An array of objects which holds data.",
    },
    infoModel: {
      description:
        "UI schema which gets passes as the JSON of the child elements with thier attributes to render on screen.",
    },
    schemaData: {
      description:
        "Holds the input captured from user and gets emits as part of onChange & onSumit events.",
    },
    addLabel: {
      description: "UI schema which Provide Add label to the button in modal.",
    },
    onSubmit: {
      action: (model) => {
        console.log(model);
      },
    },
    onChange: {
      action: (model) => {
        console.log(model);
      },
    },
    onclick: {
      action: (model) => {
        console.log(model);
      },
    },
  },
};

const Template = (args) => <GenericForms {...args} />;

export const Basic = Template.bind({});
Basic.args = CommonArgs;

export const LossPayee = Template.bind({});
LossPayee.args = LossPayeeArgs;
