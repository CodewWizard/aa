import React from "react";
import renderer from "react-test-renderer";
import NoLayout from "../nolayout";

describe("NoLayout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <NoLayout>
          <div>Test Content</div>
        </NoLayout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
