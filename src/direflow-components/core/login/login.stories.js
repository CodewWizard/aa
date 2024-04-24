import React from "react";
import LoginForm from "./LoginForm";

export default {
    title: "Design System/Core/LoginForm",
    component: LoginForm,
    argTypes: {
      headingImgPath: {
        description:
          "Path of the image needs to be displayed in left heading.",
        table: {
          category: "Input",
        },
      },
      isHeadingLogo: {
        description:
          "Boolean value to render logo in heading conditionaly",
        table: {
          category: "Input",
        },
      },
      description: {
        description:
          "browser specific alert text in login card.",
        table: {
          category: "Input",
        },
      },
      headingOne: {
        description:
          "Left side bar heading text one.",
        table: {
          category: "Input",
        },
      },
      headingTwo: {
        description:
        "Left side bar heading text two.",
        table: {
          category: "Input",
        },
      }
    },
};

const Template = (args) => <LoginForm {...args} />;
export const imageHeading = Template.bind({});
imageHeading.args = {
  headingImgPath: "images/logo.png",
  isHeadingLogo: true,
  description: "Optimized for Chrome and Edge; may not work on other browsers.",
  onFormSubmit: (value) => { 
    value.preventDefault();
    console.log('value', value) 
  },
};

export const textHeading = Template.bind({});
textHeading.args = {
  isHeadingLogo: false,
  headingOne: 'Heading One',
  headingTwo: 'Heading Two',
  description: "Optimized for Chrome and Edge; may not work on other browsers.",
  onFormSubmit: (value) => { 
    value.preventDefault();
    console.log('value', value) 
  },
};