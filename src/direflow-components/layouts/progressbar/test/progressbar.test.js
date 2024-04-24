import React from "react";
import { create } from "react-test-renderer";
import ProgressBar from "../progressbar";

describe("ProgressBar component", () => {
  const schema = {
    key: "example",
    milestones: [
      {
        Label: "Step 1",
        Href: "#step-1",
        Disabled: false,
      },
      {
        Label: "Step 2",
        Href: "#step-2",
        Disabled: false,
      },
      {
        Label: "Step 3",
        Href: "#step-3",
        Disabled: true,
      },
    ],
    submitForm: "example-form",
  };
  const onHandleProgressClick = jest.fn();
  const currentPageCheck = jest.fn();
  const props = {
    schema,
    onHandleProgressClick,
    currentPageCheck,
    needContinueBtn: true,
  };

  it("should render ProgressBar component with props", () => {
    const component = create(<ProgressBar {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should update schema state when props are updated", () => {
    const component = create(<ProgressBar {...props} />);
    const newSchema = {
      key: "example-updated",
      milestones: [
        {
          Label: "Step 1",
          Href: "#step-1",
          Disabled: false,
        },
      ],
      submitForm: "example-form-updated",
    };
    component.update(<ProgressBar {...props} schema={newSchema} />);
    expect(component.root.findByType("h1").children).toEqual([
      "example-updated",
    ]);
  });

  it("should render a continue button if needContinueBtn prop is true", () => {
    const component = create(<ProgressBar {...props} />);
    expect(component.root.findByType("button").props.children).toEqual(
      "CONTINUE"
    );
  });
});
