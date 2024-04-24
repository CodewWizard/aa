import React from 'react';
import OnReview from './onReview';

const onSubmissionDeclineSchema = [
  {
    key: "declinedRemark",
    type: "Card",
    title: "Submission Declined",
    className: " mt-2",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "",
    controls: [
      {
        key: "declinedPolicyRemark",
        label: "",
        type: "textarea",
        props: { required: true, class: "inputText", rows: "4", cols: "50", placeholder: "Enter Reason for declining submission here (Max 200 characters)", maxlength: "200" },
        labelClass: "inputLabel",
        positionClass: "col-md-12",
        isColummnDisplay: false,
        errorMessage: "Please enter valid Remark",
        dataPath: ""
      }
    ]
  },
];

const onUnderReviewModel = {

};

const onUnderReviewSchema = [
  {
    key: "onholdremark",
    type: "Card",
    title: "Policy Under Review",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "",
    controls: [
      {
        key: "underReviewRemark",
        label: "",
        type: "textarea",
        props: { required: true, class: "inputText", rows: "4", cols: "50", placeholder: "Enter reason for putting policy under review here (Max 200 characters)", maxlength: "200" },
        labelClass: "inputLabel",
        positionClass: "col-md-12",
        isColummnDisplay: false,
        errorMessage: "Please enter valid Remark",
        dataPath: ""
      }
    ]
  },
];

const OnReviewArgs = {
  showModal: true,
  modalType: "submissionClose",
  onReviewData: onUnderReviewModel,
  onReviewSchema: onSubmissionDeclineSchema,
  onFormSubmit: () => {},
  onSchemaChange: () => {},
  onButtonClick: () => {}
};

export default {
  title: 'Design System/Business/Modals/OnReview',
  component: OnReview,
  argTypes: {
    onReviewSchema: {
      control: "array",
      description: "onReviewSchema Schema",
      table: {
        category: 'Element'
      }
    },
    onReviewData: {
      control: "object",
      description: "onReviewData Model",
      table: {
        category: 'Element'
      }
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

    onButtonClick: {
      action: (e) => {
        console.log(e);
      },
      description:
        "Emits this event whenever button is clicked",
      table: {
        category: "Events",
      },
    },
  }
};

const Template = (args) =>
  <OnReview {...args} />
  ;

export const onReviewModal = Template.bind({});
onReviewModal.args = OnReviewArgs;
