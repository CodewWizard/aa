import React from 'react';
import renderer from 'react-test-renderer';
import DynamicForm from '../dynamic-form';
import TestRenderer from 'react-test-renderer';

const EmailDocumentSchemaDATA= {
  "id": "",
  "AccountId": "UW",
  "QuoteNumber": "",
  "IsPolicyBind": "false",
  "IsRenewed": "false",
  "PolicyNumber": "",
  "PolicyTerm": "12",
  "EffectiveDate": "2022-11-29",
  "ExpirationDate": "2023-11-29",
  "BindDate": "2022-01-01",
  "QuoteDate": "2022-11-29",
  "PolicyStatus": "Quote",
  "CurrentVersion": "1.0",
  "CurrentVersionEffectiveFrom": "",
  "PriorInsurances": [],
  "NoOfTimesRenewed": "0",
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
              "SendSms": "false",
              "EmailId": "",
              "SendQuoteEmail": "false",
              "QuoteEmailId": "",
              "SendPolicyEmail": "false",
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
              "SendSms": "false",
              "EmailId": "",
              "SendQuoteEmail": "false",
              "QuoteEmailId": "",
              "SendPolicyEmail": "false",
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
  "UnderWriter": {
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
              "SendSms": "false",
              "EmailId": "",
              "SendQuoteEmail": "false",
              "QuoteEmailId": "",
              "SendPolicyEmail": "false",
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
  "AgentCommission": "0",
  "InsuredAccount": {
      "Type": "Primary",
      "CreationDate": "",
      "UserName": "",
      "FirstName": "",
      "MiddleName": "",
      "LastName": "",
      "DisplayName": "",
      "BankDetails": {},
      "Communications": [
          {
              "Type": "PhNo",
              "SubType": "Primary",
              "Value": "",
              "Status": ""
          },
          {
              "Type": "Email",
              "SubType": "Primary",
              "Value": "",
              "Status": ""
          }
      ],
      "BusinessInfo": {
          "BusinessType": "",
          "YearsInBusiness": "",
          "IncorporationAge": "",
          "BusinessName": "",
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
          "Locations": []
      }
  },
  "Audit": {
      "CreatedBy": "",
      "CreatedOn": "",
      "LastUpdatedBy": "",
      "LastUpdatedOn": ""
  },
  "ExternalRefrences": [],
  "Payments": [
      {
          "LastName": "",
          "FirstName": "",
          "OrderID": "",
          "TransactionType": "",
          "TransactionID": "",
          "TransactionDate": "",
          "TransactionStatus": "",
          "TransactionAmount": "",
          "BankDetails": {
              "AccountName": "",
              "BankName": "",
              "BranchName": "",
              "AccountType": "",
              "RoutingNo": ""
          },
          "CardDetails": {
              "Type": "",
              "CardNumber": "",
              "Expiry": "",
              "CVVCode": "",
              "LastFourDigits": ""
          }
      }
  ],
  "Attributes": {
      "Carrier": "SGIH",
      "Coverholder": "IH",
      "Lob": "CA",
      "State": "GA",
      "Product": "SGIH3GA",
      "RaterVersion": "1.0.0.0",
      "RenewalConfigurations": {
          "BeforeForAgent": "",
          "AfterForAgent": "",
          "BeforeForUnderwriter": "",
          "AfterForUnderwriter": ""
      },
      "QuoteValidity": ""
  },
  "JointPolicyHolders": [],
  "PayMode": "",
  "Payplan": [
      {
          "Date": "",
          "Amount": "",
          "IsPaid": "",
          "Status": ""
      }
  ],
  "Forms": [],
  "DiscountAndSurcharges": {},
  "Transaction": {
      "Date": "2022-11-29",
      "EffectiveDate": "2022-11-29",
      "Type": "Quote",
      "Status": "",
      "Number": 0,
      "IsOutOfSequence": "false",
      "RequestedBy": "",
      "RequestedById": "",
      "PremiumType": "",
      "PolicyVersion": "",
      "FileType": "",
      "FileName": "",
      "File": "",
      "Remarks": "",
      "ReasonId": "",
      "Reason": "",
      "RenewalOffers": {
          "RenewalOfferId": "",
          "CurrentPremium": "",
          "RenewalPremium": "",
          "IsUpdateRenewalPremium": "true",
          "RenewalOfferFlags": {
              "CreatedOn": "",
              "UpdatedOn": "",
              "CreatedBy": "",
              "UpdatedBy": "",
              "EmailSentFlag": "false"
          }
      },
      "TransactionStatusHistory": [
          {
              "OldStatus": "",
              "NewStatus": "",
              "ChangedBy": "",
              "ChangedDate": ""
          }
      ],
      "Verification": {
          "IsInsuredESignVerified": "false",
          "IsAgentESignVerified": "false",
          "IsEmailVerified": "false",
          "IsOTPVerified": "false"
      }
  },
  "PolicyStatusHistory": [
      {
          "OldStatus": "",
          "NewStatus": "Quote",
          "ChangedBy": "",
          "ChangedDate": ""
      }
  ],
  "Underwriting": {
      "HaveAutoInsurance": "",
      "HaveSR22Fillings": "",
      "DriverLicenseSuspended": "",
      "DriverHaveTicketViolation": "",
      "HowLongWithCurrentInsuranceCompany": "",
      "AnyFaultClaim": "",
      "IsCarOlder": ""
  },
  "PolicyCoverages": {
      "Coverages": [
          {
              "Status": "",
              "Type": "",
              "Name": "Combined Single Limit",
              "Description": "Combined Single Limit",
              "IsApplicable": "",
              "IsSelected": "true",
              "IsMandatory": "true",
              "Rate": 0,
              "Limit": "100",
              "LimitAmount": "",
              "Deductible": "500",
              "Premium": 0,
              "EffectivePremium": 0,
              "PremiumDifference": 0,
              "NoOfDays": "",
              "WaitingPeriod": "",
              "ExpenseType": "",
              "Factor": {
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
              },
              "OtherCoverageField": {
                  "AtFault": ""
              }
          },
          {
              "Status": "",
              "Type": "",
              "Name": "Uninsured Motorist Coverage",
              "Description": "Uninsured Motorist Coverage",
              "IsApplicable": "",
              "IsSelected": "",
              "IsMandatory": "",
              "Rate": 0,
              "Limit": "75000",
              "LimitAmount": "",
              "Deductible": "500",
              "Premium": 0,
              "EffectivePremium": 0,
              "PremiumDifference": 0,
              "NoOfDays": "",
              "WaitingPeriod": "",
              "ExpenseType": "",
              "Factor": {
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
              },
              "OtherCoverageField": {
                  "AtFault": "R"
              }
          },
          {
              "Status": "",
              "Type": "",
              "Name": "Adjust Premium",
              "Description": "Adjust Premium",
              "IsApplicable": "Add",
              "IsSelected": "",
              "IsMandatory": "",
              "Rate": 0,
              "Limit": "",
              "LimitAmount": "",
              "Deductible": "",
              "Premium": 0,
              "EffectivePremium": 0,
              "PremiumDifference": 0,
              "NoOfDays": "",
              "WaitingPeriod": "",
              "ExpenseType": "",
              "Factor": {
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
              },
              "OtherCoverageField": {
                  "AtFault": ""
              }
          }
      ]
  },
  "TotalPremium": {
      "BasicPremium": "",
      "Surcharge": "",
      "Discount": "",
      "MinPremium": "",
      "PolicyPremium": "",
      "TotalSalePrice": "",
      "EffectivePremium": 0,
      "EffectivePremiumWithFeesAndTaxes": 0,
      "AnnualPremium": 0,
      "AnnualPremiumWithFeesAndTaxes": 0
  },
  "Premium": {
      "BasicPremium": "",
      "Surcharge": "",
      "Discount": "",
      "MinPremium": "",
      "PolicyPremium": "",
      "TotalSalePrice": "",
      "EffectivePremium": 0,
      "EffectivePremiumWithFeesAndTaxes": 0,
      "AnnualPremium": 0,
      "AnnualPremiumWithFeesAndTaxes": 0
  },
  "PremiumFactors": [],
  "FeesAndTaxes": [],
  "Risks": {
      "Vehicles": [],
      "Drivers": []
  },
  "Rules": {
      "Action": "Allow",
      "MatchingRules": []
  },
  "ContractDetails": {
      "ContractNumber": "",
      "ContractSection": "",
      "ContractPeriod": "",
      "ContractPercentage": "",
      "LiabilityPercentage": "",
      "CarrierInfo": {},
      "AppVersion": "",
      "RaterVersion": "",
      "QuoteDate": ""
  },
  "Contracts": [
      {
          "Status": "",
          "Agreement": "",
          "UMR": "",
          "Syndicate": "",
          "Paper": "",
          "TermFrom": "",
          "TermTo": "",
          "ContarctType": "",
          "OccupancyType": "",
          "MaxValue": "",
          "MinValue": "",
          "Shares": [
              {
                  "ContractPercentage": "",
                  "ContractAmount": "",
                  "LiabilityPercentage": "",
                  "LiabilityAmount": "",
                  "Status": ""
              }
          ]
      }
  ],
  "Claims": [
      {
          "ClaimSequence": "",
          "DateofLoss": "",
          "Amount": "",
          "IncidentType": "",
          "Remark": ""
      }
  ],
  "PreviousPolicies": {
      "IsPreviousPolicy": "",
      "PreviousPolicyNumber": "",
      "OtherCoverages": "",
      "IsPreviousClaims": "",
      "NoOfClaims": "",
      "TotalAmountClaimed": ""
  },
  "NonFunctional": {
      "LastSubmittedPage": "/Commercial/Auto/Quote/BusinessInfo",
      "Milestones": [],
      "InsuredOTP": ""
  }
}

let d = new Date();

let yearOfIncorporationMax = (
  (d.getFullYear() - 2).toString().padStart(2, '0') + "-" +
  (d.getMonth() + 1).toString().padStart(2, '0') + "-" +
  (d.getDate()).toString().padStart(2, 0)
);

let yearOfIncorporationMin = (
  (d.getFullYear() - 120).toString().padStart(2, '0') + "-" +
  (d.getMonth() + 1).toString().padStart(2, '0') + "-" +
  (d.getDate()).toString().padStart(2, 0)
);

const EmailDocumentSchemaUI = [
  {
        key: "Agency&UnderwriterDetails",
        type: "Card",
        title: "Agency & Underwriter Details",
        className: " clearfix",
        titleClassName: "commonHead commonHeadPadding",
        childsClassName: "boxWrapper border-0 px-3 commonShadow",
        conditionalDisplay: [{
          src: "AccountId",
          exp: "==",
          needRefComp: false,
          target: "UW",
          connector: ""
        }],
        controls: [
          {
            key: "agencydetails",
            label: "AGENCY*",
            type: "select",
            value: "",
            props: { required: true, class: "inputText" },
            labelClass: "inputLabel ddlUnderwriterList",
            positionClass: "col-md-4",
            errorMessage: "Please select agency",
            isColummnDisplay: false,
            dataPath: "Agency.Code",
            conditionalDisplay: [{
              src: "AccountId",
              exp: "==",
              needRefComp: false,
              target: "UW",
              connector: "&&"
            }],
            options: [
              { value: "1", label: "One" },
              { value: "2", label: "Two" },
              { value: "3", label: "Three" }
          ],
          },
          {
            key: "agentdetails",
            label: "AGENT*",
            type: "select",
            value: "",
            props: { required: true, class: "inputText" },
            errorMessage: "Please select agent",
            labelClass: "inputLabel ddlUnderwriterList",
            positionClass: "col-md-4",
            isColummnDisplay: false,
            dataPath: "Agent.Code",
            conditionalDisplay: [{
              src: "AccountId",
              exp: "==",
              needRefComp: false,
              target: "UW",
              connector: "&&"
            }],
            options: [
              { value: "1", label: "One" },
              { value: "2", label: "Two" },
              { value: "3", label: "Three" }
          ],
          },
          {
            key: "underwriterdetails",
            label: "UNDERWRITER*",
            type: "select",
            value: "",
            props: { required: true, class: "inputText" },
            errorMessage: "Please select underwriter",
            labelClass: "inputLabel ddlUnderwriterList",
            positionClass: "col-md-4",
            isColummnDisplay: false,
            dataPath: "UnderWriter.Code",
            options: [
              { value: "1", label: "One" },
              { value: "2", label: "Two" },
              { value: "3", label: "Three" }
          ],
          }
        ]
      },
      {
        key: "UnderwriterDetails",
        type: "Card",
        title: "Underwriter Details",
        className: " clearfix",
        titleClassName: "commonHead commonHeadPadding",
        childsClassName: "boxWrapper border-0 px-3 commonShadow",
        conditionalDisplay: [{
          src: "AccountId",
          exp: "==",
          needRefComp: false,
          target: "Agent",
          connector: ""
        }],
        controls: [
          {
            key: "underwriterdetails",
            label: "UNDERWRITER*",
            type: "select",
            value: "select",
            props: { required: true, class: "inputText" },
            errorMessage: "Please select underwriter",
            labelClass: "inputLabel ddlUnderwriterList",
            positionClass: "col-md-6",
            isColummnDisplay: false,
            dataPath: "UnderWriter.Code",
            options: [
              { value: "1", label: "One" },
              { value: "2", label: "Two" },
              { value: "3", label: "Three" }
          ],
          }
        ]
      },
      {
        key: "BusinessDetails",
        type: "Card",
        title: "Name",
        className: " mt-4",
        titleClassName: "commonHead commonHeadPadding",
        childsClassName: "boxWrapper border-0 px-3 commonShadow",
        controls: [
          {
            key: "businessname",
            label: "BUSINESS NAME*",
            props: { required: true, class: "inputText", placeholder: 'Please enter business name Min 2 - Max 50 alphabets', maxlength: '50', minlength: '2' },
            errorMessage: "Please enter valid Business Name",
            inputClass: "mb-3 flex-nowrap",
            positionClass: "col-md-6",
            isColummnDisplay: false,
            // events: [
            //   {
            //     type: 'onBlur',
            //     event: (e, policy, callBack, toast) => {
            //       if (typeof window !== 'undefined') {
            //         toast.error('Bu');
            //         if (callBack) callBack(policy);
            //       }
            //     }
            //   }
            // ],
            dataPath: "InsuredAccount.BusinessInfo.BusinessName"
          },
          {
            key: "yearofincorporation",
            label: "YEAR OF INCORPORATION*",
            type: "date",
            props: { required: true, class: "inputText", min: yearOfIncorporationMin, max: yearOfIncorporationMax },
            errorMessage: "Please select year of incorporation",
            positionClass: "col-md-6",
            isColummnDisplay: false,
            dataPath: "InsuredAccount.BusinessInfo.IncorporationAge"
          }
        ]
      },
      {
        key: "Locations",
        type: "Card",
        title: "Locations",
        className: " mt-4",
        titleClassName: "commonHead commonHeadPadding",
        childsClassName: "boxWrapper border-0 px-3 commonShadow",
        controls: [
          {
            key: "locations",
            label: "ADDRESS*",
            type: "location",
            props: { class: "col-md-10" },
            labelClass: "inputLabel",
            positionClass: "col-md-12",
            isColummnDisplay: false,
            dataPath: "InsuredAccount.BusinessInfo.Locations"
          }
        ]
      }
    ];
  

const CommonArgs = {
    title: "",
    formId: "pageChangeForm",
    positionClass: "form",
    titlePositionClass: "form-title",
    formPositionClass: "dynamic-form",
    validators: [],
    model: EmailDocumentSchemaUI,
    dataModel: EmailDocumentSchemaDATA,
    mailingImgPath: 'images/mailing-add.png',
    garagingImgPath: 'images/pin-address.png',
    LocationTypes: [
        "Mailing Address",
        "Primary Garaging Address",
        "Garaging Address"
      ]
};

it('renders without crashing', () => {
  const testRenderer = TestRenderer.create(<DynamicForm {...CommonArgs} />);
  testRenderer.unmount()
});

// it('matches snapshot as expected', () => {
//   const renderTree = renderer.create(<DynamicForm {...CommonArgs} />).toJSON();
//   expect(renderTree).toMatchSnapshot();
// });

