import React from "react";
import DynamicButtons from "./dynamicButtons";

const onHoldUISchema = [
  {
    key: "onholdremark",
    type: "Card",
    title: "ON HOLD REMARK",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "",
    controls: [
      {
        key: "enterOnHoldRemark",
        label: "",
        type: "textarea",
        props: {
          required: true,
          class: "inputText",
          rows: "4",
          cols: "50",
          placeholder: "Enter Remark",
          maxlength: "200",
        },
        labelClass: "inputLabel",
        positionClass: "col-md-12",
        isColummnDisplay: false,
        errorMessage: "Please enter Remark",
        dataPath: "Transaction.HoldRemarks",
      },
    ],
  },
];

const HoldModalForm = {
  header: "Reinstatement Header",
  schema: onHoldUISchema,
  dataModel: {},
  onSchemaChange: (model, key) => {
    console.log(model);
  },
  onFormSubmit: (dataModel, event) => console.log(dataModel),
};

const schema = [
  {
    key: "exit",
    value: "Download Statement No Loss",
    position: "left",
    // onClick: (e, key) => {
    //   console.log([key]);
    // },
    class: "",
    style: "",
    hide: false,
    disabled: false,
    isModal: true,
    modalSchema: HoldModalForm,
  },
  {
    key: "Hold",
    value: "Hold",
    position: "right", // left, right, center
    onClick: (e, key) => {
      console.log([key]);
    },
    isModal: true, //whether to show modal or not (optional)
    modalSchema: HoldModalForm, // (optional)
    class: "",
    style: {},
    hide: false,
    disabled: false,
    props:{
      //extra attributes to send
    }
  },
  {
    key: "Reject",
    value: "Reject",
    position: "right",
    onClick: (e, key) => {
      console.log([key]);
    },
    class: "",
    style: "",
    hide: false,
    disabled: false,
  },
  {
    key: "Approve",
    value: "Approve",
    position: "right",
    onClick: (e, key) => {
      console.log([key]);
    },
    class: "",
    style: "",
    hide: false,
    disabled: false,
  },
];

const buttonsArgs = {
  buttonSchema: schema,
  globalClick: (e, key) => console.log([key]),
  showhideButtons: {show: [], hide: ["Approve"]},
};

export default {
  title: "Design System/Business/Components/DynamicButtons",
  component: DynamicButtons,
  argTypes: {
    buttonSchema: {
      description:
        "Includes Fields like value, key, class(optional), style(optional), onClick, hide, disabled",
    },
    globalClick: {
        description: "global click function triggered when any button is clicked.",
    },
    hideButtons: {
      description: "dynamically show/hide buttons, takes array of button keys as arguments."
    }
  },
};

const Template = (args) => <DynamicButtons {...args} />;
//export 
const Buttons = Template.bind({});
Buttons.args = buttonsArgs;
