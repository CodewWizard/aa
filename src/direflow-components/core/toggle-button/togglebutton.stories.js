import React from 'react';
import ToggleButtonComponent from "./togglebutton";

let value;
const onChange = (selectedValues) => {
  value = selectedValues
}

const CommonArgs = {
  id: "1",
  key: "key",
  type: "toggle",
  value: value,
  onChange: onChange,
  options: [
    {
      "key": "yes",
      "label": "Yes",
      "value": "true"
    },
    {
      "key": "no",
      "label": "No",
      "value": "false"
    }
  ]
};


export default {
  title: 'Design System/Core/ToggleButtonComponent',
  component: ToggleButtonComponent,
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

const Template = (args) => <ToggleButtonComponent {...args} />;

export const ToggleButtonComp = Template.bind({});
ToggleButtonComp.args = CommonArgs;
