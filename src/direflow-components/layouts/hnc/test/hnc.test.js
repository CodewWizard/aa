import React from "react";
import { create } from "react-test-renderer";
import HeaderNavigationContent from "../hnc";

describe("HeaderNavigationContent", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      store: {
        getState: jest.fn().mockReturnValue({
          loggedInUserReducer: {
            encodedJWT: "abc123",
            decodedJWT: {
              FirstName: "John",
              LastName: "Doe",
              role: "Admin",
            },
          },
          applicationReducer: {},
        }),
      },
      sharedSetNavigation: jest.fn(),
      onMenuSelected: jest.fn(),
      Menus: [],
      userLogout: jest.fn(),
      checkValidUser: jest.fn(),
    };
    wrapper = create(<HeaderNavigationContent {...props} />);
  });

  afterEach(() => {
    props = null;
    wrapper = null;
  });

  it("renders correctly", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
