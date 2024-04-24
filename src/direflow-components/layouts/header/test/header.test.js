import React from "react";
import renderer from "react-test-renderer";
import Header from "../header";

describe("Header", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Header
          user={{
            decodedJWT: {
              FirstName: "John",
              LastName: "Doe",
              role: "Coverholder",
            },
          }}
          userLogout={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
