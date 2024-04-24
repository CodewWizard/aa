import React from "react";
import renderer from "react-test-renderer";
import HeaderNavigationContentSidebar from "../hncs";

describe("HeaderNavigationContentSidebar", () => {
  const mockProps = {
    currentStage: "stage1",
    ProgressMilestones: {
      stage1: {
        milestones: [
          { title: "Step 1", isActive: true },
          { title: "Step 2", isActive: false },
          { title: "Step 3", isActive: false },
        ],
      },
      stage2: {
        milestones: [
          { title: "Step 1", isActive: false },
          { title: "Step 2", isActive: true },
          { title: "Step 3", isActive: false },
        ],
      },
    },
    store: {
      getState: () => ({
        loggedInUserReducer: { encodedJWT: "123" },
        applicationReducer: { MilestoneIndex: 0 },
      }),
    },
    sharedSetNavigation: jest.fn(),
    onMenuSelected: jest.fn(),
    Menus: [],
    userLogout: jest.fn(),
    checkValidUser: jest.fn(),
    currentPageCheck: jest.fn(),
    onHandleProgressClick: jest.fn(),
    needContinueBtn: true,
    disableIndex: 1,
    needSaveForLater: true,
    needBack: true,
    needCancel: true,
    needNext: true,
    onSuccessSaveForLater: jest.fn(),
    onFailureSaveForLater: jest.fn(),
    onCloseSaveForLater: jest.fn(),
    onSuccessCancelApplication: jest.fn(),
    onCloseCancelApplication: jest.fn(),
    onBack: jest.fn(),
    onNext: jest.fn(),
  };

  it("renders nothing when user is not logged in", () => {
    const component = renderer.create(
      <HeaderNavigationContentSidebar
        {...mockProps}
        store={{ getState: () => ({}) }}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
