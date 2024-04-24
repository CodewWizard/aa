import React from 'react';
import UnderwriterAlerts from './underwriterAlerts';

const UnderwriterAlertsArgs = {
  uwAlerts: true,
  setUWAlerts: () => { },
  summary: {
    Rules: {
      MatchingRules: [
        {
          Description: "Description1",
          Reason: "Reason1"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
        {
          Description: "Description2",
          Reason: "Reason2"
        },
      ]
    }
  },
  handleViewAlerts: () => { },
  header: "Underwriter Alerts", 
  successLabel: "Close",
  isSplitDisplay: true,
  ruleList1: [
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
  ],
  ruleList2: [
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
    {
      Description: "Description2",
      Reason: "Reason2"
    },
  ],
  header1: "Application",
  header2: "Endorsement",
  dialogClassName: "modal-90w"
};

export default {
  title: 'Design System/Business/Modals/UnderwriterAlerts',
  component: UnderwriterAlerts,
  argTypes: {
    summary: {
      control: "object",
      description: "sets the summary value",
      table: {
        category: 'Element'
      }
    },
    uwAlerts: {
      control: "boolean",
      description: "sets condition to show and hide modal.",
      table: {
        category: 'Element'
      }
    },
    setUWAlerts: {
      action: (e) => { console.log(e); },
      description: "Emits this event whenever any of the child elements triggers change event with changed data model & element key",
      table: {
        category: 'Events'
      },
    },
    handleViewAlerts: {
      action: (e) => { console.log(e); },
      description: "Emits the events as soon as forms get failed with updated data model.",
      table: {
        category: 'Events'
      },
    },
  }
};

const Template = (args) =>
  <UnderwriterAlerts {...args} />
  ;

export const underwriterAlertsModal = Template.bind({});
underwriterAlertsModal.args = UnderwriterAlertsArgs;
