import React from 'react';
import LineOfBusiness from './lob';

const onChange = (selectedValues) => {
  console.log(selectedValues);
}

let label="Line of Business";

const CommonArgs = {
  id: "1",
  key: "key",
  type: "lob",
  title:"Select Line Of Business",
  onChange: onChange,
  label: label,
  parentClass:"",
  childClass:"",
  labelClass:"",
  ulClass:"",
  liClass:"",
  options: [
    {
      "id":"1",
      "key": "HO3",
      "label": "Homeowners Special",
      "value": "HO3",
      "src":"images/ho3.svg",
      "liClass":"",
      "style":{
        color: "red"
      }
    },
    {
      "id":"2",
      "key": "DP3",
      "label": "Dwelling Special",
      "value": "DP3",
      "src":"images/dp3.svg",
      "liClass":"",
      "style":{
        color: "red"
      }
    }

  ]
};


export default {
  title: 'Design System/Core/LineOfBusiness',
  component: LineOfBusiness,
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

const Template = (args) => <LineOfBusiness {...args} />;

export const LineOfBusinessComp = Template.bind({});
LineOfBusinessComp.args = CommonArgs;
