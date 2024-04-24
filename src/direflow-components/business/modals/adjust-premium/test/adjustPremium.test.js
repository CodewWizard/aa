import React from 'react';
import renderer from 'react-test-renderer';
import AdjustPremium from '../adjustPremium'


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

const commonArgs = {
  showAdjustPremiumModal: true,
  setShowAdjustPremiumModal: () => { },
  handleAdjustPremium: () => { },
  onAdjustPremium: () => { },
  onSchemaChange: () => { },
  adjustPremiumData: adjustPremiumDataModel,
  adjustPremiumSchema: adjustPremiumSchema
}

describe('AdjustPremium', () => {
  test('renders correctly', () => {
    const component = renderer.create(
      <AdjustPremium
        showAdjustPremiumModal={false}
        setShowAdjustPremiumModal={() => {}}
        adjustPremiumData={{}}
        adjustPremiumSchema={{}}
        handleAdjustPremium={() => {}}
        onAdjustPremium={() => {}}
        onSchemaChange={() => {}}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
