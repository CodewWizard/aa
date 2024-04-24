import React from 'react';
import renderer from 'react-test-renderer';
import OnRejectOnHold from '../onReview'
import TestRenderer from 'react-test-renderer';

const rhmPolicy = {
  "id": "c594b3b4-85a3-4363-814c-92f036c08c58",
  "AccountId": "Agent",
  "QuoteNumber": "QENGS1IL220486",
  "PolicyNumber": "",
  "PolicyTerm": "365",
  "IsPolicyBind": false,
  "IsRenewed": "false",
  "EffectiveDate": "2022-12-23",
  "ExpirationDate": "2023-12-23",
  "BindDate": "2022-12-23",
  "QuoteDate": "2022-12-23",
  "PolicyStatus": "Formal Quote",
  "CurrentVersion": "1.0",
  "CurrentVersionEffectiveFrom": "",
  "NoOfTimesRenewed": "0",
  "QuoteExpDate": "2023-01-22",
  "RenewalTerm": "0",
  "Agency": {
    "Client": "",
    "Code": "",
    "Name": "",
    "Status": "Active",
    "Products": null,
    "Reference": [],
    "Details": {
      "Contact": {
        "HomePhone": "",
        "BusinessPhone": "",
        "Fax": "",
        "MobilePhone": "",
        "SendSms": false,
        "EmailId": "",
        "SendQuoteEmail": false,
        "QuoteEmailId": "",
        "SendPolicyEmail": false,
        "PolicyEmailId": "",
        "FromEmailId": "",
        "EmailCCId": "",
        "PreferedContactType": "E",
        "SecondaryEmailId": ""
      },
      "Address": {
        "AddressType": "M",
        "StreetName": "",
        "Zip": "",
        "City": "",
        "County": "",
        "State": "",
        "Country": "",
        "CountryCode": "",
        "Addr2": ""
      }
    }
  },
  "Agent": {
    "Client": "ENGS",
    "Code": "12913",
    "Name": "Taylor Lawlor",
    "Status": "Active",
    "Products": [
      "ENGS1IL"
    ],
    "Reference": [
      "101001"
    ],
    "Details": {
      "Contact": {
        "HomePhone": "0XX-XXX-XX",
        "BusinessPhone": "+919599400141",
        "Fax": "0XX-XXX-XX00",
        "MobilePhone": "0XX-XXX-XX",
        "SendSms": false,
        "EmailId": "msingh@cogitate.us",
        "SendQuoteEmail": false,
        "QuoteEmailId": "rXXX@XXXX.com",
        "SendPolicyEmail": false,
        "PolicyEmailId": "rXXX@XXXX.com",
        "FromEmailId": "rXXX@XXXX.com",
        "EmailCCId": "rXXX@XXXX.com",
        "PreferedContactType": "E",
        "SecondaryEmailId": "rXXX@XXXX.com"
      },
      "Address": {
        "AddressType": "M",
        "StreetName": "1904 Leland Dr,",
        "Zip": "3XX-XXX-XX",
        "City": "MXX-XXX-XXta",
        "County": "CXX-XXX-XXBB",
        "State": "CA",
        "Country": "US",
        "CountryCode": "US",
        "Addr2": "1XXXXXXXXS"
      }
    }
  },
  "UnderWriter": {
    "Client": "ENGS",
    "Code": "13530",
    "Name": "Roman Hunter",
    "Status": "Active",
    "Products": [
      "ENGS1IL"
    ],
    "Reference": [
      "202001"
    ],
    "Details": {
      "Contact": {
        "HomePhone": "0XX-XXX-XX",
        "BusinessPhone": "+919599400141",
        "Fax": "0XX-XXX-XX00",
        "MobilePhone": "0XX-XXX-XX",
        "SendSms": false,
        "EmailId": "msingh@cogitate.us",
        "SendQuoteEmail": false,
        "QuoteEmailId": "rXXX@XXXX.com",
        "SendPolicyEmail": false,
        "PolicyEmailId": "rXXX@XXXX.com",
        "FromEmailId": "rXXX@XXXX.com",
        "EmailCCId": "rXXX@XXXX.com",
        "PreferedContactType": "E",
        "SecondaryEmailId": "rXXX@XXXX.com"
      },
      "Address": {
        "AddressType": "M",
        "StreetName": "1904 Leland Dr,",
        "Zip": "3XX-XXX-XX",
        "City": "MXX-XXX-XXta",
        "County": "CXX-XXX-XXBB",
        "State": "CA",
        "Country": "US",
        "CountryCode": "US",
        "Addr2": "1XXXXXXXXS"
      }
    }
  },
  "Rules": {
    "Action": "Allow",
    "MatchingRules": []
  },
  "Risks": {
    "Drivers": [
      {
        "Name": "johnlo dosh",
        "UnitNumber": "mDL-346782ea-e2b2-4b11-a132-4fe96c38aac4",
        "UnitType": "D",
        "Status": "Valid",
        "TempDriverIdentifier": "",
        "DriverName": "",
        "DriverDOB": "1985-01-29",
        "DriverAge": 37,
        "LicenseNumber": "j47126578896",
        "Violations": "1",
        "HireDate": "2018-02-23",
        "IsDOTNumber": "false",
        "DOTNumber": "",
        "Experience": "3",
        "ExperienceMoreThanTwo": "false",
        "Turnover": "20",
        "IsDriverUploaded": "",
        "Carrier": "GAIC",
        "Coverages": [],
        "Audit": {
          "CreatedBy": "",
          "CreatedOn": "",
          "LastUpdatedBy": "",
          "LastUpdatedOn": ""
        },
        "Premium": {
          "BasicPremium": "",
          "Surcharge": "0",
          "Discount": "0",
          "MinPremium": "0",
          "PolicyPremium": "",
          "TotalSalePrice": "",
          "EffectivePremium": 0,
          "AnnualPremium": 0,
          "AnnualPremiumWithFeesAndTaxes": 0,
          "EffectivePremiumWithFeesAndTaxes": 0
        },
        "PremiumFactors": []
      }
    ],
    "Vehicles": [
      {
        "Name": "V",
        "Status": "Valid",
        "UnitNumber": "mVIN-d4382df9-28bd-4f6d-9e33-4f2eb4b3c0aa",
        "UnitType": "V",
        "SecondaryUse": "",
        "SecondaryUsePercent": "",
        "ClassificationType": "TRUCKS, TRACTORS AND TRAILERS",
        "VehicleType": "CARGO VAN",
        "VIN": "JH4CC2650NC000393",
        "Year": "2018",
        "VehicleAge": "4",
        "Make": "RAM",
        "Model": "8o",
        "OwnedOrLeased": "Financed",
        "BusinessUseClass": "Service",
        "SizeClass": "Light Duty (Class 1-3)",
        "GROSSCOMBWEIGHT": "",
        "PrimaryGaragingLocation": "",
        "RADIUSCLASSTYPE": "LONG HAUL >500 MI RADIUS",
        "VEHPRICE": "87455",
        "PASSIVERESTR": "true",
        "VEHYEAR": "",
        "ANTILOCKBRAKES": "true",
        "COSTTYPE": "Actual Cash Value",
        "FARTHESTLOCCITY": "",
        "FARTHESTLOCCOUNTY": "",
        "FARTHESTLOCSTATE": "",
        "FARTHESTLOC": "",
        "ISVEHICLEUPLOADED": false,
        "COMPDED": "0",
        "COLLDED": "0",
        "MPDED": "0",
        "HASPD": "Y",
        "HASMP": "N",
        "HASBIC": "N",
        "TEMPLATENAME": "Default Template",
        "UWREFMSG": "---",
        "GARAGELOC": "",
        "HASRENTAL": "N",
        "CSLLIMIT": "0",
        "LIABDED": "0",
        "UMTYPE": "R",
        "UMDED": "0",
        "UMLIMIT": "0",
        "Carrier": "GAIC",
        "NTL": "false",
        "TruxPro": "false",
        "Lienholder": "ENGS Finance Company 2",
        "OtherLienholder": "ENGS Finance Company 2",
        "LienholderAddress": "211 IL",
        "Premium": {
          "BasicPremium": "",
          "Surcharge": "0",
          "Discount": "0",
          "MinPremium": "0",
          "PolicyPremium": "",
          "TotalSalePrice": "",
          "EffectivePremium": 0,
          "AnnualPremium": 0,
          "AnnualPremiumWithFeesAndTaxes": 0,
          "EffectivePremiumWithFeesAndTaxes": 0
        },
        "PremiumFactors": [],
        "AdditionalParties": [
          {
            "Status": "",
            "PartyType": "",
            "InterestType": "",
            "Name": "",
            "ReferenceNumber": "",
            "IsPayee": "",
            "Contact": {
              "Address": {
                "Postalcode": "",
                "PlaceId": "",
                "Number": "",
                "Name": "",
                "Long": "",
                "Locality": "",
                "Lat": "",
                "Premise": "",
                "State": "",
                "PoBox": "",
                "AddressLine1": "",
                "AddressLine2": "",
                "AptSuite": "",
                "Territory": "",
                "Description": "",
                "CountyCode": "",
                "County": "",
                "City": "",
                "Business": "",
                "AdministrationArea2": "",
                "AdministrationArea1": "",
                "Street": "",
                "FormattedAddress": "",
                "UnFormattedAddress": "",
                "Status": ""
              }
            }
          }
        ],
        "Coverages": [],
        "Audit": {
          "CreatedBy": "",
          "CreatedOn": "",
          "LastUpdatedBy": "",
          "LastUpdatedOn": ""
        }
      }
    ]
  },
  "Underwriting": {
    "IsHazardousMaterial": "false",
    "IsExplosiveMaterial": "false",
    "IsBankrupt": "false",
    "IsDamaged": "false",
    "IsRevenue40Percent": "false"
  },
  "Transaction": {
    "Date": "2022-12-23",
    "EffectiveDate": "2022-12-23",
    "Type": "Policy",
    "Status": "In-Progress",
    "IsOutOfSequence": "false",
    "Number": 0,
    "RequestedBy": "",
    "RequestedById": "",
    "PremiumType": "",
    "Remarks": "",
    "Reason": "",
    "Verification": {
      "IsInsuredESignVerified": "false",
      "IsAgentESignVerified": "false",
      "IsEmailVerified": "false",
      "IsOTPVerified": "false"
    },
    "WaivMEP": null,
    "AnnualShortRate": null,
    "MEP": null,
    "SCR": null
  },
  "Forms": [
    {
      "Status": "",
      "FormName": "VEHICLE OR EQUIPMENT CERTIFICATE OF INSURANCE",
      "FormDesc": "VEHICLE OR EQUIPMENT CERTIFICATE OF INSURANCE",
      "Sequence": 1,
      "FormType": "Dynamic",
      "Template": "h3ci4nob0av",
      "IsMandatory": true,
      "IsChecked": true,
      "AcordCode": "CA027",
      "File": "",
      "Dmspath": ""
    },
    {
      "Status": "",
      "FormName": "INSURANCE IDENTIFICATION CARD",
      "FormDesc": "INSURANCE IDENTIFICATION CARD",
      "Sequence": 2,
      "FormType": "Dynamic",
      "Template": "liuj2atefnd",
      "IsMandatory": true,
      "IsChecked": true,
      "AcordCode": "0028",
      "File": "",
      "Dmspath": ""
    }
  ],
  "TotalPremium": {
    "BasicPremium": "",
    "Surcharge": "",
    "Discount": "",
    "MinPremium": "",
    "PolicyPremium": "",
    "TotalSalePrice": "",
    "DownPayment": "",
    "AnnualPremium": 0,
    "EffectivePremium": 0,
    "AnnualPremiumWithFeesAndTaxes": 0,
    "EffectivePremiumWithFeesAndTaxes": 0
  },
  "Premium": {
    "BasicPremium": "",
    "Surcharge": "",
    "Discount": "",
    "MinPremium": "",
    "PolicyPremium": "",
    "TotalSalePrice": "",
    "EffectivePremium": 0,
    "AnnualPremium": 0,
    "AnnualPremiumWithFeesAndTaxes": 0,
    "EffectivePremiumWithFeesAndTaxes": 0
  },
  "PremiumFactors": [],
  "FeesAndTaxes": [],
  "PolicyCoverages": {
    "Coverages": [
      {
        "Name": "Combined Single Limit",
        "Status": "",
        "Type": "",
        "Description": "Combined Single Limit",
        "IsApplicable": "",
        "IsSelected": "true",
        "IsMandatory": "true",
        "Rate": 0,
        "Limit": "1000000",
        "LimitAmount": "",
        "Deductible": "0",
        "Premium": 0,
        "EffectivePremium": 0,
        "NoOfDays": "",
        "WaitingPeriod": "",
        "ExpenseType": "",
        "OtherCoverageField": {
          "AtFault": ""
        },
        "PremiumDifference": 0,
        "Factor": {
          "Name": null,
          "Status": "",
          "Type": "",
          "Description": "",
          "IsApplicable": "",
          "IsSelected": "",
          "IsMandatory": "",
          "Rate": "",
          "Limit": "",
          "LimitAmount": "",
          "Deductible": "",
          "Premium": "",
          "EffectivePremium": ""
        }
      },
      {
        "Name": "Deductible GAIC",
        "Status": "",
        "Type": "",
        "Description": "Deductible GAIC",
        "IsApplicable": "",
        "IsSelected": "true",
        "IsMandatory": "true",
        "Rate": 0,
        "Limit": "0",
        "LimitAmount": "",
        "Deductible": "1000",
        "Premium": 0,
        "EffectivePremium": 0,
        "NoOfDays": "",
        "WaitingPeriod": "",
        "ExpenseType": "",
        "OtherCoverageField": {
          "AtFault": ""
        },
        "PremiumDifference": 0,
        "Factor": {
          "Name": null,
          "Status": "",
          "Type": "",
          "Description": "",
          "IsApplicable": "",
          "IsSelected": "",
          "IsMandatory": "",
          "Rate": "",
          "Limit": "",
          "LimitAmount": "",
          "Deductible": "",
          "Premium": "",
          "EffectivePremium": ""
        }
      },
      {
        "Name": "Deductible Assurant",
        "Status": "",
        "Type": "",
        "Description": "Deductible Assurant",
        "IsApplicable": "",
        "IsSelected": "true",
        "IsMandatory": "true",
        "Rate": 0,
        "Limit": "0",
        "LimitAmount": "",
        "Deductible": "1000",
        "Premium": 0,
        "EffectivePremium": 0,
        "NoOfDays": "",
        "WaitingPeriod": "",
        "ExpenseType": "",
        "OtherCoverageField": {
          "AtFault": ""
        },
        "PremiumDifference": 0,
        "Factor": {
          "Name": null,
          "Status": "",
          "Type": "",
          "Description": "",
          "IsApplicable": "",
          "IsSelected": "",
          "IsMandatory": "",
          "Rate": "",
          "Limit": "",
          "LimitAmount": "",
          "Deductible": "",
          "Premium": "",
          "EffectivePremium": ""
        }
      },
      {
        "Name": "Uninsured Motorist Coverage",
        "Status": "",
        "Type": "",
        "Description": "Uninsured Motorist Coverage",
        "IsApplicable": "",
        "IsSelected": "",
        "IsMandatory": "",
        "Rate": 0,
        "Limit": "",
        "LimitAmount": "",
        "Deductible": "",
        "Premium": 0,
        "EffectivePremium": 0,
        "NoOfDays": "",
        "WaitingPeriod": "",
        "ExpenseType": "",
        "OtherCoverageField": {
          "AtFault": "R"
        },
        "PremiumDifference": 0,
        "Factor": {
          "Name": null,
          "Status": "",
          "Type": "",
          "Description": "",
          "IsApplicable": "",
          "IsSelected": "",
          "IsMandatory": "",
          "Rate": "",
          "Limit": "",
          "LimitAmount": "",
          "Deductible": "",
          "Premium": "",
          "EffectivePremium": ""
        }
      },
      {
        "Name": "Rental Reimbursement Coverage",
        "Status": "",
        "Type": "",
        "Description": "Rental Reimbursement Coverage",
        "IsApplicable": "",
        "IsSelected": "",
        "IsMandatory": "",
        "Rate": 0,
        "Limit": "",
        "LimitAmount": "",
        "Deductible": "",
        "Premium": 0,
        "EffectivePremium": 0,
        "NoOfDays": "",
        "WaitingPeriod": "",
        "ExpenseType": "",
        "OtherCoverageField": {
          "AtFault": "R"
        },
        "PremiumDifference": 0,
        "Factor": {
          "Name": null,
          "Status": "",
          "Type": "",
          "Description": "",
          "IsApplicable": "",
          "IsSelected": "",
          "IsMandatory": "",
          "Rate": "",
          "Limit": "",
          "LimitAmount": "",
          "Deductible": "",
          "Premium": "",
          "EffectivePremium": ""
        }
      },
      {
        "Name": "Adjust Premium",
        "Status": "",
        "Type": "",
        "Description": "Adjust Premium",
        "IsApplicable": "",
        "IsSelected": "",
        "IsMandatory": "",
        "Rate": 0,
        "Limit": "0",
        "LimitAmount": "",
        "Deductible": "0",
        "Premium": 0,
        "EffectivePremium": 0,
        "NoOfDays": "",
        "WaitingPeriod": "",
        "ExpenseType": "",
        "OtherCoverageField": {
          "AtFault": ""
        },
        "PremiumDifference": 0,
        "Factor": {
          "Name": null,
          "Status": "",
          "Type": "",
          "Description": "",
          "IsApplicable": "",
          "IsSelected": "",
          "IsMandatory": "",
          "Rate": "",
          "Limit": "",
          "LimitAmount": "",
          "Deductible": "",
          "Premium": "",
          "EffectivePremium": ""
        }
      }
    ]
  },
  "JointPolicyHolders": null,
  "PreviousPolicies": {
    "IsPreviousPolicy": "",
    "PreviousPolicyNumber": "",
    "OtherCoverages": "",
    "IsPreviousClaims": "",
    "NoOfClaims": "",
    "TotalAmountClaimed": ""
  },
  "Attributes": {
    "AppSource": "POS",
    "Carrier": "ENGS",
    "Coverholder": "MS",
    "Lob": "CA",
    "Product": "ENGS1IL",
    "State": "IL",
    "RaterVersion": "",
    "RenewalConfigurations": {
      "BeforeForAgent": "30",
      "AfterForAgent": "30",
      "BeforeForUnderwriter": "60",
      "AfterForUnderwriter": "30"
    },
    "QuoteValidity": "30",
    "IsActive": true
  },
  "ExternalRefrences": [],
  "Audit": {
    "CreatedOn": "2022-12-23T12:05:47.113Z",
    "LastUpdatedOn": "2022-12-23T12:08:26.972Z",
    "LastUpdatedBy": "uw.Cogitate",
    "CreatedBy": null
  },
  "PriorInsurances": null,
  "DiscountAndSurcharges": {
    "Description": null
  },
  "PolicyStatusHistory": [
    {
      "OldStatus": "",
      "ChangedBy": "",
      "NewStatus": "Quote",
      "ChangedDate": ""
    },
    {
      "OldStatus": "Quote",
      "ChangedBy": "13530",
      "NewStatus": "Application",
      "ChangedDate": "2022-12-23"
    },
    {
      "OldStatus": "Application",
      "ChangedBy": "13530",
      "NewStatus": "Formal Quote",
      "ChangedDate": "2022-12-23"
    }
  ],
  "NonFunctional": {
    "LastSubmittedPage": "/Commercial/Auto/Application/Summary",
    "Milestones": [
      0,
      0,
      1,
      2,
      3,
      4
    ]
  },
  "InsuredAccount": {
    "Type": "Primary",
    "CreationDate": "",
    "UserName": "",
    "MiddleName": "",
    "FirstName": "Vepis",
    "LastName": "deol",
    "DisplayName": "",
    "BankDetails": {
      "AccountName": null,
      "BranchName": null,
      "BankName": null,
      "AccountType": null,
      "RoutingNo": null
    },
    "Communications": [
      {
        "SubType": "Primary",
        "Type": "PhNo",
        "Status": "",
        "Value": "9632587410"
      },
      {
        "SubType": "Primary",
        "Type": "Email",
        "Status": "",
        "Value": "superadmin@gmail.com"
      }
    ],
    "BusinessInfo": {
      "BusinessType": "",
      "YearsInBusiness": "",
      "IncorporationAge": "2018",
      "BusinessAge": 4,
      "BusinessName": "zsx9",
      "DisplayName": "",
      "RegistrationNumber": "",
      "BusinessStruct": "Individual",
      "SpecialRisk": "",
      "NoOfOwners": "1",
      "FullTimeEmployees": "1",
      "PartTimeEmployees": "1",
      "Website": "",
      "IndustryType": "",
      "BusinessDecsription": "",
      "AnnualRevenue": "",
      "NumberOFLocations": "",
      "HasDOTNumber": "",
      "DOTNumber": "",
      "Locations": [
        {
          "NickName": "",
          "LocationNumber": "",
          "IsValid": false,
          "Status": "",
          "Type": "",
          "Address": {
            "Postalcode": "61761",
            "PlaceId": "ChIJc7x4lHFxC4gRNCy2X17B5RA",
            "Number": "",
            "Name": "",
            "Long": "",
            "Locality": "",
            "Lat": "",
            "Premise": "",
            "State": "IL",
            "PoBox": "",
            "AddressLine1": "",
            "AddressLine2": "",
            "AptSuite": "",
            "Territory": "",
            "Description": "Mailing Address",
            "CountyCode": "",
            "County": "US",
            "City": "Normal",
            "Business": "",
            "AdministrationArea2": "",
            "AdministrationArea1": "",
            "Street": "",
            "FormattedAddress": "100 North University Street",
            "UnFormattedAddress": "Illinois State University, North University Street, Normal, IL, USA",
            "Status": ""
          }
        },
        {
          "NickName": "",
          "LocationNumber": "",
          "IsValid": false,
          "Status": "",
          "Type": "",
          "Address": {
            "Postalcode": "61801",
            "PlaceId": "ChIJ_9y4QxPXDIgR2r8UrWf8UZw",
            "Number": "",
            "Name": "",
            "Long": "",
            "Locality": "",
            "Lat": "",
            "Premise": "",
            "State": "IL",
            "PoBox": "",
            "AddressLine1": "",
            "AddressLine2": "",
            "AptSuite": "",
            "Territory": "",
            "Description": "Primary Garaging Address",
            "CountyCode": "",
            "County": "US",
            "City": "Urbana",
            "Business": "",
            "AdministrationArea2": "",
            "AdministrationArea1": "",
            "Street": "",
            "FormattedAddress": "1010 West Illinois Street",
            "UnFormattedAddress": "Illinois Street Residence Halls, West Illinois Street, Urbana, IL, USA",
            "Status": ""
          }
        },
        {
          "NickName": "",
          "LocationNumber": "",
          "IsValid": false,
          "Status": "",
          "Type": "",
          "Address": {
            "Postalcode": "",
            "PlaceId": "ChIJGSZubzgtC4gRVlkRZFCCFX8",
            "Number": "",
            "Name": "",
            "Long": "",
            "Locality": "",
            "Lat": "",
            "Premise": "",
            "State": "IL",
            "PoBox": "",
            "AddressLine1": "",
            "AddressLine2": "",
            "AptSuite": "",
            "Territory": "",
            "Description": "Garaging Address",
            "CountyCode": "",
            "County": "US",
            "City": "",
            "Business": "",
            "AdministrationArea2": "",
            "AdministrationArea1": "",
            "Street": "",
            "FormattedAddress": " ",
            "UnFormattedAddress": "Illinois, USA",
            "Status": ""
          }
        }
      ]
    }
  }
}
const onRejectModel = [
  {
    key: "rejectremark",
    type: "Card",
    title: "REJECT REMARK",
    className: " mt-2",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "",
    controls: [
      {
        key: "enterRejectRemark",
        label: "",
        type: "textarea",
        props: { required: true, class: "inputText", rows: "4", cols: "50", placeholder: "Please enter Remarks (Max 200 characters)", maxlength: "200" },
        labelClass: "inputLabel",
        positionClass: "col-md-12",
        isColummnDisplay: false,
        errorMessage: "Please enter valid Remark",
        dataPath: "Transaction.Remarks"
      }
    ]
  },
];
const onHoldModel = [
  {
    key: "onholdremark",
    type: "Card",
    title: "ON HOLD REMARK",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "",
    controls: [
      {
        key: "enterOnHoldRemark",
        label: "",
        type: "textarea",
        props: { required: true, class: "inputText", rows: "4", cols: "50", placeholder: "Please enter Remarks (Max 200 characters)", maxlength: "200" },
        labelClass: "inputLabel",
        positionClass: "col-md-12",
        isColummnDisplay: false,
        errorMessage: "Please enter valid Remark",
        dataPath: "Transaction.Remarks"
      }
    ]
  },
];

const commonArgs = {
  handleOnHoldReject: () => { },
  onHoldReject: "hold",
  setOnHoldReject: () => { },
  summary: rhmPolicy,
  onRejectModel: onRejectModel,
  onHoldModel: onHoldModel,
  onPolicyReject: () => { },
  onPolicyHold: () => { }
}

it('renders without crashing', () => {
  const testRenderer = TestRenderer.create(<OnRejectOnHold {...commonArgs} />);
  testRenderer.unmount()
});

it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<OnRejectOnHold {...commonArgs} />);
  expect(renderTree).toMatchSnapshot();
});
