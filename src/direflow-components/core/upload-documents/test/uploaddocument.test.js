import React from "react";
import renderer from "react-test-renderer";
import UploadDocument from "../uploaddocument";
import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react";

afterEach(()=>{
    cleanup();    
})

const tableRowData = [
  {
    TransactionType: "Manual Upload",
    DocumentType: "Data Submission",
    TransactionDate: "June 15th, 2023 05:13:18 AM",
    EffectiveDate: "June 15th, 2023 05:13:18 AM",
    Uri: "https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
  },
  {
    TransactionType: "Application",
    DocumentType: "Submission Data Document",
    TransactionDate: "June 15th, 2023 04:20:53 AM",
    EffectiveDate: "June 15th, 2023 04:20:53 AM",
    Uri: "https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
  },
];

const UploadDocumentSchema = [
  {
    key: "UploadDocument",
    type: "Card",
    title: "Manual Upload",
    className: "container",
    titleclassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper border-0 px-3 commonShadow",
    controls: [
      {
        key: "PolicyNumber",
        label: "Policy Number",
        type: "text",
        dataPath: "Policy.PolicyNumber",
        props: {
          className: "inputText",
          placeholder: "Policy Number",
          required: true,
          disabled: true,
        },
        positionClass: "col-md-6",
        isColummnDisplay: false,
      },
      {
        key: "DocumentType",
        label: "Document Type",
        type: "text",
        dataPath: "Policy.DocumentType",
        props: {
          className: "inputText",
          placeholder: "Document Type",
          required: true,
        },
        positionClass: "col-md-6",
        isColummnDisplay: false,
      },
      {
        key: "UploadFile",
        label: "Upload File",
        type: "file",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Enter file",
          min: "0",
          max: "100",
          step: "10",
        },
        labelClass: "col-md-4",
        positionClass: "col-md-12 mt-3",
        isColummnDisplay: true,
        errorMessage: "Please enter valid file",
        dataPath: "Policy.UploadFile",
      },
      {
        key: "filerules",
        label: "",
        type: "staticContent",
        value: `<p>* Maximum file size - 100 MB</p>
          <p>** Allowed Formats - jpeg, jpg, png, gif, bmp, xls, xlsx, doc, docx, odt, txt, pdf, pptx, ppt, rtf, eml, csv</p>`,
        props: {
          class: "textBlack",
        },
        labelClass: "col-md-4",
        inputClass: "col-md-12 mt-3",
        positionClass: "col-md-12 mt-3",
        isColummnDisplay: true,
        isOverlayTrigger: true,
      },
    ],
  },
];

const UploadDocumentModalForm = {
  schema: UploadDocumentSchema,
  submitLabel: "Upload",
  dataModel: {},
  onSchemaChange: (model, key) => {},
  onFormSubmit: (dataModel, event) => console.log(dataModel),
};

const EmailDocumentSchema = [
  {
    key: "EmailDocument",
    type: "Card",
    title: "Email Document",
    className: "container",
    titleclassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper border-0 px-3 commonShadow",
    controls: [
      {
        key: "EmailID",
        label: "Email ID (Enter comma separated email address)",
        type: "text",
        dataPath: "Email.EmailID",
        props: {
          className: "inputText",
          placeholder: "Enter Email Address",
          required: true,
        },
        positionClass: "col-md-12 mt-2",
        isColummnDisplay: false,
      },
      {
        key: "OptionalContent",
        label: "Add optional email content",
        type: "textarea",
        dataPath: "Email.EmailBody",
        props: {
          className: "inputText",
          placeholder: "Enter Optional Email Body(Max 1000 Characters)",
        },
        positionClass: "col-md-12 mt-4",
        isColummnDisplay: false,
      },
    ],
  },
];

const EmailDocumentModalForm = {
  submitLabel: "Email",
  schema: EmailDocumentSchema,
  dataModel: {},
  onSchemaChange: (model, key) => {},
  onFormSubmit: (dataModel, event, Uri) => {
    console.log([dataModel, event, Uri]);
  },
  onError: () => {},
};

const tableCols = [
  {
    dataField: "TransactionType",
    text: "Status",
    sort: false,
    headerStyle: () => {
      return { width: "20%", textAlign: "center" };
    },
    customFormat: (data) => {
      return data + "-OLD";
    },
  },
  {
    dataField: "DocumentType",
    text: "DOCUMENT TYPE",
    sort: false,
    headerStyle: () => {
      return { width: "20%", textAlign: "center" };
    },
  },
  {
    dataField: "TransactionDate",
    text: "Uploaded / Created Date",
    sort: false,
    headerStyle: () => {
      return { width: "25%", textAlign: "center" };
    },
  },
  {
    dataField: "Uri",
    text: "FileUrl",
    sort: false,
    headerStyle: () => {
      return { width: "20%", textAlign: "center" };
    },
    hidden: true,
  },
];

const CommonArgs = {
  title: "Documents",
  tableCols,
  tableKey: "TransactionType",
  tableRowData,
  UploadDocumentModalForm,
  EmailDocumentModalForm,
  isExpandRow: true,
  groupByColumn: "TransactionType",
};

it("should render given schema correctly", () => {
  const testRenderer = renderer.create(<UploadDocument {...CommonArgs} />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
  testRenderer.unmount();
});

it("should contain 'Upload Document' button", () => {
  render(<UploadDocument {...CommonArgs} />);
  const uploadDocumentBtn = screen.getByText(/Upload Document/g);
  expect(uploadDocumentBtn).not.toBeNull();
});

it("should display modal popup when 'Upload Document' button is clicked", async () => {
  render(<UploadDocument {...CommonArgs} />);
  const uploadDocumentBtn = screen.getByText(/Upload Document/g);
  fireEvent.click(uploadDocumentBtn);
  await waitFor(() => {
    const closeBtn = screen.getByText(/Close/g);
    expect(closeBtn).not.toBeNull();
  });

});





