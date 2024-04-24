import React from "react";
import UploadDocumentComp from "./uploaddocument";


// Uri is fixed field rest other can be any based on column datafield
const tableRowData = [
  {
    TransactionType: "Manual Upload",
    DocumentType: "Data Submission",
    TransactionDate: "June 15th, 2023 05:13:18 AM",
    EffectiveDate: "June 15th, 2023 05:13:18 AM",
    Uri:
      "https://devdiep2.azure-api.net/dms/CNGA/M/TX/TOGACNMTX230306/Quote_Prem%20Full%20Test_1.pdf",
  },
  {
    TransactionType: "Application",
    DocumentType: "Submission Data Document",
    TransactionDate: "June 15th, 2023 04:20:53 AM",
    EffectiveDate: "June 15th, 2023 04:20:53 AM",
    Uri:
      "https://devdiep2dms.azurewebsites.net/api/download-blob?blobpath=dms/SDRH/HO3/OR/SDRHHO3OR230659/TEMP-PDF-Document.pdf",
  },
  {
    TransactionType: "Application",
    DocumentType: "Email Document",
    TransactionDate: "June 15th, 2023 04:20:53 AM",
    EffectiveDate: "June 15th, 2023 04:20:53 AM",
    Uri:
      "https://devdiep2dms.azurewebsites.net/api/download-blob?blobpath=dms/SDRH/HO3/OR/SDRHHO3OR230659/AAMkAGExNTZmYTc1LWM1ZTktNGJkMy1hMWI0LWRkMmFjMTVhMGE0OQBGAAAAAAC3oELvAl_hQIxsKKMJ-cSOBwA-8oR3w6uXSK5s0iLl8cx2AAAAAAEMAAA-8oR3w6uXSK5s0iLl8cx2AACi_0QZAAA%3D.eml",
  },
]

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
  dialogClassName: "modal-60w",
  size: "lg"
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
  onFormSubmit: (dataModel, event, Uri) => {console.log([dataModel, event, Uri])},
  onError: () =>{}
};

const tableCols =  [
  {
    dataField: "TransactionType",
    text: "Status",
    sort: false,
    headerStyle: () => {
      return { width: "20%", textAlign: "center" };
    },
    formatter: (data) => {
      return data + "-OLD";
    },
    style: ()=>{ //row specific styling
      return {textAlign: "center"}
    }
  },
  {
    dataField: "DocumentType",
    text: "DOCUMENT TYPE",
    sort: false,
    headerStyle: () => {
      return { width: "20%", textAlign: "center" };
    },
    customFormatter:(data, row)=>{
      console.log("Hello: ", row);
      return data + 'format'
    }
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
    dataField: "EffectiveDate",
    text: "EFFECTIVE DATE",
    sort: false,
    headerStyle: () => {
      return { width: "17%", textAlign: "center" };
    },
    hidden: true,
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
  tableKey: "TransactionType",
  tableCols,
  tableRowData,
  UploadDocumentModalForm,
  EmailDocumentModalForm,
  isExpandRow: true,
  groupByColumn: "TransactionType",
  ignoreFileView: ["eml"],
  hideUploadBtn: false
};

export default {
  title: "Design System/Core/UploadDocuments",
  component: UploadDocumentComp,
  parameters: {
    docs: {
      description: {
        component:
          "UploadDocument Component will generate the table to view various files uploaded to dms, it provides various actions like download, view, and email document with utility functions that is needed to implement in application.",
      },
    },
  },
  argTypes: {
    title: {
      description: "Header Title",
      table: {
        category: "Element",
      },
    },
    tableCols: {
      description: "Schema to display Columns. Includes Field like dataField(must match one with table row field.The Uri field is fixed), sort, hidden, text, etc. Actions are added automatically. Use 'customFormatter' to display data accordingly.",
      table: {
        category: "Schema",
      }
    },
    tableRowData: {
      description: "Data to display in row, it must match with dataField of tableCols",
      table: {
        category: "Schema",
      }
    },
    tableKey: {
      description: "One of the dataField of tableCols which is unique.",
      table: {
        category: "string",
      }
    },
    UploadDocumentModalForm: {
      description: "Schema containing uploadUISchema, uploadUIDataModel, and events.",
      table: {
        category: "Schema",
      }
    },
    EmailDocumentModalForm: {
      description: "Schema containing emailUISchema, emailUIDataModel, and events.",
      table: {
        category: "Schema",
      }
    },
    isExpandRow: {
      description: "Whether to use expandable columns or not.",
      table: {
        category: "Boolean",
      }
    },
    isShowExpandCol: {
      description: "Whether to show expand column or not.",
      table: {
        category: "Boolean",
      }
    },
    groupByColumn: {
      description: "Prop used to group items of data. One of the dataField of column schema.",
      table: {
        category: "String",
      }
    },
    parentClass: {
      description: "Class to provide additional styling using bootstrap.",
      table: {
        category: "Class"
      }
    },
    titleClass: {
      description: "Class to provide additional styling to title of the table using bootstrap.",
      table: {
        category: "Class"
      }
    },
    tableClass: {
      description: "Class to provide additional styling to table using bootstrap.",
      table: {
        category: "Class"
      }
    },
    docactionpos: {
      description:"Position of Action Button (start, center, end)",
      table: {
        category: "string"
      }
    },
    hideUploadBtn: {
      description:"Hide Upload Button",
      table: {
        category: "boolean"
      }
    }
  },
};

const Template = (args) => <UploadDocumentComp {...args} />;

export const Grouped = Template.bind({});
Grouped.args = CommonArgs;

export const NonGrouped = Template.bind({});
NonGrouped.args = {...CommonArgs, isExpandRow: false};



