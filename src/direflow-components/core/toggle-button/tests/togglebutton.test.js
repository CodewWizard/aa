import React from "react";
import renderer from "react-test-renderer";
import ToggleButtonComponent from "../togglebutton";

describe("ToggleButtonComponent", () => {
  const options = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const props = {
    id: "toggle-btn",
    value: "yes",
    options: options,
    onChange: jest.fn(),
    disabled: false,
    required: true,
  };

  let component;
  beforeEach(() => {
    component = renderer.create(<ToggleButtonComponent {...props} />);
  });

  it("renders correctly", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
