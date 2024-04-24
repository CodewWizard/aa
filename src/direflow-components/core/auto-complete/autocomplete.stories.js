import React from 'react';
import AutoComplete from './autocomplete'

let value;
const onChange = (selectedValues) => {
      value=selectedValues
}

const CommonArgs = {
  value: value,
  onChange: onChange,
  options: [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" }
  ],
};

export default {
  title: 'Design System/Core/AutoComplete',
  component: AutoComplete,
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

const Template = (args) => <AutoComplete {...args} />;

export const Basic = Template.bind({});
Basic.args = CommonArgs;

