import React from "react";
import ModalPopup from "./modal";


const EmailDocumentSchemaDATA = {
  PolicyNumber: "",
  EmailId: "",
  Comments: "",
};


// const pdfViewerSchemaData = {
//    fileUrl: "https://devdiep2.azure-api.net/dms/IHIH/PA/GA/GAPA006300975/GAPA006300975_NEW_0.pdf",  
//   };

  
// const urlObject = [
//   {
//       uri: pdfViewerSchemaData.fileUrl,
//       fileType: "pdf",
//   },
// ];
//   const pdfviewModalSchemaUI = [{
//    key: "pdfviewermodal",
//    type: "Card",
//    title: "PDF Viewer",
//    className: "container",
//    titleclassName: "commonHead commonHeadPadding",
//    childsClassName: "boxWrapper border-0 px-3 commonShadow",
  
//   }];
  

const EmailDocumentSchemaUI = [
  {
    key: "ManualVehicleDetails",
    type: "Card",
    title: "Vehicle Information",
    className: "container",
    titleclassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper border-0 px-3 commonShadow",
    controls: [
      {
        key: "vehiclevin",
        label: "Vehicle VIN",
        props: {
          className: "inputText",
          maxLength: 17,
          placeholder: "Please enter VIN number 17 alphanumeric characters",
          pattern: "[A-Za-z0-9]{17}",
          required: true,
        },
        errorMessage: "Please enter valid VIN",
        labelClass: "",
        inputclass: "",
        positionClass: "col-md-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.VIN",
      },
      {
        key: "VINBtn",
        type: "button",
        name: "vButton",
        value: "Fetch VIN",
        positionClass: "col-md-3",
        props: {
          className: "btn btnStyle btnPrim",
        },
      },
      {
        key: "overridevin",
        label: "Override VIN",
        type: "switch",
        props: {
          className: "inputText",
        },
        labelClass: "",
        inputclass: "",
        positionClass: "col-md-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.OverRideVIN",
        options: [
          {
            key: "overrideVIN",
            label: "Yes",
            value: "true",
          },
        ],
      },
      {
        key: "vehicletype",
        label: "Vehicle Type*",
        type: "select",
        value: "",
        props: {
          required: true,
          className: "inputText",
        },
        errorMessage: "Please select vehicle type",
        labelClass: "",
        inputclass: "",
        positionClass: "col-md-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.VehicleType",
        options: [
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
          { value: "3", label: "Three" },
        ],
      },
      {
        key: "year",
        label: "Year*",
        type: "select",
        value: "",
        props: {
          required: true,
          className: "inputText",
        },
        errorMessage: "Vehicles cannot be more than 30 yrs. old",
        labelClass: "",
        inputclass: "",
        positionClass: "col-md-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.Year",
        options: [
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
          { value: "3", label: "Three" },
        ],
      },
      {
        key: "make",
        label: "Make*",
        type: "select",
        value: "",
        props: {
          required: true,
          className: "inputText",
        },
        errorMessage: "Please select Make",
        labelClass: "",
        inputclass: "",
        positionClass: "col-md-3 mt-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.Make",
        options: [
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
          { value: "3", label: "Three" },
        ],
      },
      {
        key: "model",
        label: "Model*",
        type: "text",
        props: {
          required: true,
          className: "inputText",
          minLength: "2",
          maxLength: "25",
          placeholder: "Please enter Model 2-25 alphabets",
        },
        errorMessage: "Please enter valid Model Name",
        labelClass: "",
        inputclass: "",
        positionClass: "col-md-3 mt-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.Model",
      },
      {
        key: "statedvalue",
        label: "Stated Value*",
        type: "number2",
        props: {
          className: "inputText",
          placeholder: "Please enter Stated Value",
          required: true,
        },
        positionClass: "col-md-3 mt-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.StatedValue",
      },
      {
        key: "radiusofOperation",
        label: "Radius of Operation*",
        props: {
          className: "inputText",
          placeholder: "Please enter Radius of Operation",
          required: true,
        },
        positionClass: "col-md-3 mt-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.RadiusofOperation",
        type: "select",
        options: [
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
          { value: "3", label: "Three" },
        ],
      },
      {
        key: "typeofOperation",
        label: "Type of Operation*",
        props: {
          className: "inputText",
          placeholder: "Please enter Type of Operation",
          required: true,
        },
        positionClass: "col-md-3 mt-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.TypeofOperation",
        type: "select",
        options: [
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
          { value: "3", label: "Three" },
        ],
      },
      {
        key: "electroniclogging",
        type: "toggle",
        label: "Is there a Electronic Logging Device in the unit?*",
        props: {
          required: true,
          class: "inputText customCheckBox",
        },
        labelClass: "col-md-4 mt-3",
        inputclass: "col-xxl-3 col-lg-4 col-md-6 mb-4",
        positionClass: "col-md-3 mt-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.ElectronicLoggingDevice",
        options: [
          {
            value: "true",
            label: "Yes",
          },
          {
            value: "false",
            label: "No",
          },
        ],
        conditionalDisplay: [
          {
            src: "Risks.Vehicles.@index.VehicleType",
            exp: "==",
            needRefComp: false,
            target: "TRACTOR",
            connector: "&&",
          },
        ],
      },
      {
        key: "forwardfacingcabcamera",
        type: "toggle",
        label: "Is there a forward-facing in cab camera in the unit?*",
        props: {
          required: true,
          class: "inputText customCheckBox",
        },
        labelClass: "col-md-4 mt-3",
        inputclass: "col-xxl-3 col-lg-4 col-md-6 mb-4",
        positionClass: "col-md-3 mt-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.ForwardFacingCabCamera",
        options: [
          {
            value: "true",
            label: "Yes",
          },
          {
            value: "false",
            label: "No",
          },
        ],
        conditionalDisplay: [
          {
            src: "Risks.Vehicles.@index.VehicleType",
            exp: "==",
            needRefComp: false,
            target: "TRACTOR",
            connector: "&&",
          },
        ],
      },
      {
        key: "travellingOutofState",
        type: "toggle",
        label: "Will you be traveling out of your garaging state?*",
        props: {
          required: true,
          class: "inputText customCheckBox",
        },
        labelClass: "col-md-4 mt-3",
        inputclass: "col-xxl-3 col-lg-4 col-md-6 mb-4",
        positionClass: "col-md-3 mt-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.TravellingOutofState",
        options: [
          {
            value: "true",
            label: "Yes",
          },
          {
            value: "false",
            label: "No",
          },
        ],
      },
    ],
  },
  {
    key: "AreasofOperation",
    type: "Card",
    title: "Areas of Operation",
    className: "container",
    titleclassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper border-0 px-3 commonShadow",
    controls: [
      {
        key: "southeast",
        label: "Southeast",
        prefix: "%",
        props: {
          className: "inputText",
          placeholder: "Enter % of southeast",
        },
        errorMessage: "Please enter % of southeast",
        positionClass: "col-md-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.AreasofOperations.SouthEast",
      },
      {
        key: "east",
        label: "East",
        prefix: "%",
        props: {
          className: "inputText",
          placeholder: "Enter % of east",
        },
        errorMessage: "Please enter % of east",
        positionClass: "col-md-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.AreasofOperations.East",
      },
      {
        key: "northEast",
        label: "Northeast",
        prefix: "%",
        props: {
          className: "inputText",
          placeholder: "Enter % of northeast",
        },
        errorMessage: "Please enter % of northeast",
        positionClass: "col-md-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.AreasofOperations.NorthEast",
      },
      {
        key: "gulf",
        label: "Gulf",
        prefix: "%",
        props: {
          className: "inputText",
          placeholder: "Enter % of gulf",
        },
        errorMessage: "Please enter % of gulf",
        positionClass: "col-md-3",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.AreasofOperations.Gulf",
      },
      {
        key: "midwest",
        label: "Midwest",
        prefix: "%",
        props: {
          className: "inputText",
          placeholder: "Enter % of midwest",
        },
        errorMessage: "Please enter % of midwest",
        positionClass: "col-md-3 mt-4",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.AreasofOperations.Midwest",
      },
      {
        key: "northcentral",
        label: "North Central",
        prefix: "%",
        props: {
          className: "inputText",
          placeholder: "Enter % of North Central",
        },
        errorMessage: "Please enter % of North Central",
        positionClass: "col-md-3 mt-4",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.AreasofOperations.NorthCentral",
      },
      {
        key: "mountain",
        label: "Mountain",
        prefix: "%",
        props: {
          className: "inputText",
          placeholder: "Enter % of Mountain",
        },
        errorMessage: "Please enter % of Mountain",
        positionClass: "col-md-3 mt-4",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.AreasofOperations.Mountain",
      },
      {
        key: "pacific",
        label: "Pacific",
        prefix: "%",
        props: {
          className: "inputText",
          placeholder: "Enter % of Pacific",
        },
        errorMessage: "Please enter % of Pacific",
        positionClass: "col-md-3 mt-4",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.AreasofOperations.Pacific",
      },
      {
        key: "newengland",
        label: "New England",
        prefix: "%",
        props: {
          className: "inputText",
          placeholder: "Enter % of New England",
        },
        errorMessage: "Please enter % of New England",
        positionClass: "col-md-3 mt-4",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.AreasofOperations.NewEngland",
      },
    ],
  },
  {
    key: "LossPayee",
    type: "iterator",
    title: "Loss Payee",
    className: " mt-4",
    titleclassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper border-0 px-3 commonShadow",
    buttonName: "Add Loss Payee",
    cardTitle: "Loss Payee",
    controls: [
      {
        key: "lossPayeeName",
        label: "Loss Payee Name",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Please enter Loss Payee Name",
          maxLength: "50",
          minLength: "2",
        },
        errorMessage: "Please enter valid Loss Payee Name",
        inputclass: "col-xxl-3 col-lg-4 col-md-6 mb-4",
        positionClass: "col-md-4",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.LossPayee.@iteratorindex.Name",
      },
      {
        key: "address",
        label: "Address",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Please enter Address",
          maxLength: "50",
          minLength: "2",
        },
        errorMessage: "Please enter valid Address",
        inputclass: "col-xxl-3 col-lg-4 col-md-6 mb-4",
        positionClass: "col-md-4",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.LossPayee.@iteratorindex.Address",
      },
      {
        key: "loan",
        label: "Loan",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Please enter Loan Number",
          maxLength: "50",
          minLength: "2",
        },
        errorMessage: "Please enter valid Loan Number",
        inputclass: "col-xxl-3 col-lg-4 col-md-6 mb-4",
        positionClass: "col-md-4",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.@index.LossPayee.@iteratorindex.LoanNumber",
      },
    ],
  },
];

const onChange = (model, key) => {
  console.log("onChange.....", model, key);
};

const onBlur = (model, key) => {
  console.log("Blurrr", model, key);
};

const onElementClick = (e, key) => {
  console.log("onElementClick...", e, key);
  if (e.target.name = "vButton") {
  }
};

const AlertArgs = {
  type: "alert",
  size: "md",
  successLabel: "OK",
  header: "Alert!",
  showModal: true,
  message: "Are you sure?",
  onSuccess: () => { },
  onClose: () => { },
};

const ConfirmArgs = {
  type: "confirm",
  size: "md",
  useCloseIcon: false,
  successLabel: "YES",
  closeLabel: "NO",
  header: "confirm!",
  showModal: true,
  message: "Are you sure?",
};

const FormArgs = {
  type: "form",
  dialogClassName: "modal-90w",
  submitLabel: "SUBMIT",
  closeLabel: "CLOSE",
  header: "Form!",
  showModal: true,
  validators: [],
  formModel: EmailDocumentSchemaDATA,
  formSchema: EmailDocumentSchemaUI,
  onBlur: (model, key) => {
    onBlur(model, key);
  },
  onSchemaChange: (model, key) => {
    onChange(model, key);
  },
  onElementClick: (e, key) => {
    onElementClick(e, key);
  },
};

// const PdfViewerArgs = {

//   type: "pdfviewer",
//   dialogClassName: "modal-90w",
//   submitLabel: "DOWNLOAD",
//    closeLabel: "CLOSE",
//    header: "PdfPreview!",
//    showModal: true,
//    validators: [],
//    pdfViewerSchema: pdfviewModalSchemaUI,
//    pdfViewerModel: pdfViewerSchemaData,
//    urlObject
//   };

export default {
  title: "Design System/Core/ModalPopup",
  component: ModalPopup,
  argTypes: {
    type: {
      description: "UI schema which Provide what type of modal is.",
      table: {
        category: "Element",
      },
    },
    header: {
      description: "UI schema which Provide header text to the modal.",
      table: {
        category: "Element",
      },
    },
    showModal: {
      control: "boolean",
      description: "sets condition to show and hide modal.",
      table: {
        category: "Element",
      },
    },
    message: {
      description:
        "gets passes as string message which will be rendered in body section of the modal.",
      table: {
        category: "Element",
      },
    },
    size: {
      description: "UI schema which Provide Size of modal.",
      table: {
        category: "Style",
      },
    },
    successLabel: {
      description:
        "UI schema which Provide success label to the button in modal.",
      table: {
        category: "Element",
      },
    },
    closeLabel: {
      description:
        "UI schema which Provide close label to the button in modal.",
      table: {
        category: "Element",
      },
    },
    onSuccess: {
      action: (e) => {
        console.log(e);
      },
      description:
        "Emits the events as soon as forms get submitted with updated data model",
      table: {
        category: "Events",
      },
    },
    onClose: {
      action: (e) => {
        console.log(e);
      },
      description:
        "Emits this event whenever any of the child elements triggers change event with changed data model & element key",
      table: {
        category: "Events",
      },
    },
    onSchemaChange: {
      description:
        "Emits this event whenever any of the child elements triggers change event with changed data model & element key.",
      table: {
        category: "Events",
      },
    },
    onFormSubmit: {
      action: (e) => {
        console.log(e);
      },
      description:
        "Emits the events as soon as forms get submitted with updated data model.",
      table: {
        category: "Events",
      },
    },
    onFailure: {
      action: (e) => {
        console.log(e);
      },
      description:
        "Emits the events as soon as forms get failed with updated data model.",
      table: {
        category: "Events",
      },
    },
    validators: {
      action: (e) => {
        console.log(e);
      },
      description: "Emits us Validation Required for the perticular components",
      table: {
        category: "Events",
      },
    },
    submitLabel: {
      action: (e) => {
        console.log(e);
      },
      description: "Emits the events about Submit",
      table: {
        category: "Events",
      },
    },
  },
};

const Template = (args) => <ModalPopup {...args} />;
export const alertModal = Template.bind({});
alertModal.args = AlertArgs;

export const confirmModal = Template.bind({});
confirmModal.args = ConfirmArgs;

export const formModal = Template.bind({});
formModal.args = FormArgs;

// export const PdfViewerModal = Template.bind({});
// PdfViewerModal.args = PdfViewerArgs;