import React from "react";
import { Popover } from "react-bootstrap";
import CancellationLanding from "./landing";

let d = new Date();
let dformat =
  d.getFullYear().toString().padStart(2, "0") +
  "-" +
  (d.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  d.getDate().toString().padStart(2, "0");

let DefEffectiveDate = new Date();
DefEffectiveDate.setDate(d.getDate() + 365);
let defaultExpiryDate =
  DefEffectiveDate.getFullYear().toString().padStart(2, "0") +
  "-" +
  (DefEffectiveDate.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  DefEffectiveDate.getDate().toString().padStart(2, "0");

let DefQuoteExpDate = new Date();
DefQuoteExpDate.setDate(d.getDate() + 30);
let defaultQuoteExpDate =
  DefQuoteExpDate.getFullYear().toString().padStart(2, "0") +
  "-" +
  (DefQuoteExpDate.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  DefQuoteExpDate.getDate().toString().padStart(2, "0");

const cancellationLandingData = {
  id: "",
  AccountId: "UW",
  QuoteNumber: "",
  IsPolicyBind: "false",
  IsRenewed: false,
  PolicyNumber: "",
  PolicyTerm: "365",
  EffectiveDate: dformat,
  ExpirationDate: defaultExpiryDate,
  BindDate: "2022-01-01",
  QuoteDate: dformat,
  PolicyStatus: "Quote",
  CurrentVersion: "1.0",
  CurrentVersionEffectiveFrom: "",
  PriorInsurances: [],
  NoOfTimesRenewed: "0",
  QuoteExpDate: defaultQuoteExpDate,
  RenewalTerm: "0",
  // "Agency": {...singleUser},
  // "Agent": {...singleUser},
  // "UnderWriter": {...singleUser},
  AgentCommission: "0",
  InsuredAccount: {
    Type: "Primary",
    CreationDate: "",
    UserName: "",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    DisplayName: "",
    BankDetails: {},
    Communications: [
      {
        Type: "PhNo",
        SubType: "Primary",
        Value: "",
        Status: "",
      },
      {
        Type: "Email",
        SubType: "Primary",
        Value: "",
        Status: "",
      },
    ],
    BusinessInfo: {
      BusinessType: "",
      YearsInBusiness: "",
      IncorporationAge: "",
      BusinessAge: 0,
      BusinessName: "",
      DisplayName: "",
      RegistrationNumber: "",
      BusinessStruct: "Individual",
      SpecialRisk: "",
      NoOfOwners: "1",
      FullTimeEmployees: "1",
      PartTimeEmployees: "1",
      Website: "",
      IndustryType: "",
      BusinessDecsription: "",
      AnnualRevenue: "",
      NumberOFLocations: "",
      HasDOTNumber: "",
      DOTNumber: "",
      Locations: [],
    },
  },
  Audit: {
    CreatedBy: "",
    CreatedOn: "",
    LastUpdatedBy: "",
    LastUpdatedOn: "",
  },
  ExternalRefrences: [
    // {
    //     "ReferenceNumber": "",
    //     "ReferenceTarget": "",
    //     "Status": ""
    // }
  ],
  Attributes: {
    AppSource: "POS",
    Carrier: "ENGS",
    Coverholder: "MS",
    Lob: "CA",
    State: "",
    Product: "",
    RaterVersion: "",
    RenewalConfigurations: {
      BeforeForAgent: "",
      AfterForAgent: "",
      BeforeForUnderwriter: "",
      AfterForUnderwriter: "",
    },
    QuoteValidity: "",
    IsActive: true,
  },
  JointPolicyHolders: [],
  Forms: [],
  DiscountAndSurcharges: {},
  Transaction: {
    Date: dformat,
    EffectiveDate: dformat,
    Type: "Quote",
    Status: "",
    Number: 0,
    IsOutOfSequence: "false",
    RequestedBy: "",
    RequestedById: "",
    PremiumType: "",
    Remarks: "",
    Reason: "",
    MEP: 0.1644,
    Verification: {
      IsInsuredESignVerified: "false",
      IsAgentESignVerified: "false",
      IsEmailVerified: "false",
      IsOTPVerified: "false",
    },
  },
  PolicyStatusHistory: [
    {
      OldStatus: "",
      NewStatus: "Quote",
      ChangedBy: "",
      ChangedDate: "",
    },
  ],
  Underwriting: {
    IsHazardousMaterial: "false",
    IsExplosiveMaterial: "false",
    IsBankrupt: "false",
    IsDamaged: "false",
    IsRevenue40Percent: "false",
  },
  PolicyCoverages: {
    Coverages: [
      {
        Status: "",
        Type: "",
        Name: "Combined Single Limit",
        Description: "Combined Single Limit",
        IsApplicable: "",
        IsSelected: "true",
        IsMandatory: "true",
        Rate: 0.0,
        Limit: "1000000",
        LimitAmount: "",
        Deductible: "0",
        Premium: 0.0,
        EffectivePremium: 0.0,
        PremiumDifference: 0.0,
        NoOfDays: "",
        WaitingPeriod: "",
        ExpenseType: "",
        Factor: {
          Status: "",
          Type: "",
          Description: "",
          IsApplicable: "",
          IsSelected: "",
          IsMandatory: "",
          Rate: "",
          Limit: "",
          LimitAmount: "",
          Deductible: "",
          Premium: "",
          EffectivePremium: "",
        },
        OtherCoverageField: {
          AtFault: "",
        },
      },
      {
        Status: "",
        Type: "",
        Name: "Deductible GAIC",
        Description: "Deductible GAIC",
        IsApplicable: "",
        IsSelected: "true",
        IsMandatory: "true",
        Rate: 0.0,
        Limit: "0",
        LimitAmount: "",
        Deductible: "1000",
        Premium: 0.0,
        EffectivePremium: 0.0,
        PremiumDifference: 0.0,
        NoOfDays: "",
        WaitingPeriod: "",
        ExpenseType: "",
        Factor: {
          Status: "",
          Type: "",
          Description: "",
          IsApplicable: "",
          IsSelected: "",
          IsMandatory: "",
          Rate: "",
          Limit: "",
          LimitAmount: "",
          Deductible: "",
          Premium: "",
          EffectivePremium: "",
        },
        OtherCoverageField: {
          AtFault: "",
        },
      },
      {
        Status: "",
        Type: "",
        Name: "Deductible Assurant",
        Description: "Deductible Assurant",
        IsApplicable: "",
        IsSelected: "true",
        IsMandatory: "true",
        Rate: 0.0,
        Limit: "0",
        LimitAmount: "",
        Deductible: "1000",
        Premium: 0.0,
        EffectivePremium: 0.0,
        PremiumDifference: 0.0,
        NoOfDays: "",
        WaitingPeriod: "",
        ExpenseType: "",
        Factor: {
          Status: "",
          Type: "",
          Description: "",
          IsApplicable: "",
          IsSelected: "",
          IsMandatory: "",
          Rate: "",
          Limit: "",
          LimitAmount: "",
          Deductible: "",
          Premium: "",
          EffectivePremium: "",
        },
        OtherCoverageField: {
          AtFault: "",
        },
      },
      {
        Status: "",
        Type: "",
        Name: "Uninsured Motorist Coverage",
        Description: "Uninsured Motorist Coverage",
        IsApplicable: "",
        IsSelected: "",
        IsMandatory: "",
        Rate: 0.0,
        Limit: "",
        LimitAmount: "",
        Deductible: "",
        Premium: 0.0,
        EffectivePremium: 0.0,
        PremiumDifference: 0.0,
        NoOfDays: "", // don't add default value here
        WaitingPeriod: "", //cannot add default value here
        ExpenseType: "",
        Factor: {
          Status: "",
          Type: "",
          Description: "",
          IsApplicable: "",
          IsSelected: "",
          IsMandatory: "",
          Rate: "",
          Limit: "",
          LimitAmount: "",
          Deductible: "",
          Premium: "",
          EffectivePremium: "",
        },
        OtherCoverageField: {
          AtFault: "R",
        },
      },
      {
        Status: "",
        Type: "",
        Name: "Rental Reimbursement Coverage",
        Description: "Rental Reimbursement Coverage",
        IsApplicable: "",
        IsSelected: "",
        IsMandatory: "",
        Rate: 0.0,
        Limit: "",
        LimitAmount: "",
        Deductible: "",
        Premium: 0.0,
        EffectivePremium: 0.0,
        PremiumDifference: 0.0,
        NoOfDays: "", // don't add default value here
        WaitingPeriod: "", //cannot add default value here
        ExpenseType: "",
        Factor: {
          Status: "",
          Type: "",
          Description: "",
          IsApplicable: "",
          IsSelected: "",
          IsMandatory: "",
          Rate: "",
          Limit: "",
          LimitAmount: "",
          Deductible: "",
          Premium: "",
          EffectivePremium: "",
        },
        OtherCoverageField: {
          AtFault: "R",
        },
      },
      {
        Status: "",
        Type: "",
        Name: "Adjust Premium",
        Description: "Adjust Premium",
        IsApplicable: "",
        IsSelected: "",
        IsMandatory: "",
        Rate: 0.0,
        Limit: "0",
        LimitAmount: "",
        Deductible: "0",
        Premium: 0.0,
        EffectivePremium: 0.0,
        PremiumDifference: 0.0,
        NoOfDays: "",
        WaitingPeriod: "",
        ExpenseType: "",
        Factor: {
          Status: "",
          Type: "",
          Description: "",
          IsApplicable: "",
          IsSelected: "",
          IsMandatory: "",
          Rate: "",
          Limit: "",
          LimitAmount: "",
          Deductible: "",
          Premium: "",
          EffectivePremium: "",
        },
        OtherCoverageField: {
          AtFault: "",
        },
      },
    ],
  },
  TotalPremium: {
    BasicPremium: "",
    Surcharge: "",
    Discount: "",
    MinPremium: "",
    PolicyPremium: "",
    TotalSalePrice: "",
    DownPayment: "",
    AnnualPremium: 0.0,
    EffectivePremium: 1000.0,
    PriorAnnualPremium: 0.0,
    AnnualPremiumWithFeesAndTaxes: 0.0,
    EffectivePremiumWithFeesAndTaxes: 1150.0,
  },
  Premium: {
    BasicPremium: "",
    Surcharge: "",
    Discount: "",
    MinPremium: "",
    PolicyPremium: "",
    TotalSalePrice: "",
    EffectivePremium: 0.0,
    EffectivePremiumWithFeesAndTaxes: 0.0,
    AnnualPremium: 0.0,
    AnnualPremiumWithFeesAndTaxes: 0.0,
  },
  PremiumFactors: [],
  FeesAndTaxes: [
    { Amount: -100, ProductFeesAndTaxes: { Description: "Inspection Fee" } },
    { Amount: 150, ProductFeesAndTaxes: { Description: "Other   Fee" } },
    { Amount: 0, ProductFeesAndTaxes: { Description: "Something" } },
  ],
  Risks: {
    Vehicles: [],
    Drivers: [],
  },
  Rules: {
    Action: "Allow",
    MatchingRules: [
      // {
      //     "Status": "Active",
      //     "Type": "Dummy 1",
      //     "Description": "Sample 1",
      //     "Isfulfilled": "No",
      //     "Reason": "Age less"
      // }
    ],
  },
  PreviousPolicies: {
    IsPreviousPolicy: "",
    PreviousPolicyNumber: "",
    OtherCoverages: "",
    IsPreviousClaims: "",
    NoOfClaims: "",
    TotalAmountClaimed: "",
  },
  NonFunctional: {
    LastSubmittedPage: "/Commercial/Auto/Quote/RiskQualifiers",
    Milestones: [],
    InsuredOTP: "",
  },
};

const cancellationUISchema = [
  {
    key: "PolicyInformation",
    type: "Card",
    title: "Policy Information",
    className: " clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper px-3 commonShadow",
    controls: [
      {
        key: "policynumber",
        label: "Policy Number",
        type: "text",
        value: "",
        props: { required: true, class: "inputText", disabled: "disabled" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-4",
        isColummnDisplay: false,
        dataPath: "PolicyNumber",
      },
      {
        key: "businessname",
        label: "Business Name",
        type: "text",
        value: "",
        props: { required: true, class: "inputText", disabled: "disabled" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-4",
        isColummnDisplay: false,
        dataPath: "InsuredAccount.BusinessInfo.BusinessName",
      },
      {
        key: "mailingaddress",
        label: "MAILING ADDRESS",
        type: "text",
        value: "",
        props: { required: true, class: "inputText", disabled: "disabled" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-4",
        isColummnDisplay: false,
        dataPath:
          "InsuredAccount.BusinessInfo.Locations.0.Address.UnFormattedAddress",
      },
      // {
      //   key: "classificationtype",
      //   label: "CLASSIFICATION TYPE",
      //   type: "text",
      //   value: "",
      //   props: { required: true, class: "inputText" , disabled:"disabled" },
      //   labelClass: "inputLabel ddlUnderwriterList",
      //   positionClass: "col-md-4 mt-4",
      //   isColummnDisplay: false,
      //   dataPath: "Risks.Vehicles.0.ClassificationType"
      // },
      {
        key: "policyeffectivedate",
        label: "POLICY START DATE",
        type: "text",
        value: "",
        props: { required: true, class: "inputText", disabled: "disabled" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-4 mt-4",
        isColummnDisplay: false,
        dataPath: "EffectiveDate",
      },
      {
        key: "policyenddate",
        label: "POLICY END DATE",
        type: "text",
        value: "",
        props: { required: true, class: "inputText", disabled: "disabled" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-4 mt-4",
        isColummnDisplay: false,
        dataPath: "ExpirationDate",
      },
    ],
  },
  {
    key: "CancellationDetails",
    type: "Card",
    title: "Cancellation Details",
    className: " mt-4",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper px-3 commonShadow",
    controls: [
      {
        key: "cancellationeffectivedate",
        label: "Cancellation Effective Date",
        type: "date",
        props: { required: true, class: "inputText", min: "2022-12-28" },
        positionClass: "col-md-4",
        isColummnDisplay: false,
        errorMessage: "Please enter valid date - Minimum can be today",
        dataPath: "Transaction.EffectiveDate",
      },
      {
        key: "cancellationtype",
        label: "CANCELLATION TYPE",
        type: "select",
        props: { required: true, class: "inputText" },
        labelClass: "inputLabel",
        positionClass: "col-md-4",
        isColummnDisplay: false,
        options: [
          {
            key: "select",
            positionClass: "col-md-4",
            label: "Please Select Cancellation Type",
            name: "Please Select",
            value: "",
          },
          {
            key: "proratacancellation",
            positionClass: "col-md-4",
            label: "Pro Rata Cancellation",
            name: "Pro Rata Cancellation",
            value: "ProRate",
          },
          {
            key: "flatcancellation",
            positionClass: "col-md-4",
            label: "Flat Cancellation",
            name: "Flat Cancellation",
            value: "Flat",
          },
          {
            key: "shortratecancellation",
            positionClass: "col-md-4",
            label: "Short Rate Cancellation",
            name: "Short Rate Cancellation",
            value: "ShortRate",
          },
        ],
        errorMessage: "Please select Cancellation Type",
        dataPath: "Transaction.PremiumType",
      },
      {
        key: "requestedby",
        label: "REQUESTED BY",
        type: "select",
        props: { required: true, class: "inputText" },
        labelClass: "inputLabel",
        positionClass: "col-md-4",
        isColummnDisplay: false,
        options: [
          {
            key: "select",
            positionClass: "col-md-4",
            label: "Please Select Requested By",
            name: "Please Select",
            value: "",
          },
          {
            key: "agent/retaileragt",
            positionClass: "col-md-4",
            label: "Agent/Retailer-AGT",
            name: "Agent/Retailer-AGT",
            value: "Agent/Retailer-AGT",
          },
          {
            key: "company/carrier",
            positionClass: "col-md-4",
            label: "Company/Carrier",
            name: "Company/Carrier",
            value: "Company/Carrier",
          },
          {
            key: "insuredins",
            positionClass: "col-md-4",
            label: "Insured-INS",
            name: "Insured-INS",
            value: "Insured-INS",
          },
        ],
        errorMessage: "Please select Requested By",
        dataPath: "Transaction.RequestedBy",
      },
      {
        key: "reason",
        label: "REASON",
        type: "select",
        props: { required: true, class: "inputText" },
        labelClass: "inputLabel",
        positionClass: "col-md-4 mt-4",
        isColummnDisplay: false,
        options: [
          {
            key: "select",
            positionClass: "col-md-4",
            label: "Please Select Reason",
            name: "Please Select",
            value: "",
          },
          {
            key: "agenttermination",
            positionClass: "col-md-4",
            label: "Agent Termination",
            name: "Agent Termination",
            value: "Agent Termination",
          },
          {
            key: "businessvehiclessold",
            positionClass: "col-md-4",
            label: "Business/Vehicles Sold",
            name: "Business/Vehicles Sold",
            value: "Business/Vehicles Sold",
          },
          {
            key: "companygrowth",
            positionClass: "col-md-4",
            label: "Company Growth",
            name: "Company Growth",
            value: "Company Growth",
          },
          {
            key: "moralhazard",
            positionClass: "col-md-4",
            label: "Existence of Moral Hazard",
            name: "Existence of Moral Hazard",
            value: "Existence of Moral Hazard",
          },
          {
            key: "insuredfailure",
            positionClass: "col-md-4",
            label: "Failure of the Insured to Provide UW Information",
            name: "Failure of the Insured to Provide UW Information",
            value: "Failure of the Insured to Provide UW Information",
          },
          {
            key: "complyfailure",
            positionClass: "col-md-4",
            label: "Failure to Comply with Recommendations",
            name: "Failure to Comply with Recommendations",
            value: "Failure to Comply with Recommendations",
          },
          {
            key: "coverageelsewhere",
            positionClass: "col-md-4",
            label: "Insured Placed Coverage Elsewhere",
            name: "Insured Placed Coverage Elsewhere",
            value: "Insured Placed Coverage Elsewhere",
          },
          {
            key: "insuredrequest",
            positionClass: "col-md-4",
            label: "Insured's Request",
            name: "Insured's Request",
            value: "Insured's Request",
          },
          {
            key: "lackofcooperation",
            positionClass: "col-md-4",
            label: "Lack of Cooperation from the Insured",
            name: "Lack of Cooperation from the Insured",
            value: "Lack of Cooperation from the Insured",
          },
          {
            key: "materialmisrepresentation",
            positionClass: "col-md-4",
            label: "Material Misrepresentation",
            name: "Material Misrepresentation",
            value: "Material Misrepresentation",
          },
          {
            key: "premiumnonpayment",
            positionClass: "col-md-4",
            label: "Non-Payment of Premium-Agency",
            name: "Non-Payment of Premium-Agency",
            value: "Non-Payment of Premium-Agency",
          },
        ],
        errorMessage: "Please select reason",
        dataPath: "Transaction.Reason",
      },
      {
        key: "cancellationterms",
        label: "CANCELLATION TERMS/NOTES",
        type: "text",
        value: "",
        props: {
          class: "inputText",
          placeholder: "Please enter cancellation notes (Max 200 characters",
          maxlength: "200",
        },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-4 mt-4",
        isColummnDisplay: false,
        errorMessage: "Please enter Cancellation Notes",
        dataPath: "Transaction.Remarks",
      },
    ],
  },
];

const dummyFunction = (type) => {alert(`${type} clicked`)};
const onSchemaChange = (changedSchema, key) => {};
const onFormSubmit = (model) => {};
const downloadForm = (tempSummary) => {};

const showCalculateBtn = true;
const showActionButton = true;
const showCard = true;
const showRejectButton = true;
const showOnHoldButton = true;
const showViewFormButton = true;
const requestCancellation = false;
const showAdjustPremiumButton = true;
const showSignButton = false;
const downloadSignButton = false;
const showDocumentsCard = true;
const showExitButton = true;
const showApprovaCancelButton = true;
const showSignature = true;
const showRevertBtn = false;
const showSubmitForApproval = false;
let totalFeesAndTaxes = cancellationLandingData?.FeesAndTaxes?.reduce(
  (x, y) => x + y.Amount,
  0
);

const UploadDocumentSchema = [
  {
    key: "UploadDocument",
    type: "Card",
    title: "Upload Document",
    className: "container",
    titleclassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper border-0 px-3 commonShadow",
    controls: [
      {
        key: "documenttype",
        label: "Document Type",
        type: "select",
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
        options: [
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
          { value: "3", label: "Three" },
        ],
      },
      {
        key: "doc_desc",
        label: "Document Description",
        type: "text",
        dataPath: "Risks.Vehicles.@index.VIN",
        props: {
          className: "inputText",
          placeholder: "Document Description",
          required: true,
        },
        positionClass: "col-md-3",
        isColummnDisplay: false,
      },
      {
        key: "uploadfile",
        type: "button",
        name: "upload document",
        value: "upload document",
        positionClass: "col-md-3 ",
        props: {
          className: "btn btnStyle btnPrim",
        },
      },
    ],
  },
];

const UploadDocumentModalForm = {
  schema: UploadDocumentSchema,
  dataModel: {},
  onSchemaChange: (model, key) => {
    console.log(model);
  },
  onFormSubmit: (dataModel, event) => console.log(dataModel), //onRejectReinstatement(dataModel, event),
};

const RejectSchema = [
  {
    key: "RejectSchema",
    type: "Card",
    title: "Reject Cancellation",
    className: " clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper px-3 commonShadow",

    controls: [
      {
        key: "remarks",
        label: "Remarks",
        type: "text",
        value: "",
        props: { required: true, class: "inputText" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-12",
        isColummnDisplay: false,
        dataPath: "PolicyNumber",
      },
    ],
  },
];
const HoldSchema = [
  {
    key: "holdschema",
    type: "Card",
    title: "Hold Cancellation",
    className: " clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper px-3 commonShadow",

    controls: [
      {
        key: "remarks",
        label: "Remarks",
        type: "text",
        value: "",
        props: { required: true, class: "inputText" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-12",
        isColummnDisplay: false,
        dataPath: "PolicyNumber",
      },
    ],
  },
];

//
const adjustPremiumSchema = [
  {
    key: "assurantAdjustPremiumCard",
    type: "Card",
    title: "ADJUST PREMIUM ASSURANT",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "mb-4 pb-4",
    // "conditionalDisplay": [{
    //   "src": "0.Risks.Vehicles",
    //   "exp": "any",
    //   "needRefComp": false,
    //   "target": "x=> x.Carrier=='ASSURANT'",
    //   "connector": "&&"
    // }],
    controls: [
      {
        key: "enterAssurantValue",
        label: "Assurant Amount",
        prefix: "$",
        props: { class: "inputText" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-6 align-self-start",
        isColummnDisplay: false,
        errorMessage: "Please enter a valid amount",
        dataPath: "0.PolicyCoverages.Coverages.5.Limit",
      },
      {
        key: "enterAssurantReason",
        label: "Assurant Reason",
        type: "textarea",
        props: {
          class: "inputText",
          placeholder: "Please enter Assurant Adjust Premium Reason",
          maxlength: "200",
        },
        labelClass: "inputLabel",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        errorMessage: "Please enter Assurant Adjust Premium Reason",
        dataPath: "0.PolicyCoverages.Coverages.5.ExpenseType",
      },
    ],
  },
  {
    key: "gaicAdjustPremiumCard",
    type: "Card",
    title: "ADJUST PREMIUM GAIC",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "border-0 noBorder",
    // "conditionalDisplay": [{
    //   "src": "1.Risks.Vehicles",
    //   "exp": "any",
    //   "needRefComp": false,
    //   "target": "x=> x.Carrier!='ASSURANT'",
    //   "connector": "&&"
    // }],
    controls: [
      {
        key: "enterGAICValue",
        label: "GAIC Amount",
        prefix: "$",
        props: { class: "inputText" },
        inputClass: "d-flex flex-nowrap",
        labelClass: "inputLabel",
        positionClass: "col-md-6 align-self-start",
        isColummnDisplay: false,
        errorMessage: "Please enter a valid amount",
        dataPath: "1.PolicyCoverages.Coverages.5.Limit",
      },
      {
        key: "enterGAICReason",
        label: "GAIC Reason",
        type: "textarea",
        props: {
          class: "inputText",
          placeholder: "Please enter GAIC Adjust Premium Reason",
          maxlength: "200",
        },
        labelClass: "inputLabel",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        errorMessage: "Please enter GAIC Adjust Premium Reason",
        dataPath: "1.PolicyCoverages.Coverages.5.ExpenseType",
      },
    ],
  },
];

// Modals
const RejectModalForm = {
  header:"Cancellation",
  schema: RejectSchema,
  dataModel: cancellationLandingData,
  onSchemaChange: (model, key) => {
    console.log(model);
  },
  onFormSubmit: (dataModel, event) => console.log(dataModel), //onRejectReinstatement(dataModel, event),
};
const HoldModalForm = {
  header:"Cancellation",
  schema: HoldSchema,
  dataModel: {},
  onSchemaChange: (model, key) => {
    console.log(model);
  },
  onFormSubmit: (dataModel, event) => console.log(dataModel), //onHoldReinstatement(dataModel, event),
};
const SubmitSignatureForm = {
  header:"Cancellation",
  schema: HoldSchema,
  dataModel: {},
  onSchemaChange: (model, key) => {
    console.log(model);
  },
  onFormSubmit: (dataModel, event) => console.log(dataModel), //onHoldReinstatement(dataModel, event),
};

const AdjustPremiumForm = {
  header:"Cancellation Header",
  schema: adjustPremiumSchema,
  dataModel: {},
  onSchemaChange: (model, key) => {
    console.log(model);
  },
  onFormSubmit: (dataModel, event) => console.log(dataModel),
};

const OverrideReturnPremiumForm = {
  schema: adjustPremiumSchema,
  dataModel: {},
  onSchemaChange: (model, key) => {
    console.log(model);
  },
  onFormSubmit: (dataModel, event) => console.log(dataModel),
};

const OverrideFeesForm = {
  schema: adjustPremiumSchema,
  dataModel: {},
  onSchemaChange: (model, key) => {
    console.log(model);
  },
  onFormSubmit: (dataModel, event) => console.log(dataModel),
};

// Alert Modals
const RevertAlertModalForm = {
  title: "Are you Sure to Revert?",
  onSuccess: ()=> dummyFunction("Revert Alert Clicked")
}

const ApproveAlertModalForm = {
  title: "Are you Sure to Cancel Policy?",
  onSuccess: ()=> dummyFunction("Cancelled Clicked")
}

const AbandonCancelAlertModalForm = {
  title: "Are you Sure to Abandon Cancel Policy?",
  onSuccess: ()=> dummyFunction("Abandon Cancelled Clicked")
}



const uploadDocsTableRows = ["dummy", "dummy", "dummy", "dummy"];
const uploadDocsTableCols = [
  {
    dataField: "type",
    text: "DOCUMENT TYPE",
    sort: false,
  },
  {
    dataField: "upload_date",
    text: "UPLOAD DATE",
    sort: false,
  },
  {
    dataField: "doc_desc",
    text: "DOCUMENT DESCRIPTION",
    sort: false,
    hidden: false,
  },
  {
    dataField: "actions",
    text: "ACTIONS",
    sort: false,
    hidden: false,
  },
];
const documentTable = {
  tableRows: uploadDocsTableRows,
  tableCols: uploadDocsTableCols,
};

const ButtonStatus = {
  showCalculateBtn: showCalculateBtn,
  cancellationcard: true,
  showOnRejectBtn: showRejectButton,
  showOnHoldBtn: showOnHoldButton,
  showDownloadFormBtn: showViewFormButton,
  showRequestToCancelationBtn: requestCancellation,
  showAdjustPremiumBtn: false,
  showApproveCancelationBtn: showApprovaCancelButton,
  showSignature: false,
  showSendSignatureBtn: showSignButton,
  showDownloadSignatureBtn: downloadSignButton,
  showDocumentsCard: false,
  showExitBtn: showExitButton,
  showActionButton: showActionButton,
  showRevertBtn: true,
  showSubmitForApprovalBtn: showSubmitForApproval,
  showBtnCenter: false,
  showSubmitSignature: true,

  showOverrideFees: false,
  showOverrideReturnPremium: false,
  showResendSignature: false,
  showCreateNoticeBtn: false,
  showAbandonCancellationBtn: false,
  showCreateRecessionNoticeBtn: true
};

const config = {
  PageDesc: "Page captures details about cancellation of a policy.",
  pageTitle: "Commercial Auto - Cancellation",
  signatureStatement: `I have read the above application and any
  attachments. I declare that the information
  provided in them is true, complete and correct to
  the best of my knowledge and belief. This
  information is being offered to the company as an
  inducement to issue the policy for which I am
  applying.`,
};

const cancellationCardConfig = {
  title: "Return Premium Information",
  withoutFeesTxt: "Return Premium Amount",
  feesAndTaxesTxt: "Return SurplusLine Tax",
  withFeesTxt: "Return Premium With Fees & Taxes",
  isSplitOverlay: true,
}

const CancellationLandingArgs = {
  config: config,
  cancellationLandingData: cancellationLandingData,
  cancellationSchema: cancellationUISchema,
  // tableCols: uploadDocsTableCols,
  documentTable: documentTable,
  toggleStatus: ButtonStatus,

  RejectModalForm: RejectModalForm,
  HoldModalForm: HoldModalForm,
  AdjustPremiumForm: AdjustPremiumForm,
  SubmitSignatureForm:SubmitSignatureForm,
  OverrideFeesForm,
  OverrideReturnPremiumForm,
  ResendSignatureForm: SubmitSignatureForm,
  // RevertModalForm: HoldModalForm,

  RevertAlertModalForm,
  ApproveAlertModalForm,
  AbandonCancelAlertModalForm,

  UploadDocumentModalForm: UploadDocumentModalForm,
  totalFeesAndTaxes: totalFeesAndTaxes,
  tableRows: uploadDocsTableRows,
  onSchemaChange: onSchemaChange,
  downloadForm: downloadForm,
  RequestCancellation: dummyFunction,
  onFormSubmit: onFormSubmit,
  sendSignature: dummyFunction,
  downloadSignature: dummyFunction,
  ApproveCancellation: dummyFunction,
  onUploadDocuments: dummyFunction,
  ExitPage: dummyFunction,
  AdjustPremium: dummyFunction,
  submitForApproval: dummyFunction,
  RevertPolicy: dummyFunction,
  createNoticeHandler: ()=>dummyFunction("Create Notice"),

  cancellationCardConfig,
  closeModalPopUp: true,

  CreateRecessionNotice: () => dummyFunction("Create Recession Notice"),
};

export default {
  title: "Design System/Business/Components/Cancellation",
  component: CancellationLanding,
  argTypes: {
    cancellationLandingData: {
      description: "Cancellation Details",
      table: {
        category: "Key Params",
      },
    },
    cancellationSchema: {
      description: "The Cancellation Schema",
      table: {
        category: "Key Params",
      },
    },
    cancellationcard: {
      description:
        "Card to show after the calculate button is clicked, this card has premium details, applicant's statement and action buttons",
      table: {
        category: "Toggle",
      },
    },
    showRejectButton: {
      description: "The Reject Cancellation button",
      table: {
        category: "Toggle",
      },
    },
    showOnHoldButton: {
      description: "The On Hold Cancellation Button",
      table: {
        category: "Toggle",
      },
    },
    showViewFormButton: {
      description: "The View Forms buttons",
      table: {
        category: "Toggle",
      },
    },
    requestCancellation: {
      description: "The Request to Cancellation Button",
      table: {
        category: "Toggle",
      },
    },
    showAdjustPremiumButton: {
      description: "The Adjust Premium Button",
      table: {
        category: "Toggle",
      },
    },
    showSignButton: {
      description: "The Send Signature Button",
      table: {
        category: "Toggle",
      },
    },
    downloadSignButton: {
      description: "The Download Signature Button",
      table: {
        category: "Toggle",
      },
    },
    showDocumentsCard: {
      description:
        "The Card which allows to upload documents and shows a table with uploaded documents and its details",
      table: {
        category: "Toggle",
      },
    },
    showExitButton: {
      description: "The Exit button",
      table: {
        category: "Toggle",
      },
    },
    showApprovaCancelButton: {
      description: "The Approve Cancellation button",
      table: {
        category: "Toggle",
      },
    },
    showSignature: {
      description:
        "The card for showing the applicant's statement along with insured signature button",
      table: {
        category: "Toggle",
      },
    },
    onSchemaChange: {
      description: "The event fired when the schema changes",
      table: {
        category: "Event",
      },
    },
    downloadForm: {
      description: "The event fired when viewform button is clicked",
      table: {
        category: "Event",
      },
    },
    RequestToCancelPolicy: {
      description: "event fired when request to cancellation button is clicked",
      table: {
        category: "Event",
      },
    },
    onFormSubmit: {
      description: "the event fired when calculate button is clicked",
      table: {
        category: "Event",
      },
    },
    onRejectCancellation: {
      description: "the event fired when reject button is clicked",
      table: {
        category: "Event",
      },
    },
    ButtonStatus: {
      description:
        "The object contains the flags for all buttons in cancellation and reinstatement components",
      table: {
        category: "key Params",
      },
    },
    config: {
      description: "Object containing general information",
      table: {
        category: "Key Params",
      },
    },
  },
};

const Template = (args) => <CancellationLanding {...args} />;

export const CancellationLandingComp = Template.bind({});
CancellationLandingComp.args = CancellationLandingArgs;
