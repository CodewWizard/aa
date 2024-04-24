import React from "react";
import renderer, { act } from "react-test-renderer";
import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { onHoldUISchema, onRejectUISchema, config, toggleStatus } from "../utilities/configs";
import ReinstatementFunctional from "../reinstatementfunctional";
import * as utils from "@cogitate/ui-utils-core-test";
import '@testing-library/jest-dom'

let dformat = '2023-01-01';
let defaultExpiryDate = '2024-01-01';
let defaultQuoteExpDate = '2023-02-01';
const INITIAL_STATE = {
  id: "",
  AccountId: "UW",
  QuoteNumber: "",
  IsPolicyBind: "false",
  IsRenewed: false,
  PolicyNumber: "1234", //ash
  PolicyTerm: "365",
  EffectiveDate: "2002-01-01",
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
      Amount: 100,
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
        label: "Reinstatement Effective Date*",
        type: "date",
        props: {
          required: true,
          class: "inputText",
          disabled: true,
        },
        positionClass: "col-md-4",
        isColummnDisplay: false,
        errorMessage: "Please select Valid Date",
        dataPath: "Transaction.EffectiveDate",
      },
      {
        key: "reason",
        label: "Reinstatement Reason*",
        type: "select",
        props: {
          required: true,
          class: "inputText",
          disabled: true,
        },
        labelClass: "inputLabel",
        positionClass: "col-md-4",
        isColummnDisplay: false,
        options: [
          {
            key: "Please Select",
            label: "Please Select",
            value: "",
          },
          {
            positionClass: "col-md-4",
            name: "Insured Request",
            key: "Insured Request",
            label: "Insured Request",
            value: "Insured Request",
          },
          {
            positionClass: "col-md-4",
            name: "Non Pay Finance",
            key: "Non Pay Finance",
            label: "Non Pay Finance",
            value: "Non Pay Finance",
          },
          {
            positionClass: "col-md-4",
            name: "Double Coverage",
            key: "Double Coverage",
            label: "Double Coverage",
            value: "Double Coverage",
          },
          {
            positionClass: "col-md-4",
            name: "VOID AB INITIO",
            key: "VOID AB INITIO",
            label: "VOID AB INITIO",
            value: "VOID AB INITIO",
          },
          {
            positionClass: "col-md-4",
            name: "MMR-During Review Period",
            key: "MMR-During Review Period",
            label: "MMR-During Review Period",
            value: "MMR-During Review Period",
          },
          {
            positionClass: "col-md-4",
            name: "MMR-After Review Period",
            key: "MMR-After Review Period",
            label: "MMR-After Review Period",
            value: "MMR-After Review Period",
          },
          {
            positionClass: "col-md-4",
            name: "Out of State",
            key: "Out of State",
            label: "Out of State",
            value: "Out of State",
          },
          {
            positionClass: "col-md-4",
            name: "Recancel back to Orig cancel effective date- PR",
            key: "Recancel back to Orig cancel effective date- PR",
            label: "Recancel back to Orig cancel effective date- PR",
            value: "Recancel back to Orig cancel effective date- PR",
          },
          {
            positionClass: "col-md-4",
            name: "Underwriter's Judgment-Fail to provide license Info",
            key: "Underwriter's Judgment-Fail to provide license Info",
            label: "Underwriter's Judgment-Fail to provide license Info",
            value: "Underwriter's Judgment-Fail to provide license Info",
          },
          {
            positionClass: "col-md-4",
            name: "Underwriter's Judgment-No Excluded driver Endorsement",
            key: "Underwriter's Judgment-No Excluded driver Endorsement",
            label: "Underwriter's Judgment-No Excluded driver Endorsement",
            value: "Underwriter's Judgment-No Excluded driver Endorsement",
          },
          {
            positionClass: "col-md-4",
            name: "Underwriter's Judgment-Failure to respond to UW memo",
            key: "Underwriter's Judgment-Failure to respond to UW memo",
            label: "Underwriter's Judgment-Failure to respond to UW memo",
            value: "Underwriter's Judgment-Failure to respond to UW memo",
          },
          {
            positionClass: "col-md-4",
            name: "Underwriter's Judgment-Exceed Mac Violation points",
            key: "Underwriter's Judgment-Exceed Mac Violation points",
            label: "Underwriter's Judgment-Exceed Mac Violation points",
            value: "Underwriter's Judgment-Exceed Mac Violation points",
          },
          {
            positionClass: "col-md-4",
            name: "Underwriter's Judgment-Ins risk on new drv/veh after rev period",
            key: "Underwriter's Judgment-Ins risk on new drv/veh after rev period",
            label:
              "Underwriter's Judgment-Ins risk on new drv/veh after rev period",
            value:
              "Underwriter's Judgment-Ins risk on new drv/veh after rev period",
          },
          {
            positionClass: "col-md-4",
            name: "Underwriter's Judgment-Allowing excl driver access to insured veh",
            key: "Underwriter's Judgment-Allowing excl driver access to insured veh",
            label:
              "Underwriter's Judgment-Allowing excl driver access to insured veh",
            value:
              "Underwriter's Judgment-Allowing excl driver access to insured veh",
          },
          {
            positionClass: "col-md-4",
            name: "Underwriter's Judgment-Signed App not rec'd",
            key: "Underwriter's Judgment-Signed App not rec'd",
            label: "Underwriter's Judgment-Signed App not rec'd",
            value: "Underwriter's Judgment-Signed App not rec'd",
          },
          {
            positionClass: "col-md-4",
            name: "Signed Application not Received",
            key: "Signed Application not Received",
            label: "Signed Application not Received",
            value: "Signed Application not Received",
          },
        ],
        errorMessage: "Please select reason",
        dataPath: "Transaction.Reason",
      },
      {
        key: "signatureType",
        label: "Signature Type",
        type: "select",
        props: {
          class: "inputText",
          required: false,
          disabled: false,
        },
        className: "display-none",
        labelClass: "inputLabel",
        positionClass: "col-md-4 mb-3",
        isColummnDisplay: false,
        dataPath: "SignatureType",
        options: [
          {
            key: "SelectSignatureType",
            label: "Please Select",
            value: "",
          },
          {
            key: "electronic",
            label: "Electronic",
            value: "Electronic",
          },
          {
            key: "handwritten",
            label: "Wet/Handwritten",
            value: "Wet/Handwritten",
          },
        ],
      },
      {
        key: "reinstatementterms",
        label: "Reinstatement Terms/Notes",
        type: "textarea",
        value: "",
        props: {
          class: "inputText",
          placeholder: "Enter Reinstatement Notes",
          maxlength: "200",
          disabled: false,
          required: false,
        },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-md-4",
        isColummnDisplay: false,
        errorMessage: "Please enter Reinstatement Notes",
        dataPath: "Transaction.Remarks",
      },
    ],
  },
]
const ReinstatementLandingArgs = {
  uiDataModel: INITIAL_STATE,
  uiSchema: reinstatemenetUISchema,
  actionName: {
    RateEndorse: "rateEndorse"
  },
  mutationQuery :{
    rateEndorsement: {},
    updatePolicy: {},
    triggerNotification: {},
    revertTransaction: {},
    bindReinstate: {},
  },
  requestedPage : {
    CancelLanding: "/Personal/Auto/Cancel/Landing/",
    ReinstateLanding: "/Personal/Auto/Reinstate/Landing/",
    documentOfNoLoss: "ih/personal/auto/ga/document_of_no_loss.html",
    applicationSummary: "/Personal/Auto/Application/Summary/",
  },
  keys: {
    reinstateStatus: "Active Policy",
    reinstateHold: 'Reinstatement Request On Hold',
    reinstateReject: 'Policy Cancelled',
    reinstatementRequestOnHold: "Reinstatement Request On Hold"
  },
  userType: "UW"
};

jest.mock("@cogitate/ui-utils-core-test", () => ({
  save: jest.fn(),
  updatePolicyStatus: jest.fn(),
  triggerNotification: jest.fn()
}));
jest.mock("nprogress", () => ({
  start: jest.fn(),
  done: jest.fn(),
}));

describe("Reinstatement Functional Component", () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it("should render given schema correctly", () => {
    const testRenderer = renderer.create(
      <ReinstatementFunctional {...ReinstatementLandingArgs} />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
    testRenderer.unmount();
  });

  it("should handle form submission", async () => {
    const saveMock = jest.spyOn(utils, "save").mockImplementation(()=>Promise.resolve([]));
    render(<ReinstatementFunctional {...ReinstatementLandingArgs} />);
    fireEvent.click(screen.getByText(/Calculate/));
  
    waitFor(() => {
      expect(saveMock).toHaveBeenCalledTimes(1);
    });
  });
  
  it("should show various buttons correctly and hide hold as policyStatus is Reinstatement on Hold", async () => {
    const saveMock = jest.spyOn(utils, "save").mockImplementation(()=>Promise.resolve({PolicyStatus: "Reinstatement Request On Hold"}));
    render(<ReinstatementFunctional {...ReinstatementLandingArgs} userType = {"UW"} />);
    const calculateBtn = screen.getByText(/Calculate/);
    fireEvent.click(calculateBtn);
  
    waitFor(() => {
      expect(saveMock).toHaveBeenCalled();
      expect(calculateBtn).not.toBeInTheDocument();
      expect(screen.getByText(/Approve/g)).toBeInTheDocument();
      expect(screen.getByText(/REJECT/g)).toBeInTheDocument();
      expect(screen.queryByText(/HOLD/g)).not.toBeInTheDocument();
      expect(screen.getByText(/Return Premium Information/)).toBeInTheDocument();
    });
  });
  
  it("should show various buttons correctly and show hold as userTpye is not uw", async () => {
    const saveMock = jest.spyOn(utils, "save").mockImplementation(()=>Promise.resolve([]));
    render(<ReinstatementFunctional {...ReinstatementLandingArgs} userType = "Agent" />);
    const calculateBtn = screen.getByText(/Calculate/);
    act(()=>{
      fireEvent.click(calculateBtn);
    })
  
    waitFor(() => {
      expect(saveMock).toHaveBeenCalled();
      expect(calculateBtn).not.toBeInTheDocument();
      expect(screen.getByText(/Approve/g)).toBeInTheDocument();
      expect(screen.getByText(/REJECT/g)).toBeInTheDocument();
      expect(screen.queryByText(/HOLD/g)).toBeInTheDocument();
      expect(screen.getByText(/Return Premium Information/)).toBeInTheDocument();
    });
  });
  
  it("should work without error when on reject clicked", () => {
    const saveMock = jest.spyOn(utils, "save").mockImplementation(()=>Promise.resolve([]));
    const updatePolicyStatusMock = jest.spyOn(utils, "updatePolicyStatus").mockImplementation(()=>Promise.resolve([]));
    render(<ReinstatementFunctional {...ReinstatementLandingArgs} userType = "Agent" />);
    const calculateBtn = screen.getByText(/Calculate/);
    act(()=>{
      fireEvent.click(calculateBtn);
    })
  
    waitFor(() => {    
      fireEvent.click(screen.getByRole("button", {name: "REJECT"}))
      waitFor(()=>{
        expect(saveMock).toHaveBeenCalled();
        expect(updatePolicyStatusMock).toHaveBeenCalled();
      })
    });
  });
  
  it("should work without error when on hold clicked", async () => {
    const saveMock = jest.spyOn(utils, "save").mockImplementation(()=>Promise.resolve([]));
    const updatePolicyStatusMock = jest.spyOn(utils, "updatePolicyStatus").mockImplementation(()=>Promise.resolve([]));
    render(<ReinstatementFunctional {...ReinstatementLandingArgs} userType = "Agent" />);
    const calculateBtn = screen.getByText(/Calculate/);
    act(()=>{
      fireEvent.click(calculateBtn);
    })
  
    waitFor(() => {    
      fireEvent.click(screen.getByRole("button", {name: "HOLD"}))
      waitFor(()=>{
        expect(saveMock).toHaveBeenCalled();
        expect(updatePolicyStatusMock).toHaveBeenCalled();
      })
    });
  });
  
  it("should work without error when on approve reinstatement clicked", async () => {
    const saveMock = jest.spyOn(utils, "save").mockImplementation(()=>Promise.resolve([]));
    render(<ReinstatementFunctional {...ReinstatementLandingArgs} userType = "Agent" />);
    const calculateBtn = screen.getByText(/Calculate/);
    act(()=>{
      fireEvent.click(calculateBtn);
    })
  
    waitFor(() => {    
      fireEvent.click(screen.getByRole("button", {name: "Approve Reinstatement"}))
      waitFor(()=>{
        expect(saveMock).toHaveBeenCalled();
      })
    });
  });
  
  // it("should show View/Download Forms when signature type is Wet/Handwritten", async () => {
  //   const triggerNotificationMock = jest.spyOn(utils, "triggerNotification").mockImplementation(()=>Promise.resolve({}));
  //   render(<ReinstatementFunctional {...ReinstatementLandingArgs} userType = "Agent" />);
  //   window.URL.createObjectURL = jest.fn();
  //   const signType = screen.getAllByRole("combobox");
  //   fireEvent.change(signType[1], {target: {value: "Wet/Handwritten"}});
  
  //   waitFor(()=>{
  //     expect(screen.getByText("View Forms")).toBeInTheDocument();
  //     fireEvent.click(screen.getByText("View Forms"));

  //     waitFor(()=>{
  //       expect(triggerNotificationMock).toHaveBeenCalled();
  //     })
  //   });
    
  // });

  it("should hide View/Download Forms when signature type is Electronic", async () => {
    render(<ReinstatementFunctional {...ReinstatementLandingArgs} userType = "Agent" />);
    const signType = screen.getAllByRole("combobox");
    fireEvent.change(signType[1], {target: {value: "Electronic"}});
  
    waitFor(()=>{
      expect(screen.getByText("View Forms")).not.toBeInTheDocument();
    });
    
  });
  
  it("should handle error save throws error", async () => {
    const saveMock = jest.spyOn(utils, "save").mockImplementation(()=>Promise.resolve([]));
    render(<ReinstatementFunctional {...ReinstatementLandingArgs} userType = "Agent" />);
    const calculateBtn = screen.getByText(/Calculate/);
    act(()=>{
      fireEvent.click(calculateBtn);
    })
  
    waitFor(() => { 
      expect(saveMock).not.toHaveBeenCalled();
      expect(calculateBtn).toBeInTheDocument();
      expect(screen.getByText(/Approve/g)).not.toBeInTheDocument();
      expect(screen.getByText(/REJECT/g)).not.toBeInTheDocument();
      expect(screen.queryByText(/HOLD/g)).not.toBeInTheDocument();
      expect(screen.getByText(/Return Premium Information/)).not.toBeInTheDocument();
    });
  });
})