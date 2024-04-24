import React from "react";
import ReinstatementLanding from "./landing";

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

const INITIAL_STATE = {
  id: "",
  AccountId: "UW",
  QuoteNumber: "",
  IsPolicyBind: "false",
  IsRenewed: false,
  PolicyNumber: "1234", //ash
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
  // Agency: { ...singleUser },
  // Agent: { ...singleUser },
  // UnderWriter: { ...singleUser },
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
      BusinessName: "IH", //ash
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
      Locations: [
        {
          Address: {
            FormattedAddress: "211 East Ohio Street",
            UnFormattedAddress: "211 East Ohio Street, Chicago, IL, USA",
          },
        },
      ],
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
    Type: "Reinstate", //"Reinstate", "Quote"
    Status: "Ready-To-Commit", //"Ready-To-Commit", ""
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
    EffectivePremium: 2000.0,
    PriorAnnualPremium: 0.0,
    AnnualPremiumWithFeesAndTaxes: 0.0,
    EffectivePremiumWithFeesAndTaxes: 2250.0,
  },
  Premium: {
    BasicPremium: "",
    Surcharge: "",
    Discount: "",
    MinPremium: "",
    PolicyPremium: "",
    TotalSalePrice: "",
    EffectivePremium: 2000.0,
    EffectivePremiumWithFeesAndTaxes: 0.0,
    AnnualPremium: 0.0,
    AnnualPremiumWithFeesAndTaxes: 0.0,
  },
  PremiumFactors: [],
  FeesAndTaxes: [
    {
      Amount: -100,
      ProductFeesAndTaxes: {
        Description: "Stamping Fee",
      },
    },
    {
      Amount: 150,
      ProductFeesAndTaxes: {
        Description: "SurplusLine Tax",
      },
    },
  ],
  Risks: {
    Vehicles: [
      {
        ClassificationType: "TRUCKS, TRACTORS AND TRAILERS",
      },
    ],
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

const reinstatemenetUISchema = [
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
        props: { required: true, class: "inputText", disabled: "disabled" }, //ashwith
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-4",
        isColummnDisplay: false,
        dataPath:
          "InsuredAccount.BusinessInfo.Locations.0.Address.UnFormattedAddress",
      },
      {
        key: "classificationtype",
        label: "CLASSIFICATION TYPE",
        type: "text",
        value: "",
        props: { required: true, class: "inputText", disabled: "disabled" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-4 mt-4",
        isColummnDisplay: false,
        dataPath: "Risks.Vehicles.0.ClassificationType",
      },
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
    key: "ReinstatementDetails",
    type: "Card",
    title: "Reinstatement Details",
    className: " mt-4",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper px-3 commonShadow",
    controls: [
      {
        key: "reinstatementeffectivedate",
        label: "Reinstatement Effective Date",
        type: "date",
        props: { required: true, class: "inputText", min: dformat },
        positionClass: "col-md-4",
        isColummnDisplay: false,
        errorMessage: "Please select Valid Reinstatement Effective Date",
        dataPath: "Transaction.EffectiveDate",
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
        positionClass: "col-md-4",
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
            key: "cancellationissuedinerror",
            positionClass: "col-md-4",
            label: "Cancellation Issued In Error",
            name: "Cancellation Issued In Error",
            value: "Cancellation Issued In Error",
          },
          {
            key: "paymentrecievedbyagency",
            positionClass: "col-md-4",
            label: "Payment Recieved By Agency",
            name: "Payment Recieved By Agency",
            value: "Payment Recieved By Agency",
          },
        ],
        errorMessage: "Please select Reason",
        dataPath: "Transaction.Reason",
      },
      {
        key: "reinstatementterms",
        label: "REINSTATEMENT TERMS/NOTES",
        type: "text",
        value: "",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Please enter reinstatement notes (Max 200 characters)",
          maxlength: "200",
        },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-4 mt-4",
        isColummnDisplay: false,
        errorMessage: "Please enter Reinstatement Notes",
        dataPath: "Transaction.Remarks",
      },
    ],
  },
];

let reinstatementcard = true;
let showActionButton = true;

let showSignature = true;
let showCalculateBtn = true;
let showOnRejectBtn = true;
let showSubmitForApprovalBtn = false;
let showOnHoldBtn = true;
let showApproveBtn = true;
let showRequestToReinstatementBtn = false;
let showExitBtn = true;
let showDownloadFormBtn = false;
let showRevertBtn = true;

const asyncsavedummy = async () => {
  let valid = true;
  if (valid) {
    return {
      Transaction: {
        Verification: {
          IsInsuredESignVerified: "true",
        },
      },
    };
  }
  return false;
};

const onSchemaChange = (changedSchema, key) => {
  console.log('onSchemaChange');
};

const onFormSubmit = async (model) => {
  console.log('onFormSubmit');
};

const onRejectReinstatement = async (e) => {
  console.log('onRejectReinstatement');
};

const onHoldReinstatement = async (e) => {
  console.log('onHoldReinstatement');
};

const downloadForm = async (tempSummary) => {
  console.log('downloadForm');
};

const ReinstatePolicy = async () => {
  console.log('ReinstatePolicy');
};

const submitForApproval = () => {
  alert("Success submitForApproval");
};

const RequestToReinstatePolicy = () => {
  alert("Success RequestToReinstatePolicy");
};
const ExitHandler = () => {
  alert("Success ExitHandler");
};
const RevertPolicy = () => {
  alert("Success RevertPolicy");
};

const dummyFunction = (type) => {alert(`${type} Clicked`)}

const RejectSchema = [
  {
    key: "RejectSchema",
    type: "Card",
    title: "Reject Reinstatement",
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
        dataPath: "Remarks",
      },
    ],
  },
];
const HoldSchema = [
  {
    key: "holdschema",
    type: "Card",
    title: "Hold Reinstatement",
    className: " clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper px-3 commonShadow",

    controls: [
      {
        key: "remarks",
        label: "Remarks",
        type: "image",
        value: "",
        props: { required: true, class: "inputText" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-12",
        isColummnDisplay: false,
        dataPath: "Remarks",
      },
    ],
  },
];

// Form Modals
const RejectModalForm = {
  header: "Reinstatement Header",
  schema: RejectSchema,
  dataModel: {},
  onSchemaChange: (model, key) => {
    console.log(model);
  },
  onFormSubmit: (dataModel, event) => console.log(dataModel), //onRejectReinstatement(dataModel, event),
};
const HoldModalForm = {
  header: "Reinstatement Header",
  schema: HoldSchema,
  dataModel: {},
  onSchemaChange: (model, key) => {
    console.log(model);
  },
  onFormSubmit: (dataModel, event) => console.log(dataModel), //onHoldReinstatement(dataModel, event),
};
const SubmitSignatureForm = {
  header: "Reinstatement Header",
  schema: HoldSchema,
  dataModel: {},
  onSchemaChange: (model, key) => {
    console.log(model);
  },
  onFormSubmit: (dataModel, event) => console.log(dataModel), //onHoldReinstatement(dataModel, event),
};

// Alert Modals
const RevertAlertModalForm = {
  title: "Are you Sure to Revert?",
  onSuccess: ()=> dummyFunction("Revert Alert Clicked")
}

const ApproveAlertModalForm = {
  title: "Are you Sure to Reinstate the Policy?",
  onSuccess: ()=> dummyFunction("Reinstatement Clicked")
}

const config = {
  PageTitle: "Commercial Auto - Reinstatement",
  PageDesc: "Page captures details about reinstatement of an application.",
  signatureStatement: `I have read the above application and any
  attachments. I declare that the information
  provided in them is true, complete and correct to
  the best of my knowledge and belief. This
  information is being offered to the company as an
  inducement to issue the policy for which I am
  applying.`,
};
const toggleStatus = {
  showCalculateBtn,

  reinstatementcard,

  showSignature: false,
  showSubmitForApprovalBtn,

  showActionButton,
  showOnRejectBtn,
  showOnHoldBtn,
  showApproveBtn,
  showDownloadFormBtn,
  showRequestToReinstatementBtn,
  showExitBtn,
  showRevertBtn,
  showBtnCenter: false,
  showSubmitSignature: false,
  showCreateRecessionNoticeBtn:  true
};

const reinstatementCardConfig = {
  title: "Return Premium Information",
  withoutFeesTxt: "Return Premium Amount",
  feesAndTaxesTxt: "Return SurplusLine Tax",
  withFeesTxt: "Return Premium With Fees & Taxes",
  isSplitOverlay: true,
}

const buttonSchema = [
  {
    key: "viewFormsBtn",
    value: "Download Statement No Loss",
    position: "left",
    // onClick: (e, key) => {
    //   console.log([key]);
    // },
    class: "",
    style: {},
    hide: false,
    disabled: false,
  },
  {
    key: "holdBtn",
    value: "Hold",
    position: "right",
    onClick: (e, key) => {
      console.log([key]);
    },
    class: "",
    style: {},
    hide: false,
    disabled: false,
  },
  {
    key: "rejectBtn",
    value: "Reject",
    position: "right",
    onClick: (e, key) => {
      console.log([key]);
    },
    class: "",
    style: {},
    hide: false,
    disabled: false,
  },
  {
    key: "approveBtn",
    value: "Approve",
    position: "right",
    onClick: (e, key) => {
      console.log([key]);
    },
    class: "",
    style: {},
    hide: false,
    disabled: false,
  },
];

const ReinstatementLandingArgs = {
  config,
  toggleStatus,
  uiDataModel: INITIAL_STATE,
  uiSchema: reinstatemenetUISchema,

  totalFeesAndTaxes: INITIAL_STATE?.FeesAndTaxes?.reduce(
    (x, y) => x + y.Amount,
    0
  ),

  onFormSubmit,
  onSchemaChange,
  downloadForm,
  ReinstatePolicy,
  submitForApproval,
  RevertPolicy,

  RequestToReinstatePolicy,
  ExitHandler,

  HoldModalForm,
  RejectModalForm,
  SubmitSignatureForm,

  RevertAlertModalForm,
  ApproveAlertModalForm,
  
  reinstatementCardConfig,
  buttonSchema,
  showhideButtons: {show: false, keys: [""]},
  closeModalPopUp: true,
  CreateRecessionNotice: dummyFunction
};

export default {
  title: "Design System/Business/Components/Reinstatement",
  component: ReinstatementLanding,
  argTypes: {
    onSchemaChange: {
      description:
        "This event get called everytime reinstatement details are changed",
      table: {
        category: "Event",
      },
    },
    onFormSubmit: {
      description:
        "This event get called when Calculate/Submit button is clicked",
      table: {
        category: "Event",
      },
    },
    downloadForm: {
      description: "This event get called when view/download form is clicked",
      table: {
        category: "Event",
      },
    },
    ReinstatePolicy: {
      description:
        "This event get called when Approve Reinstate button is clicked",
      table: {
        category: "Event",
      },
    },
    RequestToReinstatePolicy: {
      description:
        "This event get called when Request to Reinstate Policy button is called",
      table: {
        category: "Event",
      },
    },
    ExitHandler: {
      description: "This event get called when exit button is clicked",
      table: {
        category: "Event",
      },
    },
    submitForApproval: {
      description:
        "This event get called when submit for approval button is clicked.",
      table: {
        category: "Event",
      },
    },
    RevertPolicy: {
      description: "This event get called when Revert button is clicked.",
      table: {
        category: "Event",
      },
    },
    currencyFormat: {
      description: "Used to format currency",
      table: {
        category: "Utilities",
      },
    },
    renderFeesAndTaxes: {
      description:
        "Renders list of fees and taxes along with their description",
      table: {
        category: "Utilities",
      },
    },
    config: {
      description:
        "It includes general information like Page titile, Page description, etc",
      table: {
        category: "Key Params",
      },
    },
    uiDataModel: {
      description: "Reinstatement Data Model which passed into dynamic form",
      table: {
        category: "Key Params",
      },
    },
    uiSchema: {
      description: "Reinstatement Schema passed through dynamic form",
      table: {
        category: "Key Params",
      },
    },
    HoldModalForm: {
      description:
        "It is the schema for hold modal which contains properties like schema that is passed through dynamic form, dataModel, and various event handlers like onFormSubmit, onSchemaChange, etc. It is opened when on hold button is clicked",
      table: {
        category: "Key Params",
      },
    },
    RejectModalForm: {
      description:
        "It is the schema for reject modal which contains properties like schema that is passed through dynamic form, dataModel, and various event handlers like onFormSubmit, onSchemaChange, etc. It is opened when on reject button is clicked",
      table: {
        category: "Key Params",
      },
    },
    reinstatementcard: {
      description: "Toggles Reinstatement Premium details Card",
      table: {
        category: "Toggle",
      },
    },
    showActionButton: {
      description: "Toggles action button division based on certain conditions",
      table: {
        category: "Toggle",
      },
    },
    showSignature: {
      description:
        "Toggles Customer Statement(Signature) that asks for customer signature ",
      table: {
        category: "Toggle",
      },
    },
    showOnRejectBtn: {
      description: "Toggles Reject button",
      table: {
        category: "Toggle",
      },
    },
    showOnHoldBtn: {
      description: "Toggles on Hold button",
      table: {
        category: "Toggle",
      },
    },
    showApproveBtn: {
      description: "Toggles Approve button",
      table: {
        category: "Toggle",
      },
    },
    showRequestToReinstatementBtn: {
      description: "Toggles Request to Reinstatement button",
      table: {
        category: "Toggle",
      },
    },
    showExitBtn: {
      description: "Toggles Exit button",
      table: {
        category: "Toggle",
      },
    },
    showDownloadFormBtn: {
      description: "Toggles View/Download form button",
      table: {
        category: "Toggle",
      },
    },
    toggleStatus: {
      description:
        "It is the object of button and card status mentioned in toggle section.",
      table: {
        category: "Toggle",
      },
    },
    buttonSchema: {
      description:
        "dynamic buttons with various options like position(left, right, center), value, hide, disabled, key, onClick",
      table: {
        category: "Toggle",
      },
    },
  },
};

const Template = (args) => <ReinstatementLanding {...args} />;

export const ReinstatementComp = Template.bind({});
ReinstatementComp.args = ReinstatementLandingArgs;
