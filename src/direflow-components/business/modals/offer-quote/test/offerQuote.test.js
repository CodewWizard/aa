import React from "react";
import renderer from "react-test-renderer";
import ModalPopup from "../../../../core/modal/modal";
import OfferQuote from "../offerQuote";

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

describe("OfferQuote", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<OfferQuote  />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the Approve Formal Quote button", () => {
    const component = renderer.create(<OfferQuote />);
    const button = component.root.findByProps({ id: "btnAdjustPremium" });
    expect(button.children).toContain("Approve Formal Quote");
  });

  it("renders the ModalPopup with correct props", () => {
    const component = renderer.create(<OfferQuote />);
    const modal = component.root.findByType(ModalPopup);
    expect(modal.props.type).toBe("form");
    expect(modal.props.size).toBe("lg");
    expect(modal.props.submitLabel).toBe("Send Quote");
    expect(modal.props.closeLabel).toBe("Cancel");
    expect(modal.props.showModal).toBeFalsy();
    expect(modal.props.setShowModal).toBeInstanceOf(Function);
    expect(modal.props.onClose).toBeInstanceOf(Function);
    expect(modal.props.onFormSubmit).toBeInstanceOf(Function);
    expect(modal.props.onSchemaChange).toBeInstanceOf(Function);
  });

  it("calls onFormSubmit prop with correct model when form is submitted", () => {
    const onFormSubmit = jest.fn();
    const component = renderer.create(
      <OfferQuote onFormSubmit={onFormSubmit} />
    );
    const modal = component.root.findByType(ModalPopup);
    modal.props.onFormSubmit({ someField: "someValue" });
    expect(onFormSubmit).toHaveBeenCalledWith({ someField: "someValue" });
  });

  it("calls onSchemaChange prop with correct schema and key when schema is changed", () => {
    const onSchemaChange = jest.fn();
    const component = renderer.create(
      <OfferQuote onSchemaChange={onSchemaChange} />
    );
    const modal = component.root.findByType(ModalPopup);
    modal.props.onSchemaChange({ someField: "someValue" }, "offerQuoteSchema");
    expect(onSchemaChange).toHaveBeenCalledWith(
      { someField: "someValue" },
      "offerQuoteSchema"
    );
  });
});
