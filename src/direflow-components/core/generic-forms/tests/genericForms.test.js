import React from "react";
import GenericForms from "../genericForms";
import renderer from "react-test-renderer";
import TestRenderer from "react-test-renderer";

var maxDate = new Date();

let maxDateFormat =
  maxDate.getFullYear().toString().padStart(2, "0") +
  "-" +
  (maxDate.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  maxDate.getDate().toString().padStart(2, 0);

const GenericFormsData = {
  Employer: "",
  Date: "",
  TypesOfUnitsOperated: "",
  CommoditiesHauled: "",
  RadiusDriven: "",
};

const GenericFormsModel = (index) => {
  return [
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
          props: {
            class: "inputText",
            placeholder: "Please enter Employer",
            maxlength: "50",
            minlength: "2",
          },
          errorMessage: "Please enter valid Employer",
          inputClass: "mb-3 flex-nowrap",
          positionClass: "col-md-6",
          isColummnDisplay: false,
          dataPath: "Employer",
        },
        {
          key: "employmentDate",
          label: "Date of Employment",
          type: "date",
          props: {
            className: "inputText",
            max: maxDateFormat,
          },
          errorMessage: "Must be in MM/DD/YYY format",
          labelClass: "col-md-2",
          inputClass: "col-md-2",
          positionClass: "col-xxl-3 col-md-6 mb-4",
          isColummnDisplay: false,
          dataPath: "Date",
        },
        {
          key: "typesOfUnitsOperated",
          label: "Typed of Units Operated",
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
          dataPath: "TypesOfUnitsOperated",
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
          dataPath: "CommoditiesHauled",
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
          dataPath: "RadiusDriven",
        },
      ],
    },
  ];
};

const LossPayeeData = {
  LossPayeeName: "",
  Address: "",
  Loan: "",
};

const LossPayeeModel = (index) => {
  return [
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
};

const CommonArgs = {
  formKey: "genericForms",
  formId: "setGenericForms",
  value: [],
  infoModel: GenericFormsModel,
  schemaData: GenericFormsData,
  addLabel: "Add",
  removeLabel: "Remove",
  infoSchema: [
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
          props: {
            class: "inputText",
            placeholder: "Please enter Employer",
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
            className: "inputText",
            max: "2023-03-13",
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
  ],
  showModal: false,
  onChange: (model, key) => {},
};

const LossPayeeArgs = {
  formKey: "lossPayee",
  formId: "setLossPayee",
  value: [],
  infoModel: LossPayeeModel,
  schemaData: LossPayeeData,
  addLabel: "Add",
};

it("renders without crashing & matches snapshot as expected", () => {
  const testRenderer = TestRenderer.create(<GenericForms {...CommonArgs} />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
  testRenderer.unmount();
});


