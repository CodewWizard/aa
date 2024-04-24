const storeKeys = {
    StoreMilestoneIndex: "MilestoneIndex",
    StoreNavigationIndex: "NavigationIndex",
    ShowLoader: "ShowLoader",
    IsAnalyticsDataLoaded: "IsAnalyticsDataLoaded",
    AnalyticsData: "AnalyticsData",
    ApplicationReducer: "applicationReducer",
    LoggedInUserReducer: "loggedInUserReducer",
    MasterReducer: "masterReducer",
    PolicyReducer: "policyReducer",
    VersionReducer: "versionReducer",
    SchemaReducer: "schemaReducer",
    MasterCoverageTemplates: "coverageTemplates",
    MultipleRatingResponse: "multipleRate"
};

const apolloKeys = {
    GetAll: "getAll",
    GetByFilter: "getByFilter",
    GetMultipleratingByFilter: "getComparativeRater",
    VersionUpdate: "versionUpdate",
    LoadUsersData: "loadUsersData",
    LoadMasters: "loadMasters",
    FetchCoverageOption: "fetchCoverageOption",
    PostMutation: "postItem",
    PutMutation: "putItem",
    RateMutation: "rateNewQuote",
    BindMutation:"saveAndBindNewBusiness",
    BindAction: "bind",
    MultipleRaterMutation: "MultipleRate",
    SaveSelectedIndex: "multipleRatesSave",
    RateAction: "RateNewQuote",
    OfferQuoteAction: "OfferQuote",
    OfferQuoteMutation: "offerQuote",
    UpdatePolicyStatus :"updatePolicyStatus",
    MultipleRateAction: "multipleRating",
    SaveMultipleAction: "saveMultiple",
    AuthenticateUser: "authenticateUser",
    PostToNotificationAPI: "postToNotificationAPI",
    ValidateOTP: "validateOTP",
    QueryByContainer: "queryByContainer",
    GetForms: "getForms",
    GetCoverageTemplate: "getTemplate",
    AddCoverageTemplate: "insertTemplate",
    MultipleBindAction: "multipleBind",
    MultipleBindMutation: "multipleBind",
    GetAnalyticsData: "getAnalytics",
    RenewPolicy: "renewPolicy",
    SaveConflicts: "saveConflicts",
    ProcessOOS: "processOutOfSequence",
    GetHash: "getHashing",
    GetAgents: "getAgents",
    GetAgencies: "getAgencies",
    GetUnderwriters: "getUnderwriters",
    StartEndorsement: "startEndorsement",
    RateEndorsement: "rateEndorsement",
    BindEndorsement: "bindEndorsement",
    StartCancellation: "startCancellation",
    BindCancellation: "bindCancellation",
    StartReinstate: "startReinstate",
    BindReInstate: "bindReinstate",
	RevertTransaction: "revertTransaction",
    RevertTransactionAction: "revert",
}

const commonKeys = {
    Code: "Code",
    Description: "Description",
    Value: "Value",
    Text: "Text",
    IsErrored: "IsErrored",
    Valid: "Valid",
    Errors: "Errors",
    EmptyString: "",
    DefaultTemplate: "Default Template",
    ModuleQuote: "Quote",
    ModuleApplication: "Application",
    ModuleEndorsement: "Endorsement",
    ModuleRenewal: "Renewal",
    ModuleCancel: "Cancel",
    ModuleReinstate: "Reinstate",
    RoleAgent: "Agent",
    Agency: "Agency",
    RoleOutsideMGA: "OutSideMGA",
    RoleUW: "UW",
    RoleSUW: "SUW",
    RoleUnderwriter: "Underwriter",
    ActionAllow: "Allow",
    ActionRefer: "Refer",
    ActionBlock: "Block",
    ActionInEligible: "InEligible",
    ActionEmailAgent: "agentEmail",
    ActionEmailUnderWriter: "underwriterEmail",
    ActionEmailFormalQuote: "EmailFormalQuote",
    ActionPrintQuote: "PrintQuote",
    ActionDownloadRatesheet: "DownloadRatesheet",
    ActionSmsQuote: "SmsQuote",
    ActionEmailAndDownload: "ActionEmailAndDownload",
    NotificationTypeSMS: "S",
    NotificationTypeEmail: "E",
    NotificationFormatHTML: "html",
    NotificationFormatPDF: "pdf",
    NotificationFormatTEXT: "text",
    TemplateNameNotificationAgent: "ROTHERT/templates/Personal/HO3/common/Notifications/templateForAgent.html",
    TemplateNameNotificationUnderWriter: "ROTHERT/templates/Personal/HO3/common/Notifications/templateForUnderWriter.html",
    TemplateNameNotificationFormalQuote: "toga/commercial/auto/common/formalquote.html",
    TemplateNameNotificationFormalQuoteMessageBody: "toga/commercial/auto/common/formalquotemessagebody.html",
    TemplateNameCancelReinstate: "toga/commercial/auto/common/REI_CAN_document.html",
    TemplateORRateSheet: "ROTHERT/templates/Personal/HO3/common/RateSheets/OR.html",
    TrueString: "true",
    FalseString: "false",
    PageChangeFormName: "pageChangeForm",
    New: "new",
    SubmitAndAddAnother: "submitAndAddAnother",
    SubmitOnly: "SubmitOnly",
    CloseModal: "closeModal",
    Completed: "completed",
    Errored: "errored",
    Deleted: "Deleted",
    DatatTableMode: "checkbox",
    AddNewDriver: "addnewDriver",
    Disabled: "disabled",
    Disable: "disable",
    Selected: "selected",
    Options: "options",
    FMCSA: "FMCSA",
    YesString: "Yes",
    NoString: "No",
    TemplateNameDeclineSubmission: "toga/templates/commercial/auto/common/notifications/submissiondecline.html",
    TemplateNameHoldSubmission: "toga/templates/commercial/auto/common/notifications/submissionhold.html",
    TemplateNameHazardHubDocument: "diep2/ROTHERT/templates/Personal/HO3/common/ThirdParty/templateForHazardHub.html",
    ThirdPartyDocument: "Third Party Document",
    Communications: 'Communications',
    Email: 'Email',
    PhoneNumber: 'Phone Number',
    UnderWriter: 'UnderWriter',
    Reason: 'Reason',
}

const axiosKeys = {
    PostAction: "POST",
    GetAction: "GET"
}

const routeKeys = {
    Root: "/",
    InternalServerError: "/500",
    NotFound: "/404",
    DashboardAccountHub: "/Dashboard/Accounthub",
    QuoteLanding: "/Personal/HomeOwners/Quote/Landing",
    QuoteQuickQuote: "/Personal/HomeOwners/Quote/QuickQuote",
    QuickQuoteRating: "/Personal/HomeOwners/Quote/QuickQuoteRating",
    ApplicationPolicyHolder: "/Personal/HomeOwners/Application/PolicyHolder",
    ApplicationProperty: "/Personal/HomeOwners/Application/Property",
    ApplicationRiskQualifiers: "/Personal/HomeOwners/Application/RiskQualifiers",
    ApplicationCoverage: "/Personal/HomeOwners/Application/Coverage",
    ApplicationSummary: "/Personal/HomeOwners/Application/Summary",
    EndorsementPolicyHolder: "/Personal/HomeOwners/Endorsement/PolicyHolder",
    EndorsementProperty: "/Personal/HomeOwners/Endorsement/Property",
    EndorsementRiskQualifiers: "/Personal/HomeOwners/Endorsement/RiskQualifiers",
    EndorsementCoverage: "/Personal/HomeOwners/Endorsement/Coverage",
    EndorsementSummary: "/Personal/HomeOwners/Endorsement/Summary",
    
    CancelLanding: "/Commercial/Auto/Cancel/Landing",
    ReinstatementLanding: "/Commercial/Auto/Reinstate/Landing",
    CancelLandingRate: "/Personal/HomeOwners/Cancel/Landing-Rate",
    CancelLandingBind: "/Personal/Homeowners/Cancel/Cancel-Bind",
    CancelLandingHelloSign: "/Commercial/Auto/Cancel/Landing-HelloSign",
    CancelLanding: "/Personal/Homeowners/Cancel/Landing",
    ReinstatementLanding: "/Personal/Homeowners/Reinstate/Landing",
    RenewalBusinessInfo: "/Commercial/Auto/Renewal/BusinessInfo",
    RenewalTruckTrailerInfo: "/Commercial/Auto/Renewal/TruckTrailer",
    RenewalVehicleInfo: "/Commercial/Auto/Renewal/VehicleInfo",
    RenewalDriverInfo: "/Commercial/Auto/Renewal/DriverInfo",
    RenewalSummary: "/Commercial/Auto/Renewal/Summary",
    UnitCoverageInfo: "/Commercial/Auto/Quote/UnitCoverageInfo",
    PolicyCoverageInfo: "/Commercial/Auto/Quote/PolicyCoverageInfo",

}

const buttonRouteKeys = {
    AdjustPricing: "/Personal/HomeOwners/Application/Summary/AdjustPricing",
    AddRemoveOptional:"/Personal/HomeOwners/Application/Summary/AddRemoveOptional",
    OfferQuote:"/Personal/HomeOwners/Application/Summary/OfferQuote",
    DeclineReferral:"/Personal/HomeOwners/Application/DeclineReferral",
    PolicyInForce:"/Personal/HomeOwners/Application/Summary/Bind",
    startEndorsement: "/Personal/HomeOwners/Endorsement/startEndorsement",
    RevertPolicy: "/Personal/HomeOwners/Application/RevertPolicy",
    HoldEndorsement: "/Personal/HomeOwners/Endorsement/HoldEndorsement",
    OfferEndorsement: "/Personal/HomeOwners/Endorsement/OfferEndorsement",
}
const tabKeys = {
    Application: "application",
    Coverages: "coverages",
    Ratings: "rating",
    Documents: "documents",
    RiskAnalytics: "riskanalytics",
    PolicyAnalytics: "policyanalytics",
    QuoteAnalytics: "quoteanalytics",
    BindAnalytics: "bindanalytics",
    UnderwriterAnalytics: "underwriteranalytics",
    LOBAnalytics: "lobanalytics",
    Endorsement: "endorsement",
    AnnualPremium: "Annual Premium",
    Transactions: "transactions"
}

const pageKeys = {
    Quote: {
        CoverageInfo: {
            UnitCoveragesFormName: "unitcoverages",
            PolicyCoveragesFormName: "policycoverages",
            UnitCoveragesSubmit: "unitcoveragesubmit",
            PolicyCoveragesSubmit: "policycoveragesubmit",
            IsUMCSelected: "isUMCSelected",
            IsCCCSelected: "isCCCSelected",
            DeductiblesCCC: "deductiblesCCC",
            LimitsCCC: "limitsCCC"
        }
    },
    Shared: {
        MedicalPaymentsCoverageName: "Medical Payments Coverage"
    }
}

const layoutKeys = {
    PageNoLayout: "L1",
    PageLayoutTwo: "L2",
    PageLayoutThree: "L3"
}

const templateKeys = {
    InsuredSignVerification: "InsuredSignVerification",
    SMSQuote: "SMSQuote",
    CancellationOTP: "CancellationOTP",
    InsuredOTPApplication: "InsuredOTPApplication",
    BindNotificationToInsured: "BindNotificationToInsured",
    ReinstatementOTP: "ReinstatementOTP",
    SubmitApprovalNotification: "SubmitApprovalNotification",//UW approval request added explicitly
    ApplicationOnHoldByUW: "ApplicationOnHoldByUW",
    ApplicationRejectedByUW: "ApplicationRejectedByUW",
    ApplicationRejectedByAgent: "ApplicationRejectedByAgent"
}

const chartKeys = {
    Pie: "Pie",
    Bar: "Bar",
    Doughnut: "Doughnut",
    Line: "Line"
}

const summaryActionButtonsKeys = {
    All: "All",
    EditSubmission: "EditSubmission",
    UnderwrittingRules: "UnderwrittingRules",
    AssignedUWDetails: "AssignedUWDetails", //New
    AdjustPricingAndCommission:"AdjustPricingAndCommission",
    EditQuote: "EditQuote",
    DeclineQuote: "DeclineQuote",
    EndorsePolicy: "EndorsePolicy",
    CancelPolicy: "CancelPolicy",
    ReviewCancellation: "Review Cancellation Request",
    Reinstate: "Reinstate",
    DeclineBindRequest: "DeclineBindRequest",
    OnHoldBindRequest: "OnHoldBindRequest",
    AddOrRemoveOptionalForm: "AddOrRemoveOptionalForm", //Add/RemoveOptional Form
    ResendSignatureRequest: "Resend for Signature",
    SignatureButtons: "Resend for Signature",
    SubmitForApproval: "SubmitForApproval",
    RejectAndHold: "RejectAndHold",
    PremiumAgencyUW: "PremiumAgencyUW",
    Approve: "Approve",
    ApproveAndDecline: "ApproveAndDecline",
    FullSubmission: "FullSubmission",
    ApproveAndOfferQuote: "ApproveAndOfferQuote", //change
    DeclineSubmission: "DeclineSubmission",
    SubmitBindRequest: "SubmitBindRequest",
    UnderReview: "UnderReview",
    MakePayment: "MakePayment",
    CopySubmission: "CopySubmission",
    RefreshSubmission: "RefreshSubmission",
    BindIssuePolicy: "BindIssuePolicy",
    SignDocuments: "SignDocuments",
    PolicyReject: "PolicyReject",
    PolicyOnHold: "PolicyOnHold",
    ReinstatePolicy: "ReinstatePolicy"
}

const UserFeaturesKeys = {
    QuoteIndication: "Quote Indication",
    FormalQuote: "Formal Quote",
    ApproveReferrals: "Approve Referrals",
    BindRequestAwaitingUWApproval: "Request to Bind",
    PolicyInForce: "Bind",
    Issue: "Issue",
    StartRenewal: "Start Renewal",
    RequestEndorsement: "Request Endorsement",
    OOS: "OOS",
    RequestCancellation: "Request Cancellation",
    Cancel: "Cancel",
    Reinstate: "Reinstate",
    BackdateEffEndorseDates: "Backdate Eff / Endorse Dates",
    ViewRatingWorksheet: "View Rating Worksheet",
    PrintRatingWorksheet: "Print Rating Worksheet",
    DownloadPrintDocs: "Download / Print Docs",
    LockAccounts: "Lock Accounts",
    Reporting: "Reporting",
    UnlockUsers: "Unlock Users",
    RollbackEndorsement: "Rollback Endorsement",
    UserEntityManagement: "User/Entity Management",
    ManageHelpText: "Manage Help Text",
    EditQuestions: "Edit Questions",
    EditPickLists: "Edit Pick Lists",
    UpdateRates: "Update Rates",
    UpdateFormRules: "Update Form Rules",
    AddRemoveForms: "Add / Remove Forms",
    MessagingOnPlatform: "Messaging on Platform",
    ManageIntegrationCredentials: "Manage Integration Credentials",
    EmailTemplateManagement: "Email Template Management",
    OtherItemsToBeDiscussed: "Other items to be discussed",
    ViewOnlyAccess: "View Only Access",
    BindWithoutDocs: "Bind w/out Docs",
    OverrideDecline: "Override Decline",
    BindWithoutPay: "Bind w/out Pay",
    WaiveMEP: "Waive MEP",
    OverrideFullyEarnedFees: "Override Fully Earned Fees",
    OverrideCancPremium: "Override Canc Premium",
    FlatCancellation: "Flat Cancellation"
}

const UserRoles = {
    "Underwriter": [ UserFeaturesKeys.QuoteIndication, UserFeaturesKeys.FormalQuote, UserFeaturesKeys.ApproveReferrals, UserFeaturesKeys.BindRequestAwaitingUWApproval, UserFeaturesKeys.PolicyInForce, UserFeaturesKeys.Issue, UserFeaturesKeys.StartRenewal, UserFeaturesKeys.RequestEndorsement, UserFeaturesKeys.OOS, UserFeaturesKeys.RequestCancellation, UserFeaturesKeys.Cancel, UserFeaturesKeys.Reinstate, UserFeaturesKeys.BackdateEffEndorseDates, UserFeaturesKeys.ViewRatingWorksheet, UserFeaturesKeys.PrintRatingWorksheet, UserFeaturesKeys.DownloadPrintDocs, UserFeaturesKeys.LockAccounts, UserFeaturesKeys.Reporting, UserFeaturesKeys.UnlockUsers ],
    "Agent": [ UserFeaturesKeys.QuoteIndication, UserFeaturesKeys.BindRequestAwaitingUWApproval, UserFeaturesKeys.StartRenewal, UserFeaturesKeys.RequestEndorsement, UserFeaturesKeys.RequestCancellation, UserFeaturesKeys.DownloadPrintDocs, UserFeaturesKeys.Reporting, UserFeaturesKeys.UnlockUsers ],
    "Admin": [ UserFeaturesKeys.OOS, UserFeaturesKeys.RollbackEndorsement, UserFeaturesKeys.ViewRatingWorksheet, UserFeaturesKeys.PrintRatingWorksheet, UserFeaturesKeys.DownloadPrintDocs, UserFeaturesKeys.LockAccounts, UserFeaturesKeys.Reporting, UserFeaturesKeys.UnlockUsers, UserFeaturesKeys.UserEntityManagement, UserFeaturesKeys.ManageHelpText, UserFeaturesKeys.EditQuestions, UserFeaturesKeys.EditPickLists, UserFeaturesKeys.UpdateRates, UserFeaturesKeys.UpdateFormRules, UserFeaturesKeys.AddRemoveForms, UserFeaturesKeys.MessagingOnPlatform, UserFeaturesKeys.ManageIntegrationCredentials, UserFeaturesKeys.EmailTemplateManagement, UserFeaturesKeys.OtherItemsToBeDiscussed ],
    "MGA": [ UserFeaturesKeys.QuoteIndication, UserFeaturesKeys.BindRequestAwaitingUWApproval, UserFeaturesKeys.StartRenewal, UserFeaturesKeys.RequestEndorsement, UserFeaturesKeys.RequestCancellation, UserFeaturesKeys.DownloadPrintDocs, UserFeaturesKeys.Reporting, UserFeaturesKeys.UnlockUsers ],
    "CarrierAndAuditor": [ UserFeaturesKeys.ViewRatingWorksheet, UserFeaturesKeys.PrintRatingWorksheet, UserFeaturesKeys.DownloadPrintDocs, UserFeaturesKeys.ViewOnlyAccess, UserFeaturesKeys.Reporting ],
    "Sr. Underwriter": [ UserFeaturesKeys.QuoteIndication, UserFeaturesKeys.FormalQuote, UserFeaturesKeys.ApproveReferrals, UserFeaturesKeys.BindRequestAwaitingUWApproval, UserFeaturesKeys.PolicyInForce, UserFeaturesKeys.BindWithoutDocs, UserFeaturesKeys.Issue, UserFeaturesKeys.StartRenewal, UserFeaturesKeys.RequestEndorsement, UserFeaturesKeys.OOS, UserFeaturesKeys.RequestCancellation, UserFeaturesKeys.Cancel, UserFeaturesKeys.Reinstate, UserFeaturesKeys.BackdateEffEndorseDates, UserFeaturesKeys.ViewRatingWorksheet, UserFeaturesKeys.PrintRatingWorksheet, UserFeaturesKeys.DownloadPrintDocs, UserFeaturesKeys.LockAccounts, UserFeaturesKeys.Reporting, UserFeaturesKeys.UnlockUsers ],
    "Underwriting Manager": [ UserFeaturesKeys.QuoteIndication, UserFeaturesKeys.FormalQuote, UserFeaturesKeys.OverrideDecline, UserFeaturesKeys.ApproveReferrals, UserFeaturesKeys.BindRequestAwaitingUWApproval, UserFeaturesKeys.PolicyInForce, UserFeaturesKeys.BindWithoutDocs, UserFeaturesKeys.BindWithoutPay, UserFeaturesKeys.Issue, UserFeaturesKeys.StartRenewal, UserFeaturesKeys.RequestEndorsement, UserFeaturesKeys.OOS, UserFeaturesKeys.RequestCancellation, UserFeaturesKeys.Cancel, UserFeaturesKeys.WaiveMEP, UserFeaturesKeys.OverrideFullyEarnedFees, UserFeaturesKeys.OverrideCancPremium, UserFeaturesKeys.FlatCancellation, UserFeaturesKeys.Reinstate, UserFeaturesKeys.RollbackEndorsement, UserFeaturesKeys.BackdateEffEndorseDates, UserFeaturesKeys.ViewRatingWorksheet, UserFeaturesKeys.PrintRatingWorksheet, UserFeaturesKeys.DownloadPrintDocs, UserFeaturesKeys.LockAccounts, UserFeaturesKeys.Reporting, UserFeaturesKeys.UnlockUsers, UserFeaturesKeys.UserEntityManagement, UserFeaturesKeys.ManageHelpText, UserFeaturesKeys.EditQuestions, UserFeaturesKeys.EditPickLists, UserFeaturesKeys.UpdateRates, UserFeaturesKeys.UpdateFormRules ]
}

const summaryCardSection = {
    EmailPrintSection: "EmailPrintSection",
    PolicyStatusSection: "PolicyStatusSection"
}

const flowKeys = {
    Quote: "Quote",
    Application: "Application",
    Endorsement: "Endorsement",
    Renewal: "Renewal",
    ReInstate: "ReInstate",
    Cancel: "Cancel"
}

const schemaKeys = {
    Quote: "Quote",
    Application: "Application",
    Endorsement: "Endorsement",
    Renewal: "Renewal",
    ReInstate: "ReInstate",
    Cancel: "Cancel"
}

const dateKeys = {
    Seconds: "Seconds",
    Minutes: "Minutes",
    Hours: "Hours",
    Days: "Days",
    Weeks: "Weeks",
    Months: "Months",
    Years: "Years",
    DateFormatyyymmdd: "YYYY-MM-DD"
}

// new
const PolicyPathKeys = {
    YearBuilt:"Risks.Properties.0.PropertyRiskAttributes.YearBuilt",
    SquareFeet:"Risks.Properties.0.PropertyRiskAttributes.SquareFeet",
    RoofUpdateYear:"Risks.Properties.0.PropertyRiskAttributes.RoofUpdateYear",
    HeatingUpdateYear:"Risks.Properties.0.PropertyRiskAttributes.HeatingUpdateYear",
    ElectricalUpdateYear:"Risks.Properties.0.PropertyRiskAttributes.ElectricalUpdateYear",
    PlumbingUpdateYear:"Risks.Properties.0.PropertyRiskAttributes.PlumbingUpdateYear",
    WeeksRentedPerYear:"Risks.Properties.0.PropertyRiskAttributes.WeeksRentedPerYear",
    Properties:"Risks.Properties",
    PhoneNumberPath: "InsuredAccount.Communications.0.Value",
    EmailPath: "InsuredAccount.Communications.1.Value",
    Coverages:"Risks.Properties.0.Coverages",
    InsuredAccounLocations: "InsuredAccount.BusinessInfo.Locations",
}

// coverage array keys
const CoverageKeys = {
    PTIV:"PTIV",
    CoverageA : "coverageA",
    CoverageB : "coverageB",
    CoverageC : "coverageC",
    CoverageD : "coverageD",
    CoverageE : "coverageE",
    CoverageF : "coverageF",
    LossAssessment : "lossAssessment",
    OrdinanceOrLaw : "ordinanceOrLaw",
    IncreasedCovC : "increasedCovC",
    PersonalInjuryCover   :  "personalInjuryCover",          
    SpecialComputerCoverage   :  "specialComputerCoverage",      
    ReplacmentCostContents  : "replacmentCostContents",
    SpecialPersonalPropertyCoverage : "specialPersonalPropertyCoverage",
    WaterBackup    : "waterBackup",       
    ExtendedReplacementCost     : "extendedReplacementCost",  
    IdentityFraudExp   : "identityFraudExp",          
    BuildersRiskExtentedCoverages   : "buildersRiskExtentedCoverages", 
    TheftOfBuildingMaterialsCoverage : "theftOfBuildingMaterialsCoverage",
    MechanicalBreakDownCoverage   :  "mechanicalBreakDownCoverage",
    AllOtherPerils :  "allOtherPerils",               
    SmokeDeductible   : "smokeDeductible",              
    TheftDeductible  : "theftDeductible",              
    WaterDeductible   :  "waterDeductible",            
    WindDeductible : "windDeductible",
    TIV:"TIV",
}

const riskQualificationKeys = {
    Bankruptcy: "Bankruptcy",
    DegreeofCrime: "DegreeofCrime",
    IsTowing: "IsTowing",
    ProhibitedOperations: "ProhibitedOperations",
    AutoLiabilityProhibitedCommodities: "AutoLiabilityProhibitedCommodities",
    GeneralLiabilityProhibitedCommodities: "GeneralLiabilityProhibitedCommodities",
    DotComplianceTrainingProgram: "DotComplianceTrainingProgram",
    InstallCabCamera: "InstallCabCamera",
    NotifyInsuranceAgent: "NotifyInsuranceAgent",
    ComplyWithInspection: "ComplyWithInspection",
}

const actionModalKeys = {
    AgentSignature: {
        Verified: "Agent Sign Already Verified",
        Valid: "Agent Signature Verified",
        Invalid: "Agent Signature not valid"
    }
}

const locationTypesKeys = {
    MailingAddress: "Mailing Address",
    GaragingAddress: "Garaging Address",
    PrimaryGaragingAddress: "Primary Garaging Address"
}


const policySchemaKeys = {
    AgencyDetails:"agencydetails",
    AgentDetails:"agentdetails",
    UnderWriterDetails:"underwriterdetails",
    AddressLine1:"addressLine1",
    AddressLine2:"addressLine2",
    ManualCity:"manualCity",
    ManualState:"manualState",
    Zip:"zip",
    IsManualAddress:"isManualAddress",
    OccupancyType:"occupancyType",
    FireScore:"fireScore",
    BrushFire:"brushFire",
    DateOfBirth:"DOB", 
    CoverageA:"coverageA",
    CoverageB:"coverageB",
    CoverageC:"coverageC",
    CoverageD:"coverageD",
    CoverageE:"coverageE",
    CoverageF:"coverageF",
    Isapplicantlabel:"isapplicantlabel",
    AllOtherPerils:"allOtherPerils",
    TheftDeductible:"theftDeductible",
    InsuredDOB:"applicantDOB",
    SecondaryDOB:"secondaryApplicantDOB",
    DesiredCoverageStartDate:"desiredCoverageStartDate",
    ClaimsDetails:"claimsDetails",
    HasJointPolicyHolder:"hasJointPolicyHolder",
    RoofUpdateType:"roofUpdateType",
    HeatingUpdateType:"heatingUpdateType",
    ElectricalUpdateType:"electricalUpdateType",
    PlumbingUpdateType:"plumbingUpdateType",
    RoofUpdateYear:"roofUpdateYear",
    HeatingUpdateYear:"heatingUpdateYear",
    ElectricalUpdateYear:"electricalUpdateYear",
    PlumbingUpdateYear:"plumbingUpdateYear",
    AdjustPremium:"adjustPremium",
    AdjustPremiumType:"adjustPremiumType",
    InspectionFee:"inspectionFee",
    PolicyFee:"policyFee",
    AdjustPremiumReason:"adjustPremiumReason",
    IsPropertyLLC:"isPropertyLLC",
    YearBuilt:"yearBuilt",
    PolicyTerm:"policyTerm",
    IsMailingSame:"isMailingSame",
    ClaimsDateofLoss:"claimsDateofLoss",
    EndorsementEffectiveDate: "endorsementEffectiveDate"
}


const UnderwritingKeys = {
    NoOfClaims:"NoOfClaims",
    AddMortgageeSection:"add-MortgageeSection",
    AddAdditionalInsuredSection:"add-AdditionalInsuredSection",
    AddAdditionalInterestSection:"add-AdditionalInterestSection",
    AddTrustSection:"add-TrustSection",
    MDSection : "MortgageeSection",
    AISection : "AdditionalInsuredSection",    
    AIntSection : "AdditionalInterestSection",
    TrustSection : "TrustSection",
    AnyResidenceEmployees : "anyResidenceEmployees",
    IsAnyOtherInsuranceWithCompany: "isAnyOtherInsuranceWithCompany",
    HadForeclosureRepossessionOrBankruptcy: "hadForeclosureRepossessionOrBankruptcy",
    StatusForForeclosureRepossessionOrBankruptcy: "statusForForeclosureRepossessionOrBankruptcy",
    IsExoticAnimalOrPet: "isExoticAnimalOrPet",
    IsAnimalWithBiteHistory: "isAnimalWithBiteHistory",
    IsPropertyMoreThanFiveAcres: "isPropertyMoreThanFiveAcres",
    OtherStructureOnPremise: "otherStructureOnPremise",
    IsUnderRenovationOrReconstruction: "isUnderRenovationOrReconstruction",
    IsAnySwimingPool: "isAnySwimingPool",
    IsThePropertyCurrentlyInsured: "isThePropertyCurrentlyInsured",
}

const progressBarMapKeys = {
    PolicyHolder:0,
    Property:1,
    RiskQualifiers:2,
    Coverage:3
}

const FeesAndTaxesKeys = {
    PFEE: "PFEE",
    INSFEE: "INSFEE"
}

const cancellationKeys = {
    schemaKeys: {
        BusinessName: "businessname",
        MailingAddress: "mailingaddress",
        LOB: "lineOfBusiness",
        EffectiveDate: "policyeffectivedate",
        ExpiryDate: "policyenddate",
        PolicyNumber: "policynumber",
        CancellationDate: "cancellationeffectivedate",
        CancellationType: "cancellationtype",
        CancellationReason: "reason",
        CancellationRequestedBy: "requestedby",
        CancellationRemark: "cancellationterms",
        CancellationRejected: "CancellationRejected"
    },
    buttonStatus: {
        showCalculateBtn: true,
        cancellationcard: false,
        showOnRejectBtn: false,
        showOnHoldBtn: false,
        showDownloadFormBtn: false,
        showRequestToCancelationBtn: false,
        showAdjustPremiumBtn: false,
        showApproveCancelationBtn: false,
        showSignature: false,
        showSendSignatureBtn: false,
        showDownloadSignatureBtn: false,
        showDocumentsCard: false,
        showExitBtn: false,
        showActionButton: true,
        showRevertBtn: true,
        showSubmitForApprovalBtn: false,
        showBtnCenter: false,
        showSubmitSignature: false,
        showOverrideFees: false,
        showOverrideReturnPremium: false,
    },
    cancellationCardConfig: {
        title: "Return Premium Information",
        withoutFeesTxt: "Return Premium Amount (without fees & Taxes)",
        feesAndTaxesTxt: "Return Fees & Taxes",
        withFeesTxt: "Return Premium With Fees & Taxes",
        isSplitOverlay: true,
    }
}

const reinstatementKeys = {
    schemaKeys: {
        BusinessName: "businessname",
        MailingAddress: "mailingaddress",
        LOB: "lineOfBusiness",
        EffectiveDate: "policyeffectivedate",
        ExpiryDate: "policyenddate",
        PolicyNumber: "policynumber",
        ReinstatementDate: "reinstatementeffectivedate",
        RequestedBy: "requestedby",
        RequestReason: "reason",
        RequestTerms: "reinstatementterms",
        PolicyFee: "policyfee",
        InspectionFee: "insepectionfee"

    },
    buttonStatus: {
        showCalculateBtn: true,
        reinstatementcard: false,
        showSignature: false,
        showSubmitForApprovalBtn: false,
        showActionButton: true,
        showOnRejectBtn: false,
        showOnHoldBtn: false,
        showApproveBtn: true,
        showDownloadFormBtn: true,
        showRequestToReinstatementBtn: false,
        showExitBtn: false,
        showRevertBtn: true,
        showBtnCenter: false,
        showSubmitSignature: false,
    },
    reinstatementCardConfig: {
        title: "Return Premium Information",
        withoutFeesTxt: "Re-instate Premium Amount (without fees & Taxes)",
        feesAndTaxesTxt: "Re-instate Premium Fees & Taxes",
        withFeesTxt: "Re-instate Premium with Fees & Taxes",
        isSplitOverlay: true,
    }
}

const PolicyLogHeader = {
    PolicyHolder : "Policy Holder Information",
    PropertyCharacteristics : "Property Characteristics",
    UnderwritingQuestion : "Underwriting Question",
    HomeInsuranceHistory : "Home Insurance History",
    MortgageeDetails : "Mortgagee Details",
    AdditionalInsured : "Additional Insured",
    AdditionalInterest : "Additional Interest",
    TrustDetails : "Trust Details",
    CoverageAndLimits : "Coverage & Limit Options"
  }

const DMS_AllowedFiles = [ 'pdf', 'jpeg', 'jpg', 'png', 'xls', 'xlsx', 'doc', 'docx', 'txt', 'pdf', 'pptx', 'ppt', 'csv' ]

export {
    storeKeys,
    apolloKeys,
    commonKeys,
    axiosKeys,
    routeKeys,
    pageKeys,
    tabKeys,
    layoutKeys,
    PolicyPathKeys,
    templateKeys,
    chartKeys,
    summaryActionButtonsKeys,
    flowKeys,
    schemaKeys,
    actionModalKeys,
    dateKeys,
    locationTypesKeys,
    summaryCardSection,
    riskQualificationKeys,
    progressBarMapKeys,
    CoverageKeys,
    UserFeaturesKeys,
    UserRoles,
    FeesAndTaxesKeys,
    policySchemaKeys,
    UnderwritingKeys,
    buttonRouteKeys,
    cancellationKeys,
    reinstatementKeys,
    DMS_AllowedFiles,
    PolicyLogHeader
};