import React from "react";
import renderer from "react-test-renderer";
import LoginForm from "../LoginForm";

describe("Login", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<LoginForm {... {
        logoImgPath: "images/logo.png",
        isHeadingLogo: false,
        headingOne: 'Heading One',
        headingTwo: 'Heading Two',
        description: "Optimized for Chrome and Edge; may not work on other browsers.",
        onFormSubmit: (value) => { 
          value.preventDefault();
          console.log('value', value) 
        },
      }}
         />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
