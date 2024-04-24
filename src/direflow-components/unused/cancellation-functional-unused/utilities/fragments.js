/**Files contains reusable fragments for Mutations */

//#region Import Statements
import gql from 'graphql-tag'
//#endregion

//#region Fragments
const CORE_POLICY_FIELDS = gql`
fragment CorePolicyFields on Policy {
  id
  AccountId
  QuoteNumber
  IsPolicyBind
  IsRenewed
  IsInForce
  PolicyNumber
  EffectiveDate
  ExpirationDate
  BindDate
  QuoteDate
  PolicyStatus
  CurrentVersion
  CurrentVersionEffectiveFrom
  NoOfTimesRenewed
  QuoteExpDate
  RenewalTerm
  PaymentTerms {
    DownPayment
    FirstDueDate
    PaymentAmount
    Installments
    PayOption
    OutsidePF
    OutsidePFDownPayment
  }
  UnderWriter {
    Client
    Code
    Name
    Status
    Products
    Communications {
      Id
      Type
      SubType
      Value
      Status
      AcceptText
    }
    Address {
      Number
      AddressType
      Description
      AddressLine1
      AddressLine2
      AptSuite
      Addr2
      City
      County
      Country
      CountryCode
      CountyCode
      State
      PoBox
      Postalcode
      FormattedAddress
      UnFormattedAddress
      AdministrationArea1
      AdministrationArea2
      Locality
      Lat
      Long
      Street
      Name
      Premise
      Status
      Territory
      StreetName
      IsManual
      Business
      PlaceId
    }
    Reference {
      AIM {
        ReferenceID
        Type
        Commission
        License {
          State
          LicenseKey_PK
          License
          LicenseStatusID
          DateEffective
          DateExpiration
          ActiveFlag
          Active
        }
      }
    }
  }
  Agent {
    Client
    Code
    Name
    Status
    Products
    Communications {
      Id
      Type
      SubType
      Value
      Status
      AcceptText
    }
    Address {
      Number
      AddressType
      Description
      AddressLine1
      AddressLine2
      AptSuite
      Addr2
      City
      County
      Country
      CountryCode
      CountyCode
      State
      PoBox
      Postalcode
      FormattedAddress
      UnFormattedAddress
      AdministrationArea1
      AdministrationArea2
      Locality
      Lat
      Long
      Street
      Name
      Premise
      Status
      Territory
      StreetName
      IsManual
      Business
      PlaceId
    }
    Reference {
      AIM {
        ReferenceID
        Type
        Commission
        License {
          State
          LicenseKey_PK
          License
          LicenseStatusID
          DateEffective
          DateExpiration
          ActiveFlag
          Active
        }
      }
    }
  }
  Agency {
    Client
    Code
    Name
    Status
    Products
    Communications {
      Id
      Type
      SubType
      Value
      Status
      AcceptText
    }
    Address {
      Number
      AddressType
      Description
      AddressLine1
      AddressLine2
      AptSuite
      Addr2
      City
      County
      Country
      CountryCode
      CountyCode
      State
      PoBox
      Postalcode
      FormattedAddress
      UnFormattedAddress
      AdministrationArea1
      AdministrationArea2
      Locality
      Lat
      Long
      Street
      Name
      Premise
      Status
      Territory
      StreetName
      IsManual
      Business
      PlaceId
    }
    Reference {
      AIM {
        ReferenceID
        Type
        Commission
        License {
          State
          LicenseKey_PK
          License
          LicenseStatusID
          DateEffective
          DateExpiration
          ActiveFlag
          Active
        }
      }
    }
  }
  NonFunctional {
    LastSubmittedPage
    Milestones
    LastUserToken
  }
  PolicyStatusHistory {
    OldStatus
    NewStatus
    ChangedBy
    ChangedDate
  }
  PolicyTerm {
    Value
    ValueType
  }
}
`;

const PRIOR_INSURANCE_FIELDS = gql`
fragment PriorInsurances on Policy {
  PriorInsurances {
    IsCurrentlyInsured
    CompanyName
    Carrier
    PolicyTerm
    Loss {
      Value
      Reason
    }
  }
}
`;

const NON_FUNCTIONAL_FIELDS = gql`
fragment NonFunctionalFields on Policy {
  NonFunctional {
    LastSubmittedPage
    Milestones
    LastUserToken
  }
}
`;

const UNDERWRITTING_FIELDS = gql`
fragment UnderwritingFields on Policy {
  Underwriting {
    GlQueries {
      SafetyCodeViolation
      MolestationAllegations
      IsConvictedCrime
      JudgementOrLien
      AnyForeignOperations
      OtherBusinessVentures
      AnyMedicalFacilities
      IsExposureToNuclear
      DiscontinuedMaterialsTransporting
      DiscontinuedOperations
      RentEquipment
      AnyDocksHired
      AnyParkingFacilities
      HasParkingFee
      RecreationFacilities
      HasSwimmingPool
      AreEventsSponsored
      StructuralAlterations
      DemolitionExposure
      IsActiveInJointVentures
      LeaseFromOtherEmployers
      IsLaborInterchange
      AnyDayCareFacilities
      CrimeOnPremises
      IsPremisesSecure
      AnyLoadingOperations {
        Value
        Reason
      }
      IsBusinessPlacedInTrust {
        Value
        Reason
      }
    }
    NewVentureQueries {
      HaveCommercialClassALicense
      CommercialClassALicenseDate
      CommercialClassALicenseYears
      ExperienceWithSameEquipment
      ApplyForOwnAuthority {
        ApplyForOwnAuthority
        AuthorityName
      }
      PastInsurance {
        UnderDifferentAuthority
        PriorAuthorityName
        DOTNumber
        MCNumber
      }
      IncreaseAutosNextTwelveMonth {
        Value
        Reason
      }
      AccidentInLastThreeYears {
        Value
        Reason
      }
    }
    InEligible {
      Bankruptcy
      DegreeofCrime
      IsTowing
      ProhibitedOperations
      AutoLiabilityProhibitedCommodities
      GeneralLiabilityProhibitedCommodities
      DotComplianceTrainingProgram
      InstallCabCamera
      NotifyInsuranceAgent
      ComplyWithInspection
    }
  }
}
`;

const TRANSACTION_FIELDS = gql`
fragment TransactionFields on Policy {
  Transaction {
    Date
    EffectiveDate
    Type
    Status
    Number
    IsOutOfSequence
    RequestedBy
    RequestedById
    PremiumType
    Remarks
    Reason
    Verification {
      IsInsuredESignVerified
      IsAgentESignVerified
      IsEmailVerified
      IsOTPVerified
    }
    Subjectivity
    MEP
    SCR
    CloseDeclineType
    CloseDeclineReason
    CloseDeclineDetails
    CloseDeclineRemark
  }
}
`;

const PREMIUM_FIELDS = gql`
fragment PremiumFields on Policy {
  Premium {
    BasicPremium
    Surcharge
    Discount
    MinPremium
    PolicyPremium
    TotalSalePrice
    EffectivePremium
    AnnualPremium
    AnnualPremiumWithFeesAndTaxes
    EffectivePremiumWithFeesAndTaxes
  }
}
`;

const PREMIUM_FACTORS_FIELDS = gql`
fragment PremiumFactorsFields on Policy {
  PremiumFactors {
    Name
    Type
    Description
    Rate
    Limit
    LimitAmount
    Premium
    AnnualPremium
    Status
    IsApplicable
    IsSelected
    IsMandatory
    Deductible
    EffectivePremium
    PremiumDifference
    DisplayValue
    Factor {
      Name
      Type
      Description
      Rate
      Limit
      LimitAmount
      Premium
      AnnualPremium
      Status
      IsApplicable
      IsSelected
      IsMandatory
      Deductible
      EffectivePremium
      DisplayValue
    }
  }
}
`;

const TOTAL_PREMIUM_FIELDS = gql`
fragment TotalPremiumFields on Policy {
  TotalPremium {
    BasicPremium
    Surcharge
    Discount
    MinPremium
    EffectivePremium
    PriorAnnualPremium
    Fees
    Taxes
    AnnualPremiumWithFeesAndTaxes
    EffectivePremiumWithFeesAndTaxes
    AnnualPremium
    AnnualFees
    AnnualTax
    MonthlyEffectivePremium
  }
}
`;

const POLICY_COVERAGES_FIELDS = gql`
fragment PolicyCoverageFields on Policy {
  PolicyCoverages {
    Coverages {
      Status
      Type
      Name
      Description
      IsApplicable
      IsSelected
      IsMandatory
      Rate
      Limit
      LimitAmount
      Deductible
      Premium
      EffectivePremium
      PremiumDifference
      NoOfDays
      WaitingPeriod
      ExpenseType
      Factor {
        Status
        Type
        Description
        IsApplicable
        IsSelected
        IsMandatory
        Rate
        Limit
        LimitAmount
        Deductible
        Premium
        EffectivePremium
        DisplayValue
      }
    }
  }
}
`;

const ATTRIBUTES_FIELDS = gql`
fragment AttributesFields on Policy {
  Attributes {
    AppSource
    isMaster
    MasterPolicyCounter
    Client
    Carrier
    Coverholder
    Lob
    State
    Product
    RaterVersion
    UISchemaVersion
    QuoteValidity {
      Value
      ValueType
    }
    RenewalConfigurations {
      AfterForUnderwriter {
        Value
        ValueType
      }
      BeforeForUnderwriter {
        Value
        ValueType
      }
      AfterForAgent {
        Value
        ValueType
      }
      BeforeForAgent {
        Value
        ValueType
      }
    }
  }
}
`;

const AUDIT_FIELDS = gql`
fragment AuditFields on Policy {
  Audit {
    CreatedBy
    CreatedOn
    LastUpdatedBy
    LastUpdatedOn
  }
}
`;

const DISCOUNT_SURCHARGE_FIELDS = gql`
fragment DiscountSurchargeFields on Policy {
  DiscountAndSurcharges {
      Description
  }
}
`;

const INSURED_ACCOUNT_FIELDS = gql`
fragment InsuredAccountFields on Policy {
  InsuredAccount {
    Type
    CreationDate
    UserName
    FirstName
    MiddleName
    LastName
    DisplayName
    AdditionalInsured {
      Type
      Wavier
      Street
      City
      State
      Zip
      LoanNumber
      InsurableInterest
      CoveragesApplicable
    }
    BusinessInfo {
      BusinessType
      FirstName
      MiddleName
      LastName
      YearsInBusiness
      IncorporationDate
      BusinessName
      AnnualRevenue
      DBAName
      EffectiveDateCoverage
      DOTNumber
      MotorCarrierNumber
      BusinessDescription
      SMSAlerts
      OperationDetails {
        TravellingOutofState
        TravellingHowOften
        RadiusofOperation {
          Radius
          Percentage
        }
        TypeofOperation
        MajorCitiesTravelled
        AreasofOperations
      }
      InPastOwnershipChanged {
        Value
        Reason
      }
      HaveSubsidiary {
        SubsidiaryCompanyName
        Relationship
        PercentageOwned
      }
      IsSubsidiary {
        ParentCompanyName
        Relationship
        PercentageOwned
      }
      SubsidiaryInfo
      LossHistory {
        LOB
        YearOfLoss
        NumberOfLosses
        Carrier
        Reserves
        Paid
        TotalIncurred
        UploadFile
        IsClaimsPending
        ClaimPendingReason
        AnnualPremium
      }
      Commodities {
        Name
        HauledPercentage
        MaxValue
        AvgValue
      }
      Operations {
        AnnualPhysicals
        DoubleOrTripleTrailers
        Exposure
        BoardFireRate
        EquipmentServiced {
          Value
          Reason
        }
        UseNonListedVehicles {
          Value
          Reason
        }
        EquipmentLoanOrRented {
          Value
          Reason
        }
        HiredEquipment {
          Value
          Reason
        }
        ApplicantHaulForOthers {
          Value
          Reason
        }
        TruckersOperateUnderApplicant {
          Value
          Reason
        }
        DrivingHiring {
          ExperienceYear
          OtherCriteria
          PreEmploymentScreening
        }
        SecurityWhileTransit
        SecurityAtLocations
        DetachedFromPowerUnits {
          Value
          Reason
        }
        UnloadedOrUnAttended {
          Value
          Reason
        }
        TrailerDetached {
          Value
          Reason
        }
        MaintenanceProgram {
          Value
          File
          Reason
        }
        SafetyProgram {
          Value
          File
          Reason
        }
        ProhibitedCommodities {
          Name
          Value
        }
        HazardousCommodities {
          Value
          Reason
        }
        EquipmentNotListed {
          Value
          Reason
        }
        History {
          Year
          PowerUnits
          TotalMiles
          GrossReceipts
        }
      }
      PolicyDecline {
        LastThreeYears
        Details
      }
      MoveMidTerm {
        Value
        Reason
      }
      Locations {
        NickName
        LocationNumber
        IsValid
        Status
        Type
        Address {
          Number
          AddressType
          Description
          AddressLine1
          AddressLine2
          AptSuite
          City
          County
          CountyCode
          State
          PoBox
          Postalcode
          FormattedAddress
          UnFormattedAddress
          AdministrationArea1
          AdministrationArea2
          Locality
          Lat
          Long
          Street
          Name
          Premise
          Status
          Territory
          StreetName
          IsManual
          Business
          PlaceId
        }
      }
    }
    Communications {
      Type
      SubType
      Value
      Status
    }
    BankDetails {
      AccountName
      BankName
      BranchName
      AccountType
      RoutingNo
    }
  }
}
`;

const RULES_FIELDS = gql`
fragment RulesFields on Policy {
  Rules {
    Action
    MatchingRules {
      Status
      Type
      Description
      Isfulfilled
      Reason
    }
  }
}
`;

const FORMS_FIELDS = gql`
fragment FormsFields on Policy {
  Forms {
    Status
    FormName
    FormDesc
    Sequence
    FormType
    Template
    IsMandatory
    IsChecked
    AcordCode
    File
    Dmspath
  }
}
`;

const FEES_TAXES_FIELDS = gql`
fragment FeesAndTaxesFields on Policy {
  FeesAndTaxes {
    Code
    Value
    Status
    ValueType
    Amount
    IsOverride
    AnnualAmount
    ProductFeesAndTaxes {
      Type
      Product
      Code
      Description
      Status
      EffectiveFrom
      RangeFrom
      RangeTo
      RangeValueType
      IsEarned
      LicenseNo
      ValueType
      Value
      DecimalPoints
      CalculateOn
      Transactions
    }
  }
}
`;

const EXTERNALREFERENCES_FIELDS = gql`
fragment ExternalReferencesFields on Policy {
  ExternalRefrences {
    ReferenceNumber
    ReferenceTarget
    Status
  }
}
`;

const PREVIOUSPOLICIES_FIELDS = gql`
fragment PreviousPoliciesFields on Policy {
  PreviousPolicies {
    IsPreviousPolicy
    PreviousPolicyNumber
    OtherCoverages
    IsPreviousClaims
    NoOfClaims
    TotalAmountClaimed
    Carrier
    PolicyEffectiveDate
    PolicyExpiryDate
    Coverages
    IsALRenewalPolicy
    ALRenewalPolicyNumber
    ALRenewalTerm
    IsAPDRenewalPolicy
    APDRenewalPolicyNumber
    APDRenewalTerm
    IsTGLRenewalPolicy
    TGLRenewalPolicyNumber
    TGLRenewalTerm
    IsMTCRenewalPolicy
    MTCRenewalPolicyNumber
    MTCRenewalTerm
  }
}
`;

const RISKS_FIELDS = gql`
fragment RisksFields on Policy {
  Risks {
    Drivers {
      Name
      UnitNumber
      UnitType
      Status
      TempDriverIdentifier
      HireDate
      IsDOTNumber
      DOTNumber
      Experience
      Turnover
      IsDriverUploaded
      Carrier
      MVR
      NewVenture {
        CDLADate
        CDLAExperience
        TransportingExperience
        IndustryExperience
        Employer {
          Name
          EmploymentDate
          UnitType
          Commodities
          Radius
        }
      }
      DriverRiskAttributes {
        Type
        FirstName
        MiddleName
        LastName
        Suffix
        DOB
        Age
        LicenseNumber
        Violations
        IsUSCitizen
        Occupation
        LicenseDate
        LicenseState
        IsInternationalDriver
        LicenseStatus
        PhoneNo
        Email
      }
      Accidents {
        NumberOfAccidents
        Excluded
        MEDForm
      }
      PremiumFactors {
        Name
        Type
        Description
        Rate
        Limit
        LimitAmount
        Premium
        AnnualPremium
        Status
        IsApplicable
        IsSelected
        IsMandatory
        Deductible
        EffectivePremium
        PremiumDifference
        DisplayValue
        Factor {
          Name
          Type
          Description
          Rate
          Limit
          LimitAmount
          Premium
          AnnualPremium
          Status
          IsApplicable
          IsSelected
          IsMandatory
          Deductible
          EffectivePremium
          DisplayValue
        }
      }
      Premium {
        BasicPremium
        Surcharge
        Discount
        MinPremium
        PolicyPremium
        TotalSalePrice
        EffectivePremium
        AnnualPremium
        AnnualPremiumWithFeesAndTaxes
        EffectivePremiumWithFeesAndTaxes
      }
      Audit {
        CreatedBy
        CreatedOn
        LastUpdatedBy
        LastUpdatedOn
      }
      Coverages {
        Status
        Type
        Name
        Description
        IsApplicable
        IsSelected
        IsMandatory
        Rate
        Limit
        LimitAmount
        Deductible
        Premium
        EffectivePremium
        PremiumDifference
        NoOfDays
        WaitingPeriod
        ExpenseType
        Factor {
          Status
          Type
          Description
          IsApplicable
          IsSelected
          IsMandatory
          Rate
          Limit
          LimitAmount
          Deductible
          Premium
          EffectivePremium
          DisplayValue
        }
      }
    }
    Vehicles {
      Name
      Status
      UnitNumber
      UnitType
      EstimatedAnnualMileage
      OverRideVIN
      VehicleAge
      StatedValue
      TypeofOperation
      TrailerTypesAttached
      MajorCitiesTravelled
      VehicleRiskAttributes {
        VehicleType
        TrailerBodyType
        VIN
        Year
        Make
        Model
        PrimaryGaragingLocation
        OwnedOrLeased
      }
      Camera {
        HasCamera
        CameraMake
        CameraModel
        CameraSerialModel
      }
      ElectronicDevice {
        HasElectronicDevice
        DeviceMake
        DeviceModel
        Detail
      }
      LossPayee {
        Name
        AddressLine1
        Street
        City
        State
        Zip
        LoanNumber
      }
      Audit {
        CreatedBy
        CreatedOn
        LastUpdatedBy
        LastUpdatedOn
      }
      PremiumFactors {
        Name
        Type
        Description
        Rate
        Limit
        LimitAmount
        Premium
        AnnualPremium
        Status
        IsApplicable
        IsSelected
        IsMandatory
        Deductible
        EffectivePremium
        PremiumDifference
        DisplayValue
        Factor {
          Name
          Type
          Description
          Rate
          Limit
          LimitAmount
          Premium
          AnnualPremium
          Status
          IsApplicable
          IsSelected
          IsMandatory
          Deductible
          EffectivePremium
          DisplayValue
        }
      }
      Premium {
        BasicPremium
        Surcharge
        Discount
        MinPremium
        PolicyPremium
        TotalSalePrice
        EffectivePremium
        AnnualPremium
        AnnualPremiumWithFeesAndTaxes
        EffectivePremiumWithFeesAndTaxes
      }
      Coverages {
        Status
        Type
        Name
        Description
        IsApplicable
        IsSelected
        IsMandatory
        Rate
        Limit
        LimitAmount
        Deductible
        Premium
        EffectivePremium
        PremiumDifference
        NoOfDays
        WaitingPeriod
        ExpenseType
        Factor {
          Status
          Type
          Description
          IsApplicable
          IsSelected
          IsMandatory
          Rate
          Limit
          LimitAmount
          Deductible
          Premium
          EffectivePremium
          DisplayValue
        }
      }
    }
  }
}
`;

const RATING_ATTRIBUTES_FIELDS = gql`
fragment RatingAttributesFields on Policy {
  RatingAttribute {
    HiredAuto
    HiredAutoCount
    NonOwnedAuto
    NonOwnedAutoCount
    IsWaiverOfSubrogation
    WaiverOfSubrogation
    RefrigeratedBreakdown
    InFullPremiumCharge
    PrimaryNonContributory
    WaiverOfTransferOfRights
    TrailersCount
    TrailerAgreement
    RefrigerationDeductible
    DryVanFlatbedDeductible
    Fmcsa {
      VehicleCount
      DriverCount
    }
    LOBsSelected
  }
}
`

const POLICY_RISK_FIELDS = gql`
fragment PolicyRiskFields on Policy {
  PolicyRiskAttributes {
    EndorsementCount
    CancellationCount
    ReinstatementCount
    DropboxSignatureRequestID
  }
}
`

const RATING_ERRORS_FIELDS = gql`
fragment RatingErrorsFields on Policy {
  RatingErrors {
    code
    message
    details
  }
}
`

const CUSTOM_ERRORS_FIELDS = gql`
fragment CustomErrorsFields on Policy {
  CustomErrors {
    code
    message
    details
  }
}`

//#endregion

//#region Export Statements
export {
  CORE_POLICY_FIELDS,
  NON_FUNCTIONAL_FIELDS,
  UNDERWRITTING_FIELDS,
  TRANSACTION_FIELDS,
  PREMIUM_FACTORS_FIELDS,
  PREMIUM_FIELDS,
  TOTAL_PREMIUM_FIELDS,
  POLICY_COVERAGES_FIELDS,
  ATTRIBUTES_FIELDS,
  AUDIT_FIELDS,
  DISCOUNT_SURCHARGE_FIELDS,
  RULES_FIELDS,
  FORMS_FIELDS,
  FEES_TAXES_FIELDS,
  EXTERNALREFERENCES_FIELDS,
  INSURED_ACCOUNT_FIELDS,
  PREVIOUSPOLICIES_FIELDS,
  RISKS_FIELDS,
  RATING_ATTRIBUTES_FIELDS,
  PRIOR_INSURANCE_FIELDS,
  RATING_ERRORS_FIELDS,
  CUSTOM_ERRORS_FIELDS,
  POLICY_RISK_FIELDS
};
//#endregion
