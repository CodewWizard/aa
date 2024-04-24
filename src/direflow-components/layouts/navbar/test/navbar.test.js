import React from "react";
import renderer from "react-test-renderer";
import Navigation from "../navbar";

describe("Navigation", () => {
  const menus = [
    {
      Key: "dashboard",
      Href: "/dashboard",
      Label: "Dashboard",
      Src: "/path/to/dashboard.svg",
      Childs: [],
    },
    {
      Key: "reports",
      Href: "/reports",
      Label: "Reports",
      Src: "/path/to/reports.svg",
      Childs: [
        {
          Key: "sales-report",
          Href: "/reports/sales",
          Label: "Sales Report",
        },
        {
          Key: "expenses-report",
          Href: "/reports/expenses",
          Label: "Expenses Report",
        },
      ],
    },
  ];

  const props = {
    application: { NavigationIndex: 0 },
    Menus: menus,
    onMenuSelected: jest.fn(),
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Navigation {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
