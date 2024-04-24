import React from 'react';
import RadioButton from "./buttonlist";

const onChange = (selectedValues) => {
  console.log(selectedValues);
}

let label="Claims Details"

const CommonArgs = {
  id: "1",
  key: "key",
  type: "buttonlist",
  onChange: onChange,
  label: label,

  labelClass: "",
  parentClass: "",
  inpParentClass: "btn-group",
  inpLabelClass: "btn-check",
  inpInputClass:"btn btn-outline-primary",
    
  options: [
    {
      "id":"1",
      "key": "0",
      "label": "0",
      "value": "0"
    },
    {
      "id":"2",
      "key": "1",
      "label": "1",
      "value": "1"
    },
    {
      "id":"3",
      "key": "2",
      "label": "2",
      "value": "2"
    },
    {
      "id":"4",
      "key": "3",
      "label": "3",
      "value": "3"
    }, 
    {
      "id":"5",
      "key": "4",
      "label": "4",
      "value": "4"
    }, 
    {
      "id":"6",
      "key": "5",
      "label": "5 or more",
      "value": "5"
    },

  ]
};


export default {
  title: 'Design System/Core/Buttonlist',
  component: RadioButton,
  argTypes: {
    value: {
      description: "An array of objects which holds selected value.",
      table: {
        category: 'Element'
      }
    },
    options: {
      description: "An array of objects which gets passes to render list of options on screen.",
      table: {
        category: 'Element'
      }
    },
    id: {
      description: " Describe Perticular id given",
      table: {
        category: 'Element'
      },
    },
    key: {
      description: "Describe Perticular Key given",
      table: {
        category: 'Element'
      },
    },
    type: {
      description: "Describe Perticular type given",
      table: {
        category: 'Element'
      },
    },
    onChange: {
      action: value => console.log(value),
      description: "Emits this event whenever any of the child elements triggers change event with changed data model & element key",
      table: {
        category: 'Events'
      },
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'AutoComplete component will generate the html Dropdown html element to captures user input and emits as an event with updated.',
      },
    },
  }
};

const Template = (args) => <RadioButton {...args} />;

export const RadioButtonComp = Template.bind({});
RadioButtonComp.args = CommonArgs;
