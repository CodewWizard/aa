import React from "react";
import renderer from "react-test-renderer";
import PageHead from "../head";

describe("PageHead", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <PageHead
          title="Test Title"
          description="Test Description"
          favicon="favicon.ico"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
