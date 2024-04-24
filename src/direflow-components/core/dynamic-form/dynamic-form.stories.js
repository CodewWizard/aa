import React from "react";
import DynamicForm from "./dynamic-form";
import moment from "moment";

const ManualAddressFormModel = {
  Postalcode: "",
  PlaceId: "",
  Number: "",
  Name: "",
  Long: "",
  Locality: "",
  Lat: "",
  Premise: "",
  Description: "",
  CountyCode: "",
  County: "",
  City: "",
  Business: "",
  AdministrationArea2: "",
  AdministrationArea1: "",
  StreetName: "",
  FormattedAddress: "",
  UnFormattedAddress: "",
  Status: "",
  PoBox: "",
  AddressLine1: "",
  AddressLine2: "",
  AptSuite: "",
  Territory: "",
  State: "",
  Zip: "",
  Country: "",
  AddressType: "M",
  CountryCode: "",
  Addr2: "",
  IsManual: false,
};

const ManualAddressSchemaUI = [
  {
    key: "manualAddressKey",
    type: "",
    title: "",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "mt-4",
    controls: [
      {
        "key": "streetAddress",
        "label": "Street Address*",
        "type": "textAN",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Street Address",
          "maxlength": "50",
          "minlength": "2"
        },
        "errorMessage": "Please enter Street Address",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 mb-4 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "streetAddress",
      },
      {
        "key": "city",
        "label": "City*",
        "type": "textPA",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "City",
          "maxlength": "50",
          "minlength": "2"
        },
        "errorMessage": "Please enter City",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 mb-4 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "city",
      },
      {
        "key": "manualAddressState",
        "label": "State*",
        "type": "search-dropdown",
        "needMultiple": true,
        "props": {
          "required": true,
          "class": "inputText"
        },
        "errorMessage": "Please select States/Areas of Operation",
        "inputClass": "",
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        "isColummnDisplay": false,
        "dataPath": "state",
        "options": [
          {
            "label": "US",
            "options": [
              {
                "key": "manualAddressState1",
                "label": "AL",
                "value": "AL"
              },
              {
                "key": "manualAddressState2",
                "label": "AK",
                "value": "AK"
              },
              {
                "key": "manualAddressState3",
                "label": "AZ",
                "value": "AZ"
              },
              {
                "key": "manualAddressState4",
                "label": "AR",
                "value": "AR"
              },
              {
                "key": "manualAddressState5",
                "label": "CA",
                "value": "CA"
              },
              {
                "key": "manualAddressState6",
                "label": "CO",
                "value": "CO"
              },
              {
                "key": "manualAddressState7",
                "label": "CT",
                "value": "CT"
              },
              {
                "key": "manualAddressState8",
                "label": "DE",
                "value": "DE"
              },
              {
                "key": "manualAddressState9",
                "label": "DC",
                "value": "DC"
              },
              {
                "key": "manualAddressState10",
                "label": "FL",
                "value": "FL"
              },
              {
                "key": "manualAddressState11",
                "label": "GA",
                "value": "GA"
              },
              {
                "key": "manualAddressState12",
                "label": "HI",
                "value": "HI"
              },
              {
                "key": "manualAddressState13",
                "label": "ID",
                "value": "ID"
              },
              {
                "key": "manualAddressState14",
                "label": "IL",
                "value": "IL"
              },
              {
                "key": "manualAddressState15",
                "label": "IN",
                "value": "IN"
              },
              {
                "key": "manualAddressState16",
                "label": "IA",
                "value": "IA"
              },
              {
                "key": "manualAddressState17",
                "label": "KS",
                "value": "KS"
              },
              {
                "key": "manualAddressState18",
                "label": "KY",
                "value": "KY"
              },
              {
                "key": "manualAddressState19",
                "label": "LA",
                "value": "LA"
              },
              {
                "key": "manualAddressState20",
                "label": "ME",
                "value": "ME"
              },
              {
                "key": "manualAddressState21",
                "label": "MD",
                "value": "MD"
              },
              {
                "key": "manualAddressState22",
                "label": "MA",
                "value": "MA"
              },
              {
                "key": "manualAddressState23",
                "label": "MI",
                "value": "MI"
              },
              {
                "key": "manualAddressState24",
                "label": "MN",
                "value": "MN"
              },
              {
                "key": "manualAddressState25",
                "label": "MS",
                "value": "MS"
              },
              {
                "key": "manualAddressState26",
                "label": "MO",
                "value": "MO"
              },
              {
                "key": "manualAddressState27",
                "label": "MT",
                "value": "MT"
              },
              {
                "key": "manualAddressState28",
                "label": "NE",
                "value": "NE"
              },
              {
                "key": "manualAddressState29",
                "label": "NV",
                "value": "NV"
              },
              {
                "key": "manualAddressState30",
                "label": "NH",
                "value": "NH"
              },
              {
                "key": "manualAddressState31",
                "label": "NJ",
                "value": "NJ"
              },
              {
                "key": "manualAddressState32",
                "label": "NM",
                "value": "NM"
              },
              {
                "key": "manualAddressState33",
                "label": "NY",
                "value": "NY"
              },
              {
                "key": "manualAddressState34",
                "label": "NC",
                "value": "NC"
              },
              {
                "key": "manualAddressState35",
                "label": "ND",
                "value": "ND"
              },
              {
                "key": "manualAddressState36",
                "label": "OH",
                "value": "OH"
              },
              {
                "key": "manualAddressState37",
                "label": "OK",
                "value": "OK"
              },
              {
                "key": "manualAddressState38",
                "label": "OR",
                "value": "OR"
              },
              {
                "key": "manualAddressState39",
                "label": "PA",
                "value": "PA"
              },
              {
                "key": "manualAddressState40",
                "label": "RI",
                "value": "RI"
              },
              {
                "key": "manualAddressState41",
                "label": "SC",
                "value": "SC"
              },
              {
                "key": "manualAddressState42",
                "label": "SD",
                "value": "SD"
              },
              {
                "key": "manualAddressState43",
                "label": "TN",
                "value": "TN"
              },
              {
                "key": "manualAddressState44",
                "label": "TX",
                "value": "TX"
              },
              {
                "key": "manualAddressState45",
                "label": "UT",
                "value": "UT"
              },
              {
                "key": "manualAddressState46",
                "label": "VT",
                "value": "VT"
              },
              {
                "key": "manualAddressState47",
                "label": "VA",
                "value": "VA"
              },
              {
                "key": "manualAddressState48",
                "label": "WA",
                "value": "WA"
              },
              {
                "key": "manualAddressState49",
                "label": "WV",
                "value": "WV"
              },
              {
                "key": "manualAddressState50",
                "label": "WI",
                "value": "WI"
              },
              {
                "key": "manualAddressState51",
                "label": "WY",
                "value": "WY"
              },
              {
                "key": "manualAddressState52",
                "label": "AS",
                "value": "AS"
              },
              {
                "key": "manualAddressState53",
                "label": "GU",
                "value": "GU"
              },
              {
                "key": "manualAddressState54",
                "label": "MP",
                "value": "MP"
              },
              {
                "key": "manualAddressState55",
                "label": "PR",
                "value": "PR"
              },
              {
                "key": "manualAddressState56",
                "label": "VI",
                "value": "VI"
              }
            ]
          },
          {
            "label": "Mexico",
            "options": [
              {
                "key": "manualAddressState222",
                "label": "MX",
                "value": "MX"
              }
            ]
          },
          {
            "label": "Canada",
            "options": [
              {
                "key": "manualAddressState223",
                "label": "CAN",
                "value": "CAN"
              }
            ]
          }
        ]
      },
      {
        "key": "zip",
        "label": "Zip*",
        "type": "number2",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Zip",
          "pattern": ".{5,5}",
          "maxlength": "5"
        },
        "errorMessage": "Please enter Zip",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 mb-4 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "zip",
      },
      {
        "key": "interest",
        "label": "Interest",
        "type": "search-dropdown",
        "props": {
          "class": "inputText",
          "placeholder": "Select Interest"
        },
        "errorMessage": "Please select Interest",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 mb-4 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "interest",
        "options": [
          { "key": "select", "label": "Select Interest", "value": "" },
          { "key": "owner", "label": "Owner", "value": "Owner" },
          { "key": "tenant", "label": "Tenant", "value": "Tenant" }
        ]
      },
    ]
  }
];

const BasicUIDataModel = {
  id: "",
  AccountId: "UW",
  TempArray: ["GA", "PA", "CA"],
  TextFromArray: "GA",
  QuoteNumber: "",
  IsPolicyBind: "false",
  IsRenewed: "false",
  PolicyNumber: "",
  PolicyTerm: "12",
  EffectiveDate: "2023-01-01",
  ExpirationDate: "",
  BindDate: "2022-01-01",
  QuoteDate: "2022-11-29",
  PolicyStatus: "Quote",
  CurrentVersion: "1.0",
  CurrentVersionEffectiveFrom: "",
  PriorInsurances: [],
  NoOfTimesRenewed: "0",
  Advanced: { TableData: [] },
  Address: {
    Postalcode: "77073",
    PlaceId: "FMCSA_0",
    Number: 0,
    Name: "",
    Long: "",
    Locality: "",
    Lat: "",
    Premise: "",
    Description: "Mailing Address",
    CountyCode: "",
    County: "",
    City: "HOUSTON",
    Business: "",
    AdministrationArea2: "",
    AdministrationArea1: "",
    Street: "",
    FormattedAddress: "1118 GRASSY VIEW DRIVE HOUSTON TX 77073",
    UnFormattedAddress: "1118 GRASSY VIEW DRIVE HOUSTON TX 77073",
    Status: "",
    PoBox: "",
    AddressLine1: "1118 GRASSY VIEW DRIVE",
    AddressLine2: "",
    AptSuite: "",
    Territory: "",
    State: "TX",
    IsManual: false,
  },
  // Address: {
  //   IsValid: false,
  //   LocationNumber: 0,
  //   NickName: "FMCSA",
  //   Status: "",
  //   Type: "",

  // },
  Agency: {
    Client: "",
    Code: "",
    Name: "",
    Status: "Active",
    Products: null,
    Reference: [],
    Details: {
      Contact: {
        HomePhone: "",
        BusinessPhone: "",
        Fax: "",
        MobilePhone: "",
        SendSms: "false",
        EmailId: "",
        SendQuoteEmail: "false",
        QuoteEmailId: "",
        SendPolicyEmail: "false",
        PolicyEmailId: "",
        FromEmailId: "",
        EmailCCId: "",
        PreferedContactType: "E",
        SecondaryEmailId: "",
      },
      Address: {
        AddressType: "M",
        StreetName: "",
        Zip: "",
        City: "",
        County: "",
        State: "",
        Country: "",
        CountryCode: "",
        Addr2: "",
      },
    },
  },
  Agent: {
    Client: "",
    Code: "",
    Name: "Test Agent",
    Status: "Active",
    Products: null,
    Reference: [],
    Details: {
      Contact: {
        HomePhone: "",
        BusinessPhone: "",
        Fax: "",
        MobilePhone: "",
        SendSms: "false",
        EmailId: "",
        SendQuoteEmail: "false",
        QuoteEmailId: "",
        SendPolicyEmail: "false",
        PolicyEmailId: "",
        FromEmailId: "",
        EmailCCId: "",
        PreferedContactType: "E",
        SecondaryEmailId: "",
      },
      Address: {
        AddressType: "M",
        StreetName: "",
        Zip: "",
        City: "",
        County: "",
        State: "",
        Country: "",
        CountryCode: "",
        Addr2: "",
      },
    },
  },
  UnderWriter: {
    Client: "",
    Code: "",
    Name: "",
    Status: "Active",
    Products: null,
    Reference: [],
    Details: {
      Contact: {
        HomePhone: "",
        BusinessPhone: "",
        Fax: "",
        MobilePhone: "",
        SendSms: "false",
        EmailId: "",
        SendQuoteEmail: "false",
        QuoteEmailId: "",
        SendPolicyEmail: "false",
        PolicyEmailId: "",
        FromEmailId: "",
        EmailCCId: "",
        PreferedContactType: "E",
        SecondaryEmailId: "",
      },
      Address: {
        AddressType: "M",
        StreetName: "",
        Zip: "",
        City: "",
        County: "",
        State: "",
        Country: "",
        CountryCode: "",
        Addr2: "",
      },
    },
  },
  AgentCommission: "0",
  InsuredAccount: {
    Type: "Primary",
    CreationDate: "",
    UserName: "",
    FirstName: "",
    MiddleName: "",
    LastName: "",
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
      Address: {
        Postalcode: "",
        PlaceId: "",
        Number: "",
        Name: "",
        Long: "",
        Locality: "",
        Lat: "",
        Premise: "",
        Description: "",
        CountyCode: "",
        County: "",
        City: "",
        Business: "",
        AdministrationArea2: "",
        AdministrationArea1: "",
        StreetName: "",
        FormattedAddress: "",
        UnFormattedAddress: "",
        Status: "",
        PoBox: "",
        AddressLine1: "",
        AddressLine2: "",
        AptSuite: "",
        Territory: "",
        State: "",
        Zip: "",
        Country: "",
        AddressType: "M",
        CountryCode: "",
        Addr2: "",
        IsManual: false,
      },
      BusinessType: "",
      YearsInBusiness: "",
      IncorporationAge: "",
      BusinessName: "",
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
      MultiCoveragesProvided: [],
      Location: {
        Postalcode: "",
        PlaceId: "",
        Number: 0,
        Name: "",
        Long: "",
        Locality: "",
        Lat: "",
        Premise: "",
        Description: "",
        CountyCode: "",
        County: "",
        City: "",
        Business: "",
        AdministrationArea2: "",
        AdministrationArea1: "",
        Street: "",
        FormattedAddress: "",
        UnFormattedAddress: "",
        Status: "",
        PoBox: "",
        AddressLine1: "",
        AddressLine2: "",
        AptSuite: "",
        Territory: "",
        State: "",
        IsManual: false,
      },
      Locations: [
        {
          IsValid: false,
          LocationNumber: 0,
          NickName: "FMCSA",
          Status: "",
          Type: "",
          Address: {
            Postalcode: "77073",
            PlaceId: "FMCSA_0",
            Number: 0,
            Name: "",
            Long: "",
            Locality: "",
            Lat: "",
            Premise: "",
            Description: "Mailing Address",
            CountyCode: "",
            County: "",
            City: "HOUSTON",
            Business: "",
            AdministrationArea2: "",
            AdministrationArea1: "",
            Street: "",
            FormattedAddress: "1118 GRASSY VIEW DRIVE HOUSTON TX 77073",
            UnFormattedAddress: "1118 GRASSY VIEW DRIVE HOUSTON TX 77073",
            Status: "",
            PoBox: "",
            AddressLine1: "1118 GRASSY VIEW DRIVE",
            AddressLine2: "",
            AptSuite: "",
            Territory: "",
            State: "TX",
            IsManual: true,
          },
        },
        {
          NickName: "",
          LocationNumber: 1,
          Type: "",
          Address: {
            Postalcode: "40070",
            PlaceId: "ManualAddress_1",
            Number: 1,
            Name: "",
            Long: "",
            Locality: "",
            Lat: "",
            Premise: "",
            Description: "Garaging Address",
            CountyCode: "",
            County: "",
            City: "Navi Mumbai",
            Business: "",
            AdministrationArea2: "",
            AdministrationArea1: "",
            Street: "",
            FormattedAddress: "Flat No. 503 Guru Mauli Niwas",
            UnFormattedAddress:
              "Flat No. 503 Guru Mauli Niwas, Navi Mumbai, AK, 40070",
            Status: "",
            PoBox: "",
            AddressLine1: "",
            AddressLine2: "",
            AptSuite: "",
            Territory: "",
            State: "AK",
            IsManual: true,
          },
          IsValid: false,
          Status: "",
        },
        {
          NickName: "",
          LocationNumber: 1,
          Type: "",
          Address: {
            Postalcode: "40070",
            PlaceId: "ManualAddress_1",
            Number: 1,
            Name: "",
            Long: "",
            Locality: "",
            Lat: "",
            Premise: "",
            Description: "Mailing Address",
            CountyCode: "",
            County: "",
            City: "Navi Mumbaii",
            Business: "",
            AdministrationArea2: "",
            AdministrationArea1: "",
            Street: "",
            FormattedAddress: "Flat No. 503 Guru Mauli Niwas",
            UnFormattedAddress:
              "Flat No. 503 Guru Mauli Niwas, Navi Mumbai, AK, 40070",
            Status: "",
            PoBox: "",
            AddressLine1: "",
            AddressLine2: "",
            AptSuite: "",
            Territory: "",
            State: "AK",
            IsManual: true,
          },
          IsValid: false,
          Status: "",
        },
      ],
      Commodities: [],
    },
  },
  Audit: {
    CreatedBy: "",
    CreatedOn: "",
    LastUpdatedBy: "",
    LastUpdatedOn: "",
  },
  ExternalRefrences: [],
  Payments: [
    {
      LastName: "",
      FirstName: "",
      OrderID: "",
      TransactionType: "",
      TransactionID: "",
      TransactionDate: "",
      TransactionStatus: "",
      TransactionAmount: "",
      BankDetails: {
        AccountName: "",
        BankName: "",
        BranchName: "",
        AccountType: "",
        RoutingNo: "",
      },
      CardDetails: {
        Type: "",
        CardNumber: "",
        Expiry: "",
        CVVCode: "",
        LastFourDigits: "",
      },
    },
  ],
  Attributes: {
    Carrier: "SGIH",
    Coverholder: "IH",
    Lob: "CA",
    State: "GA",
    Product: "SGIH3GA",
    RaterVersion: "1.0.0.0",
    RenewalConfigurations: {
      BeforeForAgent: "",
      AfterForAgent: "",
      BeforeForUnderwriter: "",
      AfterForUnderwriter: "",
    },
    QuoteValidity: "",
  },
  JointPolicyHolders: [],
  PayMode: "",
  Payplan: [
    {
      Date: "",
      Amount: "",
      IsPaid: "",
      Status: "",
    },
  ],
  Forms: [],
  DiscountAndSurcharges: {},
  Transaction: {
    Date: "2022-11-29",
    EffectiveDate: "2022-11-29",
    Type: "Quote",
    Status: "",
    Number: 0,
    IsOutOfSequence: "false",
    RequestedBy: "",
    RequestedById: "",
    PremiumType: "",
    PolicyVersion: "",
    FileType: "",
    FileName: "",
    File: "",
    Remarks: "",
    ReasonId: "",
    Reason: "",
    RenewalOffers: {
      RenewalOfferId: "",
      CurrentPremium: "",
      RenewalPremium: "",
      IsUpdateRenewalPremium: "true",
      RenewalOfferFlags: {
        CreatedOn: "",
        UpdatedOn: "",
        CreatedBy: "",
        UpdatedBy: "",
        EmailSentFlag: "false",
      },
    },
    TransactionStatusHistory: [
      {
        OldStatus: "",
        NewStatus: "",
        ChangedBy: "",
        ChangedDate: "",
      },
    ],
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
    HaveAutoInsurance: "",
    HaveSR22Fillings: "",
    DriverLicenseSuspended: "",
    DriverHaveTicketViolation: "",
    HowLongWithCurrentInsuranceCompany: "",
    AnyFaultClaim: "",
    IsCarOlder: "true",
    Vehiclescheduleswitch: "5",
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
        Rate: 0,
        Limit: "100",
        LimitAmount: "",
        Deductible: "500",
        Premium: 0,
        EffectivePremium: 0,
        PremiumDifference: 0,
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
        Rate: 0,
        Limit: "75000",
        LimitAmount: "",
        Deductible: "500",
        Premium: 0,
        EffectivePremium: 0,
        PremiumDifference: 0,
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
          AtFault: "R",
        },
      },
      {
        Status: "",
        Type: "",
        Name: "Adjust Premium",
        Description: "Adjust Premium",
        IsApplicable: "Add",
        IsSelected: "",
        IsMandatory: "",
        Rate: 0,
        Limit: "",
        LimitAmount: "",
        Deductible: "",
        Premium: 0,
        EffectivePremium: 0,
        PremiumDifference: 0,
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
    EffectivePremium: 0,
    EffectivePremiumWithFeesAndTaxes: 0,
    AnnualPremium: 0,
    AnnualPremiumWithFeesAndTaxes: 0,
  },
  Premium: {
    BasicPremium: "",
    Surcharge: "",
    Discount: "",
    MinPremium: "",
    PolicyPremium: "",
    TotalSalePrice: "",
    EffectivePremium: 0,
    EffectivePremiumWithFeesAndTaxes: 0,
    AnnualPremium: 0,
    AnnualPremiumWithFeesAndTaxes: 0,
  },
  PremiumFactors: [],
  FeesAndTaxes: [],
  Risks: {
    Vehicles: [
      {
        Name: "V",
        Status: "Valid",
        UnitNumber: "",
        UnitType: "V",
        VehicleType: "",
        VIN: "",
        Year: "",
        Make: "",
        Model: "",
        Coverages: [],
        Premium: {
          BasicPremium: "",
          Surcharge: "0",
          Discount: "0",
          MinPremium: "0",
          PolicyPremium: "",
          TotalSalePrice: "",
          EffectivePremium: 0.0,
          AnnualPremium: 0.0,
          AnnualPremiumWithFeesAndTaxes: 0.0,
          EffectivePremiumWithFeesAndTaxes: 0.0,
        },
        PremiumFactors: [],
        AreasofOperations: {
          SouthEast: 0.0,
          East: 0.0,
          NorthEast: 0.0,
          Gulf: 0.0,
          Midwest: 0.0,
          NorthCentral: 0.0,
          Mountain: 0.0,
          Pacific: 0.0,
          NewEngland: 0.0,
        },
        StatesofOperations: [],
        LossPayee: [
          {
            Address: {
              AddressLine1: "Delhi",
              AddressLine2: "India",
            }
          },
          {
            Address: {
              AddressLine1: "Mumbai",
              AddressLine2: "India",
            }
          }
        ],
        Audit: {
          CreatedBy: "",
          CreatedOn: "",
          LastUpdatedBy: "",
          LastUpdatedOn: "",
        },
        StatedValue: "",
        ElectronicLoggingDevice: false,
        ForwardFacingCabCamera: false,
        TravellingOutofState: "",
        RadiusofOperation: "",
        TypeofOperation: "",
      },
    ],
    Drivers: [
      {
        DriverRiskAttributes: {
          DOB: "",
          LicenseState: "GA",
        },
      },
    ],
    Properties: [
      {
        Coverages: [
          {
            Value: 0
          }
        ]
      }
    ]
  },
  Rules: {
    Action: "Allow",
    MatchingRules: [],
  },
  ContractDetails: {
    ContractNumber: "",
    ContractSection: "",
    ContractPeriod: "",
    ContractPercentage: "",
    LiabilityPercentage: "",
    CarrierInfo: {},
    AppVersion: "",
    RaterVersion: "",
    QuoteDate: "",
  },
  Contracts: [
    {
      Status: "",
      Agreement: "",
      UMR: "",
      Syndicate: "",
      Paper: "",
      TermFrom: "",
      TermTo: "",
      ContarctType: "",
      OccupancyType: "",
      MaxValue: "",
      MinValue: "",
      Shares: [
        {
          ContractPercentage: "",
          ContractAmount: "",
          LiabilityPercentage: "",
          LiabilityAmount: "",
          Status: "",
        },
      ],
    },
  ],
  Claims: [
    {
      ClaimSequence: "",
      DateofLoss: "",
      Amount: "",
      IncidentType: "",
      Remark: "",
    },
  ],
  PreviousPolicies: {
    IsPreviousPolicy: "",
    PreviousPolicyNumber: "",
    OtherCoverages: "",
    IsPreviousClaims: "",
    NoOfClaims: "",
    TotalAmountClaimed: "",
    Coverages: "General Liability, Motor Truck Cargo",
  },
  NonFunctional: {
    LastSubmittedPage: "/Commercial/Auto/Quote/BusinessInfo",
    Milestones: [],
    InsuredOTP: "",
  },
};

const BasicUISchema = [
  {
    "key": "UWQuestionsCard",
    "type": "Card",
    "title": "Underwriting Questions",
    "className": "mb-4",
    "titleClassName": "commonHead commonHeadPadding",
    "childsClassName": "boxWrapper px-4 commonShadow",
    "isTooltipClick": false,
    "isTooltip": true,
    "toolTipMessage": "These Questions are mandatory",
    "toolTipPlacement": "bottom",
    "toolTipTrigger": "hover",
    "isToopTipExclamation": true,
    "toolTipColor": "#8d182f",
    "sideButtons": ["UploadDocument", "Info"],
    "controls": [
      {
        "key": "isAnyBusinessOnPremise",
        "label": "Any business conducted on premises? (Including farms, day care,  etc.)",
        "type": "toggle",
        "props": {
          "class": "inputText customCheckBox"
        },
        "labelClass": "col-xxl-9 col-xl-9 col-lg-9 pt-2",
        "inputClass": "col-xxl-3 col-xl-3 col-lg-3",
        "positionClass": "mt-4 d-flex justify-content-between",
        "isColummnDisplay": false,
        "dataPath": "Underwriting.IsAnyBusinessOnPremise",
        "options": [
          {
            "key": "isanybusinessonpremiseyes",
            "label": "Yes",
            "value": "true"
          },
          {
            "key": "isanybusinessonpremiseno",
            "label": "No",
            "value": "false"
          }
        ]
      },
      {
        "key": "anyResidenceEmployees",
        "label": "Any residence employees?",
        "type": "toggle",
        "props": {
          "class": "inputText customCheckBox"
        },
        "labelClass": "col-xxl-9 col-xl-9 col-lg-9 pt-2",
        "inputClass": "col-xxl-3 col-xl-3 col-lg-3",
        "positionClass": "mt-4 d-flex justify-content-between",
        "isColummnDisplay": false,
        "dataPath": "Underwriting.AnyResidenceEmployees",
        "options": [
          {
            "key": "anyresidenceemployeesyes",
            "label": "Yes",
            "value": "true"
          },
          {
            "key": "anyresidenceemployeesno",
            "label": "No",
            "value": "false"
          }
        ]
      },
      {
        "key": "noOfFullTimeEmployees",
        "label": "I. Number of full time employees",
        "type": "number2",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Please Enter",
          "maxLength": "8"

        },
        "labelClass": "col-xxl-9 col-xl-9 col-lg-9 pt-2",
        "inputClass": "col-xxl-3 col-xl-3 col-lg-3",
        "positionClass": "mt-4 d-flex justify-content-between",
        "isColummnDisplay": false,
        "dataPath": "Underwriting.NoOfFullTimeEmployees",
        "conditionalDisplay": [
          {
            "src": "Underwriting.AnyResidenceEmployees",
            "exp": "==",
            "needRefComp": false,
            "target": "true",
            "connector": ""
          }
        ]
      },]
  },
  {
    "key": "primaryPolicyHolder",
    "type": "Card",
    "title": "Personal Details",
    "className": "mt-8",
    "titleClassName": "commonHead commonHeadPadding mt-4",
    "childsClassName": "boxWrapper px-4",
    "controls": [
      {
        "key": "firstName",
        "label": "First Name*",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "First Name",
          "maxlength": "200"
        },
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "errorMessage": "Please enter valid First Name",
        "dataPath": "InsuredAccount.FirstName",
        "conditionalDisplay": [
          {
            "src": "Risks.Properties.0.PropertyRiskAttributes.IsLLC",
            "exp": "==",
            "needRefComp": false,
            "target": "false",
            "connector": "&&"
          }
        ]
      },
      {
        "key": "middleName",
        "label": "Middle Name",
        "props": {
          "class": "inputText",
          "placeholder": "Middle Initial",
          "maxlength": "200"
        },
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "errorMessage": "Please enter valid Middle Name",
        "dataPath": "InsuredAccount.MiddleName",
        "conditionalDisplay": [
          {
            "src": "Risks.Properties.0.PropertyRiskAttributes.IsLLC",
            "exp": "==",
            "needRefComp": false,
            "target": "false",
            "connector": "&&"
          }
        ]
      },
      {
        "key": "lastName",
        "label": "Last Name*",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Last Name",
          "maxlength": "200"
        },
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "errorMessage": "Please enter valid Last Name",
        "dataPath": "InsuredAccount.LastName",
        "conditionalDisplay": [
          {
            "src": "Risks.Properties.0.PropertyRiskAttributes.IsLLC",
            "exp": "==",
            "needRefComp": false,
            "target": "false",
            "connector": "&&"
          }
        ]
      },
      {
        "key": "applicantDOB",
        "label": "Date of Birth*",
        "type": "date",
        "props": {
          "required": true,
          "class": " inputText",
          "dayPlaceholder": "dd",
          "monthPlaceholder": "mm",
          "yearPlaceholder": "yyyy",
          "format": "MM/dd/yyyy",
          "clearIcon": false
        },
        "errorMessage": "Please select Date of birth",
        "labelClass": "inputLabel",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "dataPath": "InsuredAccount.OtherDetails.DateOfBirth",
        "conditionalDisplay": [
          {
            "src": "Risks.Properties.0.PropertyRiskAttributes.IsLLC",
            "exp": "==",
            "needRefComp": false,
            "target": "false",
            "connector": "&&"
          }
        ]
      },
      {
        "key": "occupation",
        "label": "Occupation*",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Enter Occupation",
          "maxlength": "100"
        },
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "errorMessage": "Please enter Occupation",
        "dataPath": "InsuredAccount.OtherDetails.Occupation",
        "conditionalDisplay": [
          {
            "src": "Risks.Properties.0.PropertyRiskAttributes.IsLLC",
            "exp": "==",
            "needRefComp": false,
            "target": "false",
            "connector": "&&"
          }
        ]
      },
      {
        "key": "applicantEmployerName",
        "label": "Applicant's Employer Name*",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Enter Applicant's Employer Name",
          "maxlength": "200"
        },
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "errorMessage": "Please enter Employer Name",
        "dataPath": "InsuredAccount.OtherDetails.ApplicantEmployerName",
        "conditionalDisplay": [
          {
            "src": "Risks.Properties.0.PropertyRiskAttributes.IsLLC",
            "exp": "==",
            "needRefComp": false,
            "target": "false",
            "connector": "&&"
          }
        ]
      },
      {
        "key": "llcType",
        "label": "Type of Business*",
        "type": "search-dropdown",
        "props": {
          "required": true,
          "class": "inputText",
          "primaryColor": "#851E32"
        },
        "errorMessage": "Please select type of business",
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "dataPath": "InsuredAccount.BusinessInfo.BusinessType",
        "options": [
          {
            "Key": "llc",
            "label": "LLC",
            "value": "LLC"
          },
          {
            "Key": "trust",
            "label": "Trust",
            "value": "Trust"
          },
          {
            "Key": "corporation",
            "label": "Corporation",
            "value": "Corporation"
          }
        ],
        "conditionalDisplay": [
          {
            "src": "Risks.Properties.0.PropertyRiskAttributes.IsLLC",
            "exp": "==",
            "needRefComp": false,
            "target": "true",
            "connector": "&&"
          }
        ]
      },
      {
        "key": "llcName",
        "label": "Name*",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Name",
          "maxlength": "200"
        },
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "errorMessage": "Please enter valid Name",
        "dataPath": "InsuredAccount.BusinessInfo.BusinessName",
        "conditionalDisplay": [
          {
            "src": "Risks.Properties.0.PropertyRiskAttributes.IsLLC",
            "exp": "==",
            "needRefComp": false,
            "target": "true",
            "connector": "&&"
          }
        ]
      },
      {
        "key": "isPropertyLLClabel",
        "label": "",
        "type": "label",
        "props": {
          "class": "textBlack"
        },
        "labelClass": "",
        "inputClass": "",
        "positionClass": "clearfix",
        "isColummnDisplay": false
      },
      {
        "key": "isPropertyLLC",
        "type": "checkbox",
        "props": {
          "class": "inputText"
        },
        "labelClass": "",
        "inputClass": "",
        "positionClass": "col-xxxl-4 col-xxl-5 col-xl-6 mt-0 mb-2",
        "isColummnDisplay": false,
        "dataPath": "Risks.Properties.0.PropertyRiskAttributes.IsLLC",
        "options": [
          {
            "key": "isppropertyllc",
            "label": "is the Property Under an LLC, Trust or Corporation?",
            "value": true
          }
        ]
      }
    ]
  },
  {
    "key": "insuredContactDetails",
    "type": "Card",
    "title": "Insured Contact Details",
    "className": " mt-4",
    "titleClassName": "commonHead commonHeadPadding",
    "childsClassName": "boxWrapper px-4",
    "controls": [
      {
        "key": "insuredNumber",
        "label": "Insured Number*",
        "type": "phone",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Enter Cell Number"
        },
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "errorMessage": "Please enter valid Cell Number",
        "dataPath": "InsuredAccount.Communications.0.Value"
      },
      {
        "key": "insuredEmailAddress",
        "label": "Insured Email Address*",
        "type": "email",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Enter Email ID",
          "maxLength": "200"
        },
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "errorMessage": "Please enter valid Email",
        "dataPath": "InsuredAccount.Communications.1.Value"
      },
      {
        "key": "insuredAddressDetails",
        "label": "Address*",
        "type": "locationwithedit",
        "positionClass": "col-md-12",
        "dataPath": "InsuredAccount.BusinessInfo.Locations.0.Address", //if Locations array is not present in initial state then it will create an object.
        "extras": {
          "editParentClass": "",
          "editSubClass": "",
          "editLabelName": "",
          "editInpClass": "",
        },
        "isLatLngString": true,
        "includedFields": ["AddressLine1", "AddressLine1", "City", "State", "Zip"],
        "conditionalDisplay": [
          {
            "src": "Risks.Properties.0.PropertyRiskAttributes.HasSameMailingAddress",
            "exp": "==",
            "needRefComp": false,
            "target": "false",
            "connector": "&&"
          }
        ]
      },
      {
        "key": "isMailingSameLabel",
        "label": "",
        "type": "label",
        "props": {
          "class": "textBlack"
        },
        "labelClass": "",
        "inputClass": "",
        "positionClass": "clearfix",
        "isColummnDisplay": false
      },
      {
        "key": "isMailingSame",
        "type": "checkbox",
        "props": {
          "class": "inputText"
        },
        "labelClass": "",
        "inputClass": "",
        "positionClass": "col-xxxl-4 col-xxl-5 col-xl-6 mt-0",
        "isColummnDisplay": false,
        "dataPath": "Risks.Properties.0.PropertyRiskAttributes.HasSameMailingAddress",
        "options": [
          {
            "key": "ismailingsame",
            "label": "Mailing address same from property address",
            "value": true
          }
        ]
      },
      {
        "key": "isApplicantlabel",
        "label": "Insured contact information will be used for e-signature and inspection coordination purposes only.",
        "type": "label",
        "props": {
          "class": "textBlack"
        },
        "labelClass": "",
        "inputClass": "col-md-10",
        "positionClass": "col-xxxl-12 col-xxl-12 col-xl-12 mt-4 mb-2",
        "isColummnDisplay": false
      }
    ]
  },
  {
    "key": "policyDetails",
    "type": "Card",
    "title": "Policy Details",
    "className": " mt-4 clearfix",
    "titleClassName": "commonHead commonHeadPadding",
    "childsClassName": "boxWrapper px-4",
    "controls": [
      {
        "key": "lobType",
        "label": "LOB Type*",
        "type": "search-dropdown",
        "props": {
          "required": true,
          "class": "inputText",
          "primaryColor": "#851E32"
        },
        "errorMessage": "Please select lob type",
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "dataPath": "Attributes.Lob",
        "options": [
          {
            "Key": "HO3",
            "label": "HO-3",
            "value": "HO3"
          }
        ]
      },
      {
        "key": "occupancyType",
        "label": "Occupancy Type*",
        "type": "search-dropdown",
        "isTooltip": true,
        "toolTipTrigger": "hover",
        "isToopTipExclamation": true,
        "toolTipMessage": "Coverages will be set to default values on Occupancy change",
        "props": {
          "required": true,
          "class": "inputText",
          "primaryColor": "#851E32"
        },
        "errorMessage": "Please select occupancy",
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "dataPath": "Risks.Properties.0.PropertyRiskAttributes.OccupancyType",
        "options": [
          {
            "Key": "primary",
            "label": "Primary",
            "value": "Primary"
          },
          {
            "Key": "secondary",
            "label": "Secondary",
            "value": "Secondary"
          },
          {
            "Key": "rental",
            "label": "Rental",
            "value": "Rental"
          },
          {
            "Key": "secondaryRental",
            "label": "Secondary Rental",
            "value": "Secondary Rental"
          }
        ]
      },
      {
        "key": "policyTerm",
        "label": "Policy Term*",
        "type": "search-dropdown",
        "props": {
          "required": true,
          "class": "inputText",
          "primaryColor": "#851E32"
        },
        "errorMessage": "Please select policy term",
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "dataPath": "PolicyTerm.Value",
        "options": [
          {
            "Key": "12",
            "label": "12 Month",
            "value": 12
          }
        ],
        "calculativeExp": [
          {
            "path": "Risks.Properties.0.Coverages.1.Value",
            "exp": "{exp}*10",
            "defaultValue": 0 // used to provide defaultvalue when input is empty
          },
          {
            "path": "Risks.Properties.0.Coverages.2.Value",
            "exp": "$number({exp})/10",
            "defaultValue": 0 // used to provide defaultvalue when input is empty
          }
        ]
      },
      {
        "key": "desiredCoverageStartDate",
        "label": "Desired Coverage Start Date*",
        "type": "date",
        "props": {
          "class": " inputText",
          "dayPlaceholder": "dd",
          "monthPlaceholder": "mm",
          "yearPlaceholder": "yyyy",
          "format": "MM/dd/yyyy",
          "clearIcon": false,
          "required": true
        },
        "errorMessage": "Please select Date of birth",
        "labelClass": "inputLabel",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "dataPath": "EffectiveDate"
      }
    ]
  },
  {
    "key": "sectionIproperty",
    "type": "Card",
    "title": "Section I Property",
    "className": " mt-4 clearfix",
    "titleClassName": "commonHead commonHeadPadding",
    "childsClassName": "boxWrapper px-4",
    "controls": [
      {
        "key": "coverageA",
        "label": "Dwelling (Coverage A)",
        "type": "currency",
        "prefix": "$",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Enter",
          "maxlength": "9",
          options: {
            numeralPositiveOnly: false,
            numeralDecimalScale: 10,
          }
        },
        "errorMessage": "Please select dwelling",
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "dataPath": "Risks.Properties.0.Coverages.0.Value",
        "calculativeExp": [
          {
            "path": "Risks.Properties.0.Coverages.1.Value",
            "exp": "{exp}*10",
            "defaultValue": 0 // used to provide defaultvalue when input is empty
          },
          {
            "path": "Risks.Properties.0.Coverages.2.Value",
            "exp": "$number({exp})/10",
            "defaultValue": 0 // used to provide defaultvalue when input is empty
          }
        ]
      },
      {
        "key": "coverageB",
        "label": "Other Structures (Coverage B)",
        "type": "number2",
        "prefix": "$",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Enter",
          "maxlength": "9"
        },
        "errorMessage": "Please select Other Structures",
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "dataPath": "Risks.Properties.0.Coverages.1.Value",
        "calculativeExp": [
          {
            "path": "Risks.Properties.0.Coverages.0.Value",
            "exp": "$number({exp})/10",
            "defaultValue": 0 // used to provide defaultvalue when input is empty
          },
          {
            "path": "Risks.Properties.0.Coverages.2.Value",
            "exp": "$number({exp})/100",
            "defaultValue": 0 // used to provide defaultvalue when input is empty
          }
        ]
      },
      {
        "key": "coverageC",
        "label": "Personal Property (Coverage C)",
        "type": "currency",
        "prefix": "$",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Enter",
          "maxlength": "9"
        },
        "errorMessage": "Please select Personal Property",
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "dataPath": "Risks.Properties.0.Coverages.2.Value"
      },
      {
        "key": "coverageD",
        "label": "Loss of Use (Coverage D)",
        "type": "currency",
        "prefix": "$",
        "props": {
          "required": true,
          "class": "inputText",
          "placeholder": "Enter",
          "maxlength": "9"
        },
        "errorMessage": "Please select Loss of Use",
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "dataPath": "Risks.Properties.0.Coverages.3.Value"
      }
    ]
  },
  {
    "key": "MortgageeSection",
    "type": "iterator",
    "title": "Mortgagee Details",
    "hideIteratorBg": true,
    "deleteIconClass": "col-xxxl-9 col-xxl-1 col-md-6 d-flex align-self-end",
    "className": " mt-4",
    "titleClassName": "commonHead commonHeadPadding",
    "childsClassName": "boxWrapper px-3 commonShadow",
    "tempChildsClassName": "boxWrapper px-3 commonShadow",
    "parentDataPath": "Risks.Properties.0.AdditionalParties.MortgageeDetails",
    "buttonName": "+ Add",
    "showBtn": true,
    "haveLabelOnlyForFirstControl": false,
    "controls": [
      {
        "key": "mdLabel",
        "label": "Mortgagee Details @labelIndex",
        "type": "label",
        "props": {
          "class": ""
        },
        "labelClass": "",
        "inputClass": "",
        "positionClass": "col-xxl-12 col-xl-4 col-lg-6",
        "isColummnDisplay": false
      },
      {
        "key": "mdinsuredName",
        "label": "Name*",
        "props": {
          "class": "inputText",
          "placeholder": "Enter Name",
          "maxLength": "50",
          "required": true
        },
        "labelClass": "inputLabel",
        "positionClass": "col-xxl-3 col-xl-4 col-lg-6 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "@iteratorIndex.Name"
      },
      {
        "key": "mdstreetName",
        "label": "Street Name*",
        "props": {
          "class": "inputText",
          "placeholder": "Enter Street Name",
          "maxLength": "150",
          "required": true
        },
        "labelClass": "inputLabel",
        "positionClass": "col-xxl-3 col-xl-4 col-lg-6 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "@iteratorIndex.Address.AddressLine1"
      },
      {
        "key": "mdCity",
        "label": "City*",
        "props": {
          "class": "inputText",
          "placeholder": "Enter City",
          "maxLength": "50",
          "required": true
        },
        "labelClass": "inputLabel",
        "positionClass": "col-xxl-3 col-xl-4 col-lg-6 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "@iteratorIndex.Address.City"
      },
      {
        "key": "mdzipcode",
        "label": "Zipcode*",
        "type": "number2",
        "props": {
          "class": "inputText",
          "placeholder": "Enter Zip",
          "pattern": ".{5,5}",
          "maxlength": "5",
          "required": true
        },
        "labelClass": "inputLabel",
        "positionClass": "col-xxl-3 col-xl-4 col-lg-6 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "@iteratorIndex.Address.Zip",
        "calculativeExp": [
          {
            "isIterator": true,
            "parentPath": "Risks.Properties.0.AdditionalParties.MortgageeDetails",
            "path": "@iteratorIndex.Address.Test",
            "exp": "{exp}*10",
            "defaultValue": 0 // used to provide defaultvalue when input is empty
          }
        ]
      },
      {
        "key": "test",
        "label": "Test*",
        "type": "number2",
        "props": {
          "class": "inputText",
          "placeholder": "Enter Zip",
          "pattern": ".{5,5}",
          "maxlength": "5",
          "required": true
        },
        "labelClass": "inputLabel",
        "positionClass": "col-xxl-3 col-xl-4 col-lg-6 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "@iteratorIndex.Address.Test",
      },
      {
        "key": "mdState",
        "label": "State*",
        "type": "textPA",
        "props": {
          "class": "inputText",
          "placeholder": "Enter State",
          "maxLength": "2",
          "required": true,
          "textCase": "uppercase"
        },
        "labelClass": "inputLabel",
        "positionClass": "col-xxl-3 col-xl-4 col-lg-6 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "@iteratorIndex.Address.State"
      },
      {
        "key": "mdLoanNo",
        "label": "Loan No.*",
        "type": "text",
        "props": {
          "class": "inputText",
          "placeholder": "Enter Loan No.",
          "maxLength": "50",
          "required": true
        },
        "labelClass": "inputLabel",
        "positionClass": "col-xxl-3 col-xl-4 col-lg-6 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "@iteratorIndex.ReferenceNumber"
      }
    ]
  },
];

const AdvancedUISchema = [
  {
    "key": "AdvancedGoogleAutoCompleteEdit",
    "type": "Card",
    "title": "Google AutoComplete With Edit (GAE)",
    "className": "mt-8",
    "titleClassName": "commonHead commonHeadPadding mt-4",
    "childsClassName": "boxWrapper px-4",
    "controls": [
      {
        "key": "AdvancedAddressDetails",
        "label": "Address*",
        "type": "locationwithedit",
        "positionClass": "col-md-12",
        "dataPath": "Advanced.Address", //if Locations array is not present in initial state then it will create an object.
        "extras": {
          "editParentClass": "",
          "editSubClass": "",
          "editLabelName": "",
          "editInpClass": "",
        },
        "isLatLngString": true,
        "isCountryShort": false,
        "isStateShort": false,
        "isSaveBtn": false,
        "includedFields": ["AddressLine1", "AddressLine1", "City", "State", "Zip"],
      },
    ]
  },
  {
    "key": "AdvancedGoogleLocationWithTable",
    "type": "Card",
    "title": "Google Location With Table",
    "className": "mt-8",
    "titleClassName": "commonHead commonHeadPadding mt-4",
    "childsClassName": "boxWrapper px-4",
    "controls": [
      {
        "key": "locations",
        "label": "ADDRESS*",
        "type": "location",
        "props": {
          "class": "col-md-10",
          "maxlength": "100"
        },
        "labelClass": "inputLabel",
        "positionClass": "col-md-12",
        "isColummnDisplay": false,
        "dataPath": "InsuredAccount.BusinessInfo.Locations"
      }
    ]
  },
  {
    "key": "AdvancedLineOfBusiness",
    "type": "Card",
    "title": "Line Of Business",
    "className": "mt-8",
    "titleClassName": "commonHead commonHeadPadding mt-4",
    "childsClassName": "boxWrapper px-4",
    "controls": [
      {
        "key": "lineofbusiness",
        "type": "lob",
        "title": "Select Line Of Business*",
        "label": "",
        "props": {
          "required": true,
          "class": "col-md-12"
        },
        "labelClass": "",
        "parentClass": "",
        "inputClass": "",
        "positionClass": "",
        "isColummnDisplay": false,
        "dataPath": "Attributes.Lob",
        "options": [
          {
            "id": "1",
            "key": "HO3",
            "label": "Homeowners",
            "value": "HO3",
            "src": "images/ho3.svg"
          },
          {
            "id": "2",
            "key": "DP3",
            "label": "Dwelling Fire",
            "value": "DP3",
            "src": "images/dp3.svg"
          }
        ]
      }
    ]
  },
  {
    "key": "AdvancedAddDataToTable",
    "type": "Card",
    "title": "Add Form Data to Table",
    "className": "mt-8",
    "titleClassName": "commonHead commonHeadPadding mt-4",
    "childsClassName": "boxWrapper px-4",
    "controls": [
      {
        "key": "adddatatotable-insuredNumber",
        "label": "Insured Number*",
        "type": "phone",
        "props": {
          "class": "inputText",
          "placeholder": "Enter Cell Number"
        },
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "errorMessage": "Please enter valid Cell Number",
        "dataPath": "TableData.Value"
      },
      {
        "key": "adddatatotable-type",
        "label": "Type*",
        "type": "text",
        "props": {
          "class": "inputText",
          "placeholder": "Enter Type"
        },
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-xl-6",
        "isColummnDisplay": false,
        "errorMessage": "Please enter valid Cell Number",
        "dataPath": "TableData.Type"
      },
      {
        "key": "adddatatotable-locationwithedit",
        "label": "Address*",
        "type": "locationwithedit",
        "positionClass": "col-md-12",
        "dataPath": "TableData.Address", //if Locations array is not present in initial state then it will create an object.
        "isLatLngString": true,
        "includedFields": ["AddressLine1", "AddressLine1", "City", "State", "Zip"],
      },
      {
        key: "CountryYouBelong",
        label: "CountryYouBelong*",
        type: "search-dropdown",
        needMultiple: true,
        props: {
          isMandate: true,
          class: "inputText",
        },
        errorMessage: "Please select States/Areas of Operation",
        inputClass: "",
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        isColummnDisplay: false,
        dataPath: "TableData.CountryYouBelong",
        options: [
          {
            label: "US",
            options: [
              {
                key: "manualAddressState1",
                label: "AL",
                value: "AL",
              },
              {
                key: "manualAddressState2",
                label: "AK",
                value: "AK",
              },
            ]
          }
        ]
      },
      {
        "key": "adddatatotable",
        "label": "",
        "type": "adddatatotable",
        "props": {},
        "labelClass": "col-md-4",
        "inputClass": "col-xxl-3 col-lg-4 col-md-6",
        "positionClass": "col-md-12",
        "isColummnDisplay": false,
        "errorMessage": "Please enter valid First Name",
        "dataPath": "Advanced.TableData",
        "tempPath": "TableData",
        // "ignoreIndex": ["0"], can be array of string or only single string.
        "requiredDataFields": ["adddatatotable-insuredNumber", "adddatatotable-type", "AddressLine1.1", "select-CountryYouBelong.0"]
      },
    ]
  },
  {
    "key": "IntegrationInputControl",
    "type": "Card",
    "title": "Adaptive Api Configuration",
    "className": "mt-8",
    "titleClassName": "commonHead commonHeadPadding mt-4",
    "childsClassName": "boxWrapper px-4",
    "subTitle": "**Current Example will crash when Searched because of non policy object response we get**",
    "subTitleClass": "text-danger",
    "controls": [
      {
        "key": "integrationinput",
        "label": "Test*",
        "type": "integrationinput",
        "dataPath": "CapIQSearchIdentifier",
        "apiKey": "CapIqQuickSearch",
        "extraProps": {},
        "inpProps": {
          "placeholder": "Enter DotNumber..."
        },
        "btnProps": {}
      },
    ]
  },
  {
    "key": "AdvancedIteratorGoogleAutoCompleteWithEdit",
    "type": "iterator",
    "title": "GAE inside Iterator",
    "hideIteratorBg": true,
    "deleteIconClass": "col-xxxl-9 col-xxl-1 col-md-6 d-flex align-self-end",
    "className": " mt-4",
    "titleClassName": "commonHead commonHeadPadding",
    "childsClassName": "boxWrapper px-3 commonShadow",
    "tempChildsClassName": "boxWrapper px-3 commonShadow",
    "parentDataPath": "Advance.Locations",
    "buttonName": "+ Add",
    "showBtn": true,
    "controls": [
      {
        "key": "locationwithedit-iterator",
        "label": "ADDRESS (Location AutoComplete with edit) *",
        "type": "locationwithedit",
        "positionClass": "col-md-12",
        "dataPath": "@iteratorIndex.Address", //if Locations array is not present in initial state then it will create an object.
        "extras": {
          "editParentClass": "",
          "editSubClass": "",
          "editLabelName": "",
          "editInpClass": "",
        },
        "props": {
          "isIterator": true,
        }
      }
    ]
  }
];

const columns = [
  {
    tablekey: "adddatatotable",
    dataField: 'Type',
    text: 'Type',
    sort: false,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    tablekey: "adddatatotable",
    dataField: 'SubType',
    text: 'SubType',
    sort: false,
    headerStyle: () => {
      return { width: "20%" };
    },
  },
  {
    tablekey: "adddatatotable",
    dataField: 'Value',
    text: 'Value',
    sort: false,
    headerStyle: () => {
      return { width: "20%" };
    },
  },
  {
    tablekey: "adddatatotable",
    dataField: 'Address.State',
    text: 'State',
    sort: false,
    headerStyle: () => {
      return { width: "20%" };
    },
  },
];

const BasicFormArgs = {
  title: "",
  formId: "pageChangeForm",
  positionClass: "form",
  titlePositionClass: "form-title",
  formPositionClass: "dynamic-form",
  validators: [
    {
      key: "InsuredAccount.BusinessInfo.BusinessName",
      validations: [
        {
          expression: "InsuredAccount.Communications[1].Value = 'abhatt@cogitate.us'",
          validator: (input) => {
            const format = /^[A-Za-z0-9]+$/;
            return true;
          },
          message: "Business Name is not valid",
        },
      ],
    },
  ],
  model: BasicUISchema,
  dataModel: BasicUIDataModel,

  type: "object",
  disableSaveButton: false,
  mailingImgPath: "images/mailing-add.png",
  garagingImgPath: "images/pin-address.png",
  locationAddObjType: "normal",
  LocationTypes: [
    "Mailing Address",
    "Primary Garaging Address",
    "Garaging Address",
  ],
  showManualAddressEnableOption: true,
  manualAddressFormModel: ManualAddressFormModel,
  manualAddressSchema: ManualAddressSchemaUI,
  apiKey: "AIzaSyDJxGtUg3q4Gh52-JO1HBr2xsM2X8MtOYE",
  // calculativeExp: {
  //   coverageA: [
  //     {
  //       "path": "Risks.Properties.0.Coverages.1.Value",
  //       "exp": "{exp}*10",
  //       "defaultValue": 0 // used to provide defaultvalue when input is empty
  //     },
  //     {
  //       "path": "Risks.Properties.0.Coverages.2.Value",
  //       "exp": "$number({exp})/10",
  //       "defaultValue": 0 // used to provide defaultvalue when input is empty
  //     }
  //   ],
  //   policyTerm: [
  //     {
  //       "path": "Risks.Properties.0.Coverages.1.Value",
  //       "exp": "{exp}*10",
  //       "defaultValue": 0 // used to provide defaultvalue when input is empty
  //     },
  //     {
  //       "path": "Risks.Properties.0.Coverages.2.Value",
  //       "exp": "$number({exp})/10",
  //       "defaultValue": 0 // used to provide defaultvalue when input is empty
  //     }
  //   ]
  // },

  onBlur: (model, key) => {
    console.log([model, key]);
  },
  onError: (e, model, errors) => {
    console.log(errors);
  },
  onSubmit: (model, e) => {
    console.log(model);
  },
  onChange: (model, key) => {
    console.log([model, key]);
  },
  onOverlayClick: (key) => {
    console.log("OverlayClicked", key);
  },
  sideBtnHandler: (btn, indx) => {
    console.log(`${btn} ${indx} Clicked`);
  }
};

const FormInputUISchema = [
  {
    key: "FormInputs",
    type: "Card",
    title: "Basic Form Inputs",
    className: " clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper border-0 px-3 commonShadow",
    controls: [
      {
        key: "radio",
        label: "radio",
        type: "radio",
        value: "",
        props: {
          class: "inputText customCheckBox",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        errorMessage: "Please select",
        options: [
          { value: "true", label: "Yes" },
          { value: "false", label: "No" },
        ],
      },
      {
        key: "input_btn",
        label: "checkbox",
        type: "checkbox",
        value: "",
        props: {
          class: "inputText customCheckBox",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        errorMessage: "Please select Commercial License State",
        options: [
          { value: "true", label: "Yes" },
          { value: "false", label: "No" },
        ],
      },
      {
        key: "isvehiclescheduletoggle",
        type: "toggle",
        label: "toggle",
        props: { required: true, class: "inputText customCheckBox" },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "Underwriting.IsCarOlder",
        options: [
          { value: "true", label: "Yes" },
          { value: "false", label: "No" },
        ],
      },
      {
        key: "isvehiclescheduleswitch",
        type: "switch",
        label: "switch",
        props: { required: true, class: "inputText customCheckBox" },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "Underwriting.Vehiclescheduleswitch",
        options: [{ value: "true", label: "Yes" }],
      },
      {
        key: "effectivedatecoverage",
        label: "date",
        type: "date",
        props: {
          class: "inputText",
          dayPlaceholder: "dd",
          monthPlaceholder: "mm",
          yearPlaceholder: "yyyy",
          format: "MM-dd-yyyy",
          clearIcon: false,
          required: true,
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "InsuredAccount.BusinessInfo.EffectiveDateCoverage",
      },
      {
        key: "effectivedatecoveramnth",
        label: "month",
        type: "month",
        props: {
          class: "inputText",
          dayPlaceholder: "dd",
          monthPlaceholder: "mm",
          yearPlaceholder: "yyyy",
          format: "MM-dd-yyyy",
          clearIcon: false,
          required: true,
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "InsuredAccount.BusinessInfo.IncorporationDate",
      },
      {
        key: "effectivedatecoveratime",
        label: "time",
        type: "time",
        props: {
          class: "inputText",
          dayPlaceholder: "dd",
          monthPlaceholder: "mm",
          yearPlaceholder: "yyyy",
          format: "MM-dd-yyyy",
          clearIcon: false,
          required: true,
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "InsuredAccount.BusinessInfo.IncorporationTime",
      },
      {
        key: "email",
        label: "Email",
        type: "email",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Enter Email Address",
          maxLength: "50",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        errorMessage: "Please enter valid email",
        dataPath: "InsuredAccount.Communications.1.Value",
      },
      {
        key: "url",
        label: "url",
        type: "url",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Enter url Address",
          pattern: "https://.*",
          size: "30",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        errorMessage: "Please enter valid url",
        dataPath: "InsuredAccount.Communications.9.Value",
      },
      {
        key: "password",
        label: "password",
        type: "password",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Enter password",
          maxLength: "50",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        errorMessage: "Please enter valid password",
        dataPath: "InsuredAccount.Communications.0.Value",
      },
      {
        key: "range",
        label: "range",
        type: "range",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Enter range",
          min: "0",
          max: "100",
          step: "10",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        errorMessage: "Please enter valid range",
        dataPath: "InsuredAccount.Communications.3.Value",
      },
      {
        key: "color",
        label: "color",
        type: "color",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Enter color",
          min: "0",
          max: "100",
          step: "10",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        errorMessage: "Please enter valid color",
        dataPath: "InsuredAccount.Communications.4.Value",
      },
      {
        key: "file",
        label: "file",
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
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        errorMessage: "Please enter valid file",
        dataPath: "InsuredAccount.Communications.5.Value",
      },
      // {
      //     "key": "image",
      //     "label": "image",
      //     "type": "image",
      //     "props": {
      //         "required": true,
      //         "class": "inputText",
      //         "placeholder": "Enter image",
      //         src:"images/primarygarage.png"
      //     },
      //     labelClass: "col-md-4",
      //     inputClass: "col-xxl-3 col-lg-4 col-md-6",
      //     positionClass: "row mb-4",
      //     "isColummnDisplay": true,
      //     "errorMessage": "Please enter valid image",
      //     "dataPath": "InsuredAccount.Communications.6.Value"
      // },
      {
        key: "isnoexcludedoperationlabel",
        label: "Label",
        type: "label",
        props: {
          class: "textBlack",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        isTooltip: true,
        toolTipMessage:
          "<a target='_blank' href='https://www.google.com/'>Label tooltip</a>",
      },
      {
        key: "phone",
        label: "phone",
        type: "phone",
        props: {
          class: "inputText",
          required: true,
          placeholder: "111-222-3333",
          title: "111-222-3333",
          minlength: "12",
          maxlength: "12",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        errorMessage: "Please enter valid Mobile Number",
        dataPath: "InsuredAccount.Communications.0.Value",
      },
      {
        key: "currency",
        label: "currency",
        type: "currency",
        props: {
          class: "inputText",
          required: true,
          placeholder: "Enter Maximum Value",
          maxLength: "8",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "InsuredAccount.Communications.10.Value",
      },
      {
        key: "number",
        label:
          "number ( only numbers allowed with dot(.), minus(-), exponential(e) )",
        props: {
          required: true,
          class: "inputText",
          placeholder: "enter amount",
          min: 0,
          max: 999,
        },
        type: "number",
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "InsuredAccount.Communications.10.Value",
      },
      {
        key: "number2",
        label: "number2 ( only numbers )",
        props: {
          required: true,
          class: "inputText",
          placeholder: "enter amount",
          maxLength: "3",
        },
        type: "number2",
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "InsuredAccount.Communications.11.Value",
      },
      {
        key: "text",
        label: "text ( single line accepts everything )",
        props: {
          required: true,
          class: "inputText",
          placeholder: "enter",
          maxLength: "10",
        },
        type: "text",
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "InsuredAccount.Communications.12.Value",
      },
      {
        key: "textPA",
        label: "textPA ( accepts A-Z, 'Backspace', 'Delete' & space (' ') )",
        type: "textPA",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Enter first name (1-50 alphabets)",
          maxlength: "50",
          minlength: "1",
          pattern: "[a-zA-Z ]*$",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        errorMessage: "Please enter valid First Name",
        dataPath: "InsuredAccount.FirstName",
      },
      {
        key: "textAN ",
        label:
          "textAN ( accepts A-Z, 0-9, 'Backspace', 'Delete', Space(' '), Dot('.') )",
        type: "textAN",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Enter Motor Carrier",
          maxlength: "50",
          minlength: "50",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "PreviousPolicies.Carrier",
      },
      {
        key: "textS ",
        label: "textS ( accepts A-Z, 0-9, 'Backspace', 'Delete' )",
        type: "textS",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Enter",
          maxlength: "50",
          minlength: "50",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "PreviousPolicies.Carrier2",
      },
      {
        key: "equipmentnotlistedtext",
        type: "textarea",
        label: "textarea ( multi line accepts everything )",
        props: {
          class: "inputText mt-2",
          placeholder: "Please Explain",
          required: true,
          rows: "2",
          cols: "50",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "InsuredAccount.Communications.13.Value",
      },
      {
        key: "select",
        label: "select",
        type: "select",
        props: {
          required: true,
          class: "inputText",
          maxlength: "50",
          placeholder: "Select Agency",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "Agency.Code",
        options: [
          {
            key: "retailagencyselect1",
            label: "Catalyst Agency",
            value: "Catalyst Agency",
          },
          {
            key: "retailagencyselect2",
            label: "Texas Agency LLC",
            value: "Texas Agency LLC",
          },
        ],
      },
      {
        key: "search-dropdown",
        label: "search-dropdown",
        type: "search-dropdown",
        props: {
          required: true,
          class: "inputText",
          maxlength: "50",
          placeholder: "Select Agency",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "Agency.Code",
        options: [
          {
            key: "retailagencyselect1",
            label: "Catalyst Agency",
            value: "Catalyst Agency",
          },
          {
            key: "retailagencyselect2",
            label: "Texas Agency LLC",
            value: "Texas Agency LLC",
          },
        ],
      },
      {
        key: "multi-select",
        label: "multi-select",
        type: "multi-select",
        needMultiple: true,
        value: "",
        props: {
          required: true,
          class: "inputText",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath: "PreviousPolicies.Coverages",
        options: [
          {
            key: "coveragesProvided1",
            label: "Auto Liability",
            value: "Auto Liability",
          },
          {
            key: "coveragesProvided2",
            label: "Auto Physical Damage",
            value: "Auto Physical Damage",
          },
          {
            key: "coveragesProvided3",
            label: "Motor Truck Cargo",
            value: "Motor Truck Cargo",
          },
          {
            key: "coveragesProvided4",
            label: "Trucker's General Liability",
            value: "Truckers General Liability",
          },
        ],
      },
      {
        key: "grouped-select",
        label: "grouped-select",
        type: "grouped-select",
        needMultiple: true,
        props: {
          required: true,
          class: "inputText",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        dataPath:
          "InsuredAccount.BusinessInfo.OperationDetails.AreasofOperations",
        options: [
          {
            label: "US",
            options: [
              {
                key: "statesofOperation1",
                label: "AL",
                value: "AL",
              },
              {
                key: "statesofOperation2",
                label: "AK",
                value: "AK",
              },
            ],
          },
          {
            label: "Mexico",
            options: [
              {
                key: "statesofOperation222",
                label: "MX",
                value: "MX",
              },
            ],
          },
          {
            label: "Canada",
            options: [
              {
                key: "statesofOperation223",
                label: "CAN",
                value: "CAN",
              },
            ],
          },
        ],
      },
      {
        key: "staticContent",
        label: "staticContent",
        type: "staticContent",
        value: "<a href='http://google.com'>hello</a>",
        props: {
          class: "textBlack",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "row mb-4",
        isColummnDisplay: true,
        isOverlayTrigger: true,
      },
    ],
  },
  {
    key: "iterator",
    type: "iterator",
    title: "Iterator",
    cardTitle: "iterator",
    isIteratorMandatory: "true",
    deleteIconClass: "col-md-1 mt-4",
    className: " mt-4",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper border-0 px-3 commonShadow",
    parentDataPath: "Risks.Vehicles.0.LossPayee",
    buttonName: "Add",
    controls: [
      {
        key: "lossPayeeName",
        label: "Loss Payee Name",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Please enter Loss Payee Name",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter valid Loss Payee Name",
        inputclass: "col-xxl-3 col-lg-4 col-md-6 mb-4",
        positionClass: "col-md-4 mb-2",
        isColummnDisplay: false,
        dataPath: "@iteratorIndex.Name",
      },
      {
        key: "address",
        label: "Address",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Please enter Address",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter valid Address",
        inputclass: "col-xxl-3 col-lg-4 col-md-6 mb-4",
        positionClass: "col-md-4 mb-2",
        isColummnDisplay: false,
        dataPath: "@iteratorIndex.Address",
      },
      {
        key: "loan",
        label: "Phone",
        type: "phone",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Please enter Loan Number",
          maxlength: "50",
          minlength: "2",
        },
        errorMessage: "Please enter valid Loan Number",
        inputclass: "col-xxl-3 col-lg-4 col-md-6 mb-4",
        positionClass: "col-md-2 mb-2",
        isColummnDisplay: false,
        dataPath: "@iteratorIndex.LoanNumber",
      },
    ],
  },
];

const FormInputArgs = {
  title: "",
  formId: "pageChangeForm",
  positionClass: "form",
  titlePositionClass: "form-title",
  formPositionClass: "dynamic-form",
  validators: [],
  model: FormInputUISchema,
  dataModel: BasicUIDataModel,
  mailingImgPath: "images/mailing-add.png",
  garagingImgPath: "images/pin-address.png",
  locationAddObjType: "normal",
  LocationTypes: [
    "Mailing Address",
    "Primary Garaging Address",
    "Garaging Address",
  ],
  showManualAddressEnableOption: true,
  manualAddressFormModel: ManualAddressFormModel,
  manualAddressSchema: ManualAddressSchemaUI,
  onBlur: (model, key) => {
    console.log([model, key]);
  },
  onError: (e, model, errors) => {
    console.log(errors);
  },
};

const AdvancedInputArgs = {
  ...BasicFormArgs,
  model: AdvancedUISchema,
  columns,
  locationAddObjType: "normal",
  type: 'array',
  LocationTypes: ["Mailing Address", "Garaging Address"],
  // optional
  onAddHandler: (curr, all) => {
    // if this function returns true then data is added to table, if false ignored...
    // function provides two parameter-> curr data in inputs,and -> existing data in table. 
    console.log([curr, all]);
    if (all.length > 0) {
      let k = all.filter((a) => { return a.Address?.State == curr.Address?.State });
      if (k.length > 0) {
        alert("Already Present");
        return false;
      }
    }
    return true;
  },
  // optional
  onTableDeleteHandler: (data, index) => {
    // if this function returns true then data is deleted from table, if false ignored...
    // function provides two parameter-> data to be deleted and delete index. 
    return true;
  },
  loggedInuser: {
    decodedJWT: {
      FirstName: "Test",
      LastName: "test"
    },
    encodedJWT: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InV3LmNvZ2l0YXRlIiwiVXNlcklkIjoiMTM2OTEiLCJGaXJzdE5hbWUiOiJDb2dpdGF0ZSIsIkxhc3ROYW1lIjoiVW5kZXJ3cml0ZXIiLCJlbWFpbCI6Im5rYWRhbUBjb2dpdGF0ZS51cyIsInJvbGUiOiJVbmRlcndyaXRlciIsIkZlYXR1cmVzIjoiQWxsIEZlYXR1cmVzIiwiU2l0ZUlkIjoiNzMiLCJQcm9kdWN0cyI6IiIsIm5iZiI6MTcwOTAxMTQ2NCwiZXhwIjoxNzA5MDIyMjY0LCJpYXQiOjE3MDkwMTE0NjR9.q0WJV_c5mfMlieQqryDTM6PW1rB5RaZZeuPEktWBzhU"
  },
  integrationConfigs: {
    client: "Test",
    table: "AdaptiveApiIntegrations",
    env: {
      NEXT_PUBLIC_MASTER_DATA_URL: "https://dev-jeb-graphql.azurewebsites.net/api/"
    },
  }
}

// Developer Test UI Schema
const DeveloperTestUISchema = [
  {
    key: "Agency&UnderwriterDetails",
    type: "Card",
    title: "Agency & Underwriter Details",
    className: " clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "boxWrapper border-0 px-3 commonShadow",
    isTooltipClick: false,
    isTooltip: true,
    toolTipMessage: "Hello World",
    toolTipPlacement: "bottom",
    toolTipTrigger: "hover",
    isToopTipExclamation: true,
    sideButtons: ["UploadDocument", "Info"],
    controls: [
      {
        key: "textPA",
        label: "FirstName(with capitals)",
        type: "textPA",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Enter first name (1-50 alphabets)",
          maxlength: "50",
          minlength: "1",
          pattern: "[a-zA-Z ]*$",
          textCase: "uppercase", //uppercase, lowercase, capitalize
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        isColummnDisplay: false,
        errorMessage: "Please enter valid First Name",
        dataPath: "InsuredAccount.FirstName",
      },
      {
        key: "textPA",
        label: "LastName",
        type: "text",
        props: {
          required: true,
          class: "inputText",
          placeholder: "Enter last name (1-50 alphabets)",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        isColummnDisplay: false,
        errorMessage: "Please enter valid First Name",
        dataPath: "InsuredAccount.LastName",
      },
      {
        key: "commerciallicensestate",
        label: "Commercial License State*",
        type: "search-dropdown",
        value: "",
        props: {
          required: true,
          class: "inputText",
        },
        labelClass: "",
        inputClass: "",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        isColummnDisplay: false,
        errorMessage: "Please select Commercial License State",
        dataPath: "search",
        options: [
          { value: '1', label: "One", key: 1 },
          { value: 2, label: "Two", key: 2 },
          { value: 3, label: "Three", key: 3 },
        ],
      },
      {
        key: "agencydetails",
        label: "AGENCY*",
        type: "select",
        value: "",
        props: { required: true, class: "inputText" },
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        errorMessage: "Please select agency",
        isColummnDisplay: false,
        dataPath: "select",
        options: [
          { value: 1, label: "One" },
          { value: 2, label: "Two" },
        ],
      },
      {
        key: "isvehiclescheduletoggle",
        type: "toggle",
        label: "toggle",
        props: { required: true, class: "inputText customCheckBox" },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        isColummnDisplay: true,
        dataPath: "Underwriting.IsCarOlder",
        options: [
          { value: true, label: "Yes" },
          { value: false, label: "No" },
        ],
      },
      {
        key: "agentdetails",
        label: "AGENT Array Display*",
        type: "select",
        value: "",
        props: { required: true, class: "inputText" },
        errorMessage: "Please select agent",
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        isColummnDisplay: false,
        dataPath: "Agent.Code",
        conditionalDisplay: [{
          src: "TempArray",
          exp: "includes",
          needRefComp: false,
          // isTargetValue: true,
          target: "TextFromArray",
          connector: "&&"
        }],
        options: [
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
          { value: "3", label: "Three" }
        ],
      },
      {
        key: "State",
        label: "State*",
        type: "search-dropdown",
        needMultiple: true,
        props: {
          required: true,
          class: "inputText",
        },
        errorMessage: "Please select States/Areas of Operation",
        inputClass: "",
        labelClass: "inputLabel ddlUnderwriterList",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        isColummnDisplay: false,
        dataPath: "State",
        options: [
          {
            label: "US",
            options: [
              {
                key: "manualAddressState1",
                label: "AL",
                value: "AL",
              },
              {
                key: "manualAddressState2",
                label: "AK",
                value: "AK",
              },
              {
                key: "manualAddressState3",
                label: "AZ",
                value: "AZ",
              },
              {
                key: "manualAddressState4",
                label: "AR",
                value: "AR",
              },
              {
                key: "manualAddressState5",
                label: "CA",
                value: "CA",
              },
              {
                key: "manualAddressState6",
                label: "CO",
                value: "CO",
              },
              {
                key: "manualAddressState7",
                label: "CT",
                value: "CT",
              },
              {
                key: "manualAddressState8",
                label: "DE",
                value: "DE",
              },
              {
                key: "manualAddressState9",
                label: "DC",
                value: "DC",
              },
              {
                key: "manualAddressState10",
                label: "FL",
                value: "FL",
              },
              {
                key: "manualAddressState11",
                label: "GA",
                value: "GA",
              },
              {
                key: "manualAddressState12",
                label: "HI",
                value: "HI",
              },
              {
                key: "manualAddressState13",
                label: "ID",
                value: "ID",
              },
              {
                key: "manualAddressState14",
                label: "IL",
                value: "IL",
              },
              {
                key: "manualAddressState15",
                label: "IN",
                value: "IN",
              },
              {
                key: "manualAddressState16",
                label: "IA",
                value: "IA",
              },
              {
                key: "manualAddressState17",
                label: "KS",
                value: "KS",
              },
              {
                key: "manualAddressState18",
                label: "KY",
                value: "KY",
              },
              {
                key: "manualAddressState19",
                label: "LA",
                value: "LA",
              },
              {
                key: "manualAddressState20",
                label: "ME",
                value: "ME",
              },
              {
                key: "manualAddressState21",
                label: "MD",
                value: "MD",
              },
              {
                key: "manualAddressState22",
                label: "MA",
                value: "MA",
              },
              {
                key: "manualAddressState23",
                label: "MI",
                value: "MI",
              },
              {
                key: "manualAddressState24",
                label: "MN",
                value: "MN",
              },
              {
                key: "manualAddressState25",
                label: "MS",
                value: "MS",
              },
              {
                key: "manualAddressState26",
                label: "MO",
                value: "MO",
              },
              {
                key: "manualAddressState27",
                label: "MT",
                value: "MT",
              },
              {
                key: "manualAddressState28",
                label: "NE",
                value: "NE",
              },
              {
                key: "manualAddressState29",
                label: "NV",
                value: "NV",
              },
              {
                key: "manualAddressState30",
                label: "NH",
                value: "NH",
              },
              {
                key: "manualAddressState31",
                label: "NJ",
                value: "NJ",
              },
              {
                key: "manualAddressState32",
                label: "NM",
                value: "NM",
              },
              {
                key: "manualAddressState33",
                label: "NY",
                value: "NY",
              },
              {
                key: "manualAddressState34",
                label: "NC",
                value: "NC",
              },
              {
                key: "manualAddressState35",
                label: "ND",
                value: "ND",
              },
              {
                key: "manualAddressState36",
                label: "OH",
                value: "OH",
              },
              {
                key: "manualAddressState37",
                label: "OK",
                value: "OK",
              },
              {
                key: "manualAddressState38",
                label: "OR",
                value: "OR",
              },
              {
                key: "manualAddressState39",
                label: "PA",
                value: "PA",
              },
              {
                key: "manualAddressState40",
                label: "RI",
                value: "RI",
              },
              {
                key: "manualAddressState41",
                label: "SC",
                value: "SC",
              },
              {
                key: "manualAddressState42",
                label: "SD",
                value: "SD",
              },
              {
                key: "manualAddressState43",
                label: "TN",
                value: "TN",
              },
              {
                key: "manualAddressState44",
                label: "TX",
                value: "TX",
              },
              {
                key: "manualAddressState45",
                label: "UT",
                value: "UT",
              },
              {
                key: "manualAddressState46",
                label: "VT",
                value: "VT",
              },
              {
                key: "manualAddressState47",
                label: "VA",
                value: "VA",
              },
              {
                key: "manualAddressState48",
                label: "WA",
                value: "WA",
              },
              {
                key: "manualAddressState49",
                label: "WV",
                value: "WV",
              },
              {
                key: "manualAddressState50",
                label: "WI",
                value: "WI",
              },
              {
                key: "manualAddressState51",
                label: "WY",
                value: "WY",
              },
              {
                key: "manualAddressState52",
                label: "AS",
                value: "AS",
              },
              {
                key: "manualAddressState53",
                label: "GU",
                value: "GU",
              },
              {
                key: "manualAddressState54",
                label: "MP",
                value: "MP",
              },
              {
                key: "manualAddressState55",
                label: "PR",
                value: "PR",
              },
              {
                key: "manualAddressState56",
                label: "VI",
                value: "VI",
              },
            ],
          },
          {
            label: "Mexico",
            options: [
              {
                key: "manualAddressState222",
                label: "MX",
                value: "MX",
              },
            ],
          },
          {
            label: "Canada",
            options: [
              {
                key: "manualAddressState223",
                label: "CAN",
                value: "CAN",
              },
            ],
          },
        ],
      },
      {
        key: "dob",
        label: "Date of Birth Test*",
        type: "date2",
        props: {
          // className: "inputText",
          format: "MM/dd/yyyy",
          // momentFormat: "YYYY/MM/DD",
          dayPlaceholder: "dd",
          monthPlaceholder: "mm",
          yearPlaceholder: "yyyy",
          // defaultView: "year",
          minDate: moment().toDate(),
          maxDate: moment().add(29, "days").format("YYYY-MM-DD"),
          // value: new Date("2020-02-15"),
          // "defaultValue": "",
          // "defaultView": "decade",
          //"minDetail": "year",
          //"maxDetail": "year",
          // onClickMonth: (value, event) => false,
          // "onClickYear": (value, event) => alert(value, event),
          calendarType: "US", //other options: "Arabic", "Hebrew", ""ISO 8601"
          // "defaultView": "month", //other options: year, decade, century,
          goToRangeStartOnSelect: false, // true
          showFixedNumberOfWeeks: false,
          // "showNeighboringMonth": false,
          // tileClassName:            "react-calendar__month-view__days react-calendar__month-view__days__day--weekend",
        },
        errorMessage: "Please enter driver's dob",
        labelClass: "",
        inputClass: "",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        isColummnDisplay: false,
        dataPath: "EffectiveDate",
      },
      {
        key: "dob1",
        label: "Date of Birth*",
        type: "date",
        props: {
          className: "inputText",
          // format: "MM/dd/yyyy",
          // momentFormat:"MM-DD-yyyy",
          dayPlaceholder: "dd",
          monthPlaceholder: "mm",
          yearPlaceholder: "yyyy",
          locale: "US",
          // defaultView: "year",
          // minDate: new Date("01-01-2001"),
          // maxDate: new Date("01-01-2005"),
          // value: new Date("2020-02-15"),
          // "defaultValue": "",
          // "defaultView": "decade",
          //"minDetail": "year",
          //"maxDetail": "year",
          // onClickMonth: (value, event) => false,
          // "onClickYear": (value, event) => alert(value, event),
          calendarType: "US", //other options: "Arabic", "Hebrew", ""ISO 8601"
          // "defaultView": "month", //other options: year, decade, century,
          goToRangeStartOnSelect: false, // true
          showFixedNumberOfWeeks: false,
          // "showNeighboringMonth": false,
          tileClassName:
            "react-calendar__month-view__days react-calendar__month-view__days__day--weekend",
          setDefaultDate: false
        },
        errorMessage: "Please enter driver's dob",
        labelClass: "",
        inputClass: "",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        isColummnDisplay: false,
        dataPath: "ExpirationDate",
      },
      {
        key: "multi-select",
        label: "multi-select",
        type: "multi-select",
        needMultiple: true,
        value: "",
        props: {
          required: true,
          class: "inputText",
        },
        labelClass: "col-md-4",
        inputClass: "col-xxl-3 col-lg-4 col-md-6",
        positionClass: "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        isColummnDisplay: false,
        dataPath: "PreviousPolicies.Coverages",
        options: [
          {
            key: "coveragesProvided1",
            label: "Auto Liability",
            value: "Auto Liability",
          },
          {
            key: "coveragesProvided2",
            label: "Auto Physical Damage",
            value: "Auto Physical Damage",
          },
          {
            key: "coveragesProvided3",
            label: "Motor Truck Cargo",
            value: "Motor Truck Cargo",
          },
          {
            key: "coveragesProvided4",
            label: "Trucker's General Liability",
            value: "Truckers General Liability",
          },
        ],
      },
      {
        key: "locations",
        label: "ADDRESS(Location AutoComplete or Manual Address)*",
        type: "location",
        props: {
          class: "col-md-10",
          maxlength: "100",
          addressErrorMessage: ""
        },
        labelClass: "inputLabel",
        positionClass: "col-md-12",
        isColummnDisplay: false,
        dataPath: "InsuredAccount.BusinessInfo.Locations",
        // type: 'array',
      },
      {
        "key": "manualAddressState",
        "label": "State(Search DropDown with label)*",
        "type": "search-dropdown",
        "needMultiple": true,
        "props": {
          "required": true,
          "class": "inputText"
        },
        "errorMessage": "Please select States/Areas of Operation",
        "inputClass": "",
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        "isColummnDisplay": false,
        "dataPath": "state",
        "options": [
          {
            "label": "US",
            "options": [
              {
                "key": "manualAddressState1",
                "label": "Test Or Debug", "value": "101101"
              },
              {
                "key": "manualAddressState2",
                "label": "AK",
                "value": "AK"
              },
              {
                "key": "manualAddressState3",
                "label": "AZ",
                "value": "AZ"
              },
              {
                "key": "manualAddressState4",
                "label": "AR",
                "value": "AR"
              },
              {
                "key": "manualAddressState5",
                "label": "CA",
                "value": "CA"
              },
              {
                "key": "manualAddressState6",
                "label": "CO",
                "value": "CO"
              },
              {
                "key": "manualAddressState7",
                "label": "CT",
                "value": "CT"
              },
              {
                "key": "manualAddressState8",
                "label": "DE",
                "value": "DE"
              },
              {
                "key": "manualAddressState9",
                "label": "DC",
                "value": "DC"
              },
              {
                "key": "manualAddressState10",
                "label": "FL",
                "value": "FL"
              },
              {
                "key": "manualAddressState11",
                "label": "GA",
                "value": "GA"
              },
              {
                "key": "manualAddressState12",
                "label": "HI",
                "value": "HI"
              },
              {
                "key": "manualAddressState13",
                "label": "ID",
                "value": "ID"
              },
              {
                "key": "manualAddressState14",
                "label": "IL",
                "value": "IL"
              },
              {
                "key": "manualAddressState15",
                "label": "IN",
                "value": "IN"
              },
              {
                "key": "manualAddressState16",
                "label": "IA",
                "value": "IA"
              },
              {
                "key": "manualAddressState17",
                "label": "KS",
                "value": "KS"
              },
              {
                "key": "manualAddressState18",
                "label": "KY",
                "value": "KY"
              },
              {
                "key": "manualAddressState19",
                "label": "LA",
                "value": "LA"
              },
              {
                "key": "manualAddressState20",
                "label": "ME",
                "value": "ME"
              },
              {
                "key": "manualAddressState21",
                "label": "MD",
                "value": "MD"
              },
              {
                "key": "manualAddressState22",
                "label": "MA",
                "value": "MA"
              },
              {
                "key": "manualAddressState23",
                "label": "MI",
                "value": "MI"
              },
              {
                "key": "manualAddressState24",
                "label": "MN",
                "value": "MN"
              },
              {
                "key": "manualAddressState25",
                "label": "MS",
                "value": "MS"
              },
              {
                "key": "manualAddressState26",
                "label": "MO",
                "value": "MO"
              },
              {
                "key": "manualAddressState27",
                "label": "MT",
                "value": "MT"
              },
              {
                "key": "manualAddressState28",
                "label": "NE",
                "value": "NE"
              },
              {
                "key": "manualAddressState29",
                "label": "NV",
                "value": "NV"
              },
              {
                "key": "manualAddressState30",
                "label": "NH",
                "value": "NH"
              },
              {
                "key": "manualAddressState31",
                "label": "NJ",
                "value": "NJ"
              },
              {
                "key": "manualAddressState32",
                "label": "NM",
                "value": "NM"
              },
              {
                "key": "manualAddressState33",
                "label": "NY",
                "value": "NY"
              },
              {
                "key": "manualAddressState34",
                "label": "NC",
                "value": "NC"
              },
              {
                "key": "manualAddressState35",
                "label": "ND",
                "value": "ND"
              },
              {
                "key": "manualAddressState36",
                "label": "OH",
                "value": "OH"
              },
              {
                "key": "manualAddressState37",
                "label": "OK",
                "value": "OK"
              },
              {
                "key": "manualAddressState38",
                "label": "OR",
                "value": "OR"
              },
              {
                "key": "manualAddressState39",
                "label": "PA",
                "value": "PA"
              },
              {
                "key": "manualAddressState40",
                "label": "RI",
                "value": "RI"
              },
              {
                "key": "manualAddressState41",
                "label": "SC",
                "value": "SC"
              },
              {
                "key": "manualAddressState42",
                "label": "SD",
                "value": "SD"
              },
              {
                "key": "manualAddressState43",
                "label": "TN",
                "value": "TN"
              },
              {
                "key": "manualAddressState44",
                "label": "TX",
                "value": "TX"
              },
              {
                "key": "manualAddressState45",
                "label": "UT",
                "value": "UT"
              },
              {
                "key": "manualAddressState46",
                "label": "VT",
                "value": "VT"
              },
              {
                "key": "manualAddressState47",
                "label": "VA",
                "value": "VA"
              },
              {
                "key": "manualAddressState48",
                "label": "WA",
                "value": "WA"
              },
              {
                "key": "manualAddressState49",
                "label": "WV",
                "value": "WV"
              },
              {
                "key": "manualAddressState50",
                "label": "WI",
                "value": "WI"
              },
              {
                "key": "manualAddressState51",
                "label": "WY",
                "value": "WY"
              },
              {
                "key": "manualAddressState52",
                "label": "AS",
                "value": "AS"
              },
              {
                "key": "manualAddressState53",
                "label": "GU",
                "value": "GU"
              },
              {
                "key": "manualAddressState54",
                "label": "MP",
                "value": "MP"
              },
              {
                "key": "manualAddressState55",
                "label": "PR",
                "value": "PR"
              },
              {
                "key": "manualAddressState56",
                "label": "VI",
                "value": "VI"
              }
            ]
          },
          {
            "label": "Mexico",
            "options": [
              {
                "key": "manualAddressState222",
                "label": "MX",
                "value": "MX"
              }
            ]
          },
          {
            "label": "Canada",
            "options": [
              {
                "key": "manualAddressState223",
                "label": "CAN",
                "value": "CAN"
              }
            ]
          }
        ]
      },
      {
        "key": "interest",
        "label": "Interest (Search DropDown)",
        "type": "search-dropdown",
        "props": {
          "class": "inputText",
          "placeholder": "Select Interest"
        },
        "errorMessage": "Please select Interest",
        "inputClass": "flex-nowrap",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 mb-4 align-self-end",
        "isColummnDisplay": false,
        "dataPath": "interest",
        "options": [
          { "key": "select", "label": "Select Interest", "value": "" },
          { "key": "owner", "label": "1", "value": 1 }, //not working for true
          { "key": "tenant", "label": "Tenant", "value": "Tenant" }
        ]
      },
      {
        "key": "statesofOperation",
        "label": "States/Areas of Operation(Grouped Select)*",
        "type": "grouped-select",
        "needMultiple": true,
        "props": {
          "required": true,
          "class": "inputText"
        },
        "errorMessage": "Please select States/Areas of Operation",
        "inputClass": "",
        "labelClass": "inputLabel ddlUnderwriterList",
        "positionClass": "col-xxxl-3 col-xxl-4 col-lg-6 mb-4",
        "isColummnDisplay": false,
        "dataPath": "StateOfOperation",
        "options": [
          {
            "label": "US",
            "options": [
              {
                "key": "statesofOperation1",
                "label": "AL",
                "value": "AL"
              },
              {
                "key": "statesofOperation2",
                "label": "AK",
                "value": "AK"
              },
              {
                "key": "statesofOperation2",
                "label": "Test Or Debug",
                "value": "101101"
              },
            ]
          }
        ]
      },
      {
        key: "locationwithedit",
        label: "ADDRESS (Location AutoComplete with edit) *",
        type: "locationwithedit",
        positionClass: "col-md-12",
        dataPath: "TempPath.Locations.0.Address", //if Locations array is not present in initial state then it will create an object.
        extras: {
          editParentClass: "",
          editSubClass: "",
          editLabelName: "",
          editInpClass: "",
        },
        // isLatLngString: true,
        includedFields: ["AddressLine1", "City", "State", "Zip"],
        // props:{
        //   isInternalForm: true, //it will be initially be used, after all implementation updates their schema, it will be default.
        // },
      },
      {
        key: "integrationinput",
        label: "Test*",
        type: "integrationinput",
        dataPath: "CapIQSearchIdentifier",
        apiKey: "CapIqQuickSearch",
        extraProps: {},
        inpProps: {
          placeholder: "Enter DotNumber..."
        },
        btnProps: {}
      },
    ]
  },
];

const TestInputArgs = {
  ...BasicFormArgs,
  model: DeveloperTestUISchema,
  toastHandler: (e, msg) => {
    e.target.focus();
    // alert(msg);
    console.log(msg);
  },
  loggedInuser: {
    decodedJWT: {
      FirstName: "Test",
      LastName: "test"
    },
    encodedJWT: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InV3LmNvZ2l0YXRlIiwiVXNlcklkIjoiMTM2OTEiLCJGaXJzdE5hbWUiOiJDb2dpdGF0ZSIsIkxhc3ROYW1lIjoiVW5kZXJ3cml0ZXIiLCJlbWFpbCI6Im5rYWRhbUBjb2dpdGF0ZS51cyIsInJvbGUiOiJVbmRlcndyaXRlciIsIkZlYXR1cmVzIjoiQWxsIEZlYXR1cmVzIiwiU2l0ZUlkIjoiNzMiLCJQcm9kdWN0cyI6IiIsIm5iZiI6MTcwOTAxMTQ2NCwiZXhwIjoxNzA5MDIyMjY0LCJpYXQiOjE3MDkwMTE0NjR9.q0WJV_c5mfMlieQqryDTM6PW1rB5RaZZeuPEktWBzhU"
  },
  integrationConfigs: {
    client: "Test",
    table: "AdaptiveApiIntegrations",
    env: {
      NEXT_PUBLIC_MASTER_DATA_URL: "https://dev-jeb-graphql.azurewebsites.net/api/"
    },
  },
}

export default {
  title: "Design System/Core/Dynamic Forms",
  component: DynamicForm,
  argTypes: {
    model: {
      description:
        "UI schema which gets passes as the JSON of the child elements with thier attributes to render on screen.",
      table: {
        category: "Key Params",
      },
    },
    dataModel: {
      description:
        "Holds the input captured from user and gets emits as part of onChange & onSumit events.",
      table: {
        category: "Key Params",
      },
    },
    validators: {
      description:
        "List of custom validation which need to be executed while forms is about to submit to validate the data model",
      table: {
        category: "Key Params",
      },
    },
    title: {
      control: "text",
      description: "Title of the generated html form",
      table: {
        category: "Element",
      },
    },
    formId: {
      control: "text",
      description:
        "Sets the id attributes of the genrated form else will defaults to 'dynamic-form'",
      table: {
        category: "Element",
      },
    },
    conditionalDisplay: {
      description:
        "An array of objects to render field conditionaly on the screen.",
      table: {
        category: "Element",
      },
    },
    positionClass: {
      control: "text",
      description:
        "Sets the class to the parent <div> of the generated form using same we can set the position of the form & it's title with a page",
      table: {
        category: "Style",
      },
    },
    titlePositionClass: {
      control: "text",
      description:
        "Sets the class to the label of the form title of the generated",
      table: {
        category: "Style",
      },
    },
    formPositionClass: {
      control: "text",
      description: "Sets the class to the form of the generated html form",
      table: {
        category: "Style",
      },
    },
    locationAddObjType: {
      control: "text",
      description:
        "helps to created location datapath object by passing value normal for ENGS and blank for CA-UI",
      table: {
        category: "Element",
      },
    },
    onSubmit: {
      action: (model) => {
        console.log(model);
      },
      description:
        "Emits the events as soon as forms get submitted with updated data model",
      table: {
        category: "Events",
      },
    },
    onChange: {
      action: (model, key) => {
        console.log(key, model);
      },
      description:
        "Emits this event whenever any of the child elements triggers change event with changed data model & element key",
      table: {
        category: "Events",
      },
    },
    onError: {
      action: (e, model, errors) => {
        console.log(errors);
      },
      description: "Emits this event whenever any validation fails",
      table: {
        category: "Events",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Dynamic form component will generate the html form with child html elements based on Ui schema also captures user input and emits as an event with updated data model.",
      },
    },
  },
};

const Template = (args) => <DynamicForm {...args} />;

export const BasicForm = Template.bind({});
BasicForm.args = BasicFormArgs;

export const FormControls = Template.bind({});
FormControls.args = FormInputArgs;

export const AdvancedControls = Template.bind({});
AdvancedControls.args = AdvancedInputArgs;

export const DeveloperTestForm = Template.bind({});
DeveloperTestForm.args = TestInputArgs;


// Changes for handling zero & -ve numbers.
// let value =  path?.split(".").reduce((o, key) => {
//   if(o){
//     if(typeof o[key] == "number" || typeof o[key] == "boolean") return o[key];
//     if(o[key]) return o[key];
//   }
//   return null;
// }, state);
// return value;
// updated to this condition to handle boolean and number 0 & -ve.
// let valueFromPath = getValueFromStatetByPath(path);
// if(!excludeTypes.includes(type)){
//     if(typeof valueFromPath == "number" || typeof valueFromPath == "boolean") value = valueFromPath;
//     else if(valueFromPath) value = valueFromPath;
//     else value = "";
// }
