import React from "react";
import renderer from "react-test-renderer";
import TransactionHistory from "../transaction-history";

import { render, screen, cleanup, fireEvent } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

const tableRows = [
  {
    transactionType: "Manual Upload",
    documentType: "Data Submission",
    transactionDate: "June 15th, 2023 05:13:18 AM",
    effectiveDate: "June 15th, 2023 05:13:18 AM",
    Uri: "https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
  },
  {
    transactionType: "Application",
    documentType: "Submission Data Document",
    transactionDate: "June 15th, 2023 04:20:53 AM",
    effectiveDate: "June 15th, 2023 04:20:53 AM",
    Uri: "https://www.google.com",
  },
];

const tableCols = [
  {
    dataField: "transactionType",
    text: "Transaction Type",
    sort: false,
  },
  {
    dataField: "documentType",
    text: "Document Type",
    sort: false,
  },
  {
    dataField: "transactionDate",
    text: "Transaction Date",
    sort: false,
    hidden: false,
  },
  {
    dataField: "effectiveDate",
    text: "Effective Date",
    sort: false,
    hidden: false,
  },
];

const CommonArgs = {
  title: "Transaction History",
  tableCols,
  tableRows,
  parentClass: "",
  titleClass: "",
  tableClass: "",
};

it("should render given schema correctly", () => {
  const testRenderer = renderer.create(<TransactionHistory {...CommonArgs} />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
  testRenderer.unmount();
});
