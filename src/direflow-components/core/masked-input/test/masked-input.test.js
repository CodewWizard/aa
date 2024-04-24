import React from "react";
import renderer from "react-test-renderer";
import MaskedInput from "../masked-input";

describe("MaskedInput", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<MaskedInput options={{ phone: true, phoneRegionCode: "US" }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
