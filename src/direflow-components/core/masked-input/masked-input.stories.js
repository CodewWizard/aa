import React from "react";
import MaskedInput from "./masked-input";

export default {
    title: "Design System/Core/MaskedInput",
    component: MaskedInput,
    argTypes: {
      configOptions: {
        description:
          "An object of options based on which specific type of masking will be applied.",
        table: {
          category: "Input",
        },
      },
      inputProps: {
        description:
          "An object Holds the data which gets passes to modify input details.",
        table: {
          category: "Input",
        },
      }
    },
    parameters: {
      docs: {
        description: {
          component: "Currency input is a dedicated input control for currency fields. "
        },
      },
    },
};

const Template = (args) => <MaskedInput {...args} />;

export const Currency = Template.bind({});
Currency.args = {
  options: { numeral: true, numeralThousandsGroupStyle: 'thousand' },
  placeholder: "$0.00",
  className: "inputText input-numeral",
  maxLength: "10",
  onChange: (value) => { console.log('currencyMask', value) },
};

export const PhoneNumber = Template.bind({});
PhoneNumber.args = {
  options: { phone: true, phoneRegionCode: 'US', delimiter: '-', },
  placeholder: "Please enter PhoneNumber",
  className: "inputText",
  onChange: (value) => { console.log('PhoneNumberMask', value) },
};

export const CreditCard = Template.bind({});
CreditCard.args = {
  options: { creditCard: true },
  placeholder: "Please enter CreditCard",
  className: "inputText",
  onChange: (value) => { console.log('CreditCardMask', value) },
};

export const Date = Template.bind({});
Date.args = {
  options: { date: true, datePattern: ['Y', 'm', 'd'] },
  placeholder: "Please enter Date",
  className: "inputText",
  onChange: (value) => { console.log('DateMask', value) },
};

export const Custom = Template.bind({});
Custom.args = {
  options: { blocks: [4, 3, 3], delimiter: '-', numericOnly: true },
  placeholder: "Please enter custom block",
  className: "inputText",
  maxLength: "12",
  onChange: (value) => { console.log('CustomMask', value) },
};