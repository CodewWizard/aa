import React from 'react';
import AdjustPremium from './adjustPremium';

const adjustPremiumSchema = [
  {
    key: "assurantAdjustPremiumCard",
    type: "Card",
    title: "ADJUST PREMIUM ASSURANT",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "mb-4 pb-4",
    // "conditionalDisplay": [{
    //   "src": "0.Risks.Vehicles",
    //   "exp": "any",
    //   "needRefComp": false,
    //   "target": "x=> x.Carrier=='ASSURANT'",
    //   "connector": "&&"
    // }],
    controls: [
      {
        key: "enterAssurantValue",
        label: "Assurant Amount",
        prefix: "$",
        props: { class: "inputText" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-6 align-self-start",
        isColummnDisplay: false,
        errorMessage: "Please enter a valid amount",
        dataPath: "0.PolicyCoverages.Coverages.5.Limit"
      },
      {
        key: "enterAssurantReason",
        label: "Assurant Reason",
        type: "textarea",
        props: { class: "inputText", placeholder: 'Please enter Assurant Adjust Premium Reason', maxlength: "200" },
        labelClass: "inputLabel",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        errorMessage: "Please enter Assurant Adjust Premium Reason",
        dataPath: "0.PolicyCoverages.Coverages.5.ExpenseType"
      }
    ]
  },
  {
    key: "gaicAdjustPremiumCard",
    type: "Card",
    title: "ADJUST PREMIUM GAIC",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "border-0 noBorder",
    // "conditionalDisplay": [{
    //   "src": "1.Risks.Vehicles",
    //   "exp": "any",
    //   "needRefComp": false,
    //   "target": "x=> x.Carrier!='ASSURANT'",
    //   "connector": "&&"
    // }],
    controls: [
      {
        key: "enterGAICValue",
        label: "GAIC Amount",
        prefix: "$",
        props: { class: "inputText" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-6 align-self-start",
        isColummnDisplay: false,
        errorMessage: "Please enter a valid amount",
        dataPath: "1.PolicyCoverages.Coverages.5.Limit"
      },
      {
        key: "enterGAICReason",
        label: "GAIC Reason",
        type: "textarea",
        props: { class: "inputText", placeholder: 'Please enter GAIC Adjust Premium Reason', maxlength: "200" },
        labelClass: "inputLabel",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        errorMessage: "Please enter GAIC Adjust Premium Reason",
        dataPath: "1.PolicyCoverages.Coverages.5.ExpenseType"
      }
    ]
  }
];

const adjustPremiumDataModel = {
  "AssurantAmount": "0",
  "AssurantReason": "",
  "GAICAmount": "0",
  "GAICReason": ""
}


const AdjustPremiumArgs = {
  showAdjustPremiumModal: true,
  adjustPremiumData: adjustPremiumDataModel,
  adjustPremiumSchema: adjustPremiumSchema,
  setShowAdjustPremiumModal: () => { },
  handleAdjustPremium: () => { },
  onAdjustPremium: () => { },
  onSchemaChange: () => { },
}

export default {
  title: 'Design System/Business/Modals/AdjustPremium',
  component: AdjustPremium,
  argTypes: {

    showAdjustPremiumModal: {
      control: "boolean",
      description: "sets condition to show and hide modal.",
      table: {
        category: 'Element'
      }
    },

    setShowAdjustPremiumModal: {
      action: (e) => { console.log(e); },
      description: "Emits this event whenever any of the child elements triggers change event with changed data model & element key",
      table: {
        category: 'Events'
      },
    },

    onAdjustPremium: {
      action: (e) => { console.log(e); },
      description: "Emits the events as soon as forms get submitted with updated data model.",
      table: {
        category: 'Events'
      },
    },
    handleAdjustPremium: {
      action: (e) => { console.log(e); },
      description: "Emits the events as soon as forms get failed with updated data model.",
      table: {
        category: 'Events'
      },
    },
  }
};

const Template = (args) =>
  <AdjustPremium {...args} />
  ;



export const adjustPremiumModal = Template.bind({});
adjustPremiumModal.args = AdjustPremiumArgs;
