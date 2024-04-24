import React from "react";
import renderer from "react-test-renderer";
import UnderwriterAlerts from "../underwriterAlerts";
import TestRenderer from "react-test-renderer";

const commonArgs = {
  uwAlerts: true,
  setUWAlerts: () => {},
  summary: {
    Rules: {
      MatchingRules: [
        {
          Description: "Description1",
          Reason: "Reason1",
        },
        {
          Description: "Description2",
          Reason: "Reason2",
        },
      ],
    },
  },
  handleViewAlerts: () => {},
};

it("renders without crashing without props", () => {
  const testRenderer = TestRenderer.create(<UnderwriterAlerts />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
  testRenderer.unmount();
});
