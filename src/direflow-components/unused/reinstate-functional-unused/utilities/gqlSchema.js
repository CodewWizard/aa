import gql from 'graphql-tag'

export const RATE_ENDORSEMENT = gql`
mutation RateEndorsement($input: inpPolicy) {
  rateEndorsement(input: $input) {
    id
    AccountId
    QuoteNumber
    IsPolicyBind
    IsInForce
    IsRenewed
    PolicyNumber
    PolicyTerm {
      Value
      ValueType
    }
    EffectiveDate
    ExpirationDate
    PolicyStatus
    CurrentVersion
    CurrentVersionEffectiveFrom
    PayMode
    InceptionTime
    SignatureType
    UnderwritingTier
    FinancialTier
    ForceRetiering
    ActivityCode
    UMAddedReducedIndex
    PreferredAgency
    BindDate
    QuoteDate
    QuoteExpDate
    RenewalTerm
    RenewalQuoteID
    IsOOS
    SelectStackUM
    PolicyStatusHistory {
      OldStatus
      NewStatus
      ChangedBy
      ChangedDate
    }
    NonFunctional {
      LastSubmittedPage
      Milestones
    }
    PreviousPolicies {
      IsPreviousPolicy
      PreviousPolicyNumber
      OtherCoverages
      IsPreviousClaims
      NoOfClaims
      TotalAmountClaimed
    }
    DiscountAndSurcharges {
      Name
      Type
      Amount
      IsApplied
      Value
    }
    PolicyRiskAttributes {
      FirstName
      MiddleName
      LastName
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
      EstimatedBalanceAfterCancel
      CurrentPolicyBalance
      BillingAccountNumber
      DropboxSignatureRequestID
      CancellationCount
      ReinstatementCount
      EndorsementCount
      InstallmentDueDate
      CurrentInstallmentAmount
    }
    InsuredAccount {
      Type
      CreationDate
      Suffix
      UserName
      FirstName
      MiddleName
      LastName
      DisplayName
      DOB
      BankDetails {
        AccountName
        BankName
        BranchName
        AccountType
        RoutingNo
      }
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      BusinessInfo {
        BusinessType
        YearsInBusiness
        IncorporationAge
        BusinessName
        DisplayName
        RegistrationNumber
        BusinessStruct
        SpecialRisk
        NoOfOwners
        FullTimeEmployees
        PartTimeEmployees
        Website
        IndustryType
        BusinessDecsription
        AnnualRevenue
        NumberOFLocations
        Locations {
          NickName
          LocationNumber
          IsValid
          Status
          Type
        }
      }
      IsAuthorizeForReports
      IsAuthorizationforConsumerRatingInformation
      IsAuthorizeForCreditScore
      CreditScore {
        Score
        ScoreDescription
        StatusCode
        Message
        NeedApiCall
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    JointPolicyHolders {
      FirstName
      MiddleName
      LastName
      DateOfBirth
      InsuredType
      Age {
        Value
        ValueType
      }
      Occupation
      IsHighProfile
      IsAddressSameAsRisk
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    Audit {
      CreatedBy
      CreatedOn
      DeletedOn
      LastUpdatedBy
      LastUpdatedOn
    }
    ExternalRefrences {
      ReferenceNumber
      ReferenceTarget
      Status
    }
    Payments {
      LastName
      FirstName
      OrderID
      TransactionType
      TransactionID
      TransactionDate
      TransactionStatus
      TransactionAmount
      CardDetails {
        Type
        CardNumber
        Expiry
        CVVCode
        LastFourDigits
      }
      BankDetails {
        AccountName
        BankName
        BranchName
        AccountType
        RoutingNo
      }
    }
    Attributes {
      AppSource
      Carrier
      Client
      Coverholder
      Lob
      State
      Product
      RaterVersion
      IsBridge
      IsInEligible
      IsNonOwnerPolicy
      FullCoverage
      TotalViolationPoints
      IsTestPolicy
      RenewalConfigurations {
        BeforeForAgent {
          Value
          ValueType
        }
        AfterForAgent {
          Value
          ValueType
        }
        BeforeForUnderwriter {
          Value
          ValueType
        }
        AfterForUnderwriter {
          Value
          ValueType
        }
      }
      QuoteValidity {
        Value
        ValueType
      }
    }
    PolicyCoverages {
      Coverages {
        Carrier
        Name
        Description
        Type
        SettlementType
        Value
        Limit
        LimitAmount
        Deductible
        IsApplicable
        IsSelected
        IsMandatory
        Status
      }
    }
    Payplan {
      DownPaymentPercentage
      DownPaymentCode
      DownPaymentDueDays
      DownPaymentAmount
      PayInFull
      NoOfInstallments
      MoreThanDPAmount
      IsSelected
      PPDescription
      Installments {
        InstallmentNumber
        BillingPlan
        DownPay
        Payments
        Date
        IsSelected
      }
    }
    FeesAndTaxes {
      Code
      Description
      Type
      IsOverride
      Status
      Value
      ValueType
      Amount
      AnnualAmount
      IsProRated
    }
    TotalPremium {
      BasicPremium
      Surcharge
      Discount
      MinPremium
      EffectivePremium
      AnnualPremium
      PriorAnnualPremium
      EffectivePremiumWithFeesAndTaxes
      AnnualPremiumWithFeesAndTaxes
      OOSPremium
    }
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
    Transaction {
      Number
      Date
      EffectiveDate
      EffectiveTime
      Type
      Status
      RequestedBy
      RequestedById
      IsOutOfSequence
      PremiumType
      PolicyVersion
      FileType
      FileName
      File
      Remarks
      HoldRemarks
      RejectRemarks
      Reason
      ReasonId
      MEP
      SCR
      Verification {
        IsInsuredESignVerified
        IsAgentESignVerified
        IsEmailVerified
        IsOTPVerified
        InsuredOTP
      }
      TransactionStatusHistory {
        OldStatus
        NewStatus
        ChangedBy
        ChangedDate
      }
      RenewalOffers {
        RenewalOfferId
        CurrentPremium
        RenewalPremium
        IsUpdateRenewalPremium
        RenewalOfferFlags {
          CreatedOn
          UpdatedOn
          CreatedBy
          UpdatedBy
          EmailSentFlag
        }
      }
    }
    Underwriting {
      Code
      Key
      Value
      Remark
      Optional {
        Value
        label
      }
    }
    UnderwritingNew {
      IsPhysicalImpairment
      PhysicalImpairment
      HaveAllDriversListed
      ReasonAllDriversNotListed
      HaveAllResidentsDisclosed
      ReasonAllResidentsNotDisclosed
      IsMemberOfArmedForces
      RemarkOnMemberOfArmedForces
      AgreeToNotifyDrivingStatus
      AgreementOnUndisclosedDriver
      IsUnrepairedDamage
      DescribeUnrepairedDamage
      HasListedAllVehicles
      DescribeIfNotAllVehiclesListed
      HasAllVehiclesTitledToInsured
      DescribeIfNotAllVehiclesTitled
      NameOnTitle
      InspectedByAgent
      DescribeIfNotInspectedByAgent
      GaragedInState
      DescribeIfNotGaragedInState
      IsProvidingTransportServices
      DescribeTransportServices
      IsUsedForDeliveryNetwork
      DescribeIfUsedForDeliveryNetwork
      IsDriverConvictedOfFelony
      DescribeIfDriverConvictedOfFelony
    }
    Risks {
      Vehicles {
        UnitId
        UnitNumber
        Name
        UnitType
        Status
        IsDeleted
        IsNewlyAdded
        AdditionalParties {
          Status
          Name
          ReferenceNumber
          IsPayee
          PartyType
          InterestType
          CreatedOn
          DeletedOn
        }
        VehicleRiskAttributes {
          ClassificationType
          SecondaryUse
          SecondaryUsePercent
          VehicleType
          VIN
          Year
          VehicleAge
          Make
          Model
          OwnedOrLeased
          BusinessUseClass
          SizeClass
          GROSSCOMBWEIGHT
          RADIUSCLASSTYPE
          VEHPRICE
          PASSIVERESTR
          VEHYEAR
          ANTILOCKBRAKES
          COSTTYPE
          FARTHESTLOCCITY
          FARTHESTLOCCOUNTY
          FARTHESTLOCSTATE
          FARTHESTLOC
          ISVEHICLEUPLOADED
          COMPDED
          COLLDED
          MPDED
          HASPD
          HASMP
          TEMPLATENAME
          UWREFMSG
          GARAGELOC
          HASRENTAL
          CSLLIMIT
          LIABDED
          UMTYPE
          UMDED
          UMLIMIT
          PrimaryGaragingLocation {
            Number
            AddressType
            IsManual
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
            Name
            Premise
            Status
            Territory
            Business
            PlaceId
            AptSuiteLot
            Street
            StreetName
          }
          AdditionalInterestDetails {
            DetailNo
            Type
            Name
            Address
            City
            State
            Postalcode
            AptSuite
          }
          HasAdditionalInterestDetails
          SymbolOTC
          SymbolColl
          SymbolLiab
          SymbolMP
          OTCDeductible
          CollDeductible
          IsGaragingSameAsMailing
          IncludePunitiveDamages
          IsDNI
          AnnualMileage
          BodyStyle
          MechanicalDesc
          IsNonOwnerPolicy
          VerifiedVIN
          Towing
          Rental
          Use
          AirbagDisc
          AssignedDriver
          SoftDelete
          VehicleLoadCapacity
          IsBusinessUse
        }
        Coverages {
          Carrier
          Name
          Description
          Type
          SettlementType
          Value
          Limit
          LimitAmount
          Deductible
          IsApplicable
          IsSelected
          IsMandatory
          Status
        }
        PremiumFactors {
          Name
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
          AnnualPremium
          PremiumDifference
          Factor {
            Name
            Type
            Description
            Rate
            Limit
            LimitAmount
            Premium
            Status
            IsApplicable
            IsSelected
            IsMandatory
            Deductible
            EffectivePremium
            AnnualPremium
          }
        }
        Premium {
          BasicPremium
          Surcharge
          Discount
          MinPremium
          EffectivePremium
          AnnualPremium
          EffectivePremiumWithFeesAndTaxes
          AnnualPremiumWithFeesAndTaxes
        }
        Audit {
          CreatedBy
          CreatedOn
          DeletedOn
          LastUpdatedBy
          LastUpdatedOn
        }
      }
      Drivers {
        UnitId
        UnitNumber
        Name
        UnitType
        Status
        IsDeleted
        IsNewlyAdded
        DriverRiskAttributes {
          Type
          PrevType
          FirstName
          MiddleName
          LastName
          Suffix
          DOB
          Age
          Experience
          LicenseNumber
          Violations
          IsUSCitizen
          Occupation
          OtherOccupation
          FilingStatusCode
          Fillings {
            Fillings
            Date
            Reason
            FilingCd
            FilingStatusCd
          }
          FilingCode
          LicenseDate
          State
          HadTrainingCourse
          IsMilitary
          MilitaryRank
          HadDUIDWI
          DriverCourseCompletedDate
          CanInsureOperate
          LicenseStatus
          IsGoodStudentDiscountApplicable
          MaritalStatus
          Gender
          Violation {
            ViolationNumber
            Date
            Type
            HadAccident
            ConvictionDate
            PJC
            TotalPoints
            SISCode
            AccidentViolationDisputeCode
            Dispute
            DisputeReason
            Source
            IsNewlyAdded
          }
          RelationToApplicant
          IsDNI
          IsEditing
          SSN
          AgeWhenFirstLicensed
          MVRCount
          MVRViolationStatus
          IsVerifiedBy
        }
        Coverages {
          Carrier
          Name
          Description
          Type
          SettlementType
          Value
          Limit
          LimitAmount
          Deductible
          IsApplicable
          IsSelected
          IsMandatory
          Status
        }
        PremiumFactors {
          Name
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
          AnnualPremium
          PremiumDifference
          Factor {
            Name
            Type
            Description
            Rate
            Limit
            LimitAmount
            Premium
            Status
            IsApplicable
            IsSelected
            IsMandatory
            Deductible
            EffectivePremium
            AnnualPremium
          }
        }
        Premium {
          BasicPremium
          Surcharge
          Discount
          MinPremium
          EffectivePremium
          AnnualPremium
          EffectivePremiumWithFeesAndTaxes
          AnnualPremiumWithFeesAndTaxes
        }
        Audit {
          CreatedBy
          CreatedOn
          DeletedOn
          LastUpdatedBy
          LastUpdatedOn
        }
      }
    }
    Rules {
      Action
      MatchingRules {
        Type
        Description
        Isfulfilled
        Status
        Remark
        Reason
      }
    }
    UnderWriter {
      Client
      Code
      Name
      Status
      Reference
      Products
      UWAttributes {
        UWOffice
        ContractNumber
        AccountExecCode
      }
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    PriorInsurances {
      IsCurrentlyInsured
      CompanyName
      OtherCompanyName
      EffectiveDate
      ExpirationDate
      Premium
      Status
    }
    Agency {
      Client
      Code
      Name
      Status
      Reference
      Products
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    Agent {
      Client
      Code
      Name
      Status
      Reference
      Products
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    AgentCommission {
      Value
      ValueType
    }
    Claims {
      Status
      ClaimSequence
      IsUnrepairedDamage
      DateofLoss
      PaidAmount
      ReserveAmount
      IncidentType
      CoverageType
      ClaimantName
      UnitId
      Remark
    }
    PremiumFactors {
      Name
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
      AnnualPremium
      PremiumDifference
      Factor {
        Name
        Type
        Description
        Rate
        Limit
        LimitAmount
        Premium
        Status
        IsApplicable
        IsSelected
        IsMandatory
        Deductible
        EffectivePremium
        AnnualPremium
      }
    }
    Premium {
      BasicPremium
      Surcharge
      Discount
      MinPremium
      EffectivePremium
      AnnualPremium
      EffectivePremiumWithFeesAndTaxes
      AnnualPremiumWithFeesAndTaxes
    }
    ReconciliationFlags {
      LiabilityPolicy
      ClueCount
      ClueVioationStatus
    }
			OOS {
				TotalPremium {
					BasicPremium
					Surcharge
					Discount
					MinPremium
					EffectivePremium
					AnnualPremium
					PriorAnnualPremium
					EffectivePremiumWithFeesAndTaxes
					AnnualPremiumWithFeesAndTaxes
					OOSPremium
				}
				FeesAndTaxes {
					Code
					Description
					Type
					IsOverride
					Status
					Value
					ValueType
					Amount
					AnnualAmount
					IsProRated
				}
			}
  }
}
`;

//#region Fragments
const CORE_POLICY_FIELDS = gql`
  fragment CorePolicyFields on Policy {
    id
    AccountId
    QuoteNumber
    IsPolicyBind
    IsRenewed
    PolicyNumber
    PayMode
    PolicyTerm {
      Value
      ValueType
    }
    EffectiveDate
    ExpirationDate
    InceptionTime
    PolicyStatus
    CurrentVersion
    CurrentVersionEffectiveFrom
    SignatureType
    UnderwritingTier
    FinancialTier
    ForceRetiering
    ActivityCode
    UMAddedReducedIndex
    PreferredAgency
    IsOOS
    PolicyRiskAttributes {
      FirstName
      MiddleName
      LastName      
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
      EstimatedBalanceAfterCancel
      BillingAccountNumber
      CurrentPolicyBalance
      DropboxSignatureRequestID
      CancellationCount
      ReinstatementCount
      EndorsementCount
      InstallmentDueDate
      CurrentInstallmentAmount
    }
    Agency {
      Client
      Code
      Name
      Status
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
      }
      Reference
      Products
    }
    Agent {
      Client
      Code
      Name
      Status
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
      }
      Reference
      Products
    }
    AgentCommission {
      Value
      ValueType
    }
    UnderWriter {
      Client
      Code
      Name
      Status
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
      }
      Reference
      Products
      UWAttributes {
        UWOffice
        ContractNumber
        AccountExecCode
      }
    }
    PriorInsurances {
      IsCurrentlyInsured
      CompanyName
      OtherCompanyName
      EffectiveDate
      ExpirationDate
      Premium
      Status
    }
    PayMode
    NonFunctional {
      LastSubmittedPage
      Milestones
    }
    PolicyStatusHistory {
      OldStatus
      NewStatus
      ChangedBy
      ChangedDate
    }
    ReconciliationFlags {
      LiabilityPolicy
      ClueCount
      ClueVioationStatus
    }
    OOS {
      TotalPremium {
        BasicPremium
        Surcharge
        Discount
        MinPremium
        EffectivePremium
        AnnualPremium
        PriorAnnualPremium
        EffectivePremiumWithFeesAndTaxes
        AnnualPremiumWithFeesAndTaxes
        OOSPremium
      }
      FeesAndTaxes {
        Code
        Description
        Type
        IsOverride
        Status
        Value
        ValueType
        Amount
        AnnualAmount
        IsProRated
      }
    }
  }
`;

const NON_FUNCTIONAL_FIELDS = gql`
  fragment NonFunctionalFields on Policy {
    NonFunctional {
      LastSubmittedPage
      Milestones
    }
  }
`;

const UNDERWRITTING_FIELDS = gql`
  fragment UnderwritingFields on Policy {
    Underwriting {
      Code
      Key
      Value
      Remark
      Optional {
        Value
        label
      }
    }
  }
`;

const TRANSACTION_FIELDS = gql`
  fragment TransactionFields on Policy {
    Transaction {
      Number
      Date
      EffectiveDate
      EffectiveTime
      Type
      Status
      RequestedBy
      RequestedById
      IsOutOfSequence
      PremiumType
      PolicyVersion
      FileType
      FileName
      File
      Remarks
      HoldRemarks
      RejectRemarks
      Reason
      ReasonId
      MEP
      SCR
      Verification {
        IsInsuredESignVerified
        IsAgentESignVerified
        IsEmailVerified
        IsOTPVerified
        InsuredOTP
      }
      TransactionStatusHistory {
        OldStatus
        NewStatus
        ChangedBy
        ChangedDate
      }
      RenewalOffers {
        RenewalOfferId
        CurrentPremium
        RenewalPremium
        IsUpdateRenewalPremium
        RenewalOfferFlags {
          CreatedOn
          UpdatedOn
          CreatedBy
          UpdatedBy
          EmailSentFlag
        }
      }
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
      EffectivePremium
      AnnualPremium
      EffectivePremiumWithFeesAndTaxes
      AnnualPremiumWithFeesAndTaxes
    }
  }
`;

const PREMIUM_FACTORS_FIELDS = gql`
  fragment PremiumFactorsFields on Policy {
    PremiumFactors {
      Name
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
      AnnualPremium
      PremiumDifference
      Factor {
        Name
        Type
        Description
        Rate
        Limit
        LimitAmount
        Premium
        Status
        IsApplicable
        IsSelected
        IsMandatory
        Deductible
        EffectivePremium
        AnnualPremium
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
      AnnualPremium
      PriorAnnualPremium
      EffectivePremiumWithFeesAndTaxes
      AnnualPremiumWithFeesAndTaxes
      OOSPremium
    }
  }
`;

const POLICY_COVERAGES_FIELDS = gql`
  fragment PolicyCoverageFields on Policy {
    PolicyCoverages {
      Coverages {
        Carrier
        Name
        Description
        Type
        SettlementType
        Value
        Limit
        LimitAmount
        Deductible
        IsApplicable
        IsSelected
        IsMandatory
        Status
      }
    }
  }
`;

const ATTRIBUTES_FIELDS = gql`
  fragment AttributesFields on Policy {
    Attributes {
      AppSource
      Carrier
      Client
      Coverholder
      Lob
      State
      Product
      RaterVersion
      IsBridge
      IsInEligible
      IsNonOwnerPolicy
      FullCoverage
      TotalViolationPoints
      IsTestPolicy
      RenewalConfigurations {
        BeforeForAgent {
          Value
          ValueType
        }
        AfterForAgent {
          Value
          ValueType
        }
        BeforeForUnderwriter {
          Value
          ValueType
        }
        AfterForUnderwriter {
          Value
          ValueType
        }
      }
      QuoteValidity {
        Value
        ValueType
      }
    }
  }
`;

const AUDIT_FIELDS = gql`
  fragment AuditFields on Policy {
    Audit {
      CreatedBy
      CreatedOn
      DeletedOn
      LastUpdatedBy
      LastUpdatedOn
    }
  }
`;

const DISCOUNT_SURCHARGE_FIELDS = gql`
  fragment DiscountSurchargeFields on Policy {
    DiscountAndSurcharges {
      Name
      Type
      Amount
      IsApplied
      Value
    }
  }
`;

const INSURED_ACCOUNT_FIELDS = gql`
  fragment InsuredAccountFields on Policy {
    InsuredAccount {
      Type
      CreationDate
      Suffix
      UserName
      FirstName
      MiddleName
      LastName
      DisplayName
      DOB
      BankDetails {
        AccountName
        BankName
        BranchName
        AccountType
        RoutingNo
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      BusinessInfo {
        BusinessType
        YearsInBusiness
        IncorporationAge
        BusinessName
        DisplayName
        RegistrationNumber
        BusinessStruct
        SpecialRisk
        NoOfOwners
        FullTimeEmployees
        PartTimeEmployees
        Website
        IndustryType
        BusinessDecsription
        AnnualRevenue
        NumberOFLocations
        Locations {
          NickName
          LocationNumber
          IsValid
          Status
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
            Name
            Premise
            Status
            Territory
            Business
            PlaceId
            Street
            StreetName
          }
          Type
        }
      }
      IsAuthorizeForReports
      IsAuthorizationforConsumerRatingInformation
      IsAuthorizeForCreditScore
      CreditScore {
        Score
        ScoreDescription
        StatusCode
        Message
        NeedApiCall
      }
    }
  }
`;

const CLAIMS_FIELDS = gql`
  fragment ClaimsFields on Policy {
    Claims {
      Status
      ClaimSequence
      IsUnrepairedDamage
      DateofLoss
      PaidAmount
      ReserveAmount
      IncidentType
      CoverageType
      ClaimantName
      UnitId
      Remark
    }
  }
`;

const RULES_FIELDS = gql`
  fragment RulesFields on Policy {
    Rules {
      Action
      MatchingRules {
        Type
        Description
        Isfulfilled
        Status
        Remark
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
      Description
      Type
      IsOverride
      Status
      Value
      ValueType
      Amount
      AnnualAmount
      IsProRated
    }
  }
`;

const PAYPLAN_FIELDS = gql`
  fragment PayPlanFields on Policy {
    Payplan {
      DownPaymentPercentage
      DownPaymentCode
      DownPaymentDueDays
      DownPaymentAmount
      PayInFull
      NoOfInstallments
      MoreThanDPAmount
      IsSelected
      PPDescription
      Installments {
        InstallmentNumber
        BillingPlan
        DownPay
        Payments
        Date
        IsSelected
      }
    }
  }
`;

const PAYMENTS_FIELDS = gql`
  fragment PaymentsFields on Policy {
    Payments {
      LastName
      FirstName
      OrderID
      TransactionType
      TransactionID
      TransactionDate
      TransactionStatus
      TransactionAmount
      BankDetails {
        AccountName
        BankName
        BranchName
        AccountType
        RoutingNo
      }
      CardDetails {
        Type
        CardNumber
        Expiry
        CVVCode
        LastFourDigits
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

const JOINTPOLICYHOLDERS_FIELDS = gql`
  fragment JointPolicyHoldersFields on Policy {
    JointPolicyHolders {
      FirstName
      MiddleName
      LastName
      DateOfBirth
      InsuredType
      Age {
        Value
        ValueType
      }
      Occupation
      IsHighProfile
      IsAddressSameAsRisk
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
      }
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
    }
  }
`;

const OOS_FIELDS = gql`
  fragment OOSFields on Policy {
    OOS {
			TotalPremium {
        BasicPremium
			  Surcharge
			  Discount
				MinPremium
				EffectivePremium
				AnnualPremium
				PriorAnnualPremium
				EffectivePremiumWithFeesAndTaxes
				AnnualPremiumWithFeesAndTaxes
				OOSPremium
			}	
			FeesAndTaxes {
				Code
				Description
				Type
				IsOverride
				Status
				Value
				ValueType
				Amount
				AnnualAmount
				IsProRated
			}
		}
  }
`;

const RISKS_FIELDS = gql`
  fragment RisksFields on Policy {
    Risks {
      Vehicles {
        AdditionalParties {
          Status
          Name
          ReferenceNumber
          IsPayee
          PartyType
          InterestType
          CreatedOn
          DeletedOn
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
            Name
            Premise
            Status
            Territory
            Business
            PlaceId
            Street
            StreetName
          }
          Communications {
            Type
            SubType
            Value
            Status
          }
        }
        Audit {
          CreatedBy
          CreatedOn
          DeletedOn
          LastUpdatedBy
          LastUpdatedOn
        }
        Coverages {
          Carrier
          Name
          Description
          Type
          SettlementType
          Value
          Limit
          LimitAmount
          Deductible
          IsApplicable
          IsSelected
          IsMandatory
          Status
        }
        Premium {
          BasicPremium
          Surcharge
          Discount
          MinPremium
          EffectivePremium
          AnnualPremium
          EffectivePremiumWithFeesAndTaxes
          AnnualPremiumWithFeesAndTaxes
        }
        PremiumFactors {
          Name
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
          AnnualPremium
          PremiumDifference
          Factor {
            Name
            Type
            Description
            Rate
            Limit
            LimitAmount
            Premium
            Status
            IsApplicable
            IsSelected
            IsMandatory
            Deductible
            EffectivePremium
            AnnualPremium
          }
        }
        IsDeleted
        Name
        Status
        UnitId
        UnitNumber
        UnitType
        IsNewlyAdded
        VehicleRiskAttributes {
          ClassificationType
          SecondaryUse
          SecondaryUsePercent
          VehicleType
          VIN
          Year
          VehicleAge
          Make
          Model
          OwnedOrLeased
          BusinessUseClass
          SizeClass
          GROSSCOMBWEIGHT
          RADIUSCLASSTYPE
          VEHPRICE
          PASSIVERESTR
          VEHYEAR
          ANTILOCKBRAKES
          COSTTYPE
          FARTHESTLOCCITY
          FARTHESTLOCCOUNTY
          FARTHESTLOCSTATE
          FARTHESTLOC
          ISVEHICLEUPLOADED
          COMPDED
          COLLDED
          MPDED
          HASPD
          HASMP
          TEMPLATENAME
          UWREFMSG
          GARAGELOC
          HASRENTAL
          CSLLIMIT
          LIABDED
          UMTYPE
          UMDED
          UMLIMIT
          PrimaryGaragingLocation {
            Number
            AddressType
            IsManual
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
            Name
            Premise
            Status
            Territory
            Business
            PlaceId
            AptSuiteLot
            Street
            StreetName
          }
          AdditionalInterestDetails {
            DetailNo
            Type
            Name
            Address
            City
            State
            Postalcode
            AptSuite
          }
          HasAdditionalInterestDetails
          SymbolOTC
          SymbolColl
          SymbolLiab
          SymbolMP
          OTCDeductible
          CollDeductible
          IsGaragingSameAsMailing
          IncludePunitiveDamages
          IsDNI
          AnnualMileage
          BodyStyle
          MechanicalDesc
          IsNonOwnerPolicy
          VerifiedVIN
          Towing
          Rental
          Use
          AirbagDisc
          AssignedDriver
          SoftDelete
          VehicleLoadCapacity
          IsBusinessUse
        }
      }
      Drivers {
        UnitId
        UnitNumber
        Name
        UnitType
        IsNewlyAdded
        Status
        IsDeleted
        Coverages {
          Carrier
          Name
          Description
          Type
          SettlementType
          Value
          Limit
          LimitAmount
          Deductible
          IsApplicable
          IsSelected
          IsMandatory
          Status
        }
        PremiumFactors {
          Name
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
          AnnualPremium
          PremiumDifference
          Factor {
            Name
            Type
            Description
            Rate
            Limit
            LimitAmount
            Premium
            Status
            IsApplicable
            IsSelected
            IsMandatory
            Deductible
            EffectivePremium
            AnnualPremium
          }
        }
        Premium {
          BasicPremium
          Surcharge
          Discount
          MinPremium
          EffectivePremium
          AnnualPremium
          EffectivePremiumWithFeesAndTaxes
          AnnualPremiumWithFeesAndTaxes
        }
        Audit {
          CreatedBy
          CreatedOn
          DeletedOn
          LastUpdatedBy
          LastUpdatedOn
        }
        DriverRiskAttributes {
          Type
          PrevType
          FirstName
          MiddleName
          LastName
          Suffix
          DOB
          Age
          Experience
          LicenseNumber
          Violations
          IsUSCitizen
          Occupation
          OtherOccupation
          FilingStatusCode
          Fillings {
            Fillings
            Date
            Reason
            FilingCd
            FilingStatusCd
          }
          FilingCode
          LicenseDate
          State
          HadTrainingCourse
          IsMilitary
          MilitaryRank
          HadDUIDWI
          DriverCourseCompletedDate
          CanInsureOperate
          LicenseStatus
          IsGoodStudentDiscountApplicable
          MaritalStatus
          Gender
          Violation {
            ViolationNumber
            Date
            Type
            HadAccident
            ConvictionDate
            PJC
            TotalPoints
            SISCode
            AccidentViolationDisputeCode
            Dispute
            DisputeReason
            Source
            IsNewlyAdded
          }
          RelationToApplicant
          IsDNI
          IsEditing
          SSN
          AgeWhenFirstLicensed
          MVRCount
          MVRViolationStatus
          IsVerifiedBy
        }
      }
    }
  }
`;

//#endregion

export const UPDATE_POLICY = gql`
${CORE_POLICY_FIELDS}
${UNDERWRITTING_FIELDS}
${TRANSACTION_FIELDS}
${PREMIUM_FACTORS_FIELDS}
${PREMIUM_FIELDS}
${TOTAL_PREMIUM_FIELDS}
${POLICY_COVERAGES_FIELDS}
${ATTRIBUTES_FIELDS}
${AUDIT_FIELDS}
${EXTERNALREFERENCES_FIELDS}
${JOINTPOLICYHOLDERS_FIELDS}
${DISCOUNT_SURCHARGE_FIELDS}
${CLAIMS_FIELDS}
${RULES_FIELDS}
${FORMS_FIELDS}
${FEES_TAXES_FIELDS}
${PAYPLAN_FIELDS}
${PAYMENTS_FIELDS}
${INSURED_ACCOUNT_FIELDS}
${RISKS_FIELDS}
${NON_FUNCTIONAL_FIELDS}
${PREVIOUSPOLICIES_FIELDS}
mutation Mutation($input: inpPolicy) {
  putItem(input: $input) {
    ...CorePolicyFields
    ...UnderwritingFields
    ...TransactionFields
    ...PremiumFactorsFields
    ...PremiumFields
    ...TotalPremiumFields
    ...PolicyCoverageFields
    ...AttributesFields
    ...AuditFields
    ...DiscountSurchargeFields
    ...ClaimsFields
    ...RulesFields
    ...FormsFields
    ...FeesAndTaxesFields
    ...PayPlanFields
    ...PaymentsFields
    ...ExternalReferencesFields
    ...JointPolicyHoldersFields
    ...InsuredAccountFields
    ...RisksFields
    ...NonFunctionalFields
    ...PreviousPoliciesFields
  }
}
`;

export const TRIGGER_NOTIFICATION = gql`
  mutation ($input: inpNotification) {
    postToNotificationAPI(input: $input)
  }
`;

export const REVERT_TRANSACTION = gql`
mutation RevertTransaction($input: inpPolicy) {
  revertTransaction(input: $input) {
    id
    AccountId
    QuoteNumber
    IsPolicyBind
    IsInForce
    IsRenewed
    PolicyNumber
    PolicyTerm {
      Value
      ValueType
    }
    EffectiveDate
    ExpirationDate
    PolicyStatus
    CurrentVersion
    CurrentVersionEffectiveFrom
    PayMode
    InceptionTime
    SignatureType
    UnderwritingTier
    FinancialTier
    ForceRetiering
    ActivityCode
    UMAddedReducedIndex
    PreferredAgency
    BindDate
    QuoteDate
    QuoteExpDate
    RenewalTerm
    RenewalQuoteID
    IsOOS
    SelectStackUM
    PolicyStatusHistory {
      OldStatus
      NewStatus
      ChangedBy
      ChangedDate
    }
    NonFunctional {
      LastSubmittedPage
      Milestones
    }
    PreviousPolicies {
      IsPreviousPolicy
      PreviousPolicyNumber
      OtherCoverages
      IsPreviousClaims
      NoOfClaims
      TotalAmountClaimed
    }
    DiscountAndSurcharges {
      Name
      Type
      Amount
      IsApplied
      Value
    }
    PolicyRiskAttributes {
      FirstName
      MiddleName
      LastName
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
      EstimatedBalanceAfterCancel
      BillingAccountNumber
      CurrentPolicyBalance
      DropboxSignatureRequestID
      CancellationCount
      ReinstatementCount
      EndorsementCount
      InstallmentDueDate
      CurrentInstallmentAmount
    }
    InsuredAccount {
      Type
      CreationDate
      Suffix
      UserName
      FirstName
      MiddleName
      LastName
      DisplayName
      DOB
      BankDetails {
        AccountName
        BankName
        BranchName
        AccountType
        RoutingNo
      }
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      BusinessInfo {
        BusinessType
        YearsInBusiness
        IncorporationAge
        BusinessName
        DisplayName
        RegistrationNumber
        BusinessStruct
        SpecialRisk
        NoOfOwners
        FullTimeEmployees
        PartTimeEmployees
        Website
        IndustryType
        BusinessDecsription
        AnnualRevenue
        NumberOFLocations
        Locations {
          NickName
          LocationNumber
          IsValid
          Status
          Type
        }
      }
      IsAuthorizeForReports
      IsAuthorizationforConsumerRatingInformation
      IsAuthorizeForCreditScore
      CreditScore {
        Score
        ScoreDescription
        StatusCode
        Message
        NeedApiCall
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    JointPolicyHolders {
      FirstName
      MiddleName
      LastName
      DateOfBirth
      InsuredType
      Age {
        Value
        ValueType
      }
      Occupation
      IsHighProfile
      IsAddressSameAsRisk
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    Audit {
      CreatedBy
      CreatedOn
      DeletedOn
      LastUpdatedBy
      LastUpdatedOn
    }
    ExternalRefrences {
      ReferenceNumber
      ReferenceTarget
      Status
    }
    Payments {
      LastName
      FirstName
      OrderID
      TransactionType
      TransactionID
      TransactionDate
      TransactionStatus
      TransactionAmount
      CardDetails {
        Type
        CardNumber
        Expiry
        CVVCode
        LastFourDigits
      }
      BankDetails {
        AccountName
        BankName
        BranchName
        AccountType
        RoutingNo
      }
    }
    Attributes {
      AppSource
      Carrier
      Client
      Coverholder
      Lob
      State
      Product
      RaterVersion
      IsBridge
      IsInEligible
      IsNonOwnerPolicy
      FullCoverage
      TotalViolationPoints
      IsTestPolicy
      RenewalConfigurations {
        BeforeForAgent {
          Value
          ValueType
        }
        AfterForAgent {
          Value
          ValueType
        }
        BeforeForUnderwriter {
          Value
          ValueType
        }
        AfterForUnderwriter {
          Value
          ValueType
        }
      }
      QuoteValidity {
        Value
        ValueType
      }
    }
    PolicyCoverages {
      Coverages {
        Carrier
        Name
        Description
        Type
        SettlementType
        Value
        Limit
        LimitAmount
        Deductible
        IsApplicable
        IsSelected
        IsMandatory
        Status
      }
    }
    Payplan {
      DownPaymentPercentage
      DownPaymentCode
      DownPaymentDueDays
      DownPaymentAmount
      PayInFull
      NoOfInstallments
      MoreThanDPAmount
      IsSelected
      PPDescription
      Installments {
        InstallmentNumber
        BillingPlan
        DownPay
        Payments
        Date
        IsSelected
      }
    }
    FeesAndTaxes {
      Code
      Description
      Type
      IsOverride
      Status
      Value
      ValueType
      Amount
      AnnualAmount
      IsProRated
    }
    TotalPremium {
      BasicPremium
      Surcharge
      Discount
      MinPremium
      EffectivePremium
      AnnualPremium
      PriorAnnualPremium
      EffectivePremiumWithFeesAndTaxes
      AnnualPremiumWithFeesAndTaxes
      OOSPremium
    }
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
    Transaction {
      Number
      Date
      EffectiveDate
      EffectiveTime
      Type
      Status
      RequestedBy
      RequestedById
      IsOutOfSequence
      PremiumType
      PolicyVersion
      FileType
      FileName
      File
      Remarks
      HoldRemarks
      RejectRemarks
      Reason
      ReasonId
      MEP
      SCR
      Verification {
        IsInsuredESignVerified
        IsAgentESignVerified
        IsEmailVerified
        IsOTPVerified
        InsuredOTP
      }
      TransactionStatusHistory {
        OldStatus
        NewStatus
        ChangedBy
        ChangedDate
      }
      RenewalOffers {
        RenewalOfferId
        CurrentPremium
        RenewalPremium
        IsUpdateRenewalPremium
        RenewalOfferFlags {
          CreatedOn
          UpdatedOn
          CreatedBy
          UpdatedBy
          EmailSentFlag
        }
      }
    }
    Underwriting {
      Code
      Key
      Value
      Remark
      Optional {
        Value
        label
      }
    }
    UnderwritingNew {
      IsPhysicalImpairment
      PhysicalImpairment
      HaveAllDriversListed
      ReasonAllDriversNotListed
      HaveAllResidentsDisclosed
      ReasonAllResidentsNotDisclosed
      IsMemberOfArmedForces
      RemarkOnMemberOfArmedForces
      AgreeToNotifyDrivingStatus
      AgreementOnUndisclosedDriver
      IsUnrepairedDamage
      DescribeUnrepairedDamage
      HasListedAllVehicles
      DescribeIfNotAllVehiclesListed
      HasAllVehiclesTitledToInsured
      DescribeIfNotAllVehiclesTitled
      NameOnTitle
      InspectedByAgent
      DescribeIfNotInspectedByAgent
      GaragedInState
      DescribeIfNotGaragedInState
      IsProvidingTransportServices
      DescribeTransportServices
      IsUsedForDeliveryNetwork
      DescribeIfUsedForDeliveryNetwork
      IsDriverConvictedOfFelony
      DescribeIfDriverConvictedOfFelony
    }
    Risks {
      Vehicles {
        UnitId
        UnitNumber
        Name
        UnitType
        Status
        IsDeleted
        IsNewlyAdded
        AdditionalParties {
          Status
          Name
          ReferenceNumber
          IsPayee
          PartyType
          InterestType
          CreatedOn
          DeletedOn
        }
        VehicleRiskAttributes {
          ClassificationType
          SecondaryUse
          SecondaryUsePercent
          VehicleType
          VIN
          Year
          VehicleAge
          Make
          Model
          OwnedOrLeased
          BusinessUseClass
          SizeClass
          GROSSCOMBWEIGHT
          RADIUSCLASSTYPE
          VEHPRICE
          PASSIVERESTR
          VEHYEAR
          ANTILOCKBRAKES
          COSTTYPE
          FARTHESTLOCCITY
          FARTHESTLOCCOUNTY
          FARTHESTLOCSTATE
          FARTHESTLOC
          ISVEHICLEUPLOADED
          COMPDED
          COLLDED
          MPDED
          HASPD
          HASMP
          TEMPLATENAME
          UWREFMSG
          GARAGELOC
          HASRENTAL
          CSLLIMIT
          LIABDED
          UMTYPE
          UMDED
          UMLIMIT
          PrimaryGaragingLocation {
            Number
            AddressType
            IsManual
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
            Name
            Premise
            Status
            Territory
            Business
            PlaceId
            AptSuiteLot
            Street
            StreetName
          }
          AdditionalInterestDetails {
            DetailNo
            Type
            Name
            Address
            City
            State
            Postalcode
            AptSuite
          }
          HasAdditionalInterestDetails
          SymbolOTC
          SymbolColl
          SymbolLiab
          SymbolMP
          OTCDeductible
          CollDeductible
          IsGaragingSameAsMailing
          IncludePunitiveDamages
          IsDNI
          AnnualMileage
          BodyStyle
          MechanicalDesc
          IsNonOwnerPolicy
          VerifiedVIN
          Towing
          Rental
          Use
          AirbagDisc
          AssignedDriver
          SoftDelete
          VehicleLoadCapacity
          IsBusinessUse
        }
        Coverages {
          Carrier
          Name
          Description
          Type
          SettlementType
          Value
          Limit
          LimitAmount
          Deductible
          IsApplicable
          IsSelected
          IsMandatory
          Status
        }
        PremiumFactors {
          Name
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
          AnnualPremium
          PremiumDifference
          Factor {
            Name
            Type
            Description
            Rate
            Limit
            LimitAmount
            Premium
            Status
            IsApplicable
            IsSelected
            IsMandatory
            Deductible
            EffectivePremium
            AnnualPremium
          }
        }
        Premium {
          BasicPremium
          Surcharge
          Discount
          MinPremium
          EffectivePremium
          AnnualPremium
          EffectivePremiumWithFeesAndTaxes
          AnnualPremiumWithFeesAndTaxes
        }
        Audit {
          CreatedBy
          CreatedOn
          DeletedOn
          LastUpdatedBy
          LastUpdatedOn
        }
      }
      Drivers {
        UnitId
        UnitNumber
        Name
        UnitType
        Status
        IsDeleted
        IsNewlyAdded
        DriverRiskAttributes {
          Type
          PrevType
          FirstName
          MiddleName
          LastName
          Suffix
          DOB
          Age
          Experience
          LicenseNumber
          Violations
          IsUSCitizen
          Occupation
          OtherOccupation
          FilingStatusCode
          Fillings {
            Fillings
            Date
            Reason
            FilingCd
            FilingStatusCd
          }
          FilingCode
          LicenseDate
          State
          HadTrainingCourse
          IsMilitary
          MilitaryRank
          HadDUIDWI
          DriverCourseCompletedDate
          CanInsureOperate
          LicenseStatus
          IsGoodStudentDiscountApplicable
          MaritalStatus
          Gender
          Violation {
            ViolationNumber
            Date
            Type
            HadAccident
            ConvictionDate
            PJC
            TotalPoints
            SISCode
            AccidentViolationDisputeCode
            Dispute
            DisputeReason
            Source
            IsNewlyAdded
          }
          RelationToApplicant
          IsDNI
          IsEditing
          SSN
          AgeWhenFirstLicensed
          MVRCount
          MVRViolationStatus
          IsVerifiedBy
        }
        Coverages {
          Carrier
          Name
          Description
          Type
          SettlementType
          Value
          Limit
          LimitAmount
          Deductible
          IsApplicable
          IsSelected
          IsMandatory
          Status
        }
        PremiumFactors {
          Name
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
          AnnualPremium
          PremiumDifference
          Factor {
            Name
            Type
            Description
            Rate
            Limit
            LimitAmount
            Premium
            Status
            IsApplicable
            IsSelected
            IsMandatory
            Deductible
            EffectivePremium
            AnnualPremium
          }
        }
        Premium {
          BasicPremium
          Surcharge
          Discount
          MinPremium
          EffectivePremium
          AnnualPremium
          EffectivePremiumWithFeesAndTaxes
          AnnualPremiumWithFeesAndTaxes
        }
        Audit {
          CreatedBy
          CreatedOn
          DeletedOn
          LastUpdatedBy
          LastUpdatedOn
        }
      }
    }
    Rules {
      Action
      MatchingRules {
        Type
        Description
        Isfulfilled
        Status
        Remark
        Reason
      }
    }
    UnderWriter {
      Client
      Code
      Name
      Status
      Reference
      Products
      UWAttributes {
        UWOffice
        ContractNumber
        AccountExecCode
      }
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    PriorInsurances {
      IsCurrentlyInsured
      CompanyName
      OtherCompanyName
      EffectiveDate
      ExpirationDate
      Premium
      Status
    }
    Agency {
      Client
      Code
      Name
      Status
      Reference
      Products
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    Agent {
      Client
      Code
      Name
      Status
      Reference
      Products
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    AgentCommission {
      Value
      ValueType
    }
    Claims {
      Status
      ClaimSequence
      IsUnrepairedDamage
      DateofLoss
      PaidAmount
      ReserveAmount
      IncidentType
      CoverageType
      ClaimantName
      UnitId
      Remark
    }
    PremiumFactors {
      Name
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
      AnnualPremium
      PremiumDifference
      Factor {
        Name
        Type
        Description
        Rate
        Limit
        LimitAmount
        Premium
        Status
        IsApplicable
        IsSelected
        IsMandatory
        Deductible
        EffectivePremium
        AnnualPremium
      }
    }
    Premium {
      BasicPremium
      Surcharge
      Discount
      MinPremium
      EffectivePremium
      AnnualPremium
      EffectivePremiumWithFeesAndTaxes
      AnnualPremiumWithFeesAndTaxes
    }
    ReconciliationFlags {
      LiabilityPolicy
      ClueCount
      ClueVioationStatus
    }
			OOS {
				TotalPremium {
					BasicPremium
					Surcharge
					Discount
					MinPremium
					EffectivePremium
					AnnualPremium
					PriorAnnualPremium
					EffectivePremiumWithFeesAndTaxes
					AnnualPremiumWithFeesAndTaxes
					OOSPremium
				}
				FeesAndTaxes {
					Code
					Description
					Type
					IsOverride
					Status
					Value
					ValueType
					Amount
					AnnualAmount
					IsProRated
				}
			}
  }
}
`;

export const BIND_REINSTATE = gql`
mutation BindReinstate($quoteNumber: String,$policyNumber: String) {
  bindReinstate(QuoteNumber: $quoteNumber, PolicyNumber: $policyNumber) {
    id
    AccountId
    QuoteNumber
    IsPolicyBind
    IsInForce
    IsRenewed
    PolicyNumber
    PolicyTerm {
      Value
      ValueType
    }
    EffectiveDate
    ExpirationDate
    PolicyStatus
    CurrentVersion
    CurrentVersionEffectiveFrom
    PayMode
    InceptionTime
    SignatureType
    UnderwritingTier
    FinancialTier
    ForceRetiering
    ActivityCode
    UMAddedReducedIndex
    PreferredAgency
    BindDate
    QuoteDate
    QuoteExpDate
    RenewalTerm
    RenewalQuoteID
    IsOOS
    SelectStackUM
    PolicyStatusHistory {
      OldStatus
      NewStatus
      ChangedBy
      ChangedDate
    }
    NonFunctional {
      LastSubmittedPage
      Milestones
    }
    PreviousPolicies {
      IsPreviousPolicy
      PreviousPolicyNumber
      OtherCoverages
      IsPreviousClaims
      NoOfClaims
      TotalAmountClaimed
    }
    DiscountAndSurcharges {
      Name
      Type
      Amount
      IsApplied
      Value
    }
    PolicyRiskAttributes {
      FirstName
      MiddleName
      LastName
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
      EstimatedBalanceAfterCancel
      BillingAccountNumber
      CurrentPolicyBalance
      DropboxSignatureRequestID
      CancellationCount
      ReinstatementCount
      EndorsementCount
      InstallmentDueDate
      CurrentInstallmentAmount
    }
    InsuredAccount {
      Type
      CreationDate
      Suffix
      UserName
      FirstName
      MiddleName
      LastName
      DisplayName
      DOB
      BankDetails {
        AccountName
        BankName
        BranchName
        AccountType
        RoutingNo
      }
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      BusinessInfo {
        BusinessType
        YearsInBusiness
        IncorporationAge
        BusinessName
        DisplayName
        RegistrationNumber
        BusinessStruct
        SpecialRisk
        NoOfOwners
        FullTimeEmployees
        PartTimeEmployees
        Website
        IndustryType
        BusinessDecsription
        AnnualRevenue
        NumberOFLocations
        Locations {
          NickName
          LocationNumber
          IsValid
          Status
          Type
          Address {
            Number
            AddressType
            IsManual
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
            Name
            Premise
            Status
            Territory
            Business
            PlaceId
            AptSuiteLot
            Street
            StreetName
          }
        }
      }
      IsAuthorizeForReports
      IsAuthorizationforConsumerRatingInformation
      IsAuthorizeForCreditScore
      CreditScore {
        Score
        ScoreDescription
        StatusCode
        Message
        NeedApiCall
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    JointPolicyHolders {
      FirstName
      MiddleName
      LastName
      DateOfBirth
      InsuredType
      Age {
        Value
        ValueType
      }
      Occupation
      IsHighProfile
      IsAddressSameAsRisk
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    Audit {
      CreatedBy
      CreatedOn
      DeletedOn
      LastUpdatedBy
      LastUpdatedOn
    }
    ExternalRefrences {
      ReferenceNumber
      ReferenceTarget
      Status
    }
    Payments {
      LastName
      FirstName
      OrderID
      TransactionType
      TransactionID
      TransactionDate
      TransactionStatus
      TransactionAmount
      CardDetails {
        Type
        CardNumber
        Expiry
        CVVCode
        LastFourDigits
      }
      BankDetails {
        AccountName
        BankName
        BranchName
        AccountType
        RoutingNo
      }
    }
    Attributes {
      AppSource
      Carrier
      Client
      Coverholder
      Lob
      State
      Product
      RaterVersion
      IsBridge
      IsInEligible
      IsNonOwnerPolicy
      FullCoverage
      TotalViolationPoints
      IsTestPolicy
      RenewalConfigurations {
        BeforeForAgent {
          Value
          ValueType
        }
        AfterForAgent {
          Value
          ValueType
        }
        BeforeForUnderwriter {
          Value
          ValueType
        }
        AfterForUnderwriter {
          Value
          ValueType
        }
      }
      QuoteValidity {
        Value
        ValueType
      }
    }
    PolicyCoverages {
      Coverages {
        Carrier
        Name
        Description
        Type
        SettlementType
        Value
        Limit
        LimitAmount
        Deductible
        IsApplicable
        IsSelected
        IsMandatory
        Status
      }
    }
    Payplan {
      DownPaymentPercentage
      DownPaymentCode
      DownPaymentDueDays
      DownPaymentAmount
      PayInFull
      NoOfInstallments
      MoreThanDPAmount
      IsSelected
      PPDescription
      Installments {
        InstallmentNumber
        BillingPlan
        DownPay
        Payments
        Date
        IsSelected
      }
    }
    FeesAndTaxes {
      Code
      Description
      Type
      IsOverride
      Status
      Value
      ValueType
      Amount
      AnnualAmount
      IsProRated
    }
    TotalPremium {
      BasicPremium
      Surcharge
      Discount
      MinPremium
      EffectivePremium
      AnnualPremium
      PriorAnnualPremium
      EffectivePremiumWithFeesAndTaxes
      AnnualPremiumWithFeesAndTaxes
      OOSPremium
    }
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
    Transaction {
      Number
      Date
      EffectiveDate
      EffectiveTime
      Type
      Status
      RequestedBy
      RequestedById
      IsOutOfSequence
      PremiumType
      PolicyVersion
      FileType
      FileName
      File
      Remarks
      HoldRemarks
      RejectRemarks
      Reason
      ReasonId
      MEP
      SCR
      Verification {
        IsInsuredESignVerified
        IsAgentESignVerified
        IsEmailVerified
        IsOTPVerified
        InsuredOTP
      }
      TransactionStatusHistory {
        OldStatus
        NewStatus
        ChangedBy
        ChangedDate
      }
      RenewalOffers {
        RenewalOfferId
        CurrentPremium
        RenewalPremium
        IsUpdateRenewalPremium
        RenewalOfferFlags {
          CreatedOn
          UpdatedOn
          CreatedBy
          UpdatedBy
          EmailSentFlag
        }
      }
    }
    Underwriting {
      Code
      Key
      Value
      Remark
      Optional {
        Value
        label
      }
    }
    UnderwritingNew {
      IsPhysicalImpairment
      PhysicalImpairment
      HaveAllDriversListed
      ReasonAllDriversNotListed
      HaveAllResidentsDisclosed
      ReasonAllResidentsNotDisclosed
      IsMemberOfArmedForces
      RemarkOnMemberOfArmedForces
      AgreeToNotifyDrivingStatus
      AgreementOnUndisclosedDriver
      IsUnrepairedDamage
      DescribeUnrepairedDamage
      HasListedAllVehicles
      DescribeIfNotAllVehiclesListed
      HasAllVehiclesTitledToInsured
      DescribeIfNotAllVehiclesTitled
      NameOnTitle
      InspectedByAgent
      DescribeIfNotInspectedByAgent
      GaragedInState
      DescribeIfNotGaragedInState
      IsProvidingTransportServices
      DescribeTransportServices
      IsUsedForDeliveryNetwork
      DescribeIfUsedForDeliveryNetwork
      IsDriverConvictedOfFelony
      DescribeIfDriverConvictedOfFelony
    }
    Risks {
      Vehicles {
        UnitId
        UnitNumber
        Name
        UnitType
        Status
        IsDeleted
        IsNewlyAdded
        AdditionalParties {
          Status
          Name
          ReferenceNumber
          IsPayee
          PartyType
          InterestType
          CreatedOn
          DeletedOn
          Address {
            Number
            AddressType
            IsManual
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
            Name
            Premise
            Status
            Territory
            Business
            PlaceId
            AptSuiteLot
            Street
            StreetName
          }
          Communications {
            Type
            SubType
            Value
            Status
            AcceptText
          }
        }
        VehicleRiskAttributes {
          ClassificationType
          SecondaryUse
          SecondaryUsePercent
          VehicleType
          VIN
          Year
          VehicleAge
          Make
          Model
          OwnedOrLeased
          BusinessUseClass
          SizeClass
          GROSSCOMBWEIGHT
          RADIUSCLASSTYPE
          VEHPRICE
          PASSIVERESTR
          VEHYEAR
          ANTILOCKBRAKES
          COSTTYPE
          FARTHESTLOCCITY
          FARTHESTLOCCOUNTY
          FARTHESTLOCSTATE
          FARTHESTLOC
          ISVEHICLEUPLOADED
          COMPDED
          COLLDED
          MPDED
          HASPD
          HASMP
          TEMPLATENAME
          UWREFMSG
          GARAGELOC
          HASRENTAL
          CSLLIMIT
          LIABDED
          UMTYPE
          UMDED
          UMLIMIT
          PrimaryGaragingLocation {
            Number
            AddressType
            IsManual
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
            Name
            Premise
            Status
            Territory
            Business
            PlaceId
            AptSuiteLot
            Street
            StreetName
          }
          AdditionalInterestDetails {
            DetailNo
            Type
            Name
            Address
            City
            State
            Postalcode
            AptSuite
          }
          HasAdditionalInterestDetails
          SymbolOTC
          SymbolColl
          SymbolLiab
          SymbolMP
          OTCDeductible
          CollDeductible
          IsGaragingSameAsMailing
          IncludePunitiveDamages
          IsDNI
          AnnualMileage
          BodyStyle
          MechanicalDesc
          IsNonOwnerPolicy
          VerifiedVIN
          Towing
          Rental
          Use
          AirbagDisc
          AssignedDriver
          SoftDelete
          VehicleLoadCapacity
          IsBusinessUse
        }
        Coverages {
          Carrier
          Name
          Description
          Type
          SettlementType
          Value
          Limit
          LimitAmount
          Deductible
          IsApplicable
          IsSelected
          IsMandatory
          Status
        }
        PremiumFactors {
          Name
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
          AnnualPremium
          PremiumDifference
          Factor {
            Name
            Type
            Description
            Rate
            Limit
            LimitAmount
            Premium
            Status
            IsApplicable
            IsSelected
            IsMandatory
            Deductible
            EffectivePremium
            AnnualPremium
          }
        }
        Premium {
          BasicPremium
          Surcharge
          Discount
          MinPremium
          EffectivePremium
          AnnualPremium
          EffectivePremiumWithFeesAndTaxes
          AnnualPremiumWithFeesAndTaxes
        }
        Audit {
          CreatedBy
          CreatedOn
          DeletedOn
          LastUpdatedBy
          LastUpdatedOn
        }
      }
      Drivers {
        UnitId
        UnitNumber
        Name
        UnitType
        Status
        IsDeleted
        IsNewlyAdded
        DriverRiskAttributes {
          Type
          PrevType
          FirstName
          MiddleName
          LastName
          Suffix
          DOB
          Age
          Experience
          LicenseNumber
          Violations
          IsUSCitizen
          Occupation
          OtherOccupation
          FilingStatusCode
          Fillings {
            Fillings
            Date
            Reason
            FilingCd
            FilingStatusCd
          }
          FilingCode
          LicenseDate
          State
          HadTrainingCourse
          IsMilitary
          MilitaryRank
          HadDUIDWI
          DriverCourseCompletedDate
          CanInsureOperate
          LicenseStatus
          IsGoodStudentDiscountApplicable
          MaritalStatus
          Gender
          Violation {
            ViolationNumber
            Date
            Type
            HadAccident
            ConvictionDate
            PJC
            TotalPoints
            SISCode
            AccidentViolationDisputeCode
            Dispute
            DisputeReason
            Source
            IsNewlyAdded
          }
          RelationToApplicant
          IsDNI
          IsEditing
          SSN
          AgeWhenFirstLicensed
          MVRCount
          MVRViolationStatus
          IsVerifiedBy
        }
        Coverages {
          Carrier
          Name
          Description
          Type
          SettlementType
          Value
          Limit
          LimitAmount
          Deductible
          IsApplicable
          IsSelected
          IsMandatory
          Status
        }
        PremiumFactors {
          Name
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
          AnnualPremium
          PremiumDifference
          Factor {
            Name
            Type
            Description
            Rate
            Limit
            LimitAmount
            Premium
            Status
            IsApplicable
            IsSelected
            IsMandatory
            Deductible
            EffectivePremium
            AnnualPremium
          }
        }
        Premium {
          BasicPremium
          Surcharge
          Discount
          MinPremium
          EffectivePremium
          AnnualPremium
          EffectivePremiumWithFeesAndTaxes
          AnnualPremiumWithFeesAndTaxes
        }
        Audit {
          CreatedBy
          CreatedOn
          DeletedOn
          LastUpdatedBy
          LastUpdatedOn
        }
      }
    }
    Rules {
      Action
      MatchingRules {
        Type
        Description
        Isfulfilled
        Status
        Remark
        Reason
      }
    }
    UnderWriter {
      Client
      Code
      Name
      Status
      Reference
      Products
      UWAttributes {
        UWOffice
        ContractNumber
        AccountExecCode
      }
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    PriorInsurances {
      IsCurrentlyInsured
      CompanyName
      OtherCompanyName
      EffectiveDate
      ExpirationDate
      Premium
      Status
    }
    Agency {
      Client
      Code
      Name
      Status
      Reference
      Products
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    Agent {
      Client
      Code
      Name
      Status
      Reference
      Products
      Address {
        Number
        AddressType
        IsManual
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
        Name
        Premise
        Status
        Territory
        Business
        PlaceId
        AptSuiteLot
        Street
        StreetName
      }
      Communications {
        Type
        SubType
        Value
        Status
        AcceptText
      }
    }
    AgentCommission {
      Value
      ValueType
    }
    Claims {
      Status
      ClaimSequence
      IsUnrepairedDamage
      DateofLoss
      PaidAmount
      ReserveAmount
      IncidentType
      CoverageType
      ClaimantName
      UnitId
      Remark
    }
    PremiumFactors {
      Name
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
      AnnualPremium
      PremiumDifference
      Factor {
        Name
        Type
        Description
        Rate
        Limit
        LimitAmount
        Premium
        Status
        IsApplicable
        IsSelected
        IsMandatory
        Deductible
        EffectivePremium
        AnnualPremium
      }
    }
    Premium {
      BasicPremium
      Surcharge
      Discount
      MinPremium
      EffectivePremium
      AnnualPremium
      EffectivePremiumWithFeesAndTaxes
      AnnualPremiumWithFeesAndTaxes
    }
    ReconciliationFlags {
      LiabilityPolicy
      ClueCount
      ClueVioationStatus
    }
			OOS {
				TotalPremium {
					BasicPremium
					Surcharge
					Discount
					MinPremium
					EffectivePremium
					AnnualPremium
					PriorAnnualPremium
					EffectivePremiumWithFeesAndTaxes
					AnnualPremiumWithFeesAndTaxes
					OOSPremium
				}
				FeesAndTaxes {
					Code
					Description
					Type
					IsOverride
					Status
					Value
					ValueType
					Amount
					AnnualAmount
					IsProRated
				}
			}
  }
}
`;