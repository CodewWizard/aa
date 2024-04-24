import React from 'react';
import Dropdown from './dropdown';


let value = [];
let isMulti = false;

// const onChange = (selectedValues) => {
//   selectedValues.forEach(element => {
//     if (!value.includes(element)) {
//       value.push(element);
//     }
//   });
// }


const CommonArgs = {
  value: value,
  // onChange: onChange,
  options: [
      { value: 1, label: "One" },
      { value: 2, label: "Two" },
      { value: 3, label: "Three" }
  ],
  isMulti: isMulti,
  primaryColor: "",
  themeColors: {primary: "red"},
};

// const CommonArgs = {
//   value: value,
//   // onChange: onChange,
  // "options": [
  //   {
  //     "label": "US",
  //     "options": [
  //       {
  //         "key": "manualAddressState1",
  //         "label": "AL",
  //         "value": "AL"
  //       },
  //       {
  //         "key": "manualAddressState2",
  //         "label": "AK",
  //         "value": "AK"
  //       },        
  //     ]
  //   },
//   isMulti: isMulti,
//   primaryColor: "",
//   themeColors: {primary: "red"},
// };

export default {
    title: 'Design System/Core/Dropdown',
    component: Dropdown,
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
            component: 'Dropdown component will generate the html Dropdown html element to captures user input and emits as an event with updated.',
          },
        },
    },
    required: {
      control: "boolean",
      description: "to make it required field",
      table: {
        category: 'Element'
      }
    },
    isMulti: {
      control: "boolean",
      description: "to enable Multiple Dropdown",
      table: {
        category: 'Element'
      }
    },
    disabled: {
      control: "boolean",
      description: "diable or enable the dropdown",
      table: {
        category: 'Element'
      }
    },
};

const Template = (args) => <Dropdown {...args} />;

export const select = Template.bind({});
select.args = CommonArgs;
