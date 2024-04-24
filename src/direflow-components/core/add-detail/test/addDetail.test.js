import React from "react";
import renderer from "react-test-renderer";
import AddDetail from "../addDetail";
import TestRenderer from "react-test-renderer";

var maxDate = new Date();

let maxDateFormat =
  maxDate.getFullYear().toString().padStart(2, "0") +
  "-" +
  (maxDate.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  maxDate.getDate().toString().padStart(2, 0);

const ViolationSchemaData = {
  ViolationNumber: 0,
  Date: "",
  Type: "",
  HadAccident: "",
  ConvictionDate: "",
  PJC: "",
  TotalPoints: "",
  SISCode: "",
  AccidentViolationDisputeCode: "",
  Dispute: "",
  DisputeReason: "",
  Source: "ENT",
};

const violationsInfoModel = (index) => {
  return [
    {
      key: "violationDetailsCard",
      type: "Card",
      title: "Violation Details",
      className: " mt-4",
      titleClassName: "commonHead commonHeadPadding",
      childsClassName: "",
      controls: [
        {
          key: "violationDate",
          label: "Violation Date*",
          type: "date",
          props: {
            required: true,
            className: "inputText",
            max: maxDateFormat,
          },
          errorMessage: "Must be in MM/DD/YYY format",
          labelClass: "col-md-2",
          inputClass: "col-md-2",
          positionClass: "col-xxl-3 col-md-6 mb-4",
          isColummnDisplay: false,
          dataPath: "Date",
        },
        {
          key: "violationType",
          label: "Violation*",
          type: "select",
          props: { required: true, className: "inputText" },
          labelClass: "col-md-2",
          inputClass: "col-md-2",
          positionClass: "col-xxl-3 col-md-6 mb-4",
          isColummnDisplay: false,
          dataPath: "Type",
          options: [
            {
              key: "violationOption0",
              label: "Please Select",
              value: "",
            },
            {
              key: "violationOption1",
              label: "Accident At Fault",
              value: "Accident-AF",
            },
            {
              key: "violationOption3",
              label: "Accident Not At Fault",
              value: "Accident - NAF",
            },
            {
              key: "violationOption5",
              label: "Adm Action/Refusal/DUI",
              value: "Adm Action/DUI",
            },
            {
              key: "violationOption6",
              label: "Agressive Driving",
              value: "Agg Driving",
            },
            {
              key: "violationOption8",
              label: "Allow Another to Use License/Mutilated",
              value: "Use Another Lic",
            },
            {
              key: "violationOption9",
              label: "Allow Minor to operate motor vehicle",
              value: "Allow Mnr Oper",
            },
            {
              key: "violationOption10",
              label: "Assault",
              value: "Assault",
            },
            {
              key: "violationOption12",
              label: "Attempt to Elude Police",
              value: "Attempt Elude",
            },
            {
              key: "violationOption14",
              label: "Auto Used in commission of felony",
              value: "Auto Felony Use",
            },
            {
              key: "violationOption16",
              label: "Brakes required",
              value: "Brakes Reqd",
            },
            {
              key: "violationOption18",
              label: "CMP < $1,000",
              value: "CMP < $1,000",
            },
            {
              key: "violationOption19",
              label: "CMP >= $1,000",
              value: "CMP >= $1,000",
            },
            {
              key: "violationOption20",
              label: "Careless Driving",
              value: "Careless Drive",
            },
            {
              key: "violationOption22",
              label: "Child Restraint Violation",
              value: "Child Restraint",
            },
            {
              key: "violationOption24",
              label: "Criminally Negligent Homicide",
              value: "Crim Negl Homcd",
            },
            {
              key: "violationOption26",
              label: "DUI - Alcohol and/or Drugs",
              value: "DUI",
            },
            {
              key: "violationOption27",
              label: "Defective exhaust",
              value: "Defective exhst",
            },
            {
              key: "violationOption29",
              label: "Drivers vision obscured",
              value: "Drv Vision Obs",
            },
            {
              key: "violationOption31",
              label: "Driving through barricade/closed road",
              value: "Drv thru barrcd",
            },
            {
              key: "violationOption33",
              label: "Driving while cancelled/No Drivers Lic",
              value: "No Drivers Lic",
            },
            {
              key: "violationOption34",
              label: "Driving while revoked/suspended",
              value: "Revoked Lic",
            },
            {
              key: "violationOption35",
              label: "Driving without insurance",
              value: "Drv w/o Ins",
            },
            {
              key: "violationOption37",
              label: "Failure to Report Accident",
              value: "Fail Rpt Acc",
            },
            {
              key: "violationOption38",
              label: "Failure to Signal",
              value: "Failure Signal",
            },
            {
              key: "violationOption39",
              label: "Failure to Stop at Stop Sign",
              value: "Fail to Stop",
            },
            {
              key: "violationOption40",
              label: "Failure to dim lights",
              value: "Fail Dim Lghts",
            },
            {
              key: "violationOption42",
              label: "Failure to heed siren or blue lights",
              value: "Fail Heed Siren",
            },
            {
              key: "violationOption43",
              label: "Failure to obey trafic control/sign",
              value: "Not Obey Traf",
            },
            {
              key: "violationOption44",
              label: "Failure to stop at railroad crossing",
              value: "Fail Stop RR",
            },
            {
              key: "violationOption46",
              label: "Failure to yield right of way",
              value: "Fail Yld R/W",
            },
            {
              key: "violationOption47",
              label: "Following too close",
              value: "Follow too clos",
            },
            {
              key: "violationOption48",
              label: "Hours of Service",
              value: "Hours of Svc",
            },
            {
              key: "violationOption49",
              label: "Illegal towing",
              value: "Illegal Towing",
            },
            {
              key: "violationOption50",
              label: "Improper Backing",
              value: "Improper Backin",
            },
            {
              key: "violationOption51",
              label: "Improper Equipment",
              value: "Improper Equip",
            },
            {
              key: "violationOption52",
              label: "Improper Lane Usage/Lane Change",
              value: "Improper Ln Chg",
            },
            {
              key: "violationOption53",
              Value: "Improper Park",
              label: "Improper Parking",
            },
            {
              key: "violationOption54",
              value: "Improper Pass",
              label: "Improper Passing",
            },
            {
              key: "violationOption55",
              value: "Improper Turn",
              label: "Improper Turn",
            },
            {
              key: "violationOption56",
              value: "Improp Load",
              label: "Improper load (shift/spill)",
            },
            {
              key: "violationOption57",
              value: "Improper Tint",
              label: "Improper window tint",
            },
            {
              key: "violationOption58",
              value: "Inexp ovr 18",
              label: "Inexperienced driver over 18",
            },
            {
              key: "violationOption59",
              value: "Juvenile",
              label: "Juvenile/Administrative Action",
            },
            {
              key: "violationOption60",
              value: "Left Scene Acc",
              label: "Left Scene of Accident",
            },
            {
              key: "violationOption61",
              value: "Manslaughter",
              label: "Manslaughter-2nd Degree",
            },
            {
              key: "violationOption62",
              value: "No Tag",
              label: "No Tag or Improper Tag",
            },
            {
              key: "violationOption63",
              value: "Obstr Traff",
              label: "Obstruction of traffic/Hwy loading",
            },
            {
              key: "violationOption64",
              value: "One-Way Street",
              label: "One-Way Street",
            },
            {
              key: "violationOption65",
              value: "Oper Veh No Con",
              label: "Operating MV without owners consent",
            },
            {
              key: "violationOption66",
              value: "Other Traffic",
              label: "Other-Moving and Traffic",
            },
            {
              key: "violationOption67",
              value: "Other Non-Movin",
              label: "Other-Non-Moving nor traffic violation",
            },
            {
              key: "violationOption68",
              value: "Pass School bus",
              label: "Passed stopped school bus",
            },
            {
              key: "violationOption69",
              value: "Open Container",
              label: "Possessing open container alcohol/drugs",
            },
            {
              key: "violationOption70",
              value: "Racing on Hwy",
              label: "Racing on Highway",
            },
            {
              key: "violationOption71",
              value: "Reckless Drvg",
              label: "Reckless Driving",
            },
            {
              key: "violationOption72",
              value: "Reckless Endgmt",
              label: "Reckless Endangerment",
            },
            {
              key: "violationOption73",
              value: "Refused Chm Tst",
              label: "Refused Chemical Test",
            },
            {
              key: "violationOption74",
              value: "Running Red Lt",
              label: "Running Red Light",
            },
            {
              key: "violationOption75",
              value: "SR-22",
              label: "SR-22",
            },
            {
              key: "violationOption76",
              value: "Speeding",
              label: "Speeding",
            },
            {
              key: "violationOption77",
              value: "Speed 0-18 over",
              label: "Speeding 1-18 over speed limit",
            },
            {
              key: "violationOption78",
              value: "Spd 19-33 over",
              label: "Speeding 19-33 mph over limit",
            },
            {
              key: "violationOption79",
              value: "Spd 34+ over",
              label: "Speeding 34+ mph over limit",
            },
            {
              key: "violationOption80",
              value: "Tires",
              label: "Tires",
            },
            {
              key: "violationOption81",
              value: "Wireless Device",
              label: "Unlawful Use of Wireless Device",
            },
            {
              key: "violationOption82",
              value: "Unver Drv Rec",
              label: "Unverifiable driving record",
            },
            {
              key: "violationOption83",
              value: "Veh Out of Svc",
              label: "Vehicle out of service",
            },
            {
              key: "violationOption84",
              value: "Violating Restr",
              label: "Violating Restrictions",
            },
            {
              key: "violationOption85",
              value: "Wrg Side Road",
              label: "Wrong Side of Road",
            },
            {
              key: "violationOption86",
              value: "Youthful Offend",
              label: "Youthful offender",
            },
          ],
        },
        {
          key: "accidentWithViolation",
          label: "Acc W / Violation?*",
          type: "select",
          props: { required: true, className: "inputText" },
          labelClass: "col-md-2",
          inputClass: "col-md-2",
          positionClass: "col-xxl-3 col-md-6 mb-4",
          isColummnDisplay: false,
          dataPath: "HadAccident",
          options: [
            {
              key: "SelectaccidentWithViolation",
              label: "Please Select",
              value: "",
            },
            {
              key: "accidentWithViolationOption1",
              label: "No violation",
              value: "No violation",
            },
            {
              key: "accidentWithViolationOption2",
              label: "Acc At Fault",
              value: "Acc At Fault",
            },
            {
              key: "accidentWithViolationOption3",
              label: "Acc not at fault",
              value: "Acc not at fault",
            },
          ],
        },
        {
          key: "violationPoint",
          label: "Violation Point",
          props: {
            required: true,
            className: "inputText",
            disabled: true,
          },
          errorMessage: "Enter Total Violation Point",
          labelClass: "col-md-2",
          inputClass: "col-md-2",
          positionClass: "col-xxl-3 col-md-6 mb-4",
          isColummnDisplay: false,
          dataPath: "TotalPoints",
        },
      ],
    },
  ];
};

const onTableEdit = (row, rowIndex) => {
  console.log(row, rowIndex);
};

const onTableDelete = (row, rowIndex) => {
  console.log(row, rowIndex);
};

const ViolationActions = (cell, row, rowIndex, formatExtraData) => {
  return (
    <>
      <a
        className={
          row.Source === "ENT"
            ? "display-inblock actionIcon me-1"
            : "display-inblock actionIcon me-1 disableIcon"
        }
        data-bs-toggle="tooltip"
        title="Edit"
        onClick={() =>
          row.Source === "ENT" ? onTableEdit(row, rowIndex) : null
        }
      >
        <FontAwesomeIcon icon={faPenToSquare} size="lg" />
      </a>
      <a
        className={
          row.Source === "ENT"
            ? "display-inblock actionIcon me-1"
            : "display-inblock actionIcon me-1 disableIcon"
        }
        data-bs-toggle="tooltip"
        title="Delete"
        onClick={() =>
          row.Source === "ENT" ? onTableDelete(row, rowIndex) : null
        }
      >
        <FontAwesomeIcon icon={faTrash} size="lg" />
      </a>
    </>
  );
};

const ViolationDateFormatter = (cell, row, rowIndex, formatExtraData) => {
  if (row?.Date?.includes("-")) {
    let dob = row?.Date?.split("-");
    return dob[1] + "-" + dob[2] + "-" + dob[0];
  } else {
    let d = new Date(row.Date);
    let formatedDate =
      d.getFullYear().toString().padStart(2, "0") +
      "-" +
      (d.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      d.getDate().toString().padStart(2, "0");
    return formatedDate;
  }
};

const ViolationDescFormatter = (cell, row, rowIndex, formatExtraData) => {
  return row.Type;
};

const ViolationColumns = [
  {
    dataField: "Date",
    text: "Date",
    sort: false,
    headerStyle: () => {
      return { width: "18%" };
    },
    formatter: ViolationDateFormatter,
  },
  {
    dataField: "Type",
    text: "Description",
    sort: false,
    headerStyle: () => {
      return { width: "30%" };
    },
    formatter: ViolationDescFormatter,
  },
  {
    dataField: "HadAccident",
    text: "At Fault",
    sort: false,
    headerStyle: () => {
      return { width: "15%" };
    },
  },
  {
    dataField: "TotalPoints",
    text: "Points",
    sort: false,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "Source",
    text: "Source",
    sort: false,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "actions",
    text: "Actions",
    isDummyField: true,
    csvExport: false,
    formatter: ViolationActions,
    headerStyle: () => {
      return { width: "18%" };
    },
  },
];

let updatedSchema;
const onChange = (changedSchema, key) => {
  let violationsList = [];
  if (key == "violationType") {
    let filledType = changedSchema.Type;
    if (changedSchema.Type != "") {
      let dataObj = violationMasterData.filter((v) => v.Value == filledType);
      let matchingViolations = violationsList.filter(
        (violation) => violation.Type == filledType
      );
      if (matchingViolations?.length <= 0)
        changedSchema.TotalPoints = dataObj[0]?.FirstOffense;
      else changedSchema.TotalPoints = dataObj[0].SecondandMoreOffense;
    }
  }
  updatedSchema = changedSchema;
};

const onTableAdd = (model) => {
  let tempObj = [];
  let lastIndex =
    tempObj?.length > 0
      ? parseInt(tempObj.slice(-1)[0].ViolationNumber) + 1
      : 1;
  let index = lastIndex.toString();
  model.ViolationNumber = parseInt(index);
  tempObj.push(model);
  updateValue(tempObj);
  updatedSchema = undefined;
};

let rowData = [];
const updateValue = (changedModel) => {
  changedModel.forEach((element) => {
    if (!rowData.includes(element)) {
      rowData.push(element);
    }
  });
};

const onReset = () => {
  updatedSchema = undefined;
};

const CommonArgs = {
  formKey: "violation",
  formId: "setViolationForm",
  value: [],
  infoModel: violationsInfoModel,
  schemaData: updatedSchema ? updatedSchema : ViolationSchemaData,
  resetLabel: "Reset",
  saveLabel: "Save",
  columns: ViolationColumns,
  onTableAdd: onTableAdd,
  onChange: onChange,
  onReset: onReset,
  rowData: rowData,
  keyField: "violation",
};

it("renders without crashing & matches snapshot as expected", () => {
  const testRenderer = TestRenderer.create(<AddDetail {...CommonArgs} />);
  expect(testRenderer.toJSON()).toMatchSnapshot();
  testRenderer.unmount();
});
