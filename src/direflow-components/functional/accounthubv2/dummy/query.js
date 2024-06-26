

export const GETACCOUNTHUB = `query GetByPagination($input: filters) {
  getByPagination(input: $input) {
    totalSize
    policy {
      id
      AccountId
      QuoteNumber
      QuoteVersion
      isInactiveQuoteVersion
      IsPolicyBind
      IsInForce
      IsRenewed
      PolicyNumber
      LinkedPolicyNumber
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
        Remarks
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
        ExcludedDriverList
        OriginalInceptionDate
        IsNonRenewal
        NonRenewalReasons
        NonRenewalRemarks
        NonRenewalDate
        NonRenewalTmp {
          IsNonRenewal
          NonRenewalReasons
          NonRenewalRemarks
          NonRenewalDate
        }
        SISCurrentPayment
        SISRenewalTermDownPayment
        IsNonRenewalDocGenerated
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
        CustomerId
        CardDetails {
          Type
          CardNumber
          Expiry
          CVVCode
          LastFourDigits
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
        ProgramType
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
          Status
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
        ProductFeesAndTaxes {
          Code
          Description
          EffectiveFrom
          Status
          Product
          IsEarned
          Value
          ValueType
          DecimalPoints
          RangeFrom
          RangeTo
          RangeValueType
          Transactions
          CalculateOn
        }
      }
      TransactionFeesAndTaxes {
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
        CommutativeEffectivePremium
        WorkingMonthlyPremium
        MonthlyEffectivePremium
        Fees
        Taxes
        AnnualFees
        AnnualTax
        FullyEarnedPremium
      }
      TransactionTotalPremium {
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
        CommutativeEffectivePremium
        WorkingMonthlyPremium
        MonthlyEffectivePremium
        Fees
        Taxes
        AnnualFees
        AnnualTax
        FullyEarnedPremium
      }
      TransactionHistory {
        AnnualFees
        AnnualPremium
        AnnualPremiumWithFeesAndTaxes
        AnnualTax
        Date
        EffectiveDate
        EffectivePremium
        EffectivePremiumWithFeesAndTaxes
        Fees
        Number
        Taxes
        Type
        Remarks
        UpdatedBy
        UpdatedOn
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
        Time
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
        OOSGroupNumber
        OOSSeqNumber
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
          LastModifiedTransactionNumber
          LastModifiedTransactionDetails
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
              IsDeleted
              IsNewlyAdded
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
          Status
          IsDeleted
          IsNewlyAdded
          LastModifiedTransactionNumber
          LastModifiedTransactionDetails
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
            DNIType
            DNIId
            IsEditing
            SSN
            AgeWhenFirstLicensed
            MVRCount
            MVRViolationStatus
            IsVerifiedBy
            ClueMVROrderDate
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
      }
      Agent {
        Client
        Code
        Name
        Status
        Reference
        Products
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
        AnnualSurcharge
        AnnualDiscount
        FullyEarnedPremium
      }
      ReconciliationFlags {
        LiabilityPolicy
        ClueCount
        ClueVioationStatus
        ClueReferenceNumber
      }
      PolicyStatusRemarks
      RatingErrors
      _rid
      _self
      _etag
      _attachments
      _ts
    }
  }
}`;

export const GETACCOUNTHUB2 = `query GetByFilter($input: filters) {
  getByFilter(input: $input) {
    id
    AccountId
    QuoteNumber
    QuoteVersion
    isInactiveQuoteVersion
    IsPolicyBind
    IsInForce
    IsRenewed
    PolicyNumber
    LinkedPolicyNumber
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
      Remarks
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
      ExcludedDriverList
      OriginalInceptionDate
      IsNonRenewal
      NonRenewalReasons
      NonRenewalRemarks
      NonRenewalDate
      NonRenewalTmp {
        IsNonRenewal
        NonRenewalReasons
        NonRenewalRemarks
        NonRenewalDate
      }
      SISCurrentPayment
      SISRenewalTermDownPayment
      IsNonRenewalDocGenerated
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
      CustomerId
      CardDetails {
        Type
        CardNumber
        Expiry
        CVVCode
        LastFourDigits
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
      ProgramType
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
        Status
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
      ProductFeesAndTaxes {
        Code
        Description
        EffectiveFrom
        Status
        Product
        IsEarned
        Value
        ValueType
        DecimalPoints
        RangeFrom
        RangeTo
        RangeValueType
        Transactions
        CalculateOn
      }
    }
    TransactionFeesAndTaxes {
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
      CommutativeEffectivePremium
      WorkingMonthlyPremium
      MonthlyEffectivePremium
      Fees
      Taxes
      AnnualFees
      AnnualTax
      FullyEarnedPremium
    }
    TransactionTotalPremium {
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
      CommutativeEffectivePremium
      WorkingMonthlyPremium
      MonthlyEffectivePremium
      Fees
      Taxes
      AnnualFees
      AnnualTax
      FullyEarnedPremium
    }
    TransactionHistory {
      AnnualFees
      AnnualPremium
      AnnualPremiumWithFeesAndTaxes
      AnnualTax
      Date
      EffectiveDate
      EffectivePremium
      EffectivePremiumWithFeesAndTaxes
      Fees
      Number
      Taxes
      Type
      Remarks
      UpdatedBy
      UpdatedOn
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
      Time
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
      OOSGroupNumber
      OOSSeqNumber
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
        LastModifiedTransactionNumber
        LastModifiedTransactionDetails
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
            IsDeleted
            IsNewlyAdded
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
        Status
        IsDeleted
        IsNewlyAdded
        LastModifiedTransactionNumber
        LastModifiedTransactionDetails
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
          DNIType
          DNIId
          IsEditing
          SSN
          AgeWhenFirstLicensed
          MVRCount
          MVRViolationStatus
          IsVerifiedBy
          ClueMVROrderDate
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
    }
    Agent {
      Client
      Code
      Name
      Status
      Reference
      Products
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
      AnnualSurcharge
      AnnualDiscount
      FullyEarnedPremium
    }
    ReconciliationFlags {
      LiabilityPolicy
      ClueCount
      ClueVioationStatus
      ClueReferenceNumber
    }
    PolicyStatusRemarks
    RatingErrors
    _rid
    _self
    _etag
    _attachments
    _ts
  }
}`;