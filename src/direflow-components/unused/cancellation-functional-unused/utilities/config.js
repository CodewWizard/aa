import { START_CANCELLATION, RATE_ENDORSEMENT } from './queries';

export const config = {
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

export const buttonStatus = {
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
	showRevertBtn: false,
	showSubmitForApprovalBtn: false,
	showBtnCenter: false,
	showSubmitSignature: false,
	showOverrideFees: false,
	showOverrideReturnPremium: false,
}

export const cancellationCardConfig = {
	title: "Return Premium Information",
	withoutFeesTxt: "Return Premium Amount (without fees & Taxes)",
	feesAndTaxesTxt: "Return SurplusLine Tax",
	withFeesTxt: "Return Premium With Fees & Taxes",
	isSplitOverlay: true,
}

export const mutationQuery = {
	StartCancellation: START_CANCELLATION,
	RateEndorsment: RATE_ENDORSEMENT,
	UpdatePolicy: ''
}

export const cancellationUISchema = [
	{
		"key": "PolicyDetails",
		"type": "Card",
		"title": "Policy Details",
		"className": " clearfix",
		"titleClassName": "commonHead commonHeadPadding",
		"childsClassName": "boxWrapper px-3 commonShadow",
		"controls": [
			{
				"key": "businessname",
				"label": "Prem Corp",
				"type": "label",
				"value": "Business Name",
				"props": {},
				"labelClass": "inputLabel ddlUnderwriterList",
				"positionClass": "col-md-4",
				"isColummnDisplay": false
			},
			{
				"key": "mailingaddress",
				"label": "322 Texas 3, League City, TX, USA, 77573",
				"type": "label",
				"value": "Mailing Address",
				"props": {},
				"labelClass": "inputLabel ddlUnderwriterList",
				"positionClass": "col-md-4",
				"isColummnDisplay": false
			},
			{
				"key": "lineOfBusiness",
				"label": "Auto Physical Damage (APD)",
				"type": "label",
				"value": "Line of Business",
				"props": {},
				"labelClass": "inputLabel ddlUnderwriterList",
				"positionClass": "col-md-4",
				"isColummnDisplay": false
			},
			{
				"key": "policyeffectivedate",
				"label": "06/30/2023",
				"value": "Policy start date",
				"type": "label",
				"props": {},
				"labelClass": "inputLabel ddlUnderwriterList",
				"positionClass": "col-md-4 mt-4",
				"isColummnDisplay": false
			},
			{
				"key": "policyenddate",
				"label": "06/30/2024",
				"type": "label",
				"value": "Policy end date",
				"props": {},
				"labelClass": "ddlUnderwriterList",
				"positionClass": "col-md-4 mt-4",
				"isColummnDisplay": false
			},
			{
				"key": "policynumber",
				"label": "CUS050APD000111-00",
				"type": "label",
				"value": "Policy Number",
				"props": {
					"required": true,
					"disabled": true
				},
				"labelClass": "inputLabel ddlUnderwriterList",
				"positionClass": "col-md-4 mt-4",
				"isColummnDisplay": false
			}
		]
	},
	{
		"key": "CancellationDetails",
		"type": "Card",
		"title": "Cancellation Details",
		"className": " mt-4",
		"titleClassName": "commonHead commonHeadPadding",
		"childsClassName": "boxWrapper px-3 commonShadow",
		"controls": [
			{
				"key": "cancellationeffectivedate",
				"label": "Cancellation Effective Date",
				"type": "date",
				"props": {
					"class": "inputText",
					"dayPlaceholder": "dd",
					"monthPlaceholder": "mm",
					"yearPlaceholder": "yyyy",
					"format": "MM/dd/yyyy",
					"clearIcon": false,
					"required": true,
					"disabled": false,
					"minDate": "2023-06-30",
					"maxDate": "2024-06-30"
				},
				"positionClass": "col-md-4 mt-4",
				"isColummnDisplay": false,
				"errorMessage": "Please enter valid date - Minimum can be today",
				"dataPath": "Transaction.EffectiveDate"
			},
			{
				"key": "cancellationtype",
				"label": "Cancellation Type",
				"type": "search-dropdown",
				"props": {
					"required": true,
					"class": "inputText",
					"disabled": false
				},
				"labelClass": "inputLabel",
				"positionClass": "col-md-4 mt-4",
				"isColummnDisplay": false,
				"options": [
					{
						"key": "flatcancellation",
						"label": "Flat Cancellation",
						"value": "Flat Cancellation"
					},
					{
						"key": "proratacancellation",
						"label": "Pro Rata Cancellation",
						"value": "Pro Rata Cancellation"
					}
				],
				"errorMessage": "Please select Cancellation Type",
				"dataPath": "Transaction.PremiumType"
			},
			{
				"key": "requestedby",
				"label": "Requested By",
				"type": "search-dropdown",
				"props": {
					"required": true,
					"class": "inputText",
					"disabled": false
				},
				"labelClass": "inputLabel",
				"positionClass": "col-md-4 mt-4",
				"isColummnDisplay": false,
				"options": [
					{
						"key": "additionalInsured",
						"label": "ADDITIONAL INSURED/LIENHOLDER",
						"value": "ADDITIONAL INSURED/LIENHOLDER"
					},
					{
						"key": "agentRetailBroker",
						"label": "AGENT/RETAIL BROKER",
						"value": "AGENT/RETAIL BROKER"
					},
					{
						"key": "companyCarrier",
						"label": "COMPANY/CARRIER",
						"value": "COMPANY/CARRIER"
					},
					{
						"key": "executor",
						"label": "EXECUTOR",
						"value": "EXECUTOR"
					},
					{
						"key": "financeCompany",
						"label": "FINANCE COMPANY",
						"value": "FINANCE COMPANY"
					},
					{
						"key": "insured",
						"label": "INSURED",
						"value": "INSURED"
					},
					{
						"key": "managingGeneralAgent",
						"label": "MANAGING GENERAL AGENT",
						"value": "MANAGING GENERAL AGENT"
					},
					{
						"key": "surplusLines",
						"label": "SURPLUS LINES ASSOC",
						"value": "SURPLUS LINES ASSOC"
					},
					{
						"key": "insuranceDepartment",
						"label": "DEPARTMENT OF INSURANCE",
						"value": "DEPARTMENT OF INSURANCE"
					},
					{
						"key": "vendor",
						"label": "VENDOR",
						"value": "VENDOR"
					}
				],
				"errorMessage": "Please select Requested By",
				"dataPath": "Transaction.RequestedBy"
			},
			{
				"key": "reason",
				"label": "Reason",
				"type": "search-dropdown",
				"props": {
					"required": true,
					"class": "inputText",
					"disabled": false
				},
				"labelClass": "inputLabel",
				"positionClass": "col-md-4 mt-4",
				"isColummnDisplay": false,
				"options": [
					{
						"key": "businessSold",
						"label": "Business Sold-BSO",
						"value": "Business Sold-BSO"
					},
					{
						"key": "cancelRewrite",
						"label": "Cancel/Re-Write-C6",
						"value": "Cancel/Re-Write-C6"
					},
					{
						"key": "conditionalNonRenewal",
						"label": "Conditional Non-Renewal-C4",
						"value": "Conditional Non-Renewal-C4"
					},
					{
						"key": "coverageElsewhere",
						"label": "Coverage Placed Elsewhere-CPW",
						"value": "Coverage Placed Elsewhere-CPW"
					},
					{
						"key": "photoProvideFailure",
						"label": "Failure to provide photos of all sides of home-C58",
						"value": "Failure to provide photos of all sides of home-C58"
					},
					{
						"key": "agentNotContracted",
						"label": "General Agent no longer contracted with market-C28",
						"value": "General Agent no longer contracted with market-C28"
					},
					{
						"key": "reasonC55",
						"label": "Inspection Reasons-C55",
						"value": "Inspection Reasons-C55"
					},
					{
						"key": "outOfBusiness",
						"label": "Insured Out of Business-IOB",
						"value": "Insured Out of Business-IOB"
					},
					{
						"key": "insuredRequest",
						"label": "Insured Request-C10",
						"value": "Insured Request-C10"
					},
					{
						"key": "vancanyExpired",
						"label": "Maximum vacancy period expired-C73",
						"value": "Maximum vacancy period expired-C73"
					},
					{
						"key": "policyNotTaken",
						"label": "No Response - Policy Not Taken-C74",
						"value": "No Response - Policy Not Taken-C74"
					},
					{
						"key": "nonCompliance",
						"label": "Non-Compliance-C24",
						"value": "Non-Compliance-C24"
					},
					{
						"key": "nonComplianceAudit",
						"label": "Non-Compliance with Audit-NCA",
						"value": "Non-Compliance with Audit-NCA"
					},
					{
						"key": "nonPaymentPremium",
						"label": "Non-Payment of Premium to Finance Company-C33",
						"value": "Non-Payment of Premium to Finance Company-C33"
					},
					{
						"key": "nonPaymentFirstPremium",
						"label": "Non-payment of premium to First Premium-C57",
						"value": "Non-payment of premium to First Premium-C57"
					},
					{
						"key": "nonPaymentCarrier",
						"label": "Non-Payment of Premium to Market/Carrier-C30",
						"value": "Non-Payment of Premium to Market/Carrier-C30"
					},
					{
						"key": "nonPaymentRetailer",
						"label": "Non-Payment of Premium to Retailer-NPB",
						"value": "Non-Payment of Premium to Retailer-NPB"
					},
					{
						"key": "nonPaymentRps",
						"label": "Non-Payment of Premium to RPS-C27",
						"value": "Non-Payment of Premium to RPS-C27"
					},
					{
						"key": "otherOT",
						"label": "Other-OT2",
						"value": "Other-OT2"
					},
					{
						"key": "programAbort",
						"label": "Program no longer available-C68",
						"value": "Program no longer available-C68"
					},
					{
						"key": "propertySold",
						"label": "Property Sold-CR9",
						"value": "Property Sold-CR9"
					},
					{
						"key": "renewalReasonC56",
						"label": "Unable to offer Wind and Hail coverage at renewal-C56",
						"value": "Unable to offer Wind and Hail coverage at renewal-C56"
					},
					{
						"key": "uwReasonC69",
						"label": "Underwriting / evidence of completed repairs not received-C69",
						"value": "Underwriting / evidence of completed repairs not received-C69"
					},
					{
						"key": "uwReasonC64",
						"label": "Underwriting / signed originals not received-C64",
						"value": "Underwriting / signed originals not received-C64"
					},
					{
						"key": "uwReasonC69",
						"label": "Underwriting and additional photos not received-C59",
						"value": "Underwriting and additional photos not received-C59"
					},
					{
						"key": "uwReasonC60",
						"label": "Underwriting and Alabama ID-12 and Surplus Lines form(s) not received-C60",
						"value": "Underwriting and Alabama ID-12 and Surplus Lines form(s) not received-C60"
					},
					{
						"key": "uwReasonC61",
						"label": "Underwriting and ineligible for liability-C61",
						"value": "Underwriting and ineligible for liability-C61"
					},
					{
						"key": "uwReasonC63",
						"label": "Underwriting and Louisiana Surplus Lines affidavit not received-C63",
						"value": "Underwriting and Louisiana Surplus Lines affidavit not received-C63"
					},
					{
						"key": "uwReasonC66",
						"label": "Underwriting and required photos not received-C66",
						"value": "Underwriting and required photos not received-C66"
					},
					{
						"key": "uwReasonC65",
						"label": "Underwriting and the home is over insured-C65",
						"value": "Underwriting and the home is over insured-C65"
					},
					{
						"key": "uwReasonC72",
						"label": "Underwriting and the home is under insured-C72",
						"value": "Underwriting and the home is under insured-C72"
					},
					{
						"key": "uwReasonC70",
						"label": "Underwriting and unresolved return mail issues-C70",
						"value": "Underwriting and unresolved return mail issues-C70"
					},
					{
						"key": "uwReasonC62",
						"label": "Underwriting and unresolved inspection issues-C62",
						"value": "Underwriting and unresolved inspection issues-C62"
					},
					{
						"key": "uwReasonC5",
						"label": "Underwriting Reasons-C5",
						"value": "Underwriting Reasons-C5"
					},
					{
						"key": "signedDocumentNotReceievd",
						"label": "Underwriting, non payment, signed documents and photos not received-C71",
						"value": "Underwriting, non payment, signed documents and photos not received-C71"
					}
				],
				"errorMessage": "Please select reason",
				"dataPath": "Transaction.Reason"
			},
			{
				"key": "cancellationterms",
				"label": "Cancellation Terms/Notes",
				"type": "text",
				"value": "",
				"props": {
					"class": "inputText",
					"placeholder": "Please enter cancellation notes (Max 200 characters",
					"maxlength": "200",
					"required": true,
					"disabled": false
				},
				"labelClass": "inputLabel ddlUnderwriterList",
				"positionClass": "col-md-4 mt-4",
				"isColummnDisplay": false,
				"errorMessage": "Please enter Cancellation Notes",
				"dataPath": "Transaction.Remarks"
			}
		]
	}
];

export const cancellationLandingData = {
	"id": "c9ce03a1-0ed4-4bd9-9096-273eba9c4c1a",
	"AccountId": "Agent",
	"QuoteNumber": "TOGACNPDTX230564",
	"IsPolicyBind": false,
	"IsRenewed": false,
	"IsInForce": true,
	"PolicyNumber": "CUS050APD000111-00",
	"EffectiveDate": "2023-06-30",
	"ExpirationDate": "2024-06-30",
	"BindDate": "2023-07-05",
	"QuoteDate": "2023-07-05",
	"PolicyStatus": "Endorsement Submitted For UW Approval",
	"CurrentVersion": "2",
	"CurrentVersionEffectiveFrom": "2023-07-18",
	"NoOfTimesRenewed": "0",
	"QuoteExpDate": "2023-07-30",
	"RenewalTerm": 0,
	"DiscountAndSurcharges": {
		"Description": "Testing subjectivities"
	},
	"PolicyRiskAttributes": {
		"EndorsementCount": 0,
		"CancellationCount": 0,
		"ReinstatementCount": 0,
		"DropboxSignatureRequestID": ""
	},
	"PaymentTerms": {
		"DownPayment": 0,
		"FirstDueDate": "",
		"PaymentAmount": 0,
		"Installments": 0,
		"PayOption": "",
		"OutsidePF": "",
		"OutsidePFDownPayment": 181500.28999999998
	},
	"Agency": {
		"Client": "TOGA",
		"Code": "AGT194",
		"Name": "In Trucks Insurance Corp",
		"Status": "A",
		"Products": [],
		"Communications": [
			{
				"Id": "1",
				"Type": "PhNo",
				"SubType": "Phone",
				"Value": "8806083828",
				"Status": "Active",
				"AcceptText": true
			},
			{
				"Id": "3",
				"Type": "Email",
				"SubType": "Email",
				"Value": "jayakrishnans@cogitate.us",
				"Status": "Active",
				"AcceptText": null
			},
			{
				"Id": "3",
				"Type": "Fax",
				"SubType": "Fax",
				"Value": null,
				"Status": "Active",
				"AcceptText": null
			}
		],
		"Address": [
			{
				"Number": 1,
				"AddressType": "Primary",
				"Description": "",
				"AddressLine1": "6750 N Andrews Avenue Suite 200",
				"AddressLine2": null,
				"AptSuite": "",
				"Addr2": null,
				"City": "Fort Lauderdale",
				"County": "Broward",
				"Country": "US",
				"CountryCode": null,
				"CountyCode": "Broward",
				"State": "FL",
				"PoBox": "",
				"Postalcode": "33309",
				"FormattedAddress": "",
				"UnFormattedAddress": "",
				"AdministrationArea1": "",
				"AdministrationArea2": "",
				"Locality": "",
				"Lat": "",
				"Long": "",
				"Street": null,
				"Name": "",
				"Premise": "",
				"Status": "",
				"Territory": "",
				"StreetName": null,
				"IsManual": null,
				"Business": "",
				"PlaceId": ""
			},
			{
				"Number": 1,
				"AddressType": "Mailing",
				"Description": "",
				"AddressLine1": "6750 N Andrews Avenue Suite 200",
				"AddressLine2": "",
				"AptSuite": "",
				"Addr2": null,
				"City": "Fort Lauderdale",
				"County": "Broward",
				"Country": "US",
				"CountryCode": null,
				"CountyCode": "",
				"State": "FL",
				"PoBox": "",
				"Postalcode": "33309",
				"FormattedAddress": "",
				"UnFormattedAddress": "",
				"AdministrationArea1": "",
				"AdministrationArea2": "",
				"Locality": "",
				"Lat": "",
				"Long": "",
				"Street": null,
				"Name": "",
				"Premise": "",
				"Status": "",
				"Territory": "",
				"StreetName": null,
				"IsManual": null,
				"Business": "",
				"PlaceId": ""
			}
		],
		"Reference": [
			{
				"AIM": {
					"ReferenceID": "306718",
					"Type": "Active",
					"Commission": 10,
					"License": [
						{
							"State": "TX",
							"LicenseKey_PK": 306723,
							"License": "2544175",
							"LicenseStatusID": "Y",
							"DateEffective": "2020-07-22T00:00:00",
							"DateExpiration": "2024-10-31T00:00:00",
							"ActiveFlag": "Y",
							"Active": "InActive"
						}
					]
				}
			}
		]
	},
	"Agent": {
		"Client": "TOGA",
		"Code": "AGT194",
		"Name": "Jennifer Cifuentes",
		"Status": "Active",
		"Products": [],
		"Communications": [
			{
				"Id": "1",
				"Type": "PhNo",
				"SubType": "Phone",
				"Value": "8806083828",
				"Status": "Active",
				"AcceptText": true
			},
			{
				"Id": "3",
				"Type": "Email",
				"SubType": "Email",
				"Value": "rkaushal@cogitate.us",
				"Status": "Active",
				"AcceptText": null
			},
			{
				"Id": "3",
				"Type": "Fax",
				"SubType": "Fax",
				"Value": null,
				"Status": "Active",
				"AcceptText": null
			}
		],
		"Address": [
			{
				"Number": 1,
				"AddressType": "Primary",
				"Description": "",
				"AddressLine1": null,
				"AddressLine2": null,
				"AptSuite": "",
				"Addr2": null,
				"City": null,
				"County": null,
				"Country": "US",
				"CountryCode": null,
				"CountyCode": null,
				"State": null,
				"PoBox": "",
				"Postalcode": null,
				"FormattedAddress": "",
				"UnFormattedAddress": "",
				"AdministrationArea1": "",
				"AdministrationArea2": "",
				"Locality": "",
				"Lat": "",
				"Long": "",
				"Street": null,
				"Name": "",
				"Premise": "",
				"Status": "",
				"Territory": "",
				"StreetName": null,
				"IsManual": null,
				"Business": "",
				"PlaceId": ""
			},
			{
				"Number": 1,
				"AddressType": "Mailing",
				"Description": "",
				"AddressLine1": null,
				"AddressLine2": null,
				"AptSuite": "",
				"Addr2": null,
				"City": null,
				"County": null,
				"Country": "US",
				"CountryCode": null,
				"CountyCode": null,
				"State": null,
				"PoBox": "",
				"Postalcode": null,
				"FormattedAddress": "",
				"UnFormattedAddress": "",
				"AdministrationArea1": "",
				"AdministrationArea2": "",
				"Locality": "",
				"Lat": "",
				"Long": "",
				"Street": null,
				"Name": "",
				"Premise": "",
				"Status": "",
				"Territory": "",
				"StreetName": null,
				"IsManual": null,
				"Business": "",
				"PlaceId": ""
			}
		],
		"Reference": [
			{
				"AIM": {
					"ReferenceID": "391658",
					"Type": "I",
					"Commission": null,
					"License": [
						{
							"State": "TX",
							"LicenseKey_PK": 306723,
							"License": "2544175",
							"LicenseStatusID": "Y",
							"DateEffective": "2020-07-22T00:00:00",
							"DateExpiration": "2024-10-31T00:00:00",
							"ActiveFlag": "Active",
							"Active": null
						}
					]
				}
			}
		]
	},
	"UnderWriter": {
		"Client": "TOGA",
		"Code": "Geoff",
		"Name": "Geoffrey Crater",
		"Status": "Active",
		"Products": [],
		"Communications": [
			{
				"Id": "1",
				"Type": "PhNo",
				"SubType": "Phone",
				"Value": "8806083828",
				"Status": "Active",
				"AcceptText": true
			},
			{
				"Id": "3",
				"Type": "Email",
				"SubType": "Email",
				"Value": "jayakrishnans@cogitate.us",
				"Status": "Active",
				"AcceptText": null
			},
			{
				"Id": "3",
				"Type": "Fax",
				"SubType": "Fax",
				"Value": "(512) 375-4332",
				"Status": "Active",
				"AcceptText": null
			}
		],
		"Address": [
			{
				"Number": null,
				"AddressType": null,
				"Description": null,
				"AddressLine1": null,
				"AddressLine2": null,
				"AptSuite": null,
				"Addr2": null,
				"City": null,
				"County": null,
				"Country": null,
				"CountryCode": null,
				"CountyCode": null,
				"State": null,
				"PoBox": null,
				"Postalcode": null,
				"FormattedAddress": null,
				"UnFormattedAddress": null,
				"AdministrationArea1": null,
				"AdministrationArea2": null,
				"Locality": null,
				"Lat": null,
				"Long": null,
				"Street": null,
				"Name": null,
				"Premise": null,
				"Status": null,
				"Territory": null,
				"StreetName": null,
				"IsManual": null,
				"Business": null,
				"PlaceId": null
			}
		],
		"Reference": [
			{
				"AIM": {
					"ReferenceID": "Geoff",
					"Type": null,
					"Commission": null,
					"License": null
				}
			}
		]
	},
	"Rules": {
		"Action": "UnderwriterAlert",
		"MatchingRules": [
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "Operations-TOGA013",
				"Isfulfilled": "true",
				"Reason": " Applicant has owned, leased or operated equipment which is not listed on the vehicle schedule."
			},
			{
				"Status": null,
				"Type": "UnderwriterReferral",
				"Description": "GLQueries-TOGA013",
				"Isfulfilled": "true",
				"Reason": "Applicant hauls hazardous commodities."
			},
			{
				"Status": null,
				"Type": "UnderwriterReferral",
				"Description": "Operations-TOGA018",
				"Isfulfilled": "true",
				"Reason": "Applicant pulls double or triple trailers"
			},
			{
				"Status": null,
				"Type": "UnderwriterReferral",
				"Description": "GLQueries-TOGA019",
				"Isfulfilled": "true",
				"Reason": "Uncorrected fire and/or safety code violations present."
			},
			{
				"Status": null,
				"Type": "UnderwriterReferral",
				"Description": "GLQueries-TOGA020",
				"Isfulfilled": "true",
				"Reason": "Past losses or claims relating to sexual abuse or molestation allegations, discrimination or negligent hiring are present."
			},
			{
				"Status": null,
				"Type": "UnderwriterReferral",
				"Description": "GLQueries-TOGA021",
				"Isfulfilled": "true",
				"Reason": "During the last five years, applicant has been indicted for or convicted or any degree of the crime of fraud, bribery, arson or any other arson-related crime in connection with this or any other property."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA043",
				"Isfulfilled": "true",
				"Reason": "Applicant had a judgement or lien during the last five years."
			},
			{
				"Status": null,
				"Type": "UnderwriterReferral",
				"Description": "GLQueries-TOGA022",
				"Isfulfilled": "true",
				"Reason": "Business has been placed in a trust."
			},
			{
				"Status": null,
				"Type": "UnderwriterReferral",
				"Description": "GLQueries-TOGA023",
				"Isfulfilled": "true",
				"Reason": "Foreign operations, foreign products distributed in USA, or US Products sold / distributed in foreign countries."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA024",
				"Isfulfilled": "true",
				"Reason": "Applicant have other business ventures for which coverage is not requested."
			},
			{
				"Status": null,
				"Type": "UnderwriterReferral",
				"Description": "GLQueries-TOGA044",
				"Isfulfilled": "true",
				"Reason": " Medical facilities or medical professionals employed or contracted."
			},
			{
				"Status": null,
				"Type": "UnderwriterReferral",
				"Description": "GLQueries-TOGA025",
				"Isfulfilled": "true",
				"Reason": "Exposure to radioactive/nuclear materials."
			},
			{
				"Status": null,
				"Type": "UnderwriterReferral",
				"Description": "GLQueries-TOGA026",
				"Isfulfilled": "true",
				"Reason": "Applicant has/had operations involving storing, treating, discharging, applying, disposing, or transporting of hazardous materials (e.g. landfills, wastes, fuel tanks, etc)."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA027",
				"Isfulfilled": "true",
				"Reason": "Applicant has  operations sold, acquired, or discontinued in last five (5) years."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA028",
				"Isfulfilled": "true",
				"Reason": "Applicant rents or loan equipment to others."
			},
			{
				"Status": null,
				"Type": "UnderwriterReferral",
				"Description": "GLQueries-TOGA045",
				"Isfulfilled": "true",
				"Reason": "Applicant has watercraft, docks, floats owned, hired or leased."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA029",
				"Isfulfilled": "true",
				"Reason": "Applicant has parking facilities owned/rented."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA030",
				"Isfulfilled": "true",
				"Reason": "Fee is charged for parking."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA031",
				"Isfulfilled": "true",
				"Reason": "Recreation facilities are provided by applicant."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA032",
				"Isfulfilled": "true",
				"Reason": "Applicant has lodging operations including apartments."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA033",
				"Isfulfilled": "true",
				"Reason": " Swimming pool on premises."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA034",
				"Isfulfilled": "true",
				"Reason": "Social events are sponsored."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA035",
				"Isfulfilled": "true",
				"Reason": "Structural alterations are contemplated."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA036",
				"Isfulfilled": "true",
				"Reason": "Demolition exposure are contemplated."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA037",
				"Isfulfilled": "true",
				"Reason": "Applicant has been active in or is currently active in Joint Ventures."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA038",
				"Isfulfilled": "true",
				"Reason": "Applicant leases employees to or from other employers."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA039",
				"Isfulfilled": "true",
				"Reason": "Labor interchange with any other business or subsidiaries is present."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA040",
				"Isfulfilled": "true",
				"Reason": "Day care facilities are operated or controlled."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA041",
				"Isfulfilled": "true",
				"Reason": "Crimes occurred or been attempted on applicant's premises within the last three years."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "GLQueries-TOGA042",
				"Isfulfilled": "true",
				"Reason": "Businesses' promotional literature makes representations about the safety or security of the premises."
			},
			{
				"Status": null,
				"Type": "UnderwriterAlert",
				"Description": "BusinessInfo-TOGA045",
				"Isfulfilled": "true",
				"Reason": "Inconsistency between the Intrastate/Interstate selection."
			}
		]
	},
	"Risks": {
		"Drivers": [
			{
				"Name": "",
				"UnitNumber": "",
				"UnitType": "D",
				"Status": "Valid",
				"TempDriverIdentifier": "",
				"HireDate": "2022-07-06",
				"IsDOTNumber": "false",
				"DOTNumber": "",
				"Experience": "5",
				"Turnover": "",
				"IsDriverUploaded": "",
				"Carrier": "",
				"MVR": "updateddetails.json",
				"NewVenture": {
					"CDLADate": "",
					"CDLAExperience": 5,
					"TransportingExperience": 4,
					"IndustryExperience": 0,
					"Employer": [
						{
							"Name": "Premnath A Borkar",
							"EmploymentDate": "2023-07-03",
							"UnitType": "Units Operated",
							"Commodities": "Commodities Hauled",
							"Radius": "301-500"
						},
						{
							"Name": "narotam singh  endors",
							"EmploymentDate": "2023-07-01",
							"UnitType": "yup",
							"Commodities": "test",
							"Radius": "51-200"
						},
						{
							"Name": "mayank",
							"EmploymentDate": "2022-07-04",
							"UnitType": "op",
							"Commodities": "vp",
							"Radius": "201-300"
						}
					]
				},
				"DriverRiskAttributes": {
					"Type": "Owner",
					"FirstName": "Premnath",
					"MiddleName": "A",
					"LastName": "Borkar",
					"Suffix": "",
					"DOB": "1967-07-24",
					"Age": 55,
					"LicenseNumber": "F11111111111",
					"Violations": "1",
					"IsUSCitizen": true,
					"Occupation": "",
					"LicenseDate": "",
					"LicenseState": "CA",
					"IsInternationalDriver": "No",
					"LicenseStatus": "",
					"PhoneNo": "0343493843",
					"Email": "pborkar@cogitate.us"
				},
				"Accidents": {
					"NumberOfAccidents": "1",
					"Excluded": "No",
					"MEDForm": "No"
				},
				"PremiumFactors": [],
				"Premium": {
					"BasicPremium": 0,
					"Surcharge": 0,
					"Discount": 0,
					"MinPremium": 0,
					"PolicyPremium": 0,
					"TotalSalePrice": 0,
					"EffectivePremium": 0,
					"AnnualPremium": 0,
					"AnnualPremiumWithFeesAndTaxes": 0,
					"EffectivePremiumWithFeesAndTaxes": 0
				},
				"Audit": {
					"CreatedBy": "",
					"CreatedOn": "",
					"LastUpdatedBy": "",
					"LastUpdatedOn": ""
				},
				"Coverages": []
			}
		],
		"Vehicles": [
			{
				"Name": "V",
				"Status": "Valid",
				"UnitNumber": "mVIN-c35e9f77-7dde-4a07-8b55-a25d29e7cfeb",
				"UnitType": "V",
				"EstimatedAnnualMileage": 150000,
				"OverRideVIN": "true",
				"VehicleAge": 3,
				"StatedValue": 15000,
				"TypeofOperation": null,
				"TrailerTypesAttached": "Reefer Trailers",
				"MajorCitiesTravelled": null,
				"VehicleRiskAttributes": {
					"VehicleType": "Truck-Tractor",
					"TrailerBodyType": "",
					"VIN": "KNAFE121855128842",
					"Year": "2020",
					"Make": "Dodge",
					"Model": "Spectra LD",
					"PrimaryGaragingLocation": "322 Texas 3, League City, TX, USA, 77573",
					"OwnedOrLeased": "Financed"
				},
				"Camera": {
					"HasCamera": "Road & In-Cab Facing/Netradyne",
					"CameraMake": "",
					"CameraModel": "",
					"CameraSerialModel": ""
				},
				"ElectronicDevice": {
					"HasElectronicDevice": "false",
					"DeviceMake": "",
					"DeviceModel": "",
					"Detail": "Test"
				},
				"LossPayee": [],
				"Audit": {
					"CreatedBy": "",
					"CreatedOn": "",
					"LastUpdatedBy": "",
					"LastUpdatedOn": ""
				},
				"PremiumFactors": [
					{
						"Name": "VehiclePremium",
						"Type": "",
						"Description": "Vehicle Premium",
						"Rate": 0.055,
						"Limit": 0,
						"LimitAmount": 0,
						"Premium": 825,
						"AnnualPremium": 825,
						"Status": "Active",
						"IsApplicable": true,
						"IsSelected": true,
						"IsMandatory": false,
						"Deductible": 0,
						"EffectivePremium": 825,
						"PremiumDifference": 825,
						"DisplayValue": null,
						"Factor": {
							"Name": "VehiclePremium",
							"Type": "",
							"Description": "Vehicle Premium",
							"Rate": 0.055,
							"Limit": 0,
							"LimitAmount": 0,
							"Premium": 825,
							"AnnualPremium": 825,
							"Status": "",
							"IsApplicable": false,
							"IsSelected": false,
							"IsMandatory": false,
							"Deductible": 0,
							"EffectivePremium": 0,
							"DisplayValue": null
						}
					},
					{
						"Name": "MinPremium",
						"Type": "",
						"Description": "Minimum Premium",
						"Rate": 0,
						"Limit": 0,
						"LimitAmount": 0,
						"Premium": 0,
						"AnnualPremium": 0,
						"Status": "Active",
						"IsApplicable": true,
						"IsSelected": true,
						"IsMandatory": false,
						"Deductible": 0,
						"EffectivePremium": 0,
						"PremiumDifference": 0,
						"DisplayValue": null,
						"Factor": {
							"Name": "MinPremium",
							"Type": "",
							"Description": "Minimum Premium",
							"Rate": 0,
							"Limit": 0,
							"LimitAmount": 0,
							"Premium": 0,
							"AnnualPremium": 0,
							"Status": "",
							"IsApplicable": false,
							"IsSelected": false,
							"IsMandatory": false,
							"Deductible": 0,
							"EffectivePremium": 0,
							"DisplayValue": null
						}
					}
				],
				"Premium": {
					"BasicPremium": null,
					"Surcharge": 0,
					"Discount": 0,
					"MinPremium": null,
					"PolicyPremium": null,
					"TotalSalePrice": null,
					"EffectivePremium": 825,
					"AnnualPremium": 825,
					"AnnualPremiumWithFeesAndTaxes": null,
					"EffectivePremiumWithFeesAndTaxes": null
				},
				"Coverages": []
			}
		]
	},
	"Underwriting": {
		"GlQueries": {
			"SafetyCodeViolation": "true",
			"MolestationAllegations": "true",
			"IsConvictedCrime": "true",
			"JudgementOrLien": "true",
			"AnyForeignOperations": "true",
			"OtherBusinessVentures": "true",
			"AnyMedicalFacilities": "true",
			"IsExposureToNuclear": "true",
			"DiscontinuedMaterialsTransporting": "true",
			"DiscontinuedOperations": "true",
			"RentEquipment": "true",
			"AnyDocksHired": "true",
			"AnyParkingFacilities": "true",
			"HasParkingFee": "true",
			"RecreationFacilities": "true",
			"HasSwimmingPool": "true",
			"AreEventsSponsored": "true",
			"StructuralAlterations": "true",
			"DemolitionExposure": "true",
			"IsActiveInJointVentures": "true",
			"LeaseFromOtherEmployers": "true",
			"IsLaborInterchange": "true",
			"AnyDayCareFacilities": "true",
			"CrimeOnPremises": "true",
			"IsPremisesSecure": "true",
			"AnyLoadingOperations": {
				"Value": "true",
				"Reason": "endors"
			},
			"IsBusinessPlacedInTrust": {
				"Value": "true",
				"Reason": "endors yurae"
			}
		},
		"NewVentureQueries": {
			"HaveCommercialClassALicense": "false",
			"CommercialClassALicenseDate": "",
			"CommercialClassALicenseYears": null,
			"ExperienceWithSameEquipment": "22",
			"ApplyForOwnAuthority": {
				"ApplyForOwnAuthority": "true",
				"AuthorityName": "State"
			},
			"PastInsurance": {
				"UnderDifferentAuthority": "false",
				"PriorAuthorityName": "",
				"DOTNumber": "",
				"MCNumber": ""
			},
			"IncreaseAutosNextTwelveMonth": {
				"Value": "false",
				"Reason": ""
			},
			"AccidentInLastThreeYears": {
				"Value": "false",
				"Reason": ""
			}
		},
		"InEligible": {
			"Bankruptcy": "false",
			"DegreeofCrime": "false",
			"IsTowing": "false",
			"ProhibitedOperations": "true",
			"AutoLiabilityProhibitedCommodities": "true",
			"GeneralLiabilityProhibitedCommodities": "true",
			"DotComplianceTrainingProgram": "true",
			"InstallCabCamera": "true",
			"NotifyInsuranceAgent": "true",
			"ComplyWithInspection": "true"
		}
	},
	"Transaction": {
		"Date": "2023-06-30",
		"EffectiveDate": "2023-06-30",
		"Type": "CAN",
		"Status": "",
		"Number": 1,
		"IsOutOfSequence": false,
		"RequestedBy": "",
		"RequestedById": "",
		"PremiumType": "",
		"Remarks": "",
		"Reason": "",
		"Verification": {
			"IsInsuredESignVerified": false,
			"IsAgentESignVerified": false,
			"IsEmailVerified": false,
			"IsOTPVerified": false
		},
		"Subjectivity": "",
		"MEP": 0.25,
		"SCR": 0,
		"CloseDeclineType": null,
		"CloseDeclineReason": null,
		"CloseDeclineDetails": null,
		"CloseDeclineRemark": null
	},
	"Forms": [
		{
			"Status": "",
			"FormName": "CUS CA 100 (12-21)",
			"FormDesc": "Commercial Lines Common Policy Declarations - Auto",
			"Sequence": 1,
			"FormType": "Dynamic",
			"Template": "f0sw23wduh0",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG001",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "SPL-TX (06-21)",
			"FormDesc": "Surplus Lines Notice",
			"Sequence": 2,
			"FormType": "Dynamic",
			"Template": "jdzns51rvju",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG003",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 101 (12-21)",
			"FormDesc": "Schedule of Forms",
			"Sequence": 3,
			"FormType": "Dynamic",
			"Template": "g5ofu15f1nh",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG004",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 402 (06-17)",
			"FormDesc": "Undeclared Driver Exclusion",
			"Sequence": 4,
			"FormType": "Static",
			"Template": "w0qxqljdlgo",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG005",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 400 (06-17)",
			"FormDesc": "Driver Schedule/Exclusion - Excluded Drivers",
			"Sequence": 5,
			"FormType": "Dynamic",
			"Template": "guwt3goq2ab",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG006",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 367 (01-22)",
			"FormDesc": "Commercial Auto Declarations Form",
			"Sequence": 6,
			"FormType": "Dynamic",
			"Template": "qkudb4tjyok",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG007",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 401 (12-19)",
			"FormDesc": "Satellite Tracking Endorsement",
			"Sequence": 7,
			"FormType": "Static",
			"Template": "4o4ajr52y4s",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG011",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 406 (12-19)",
			"FormDesc": "Loading/Unloading, Upset or Overturn Deductible Form",
			"Sequence": 8,
			"FormType": "Static",
			"Template": "dtywvrzpxpo",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG012",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 364 (01-20)",
			"FormDesc": "Auto Physical Damage Coverage Form",
			"Sequence": 9,
			"FormType": "Static",
			"Template": "per2z1gv0d1",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG013",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 377 (11-21)",
			"FormDesc": "Auto General Clauses Endorsement",
			"Sequence": 10,
			"FormType": "Static",
			"Template": "xefq4o2r0g2",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG014",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 148 (12-21)",
			"FormDesc": "Premium Calculations Changes",
			"Sequence": 11,
			"FormType": "Static",
			"Template": "vio1w3n2uzz",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG015",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "IL 00 17 (11-98)",
			"FormDesc": "Common Policy Conditions",
			"Sequence": 12,
			"FormType": "Static",
			"Template": "oitmasqr4xh",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG075",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CO 102 (10-21)",
			"FormDesc": "Service of Suit Clause",
			"Sequence": 13,
			"FormType": "Static",
			"Template": "z4t5pzzoj5i",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG018",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CO 103 (02-20)",
			"FormDesc": "Privacy Statement",
			"Sequence": 14,
			"FormType": "Static",
			"Template": "tly1n4pks4o",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG019",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CO 104 (08-17)",
			"FormDesc": "Sanction Limitation and Exclusion Clause",
			"Sequence": 15,
			"FormType": "Static",
			"Template": "zbk3q4lglmy",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG020",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 371 (01-20)",
			"FormDesc": "Amendment to Towing, Labor and Storage Coverage",
			"Sequence": 16,
			"FormType": "Dynamic",
			"Template": "je5tyo4lpmi",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG021",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 410 (11-21)",
			"FormDesc": "Loss Payable Clause",
			"Sequence": 17,
			"FormType": "Dynamic",
			"Template": "o2cxqwkcsxy",
			"IsMandatory": false,
			"IsChecked": false,
			"AcordCode": "TG022",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CO TRIA (02-20)",
			"FormDesc": "Terrorism Risk Insurance Act New & Renewal Business Endorsement",
			"Sequence": 18,
			"FormType": "Dynamic",
			"Template": "12yb50txuzt",
			"IsMandatory": false,
			"IsChecked": true,
			"AcordCode": "TG025",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CO TDN (02-20)",
			"FormDesc": "Policyholder Disclosure Notice Of Terrorism Insurance Coverage",
			"Sequence": 19,
			"FormType": "Dynamic",
			"Template": "okgpswi5hmv",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG026",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CO TNP (02-20)",
			"FormDesc": "Policyholder Notice Terrorism Coverage Not Purchased",
			"Sequence": 20,
			"FormType": "Static",
			"Template": "c0kr2xzeb2o",
			"IsMandatory": false,
			"IsChecked": false,
			"AcordCode": "TG027",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 413 (11-21)",
			"FormDesc": "Non-Owned Trailer Endorsement",
			"Sequence": 21,
			"FormType": "Dynamic",
			"Template": "qyjnsls1sfp",
			"IsMandatory": false,
			"IsChecked": true,
			"AcordCode": "TG029",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 414 (11-21)",
			"FormDesc": "Trailer Interchange Endorsement",
			"Sequence": 22,
			"FormType": "Dynamic",
			"Template": "gwrfb0uksyi",
			"IsMandatory": false,
			"IsChecked": false,
			"AcordCode": "TG030",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 420 (11-21)",
			"FormDesc": "Trailer Interchange Endorsement - UIIA",
			"Sequence": 23,
			"FormType": "Dynamic",
			"Template": "goyu1pqaklh",
			"IsMandatory": false,
			"IsChecked": false,
			"AcordCode": "TG031",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 418 (06-21)",
			"FormDesc": "Virus or Bacteria Exclusion",
			"Sequence": 24,
			"FormType": "Static",
			"Template": "dep0u05bpnl",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG035",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "CUS CA 412 (11-21)",
			"FormDesc": "Graduated Deductible Endorsement",
			"Sequence": 25,
			"FormType": "Static",
			"Template": "om3etxs3yv2",
			"IsMandatory": false,
			"IsChecked": false,
			"AcordCode": "TG049",
			"File": "",
			"Dmspath": ""
		},
		{
			"Status": "",
			"FormName": "IL P 001 (01-04)",
			"FormDesc": "U.S. Treasury Department's Office of Foreign Assets Control Advisory Notice",
			"Sequence": 26,
			"FormType": "Static",
			"Template": "cmq5gtb3try",
			"IsMandatory": true,
			"IsChecked": false,
			"AcordCode": "TG065",
			"File": "",
			"Dmspath": ""
		}
	],
	"TotalPremium": {
		"BasicPremium": 0,
		"Surcharge": 0,
		"Discount": 0,
		"MinPremium": 0,
		"EffectivePremium": 1620.5,
		"PriorAnnualPremium": 0,
		"Fees": 150,
		"Taxes": 88.53,
		"AnnualPremiumWithFeesAndTaxes": 1859.03,
		"EffectivePremiumWithFeesAndTaxes": 1859.03,
		"AnnualPremium": 1620.5,
		"AnnualFees": 150,
		"AnnualTax": 88.53
	},
	"Premium": {
		"BasicPremium": null,
		"Surcharge": 0,
		"Discount": 0,
		"MinPremium": null,
		"PolicyPremium": null,
		"TotalSalePrice": null,
		"EffectivePremium": 795.5,
		"AnnualPremium": 795.5,
		"AnnualPremiumWithFeesAndTaxes": null,
		"EffectivePremiumWithFeesAndTaxes": null
	},
	"FeesAndTaxes": [
		{
			"Code": "SOF",
			"Value": "0.0015",
			"Status": "Active",
			"ValueType": "P",
			"Amount": 2.66,
			"IsOverride": false,
			"AnnualAmount": 2.66,
			"ProductFeesAndTaxes": {
				"Type": "Tax",
				"Product": "TOGACNPDTX",
				"Code": "SOF",
				"Description": "Stamping Office Fee",
				"Status": "Active",
				"EffectiveFrom": "2023-01-01",
				"RangeFrom": null,
				"RangeTo": null,
				"RangeValueType": null,
				"IsEarned": "false",
				"LicenseNo": null,
				"ValueType": "P",
				"Value": "0.0015",
				"DecimalPoints": "2",
				"CalculateOn": "PR,PFEE",
				"Transactions": "A,P,CF,IF,R,Quote,Policy,FlatCancellation,FlatReinstate,Renewal,Application,CAN,NEW,END,REI,REN"
			}
		},
		{
			"Code": "SLT",
			"Value": "0.0485",
			"Status": "Active",
			"ValueType": "P",
			"Amount": 85.87,
			"IsOverride": false,
			"AnnualAmount": 85.87,
			"ProductFeesAndTaxes": {
				"Type": "Tax",
				"Product": "TOGACNPDTX",
				"Code": "SLT",
				"Description": "Surplus Lines Tax",
				"Status": "Active",
				"EffectiveFrom": "2023-01-01",
				"RangeFrom": null,
				"RangeTo": null,
				"RangeValueType": null,
				"IsEarned": "false",
				"LicenseNo": null,
				"ValueType": "P",
				"Value": "0.0485",
				"DecimalPoints": "2",
				"CalculateOn": "PR,PFEE",
				"Transactions": "A,P,CF,IF,R,Quote,Policy,FlatCancellation,FlatReinstate,Renewal,Application,CAN,NEW,END,REI,REN"
			}
		},
		{
			"Code": "PFEE",
			"Value": "150",
			"Status": "Active",
			"ValueType": null,
			"Amount": 150,
			"IsOverride": false,
			"AnnualAmount": 150,
			"ProductFeesAndTaxes": {
				"Type": "Fee",
				"Product": "TOGACNPDTX",
				"Code": "PFEE",
				"Description": "Policy Fee",
				"Status": "Active",
				"EffectiveFrom": "2023-01-01",
				"RangeFrom": null,
				"RangeTo": null,
				"RangeValueType": null,
				"IsEarned": "false",
				"LicenseNo": null,
				"ValueType": null,
				"Value": "150",
				"DecimalPoints": "2",
				"CalculateOn": "",
				"Transactions": "A,P,CF,IF,R,Quote,Policy,FlatCancellation,FlatReinstate,Renewal,Application,CAN,NEW,END,REI,REN"
			}
		}
	],
	"PolicyCoverages": {
		"Coverages": [
			{
				"Status": "",
				"Type": "AL",
				"Name": "LIABILITY",
				"Description": "LIABILITY",
				"IsApplicable": "No",
				"IsSelected": "Yes",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "1000000",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "AL",
				"Name": "UM",
				"Description": "AL-UM",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "85000",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "AL",
				"Name": "UIM",
				"Description": "AL-UIM",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "85000",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "AL",
				"Name": "PIP",
				"Description": "AL-PIP",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "2500",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "AL",
				"Name": "UIIA",
				"Description": "AL-UIIA",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "AL",
				"Name": "TRIA",
				"Description": "AL-TRIA",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "APD",
				"Name": "COMP/COLL",
				"Description": "COMP/COLL",
				"IsApplicable": "No",
				"IsSelected": "Yes",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "15000",
				"LimitAmount": 0,
				"Deductible": 2500,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "APD",
				"Name": "TOWING, LABOR, AND STORAGE",
				"Description": "TOWING, LABOR, AND STORAGE",
				"IsApplicable": "No",
				"IsSelected": "",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "25000",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "APD",
				"Name": "UIIA",
				"Description": "APD-UIIA",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "APD",
				"Name": "NON OWNED TRAILER",
				"Description": "NON OWNED TRAILER",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "8799",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "APD",
				"Name": "TRIA",
				"Description": "APD-TRIA",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "MTC",
				"Name": "MTC",
				"Description": "MTC",
				"IsApplicable": "No",
				"IsSelected": "Yes",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "100000",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "MTC",
				"Name": "CONTINGENT TRANSIT COVERAGE",
				"Description": "CONTINGENT TRANSIT COVERAGE",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "MTC",
				"Name": "EARNED FREIGHT COVERAGE",
				"Description": "EARNED FREIGHT COVERAGE",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "MTC",
				"Name": "LTL COVERAGE",
				"Description": "LTL COVERAGE",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "MTC",
				"Name": "DEBRIS REMOVAL COVERAGE",
				"Description": "DEBRIS REMOVAL COVERAGE",
				"IsApplicable": "No",
				"IsSelected": "",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "5000",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "MTC",
				"Name": "UIIA ENDORSEMENT",
				"Description": "MTC-UIIA ENDORSEMENT",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "MTC",
				"Name": "UNATTENDED TRUCK COVERAGE",
				"Description": "UNATTENDED TRUCK COVERAGE",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "MTC",
				"Name": "RIGGERS COVERAGE",
				"Description": "RIGGERS COVERAGE",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 2500,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "MTC",
				"Name": "TRIA",
				"Description": "MTC-TRIA",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "GL",
				"Name": "GENERAL LIABILITY",
				"Description": "GENERAL LIABILITY",
				"IsApplicable": "No",
				"IsSelected": "Yes",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "500000-1000000",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "GL",
				"Name": "EMPLOYEE BENEFITS LIABILITY",
				"Description": "EMPLOYEE BENEFITS LIABILITY",
				"IsApplicable": "No",
				"IsSelected": "",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "1000000",
				"LimitAmount": 0,
				"Deductible": 1000,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "GL",
				"Name": "TRIA",
				"Description": "GL-TRIA",
				"IsApplicable": "No",
				"IsSelected": "No",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "GL",
				"Name": "TRAILER INTERCHANGE",
				"Description": "TRAILER INTERCHANGE",
				"IsApplicable": "No",
				"IsSelected": "Yes",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "75000",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "MTC",
				"Name": "TARGETED INTERESTS",
				"Description": "TARGETED INTERESTS",
				"IsApplicable": "No",
				"IsSelected": "",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "50000",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "GL",
				"Name": "MEDICAL PAYMENTS",
				"Description": "MEDICAL PAYMENTS",
				"IsApplicable": "No",
				"IsSelected": "Yes",
				"IsMandatory": true,
				"Rate": 0,
				"Limit": "2500",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			},
			{
				"Status": "",
				"Type": "",
				"Name": "Premium Factor",
				"Description": "Premium Factor",
				"IsApplicable": "No",
				"IsSelected": "Yes",
				"IsMandatory": true,
				"Rate": 1,
				"Limit": "0",
				"LimitAmount": 0,
				"Deductible": 0,
				"Premium": 0,
				"EffectivePremium": 0,
				"PremiumDifference": 0,
				"NoOfDays": 0,
				"WaitingPeriod": 0,
				"ExpenseType": "",
				"Factor": {
					"Status": "",
					"Type": "",
					"Description": "",
					"IsApplicable": false,
					"IsSelected": false,
					"IsMandatory": false,
					"Rate": 0,
					"Limit": 0,
					"LimitAmount": 0,
					"Deductible": 0,
					"Premium": 0,
					"EffectivePremium": 0,
					"DisplayValue": null
				}
			}
		]
	},
	"PremiumFactors": [
		{
			"Name": "VehicleTIV",
			"Type": "",
			"Description": "Total Insured Value (Tractors + Trailers)",
			"Rate": 15000,
			"Limit": 15000,
			"LimitAmount": 0,
			"Premium": 0,
			"AnnualPremium": 0,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 0,
			"PremiumDifference": 0,
			"DisplayValue": null,
			"Factor": {
				"Name": "VehicleTIV",
				"Type": "",
				"Description": "Total Insured Value (Tractors + Trailers)",
				"Rate": 15000,
				"Limit": 15000,
				"LimitAmount": 0,
				"Premium": 0,
				"AnnualPremium": 0,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "NoOfYearsInBusiness",
			"Type": "",
			"Description": "Years in Business",
			"Rate": 1,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 0,
			"AnnualPremium": 0,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 0,
			"PremiumDifference": 0,
			"DisplayValue": null,
			"Factor": {
				"Name": "NoOfYearsInBusiness",
				"Type": "",
				"Description": "Years in Business",
				"Rate": 1,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 0,
				"AnnualPremium": 0,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "Deductible",
			"Type": "",
			"Description": "Deductible",
			"Rate": 5000,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 0,
			"AnnualPremium": 0,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 0,
			"PremiumDifference": 0,
			"DisplayValue": null,
			"Factor": {
				"Name": "Deductible",
				"Type": "",
				"Description": "Deductible",
				"Rate": 5000,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 0,
				"AnnualPremium": 0,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "OwnedUnitRate",
			"Type": "",
			"Description": "Owned Unit Rate",
			"Rate": 0.055,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 0,
			"AnnualPremium": 0,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 0,
			"PremiumDifference": 0,
			"DisplayValue": null,
			"Factor": {
				"Name": "OwnedUnitRate",
				"Type": "",
				"Description": "Owned Unit Rate",
				"Rate": 0.055,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 0,
				"AnnualPremium": 0,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "TrailerCount",
			"Type": "",
			"Description": "Number of trailers",
			"Rate": 0,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 0,
			"AnnualPremium": 0,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 0,
			"PremiumDifference": 0,
			"DisplayValue": null,
			"Factor": {
				"Name": "TrailerCount",
				"Type": "",
				"Description": "Number of trailers",
				"Rate": 0,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 0,
				"AnnualPremium": 0,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "TractorCount",
			"Type": "",
			"Description": "Number of tractors",
			"Rate": 1,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 0,
			"AnnualPremium": 0,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 0,
			"PremiumDifference": 0,
			"DisplayValue": null,
			"Factor": {
				"Name": "TractorCount",
				"Type": "",
				"Description": "Number of tractors",
				"Rate": 1,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 0,
				"AnnualPremium": 0,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "TractorTowingCharge",
			"Type": "",
			"Description": "Tractor Towing Charge",
			"Rate": 250,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 250,
			"AnnualPremium": 250,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 250,
			"PremiumDifference": 250,
			"DisplayValue": null,
			"Factor": {
				"Name": "TractorTowingCharge",
				"Type": "",
				"Description": "Tractor Towing Charge",
				"Rate": 250,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 250,
				"AnnualPremium": 250,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "TrailerTowingCharge",
			"Type": "",
			"Description": "Trailer Towing Charge",
			"Rate": 120,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 0,
			"AnnualPremium": 0,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 0,
			"PremiumDifference": 0,
			"DisplayValue": null,
			"Factor": {
				"Name": "TrailerTowingCharge",
				"Type": "",
				"Description": "Trailer Towing Charge",
				"Rate": 120,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 0,
				"AnnualPremium": 0,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "NonOwnedTrailerEndorsementCharge",
			"Type": "",
			"Description": "Non Owned Trailer Endorsement Charge",
			"Rate": 0.055,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 412.5,
			"AnnualPremium": 412.5,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 412.5,
			"PremiumDifference": 412.5,
			"DisplayValue": null,
			"Factor": {
				"Name": "NonOwnedTrailerEndorsementCharge",
				"Type": "",
				"Description": "Non Owned Trailer Endorsement Charge",
				"Rate": 0.055,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 412.5,
				"AnnualPremium": 412.5,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "UIIA",
			"Type": "",
			"Description": "UIIA Charge",
			"Rate": 0.04,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 33,
			"AnnualPremium": 33,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 33,
			"PremiumDifference": 33,
			"DisplayValue": null,
			"Factor": {
				"Name": "UIIA",
				"Type": "",
				"Description": "UIIA Charge",
				"Rate": 0.04,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 33,
				"AnnualPremium": 33,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "TrailerInterchange",
			"Type": "",
			"Description": "Trailer Interchange",
			"Rate": 0.04,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 0,
			"AnnualPremium": 0,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 0,
			"PremiumDifference": 0,
			"DisplayValue": null,
			"Factor": {
				"Name": "TrailerInterchange",
				"Type": "",
				"Description": "Trailer Interchange",
				"Rate": 0.04,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 0,
				"AnnualPremium": 0,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "CreditPremium",
			"Type": "DIS",
			"Description": "Credit Premium",
			"Rate": 0,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 0,
			"AnnualPremium": 0,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 0,
			"PremiumDifference": 0,
			"DisplayValue": null,
			"Factor": {
				"Name": "CreditPremium",
				"Type": "DIS",
				"Description": "Credit Premium",
				"Rate": 0,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 0,
				"AnnualPremium": 0,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "DebitPremium",
			"Type": "SUR",
			"Description": "Debit Premium",
			"Rate": 0,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 0,
			"AnnualPremium": 0,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 0,
			"PremiumDifference": 0,
			"DisplayValue": null,
			"Factor": {
				"Name": "DebitPremium",
				"Type": "SUR",
				"Description": "Debit Premium",
				"Rate": 0,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 0,
				"AnnualPremium": 0,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "TRIA",
			"Type": "",
			"Description": "TRIA",
			"Rate": 0.005,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 100,
			"AnnualPremium": 100,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 100,
			"PremiumDifference": 100,
			"DisplayValue": null,
			"Factor": {
				"Name": "TRIA",
				"Type": "",
				"Description": "TRIA",
				"Rate": 0.005,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 100,
				"AnnualPremium": 100,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		},
		{
			"Name": "MinPremium",
			"Type": "",
			"Description": "Minimum Premium",
			"Rate": 0,
			"Limit": 0,
			"LimitAmount": 0,
			"Premium": 0,
			"AnnualPremium": 0,
			"Status": "Active",
			"IsApplicable": true,
			"IsSelected": true,
			"IsMandatory": false,
			"Deductible": 0,
			"EffectivePremium": 0,
			"PremiumDifference": 0,
			"DisplayValue": null,
			"Factor": {
				"Name": "MinPremium",
				"Type": "",
				"Description": "Minimum Premium",
				"Rate": 0,
				"Limit": 0,
				"LimitAmount": 0,
				"Premium": 0,
				"AnnualPremium": 0,
				"Status": "",
				"IsApplicable": false,
				"IsSelected": false,
				"IsMandatory": false,
				"Deductible": 0,
				"EffectivePremium": 0,
				"DisplayValue": null
			}
		}
	],
	"Attributes": {
		"AppSource": "POS",
		"isMaster": false,
		"MasterPolicyCounter": "111",
		"Client": "TOGA",
		"Carrier": "CN",
		"Coverholder": "GA",
		"Lob": "PD",
		"State": "TX",
		"Product": "TOGACNPDTX",
		"RaterVersion": "1.0.0.0",
		"UISchemaVersion": "v1",
		"QuoteValidity": {
			"Value": 60,
			"ValueType": "Days"
		},
		"RenewalConfigurations": {
			"AfterForUnderwriter": {
				"Value": 30,
				"ValueType": "Days"
			},
			"BeforeForUnderwriter": {
				"Value": 60,
				"ValueType": "Days"
			},
			"AfterForAgent": {
				"Value": 30,
				"ValueType": "Days"
			},
			"BeforeForAgent": {
				"Value": 30,
				"ValueType": "Days"
			}
		}
	},
	"ExternalRefrences": [
		{
			"ReferenceNumber": "TOGACNMTX230342",
			"ReferenceTarget": "Master_Policy_Ref",
			"Status": "Active"
		},
		{
			"ReferenceNumber": "0037836",
			"ReferenceTarget": "AIM_QuoteID",
			"Status": "Active"
		}
	],
	"Audit": {
		"CreatedBy": "Andrea Gil",
		"CreatedOn": "2023-06-29T19:29:34.304Z",
		"LastUpdatedBy": "Jayakrishnan S",
		"LastUpdatedOn": "2023-07-18T10:13:08.873Z"
	},
	"InsuredAccount": {
		"Type": "Primary",
		"CreationDate": "",
		"UserName": "",
		"FirstName": "Premnath",
		"MiddleName": "A",
		"LastName": "Borkar",
		"DisplayName": "",
		"AdditionalInsured": [
			{
				"Type": "Manager/Lessors of Premises",
				"Wavier": "narotam",
				"AddressLine1": null,
				"Street": "1",
				"City": "delhi",
				"State": "delhi",
				"Zip": "11011",
				"LoanNumber": "1234123",
				"InsurableInterest": "Explain the Insurable Interest",
				"CoveragesApplicable": [
					"Auto Physical Damage"
				]
			}
		],
		"BusinessInfo": {
			"BusinessType": "JV",
			"FirstName": "",
			"MiddleName": "",
			"LastName": "",
			"YearsInBusiness": 1,
			"IncorporationDate": "2022-06-01",
			"BusinessName": "Prem Corp",
			"AnnualRevenue": 0,
			"DBAName": "",
			"EffectiveDateCoverage": "2023-06-30",
			"DOTNumber": 15000151,
			"MotorCarrierNumber": "51515151",
			"BusinessDescription": "Authorized For Hire",
			"SMSAlerts": "1",
			"OperationDetails": {
				"TravellingOutofState": "false",
				"TravellingHowOften": 0,
				"RadiusofOperation": [
					{
						"Radius": "501-1500",
						"Percentage": "100"
					}
				],
				"TypeofOperation": [
					"Double Trailers"
				],
				"MajorCitiesTravelled": "4",
				"AreasofOperations": [
					"AR"
				]
			},
			"InPastOwnershipChanged": {
				"Value": "false",
				"Reason": ""
			},
			"HaveSubsidiary": {
				"SubsidiaryCompanyName": "",
				"Relationship": "",
				"PercentageOwned": ""
			},
			"IsSubsidiary": {
				"ParentCompanyName": "",
				"Relationship": "",
				"PercentageOwned": ""
			},
			"SubsidiaryInfo": "No",
			"LossHistory": [
				{
					"LOB": "Auto Physical Damage",
					"YearOfLoss": "2022",
					"NumberOfLosses": 29,
					"Carrier": "Testt e",
					"Reserves": 15900,
					"Paid": 67000,
					"TotalIncurred": 82900,
					"UploadFile": "watch (2).html",
					"IsClaimsPending": "true",
					"ClaimPendingReason": "9 pen endors",
					"AnnualPremium": 15500
				},
				{
					"LOB": "Auto Liability",
					"YearOfLoss": "2023",
					"NumberOfLosses": 2,
					"Carrier": "max",
					"Reserves": 7000,
					"Paid": 6000,
					"TotalIncurred": 13000,
					"UploadFile": "watch (3).html",
					"IsClaimsPending": "true",
					"ClaimPendingReason": "test",
					"AnnualPremium": 10000
				}
			],
			"Commodities": [
				{
					"Name": "Aluminum Bales",
					"HauledPercentage": 100,
					"MaxValue": 100,
					"AvgValue": 100
				}
			],
			"Operations": {
				"AnnualPhysicals": "true",
				"DoubleOrTripleTrailers": "true",
				"Exposure": "true",
				"BoardFireRate": "1234",
				"EquipmentServiced": {
					"Value": "true",
					"Reason": "100"
				},
				"UseNonListedVehicles": {
					"Value": "true",
					"Reason": "delhi"
				},
				"EquipmentLoanOrRented": {
					"Value": "true",
					"Reason": "100"
				},
				"HiredEquipment": {
					"Value": "true",
					"Reason": "100"
				},
				"ApplicantHaulForOthers": {
					"Value": "true",
					"Reason": "100"
				},
				"TruckersOperateUnderApplicant": {
					"Value": "true",
					"Reason": "100"
				},
				"DrivingHiring": {
					"ExperienceYear": 67,
					"OtherCriteria": "good",
					"PreEmploymentScreening": "true"
				},
				"SecurityWhileTransit": [
					"Armed Guard in Vehicle",
					"GPS Device"
				],
				"SecurityAtLocations": [
					"Kingpin Locks",
					"Fenced Lot"
				],
				"DetachedFromPowerUnits": {
					"Value": "true",
					"Reason": "power unit 1"
				},
				"UnloadedOrUnAttended": {
					"Value": "true",
					"Reason": "unattended 1"
				},
				"TrailerDetached": {
					"Value": "true",
					"Reason": "loaded 1"
				},
				"MaintenanceProgram": {
					"Value": "true",
					"File": "watch (2).html",
					"Reason": "secure"
				},
				"SafetyProgram": {
					"Value": "true",
					"File": "watch (1).html",
					"Reason": "fire endors"
				},
				"ProhibitedCommodities": [
					{
						"Name": "",
						"Value": ""
					}
				],
				"HazardousCommodities": {
					"Value": "true",
					"Reason": "haul any hazardous commodities"
				},
				"EquipmentNotListed": {
					"Value": "true",
					"Reason": "have any owned, leased or operated equipment that is not listed on the vehicle schedule"
				},
				"History": [
					{
						"Year": 2022,
						"PowerUnits": 50000,
						"TotalMiles": 10000,
						"GrossReceipts": 500000
					},
					{
						"Year": null,
						"PowerUnits": 25000,
						"TotalMiles": 10000,
						"GrossReceipts": 250000
					},
					{
						"Year": null,
						"PowerUnits": 20000,
						"TotalMiles": 10000,
						"GrossReceipts": 200000
					}
				]
			},
			"PolicyDecline": {
				"LastThreeYears": "false",
				"Details": ""
			},
			"MoveMidTerm": {
				"Value": "false",
				"Reason": ""
			},
			"Locations": [
				{
					"NickName": "",
					"LocationNumber": 0,
					"IsValid": false,
					"Status": "",
					"Type": "",
					"Address": {
						"Number": 0,
						"AddressType": null,
						"Description": "Garaging Address",
						"AddressLine1": "",
						"AddressLine2": "",
						"AptSuite": "",
						"City": "League City",
						"County": "US",
						"CountyCode": "",
						"State": "TX",
						"PoBox": "",
						"Postalcode": "77573",
						"FormattedAddress": "322 State Highway 3",
						"UnFormattedAddress": "322 Texas 3, League City, TX, USA, 77573",
						"AdministrationArea1": "",
						"AdministrationArea2": "",
						"Locality": "",
						"Lat": "",
						"Long": "",
						"Street": "",
						"Name": "",
						"Premise": "",
						"Status": "",
						"Territory": "",
						"StreetName": null,
						"IsManual": false,
						"Business": "",
						"PlaceId": "ChIJIy1PkCudQIYRI4_d1glNnu0"
					}
				},
				{
					"NickName": "",
					"LocationNumber": 0,
					"IsValid": false,
					"Status": "",
					"Type": "",
					"Address": {
						"Number": 0,
						"AddressType": null,
						"Description": "Mailing Address",
						"AddressLine1": "",
						"AddressLine2": "",
						"AptSuite": "",
						"City": "League City",
						"County": "US",
						"CountyCode": "",
						"State": "TX",
						"PoBox": "",
						"Postalcode": "77573",
						"FormattedAddress": "322 State Highway 3",
						"UnFormattedAddress": "322 Texas 3, League City, TX, USA, 77573",
						"AdministrationArea1": "",
						"AdministrationArea2": "",
						"Locality": "",
						"Lat": "",
						"Long": "",
						"Street": "",
						"Name": "",
						"Premise": "",
						"Status": "",
						"Territory": "",
						"StreetName": null,
						"IsManual": false,
						"Business": "",
						"PlaceId": "ChIJIy1PkCudQIYRI4_d1glNnu0"
					}
				}
			]
		},
		"Communications": [
			{
				"Type": "PhNo",
				"SubType": "Primary",
				"Value": "0343493843",
				"Status": ""
			},
			{
				"Type": "Email",
				"SubType": "Primary",
				"Value": "pborkar@cogitate.us",
				"Status": ""
			}
		],
		"BankDetails": {
			"AccountName": null,
			"BankName": null,
			"BranchName": null,
			"AccountType": null,
			"RoutingNo": null
		}
	},
	"PriorInsurances": [
		{
			"IsCurrentlyInsured": "false",
			"CompanyName": "",
			"Carrier": "",
			"PolicyTerm": "",
			"Loss": {
				"Value": "",
				"Reason": ""
			}
		}
	],
	"PreviousPolicies": {
		"IsPreviousPolicy": "false",
		"PreviousPolicyNumber": "",
		"OtherCoverages": "",
		"IsPreviousClaims": "false",
		"NoOfClaims": 0,
		"TotalAmountClaimed": 0,
		"Carrier": "",
		"PolicyEffectiveDate": "",
		"PolicyExpiryDate": "",
		"Coverages": [],
		"IsALRenewalPolicy": "false",
		"ALRenewalPolicyNumber": "",
		"ALRenewalTerm": "",
		"IsAPDRenewalPolicy": "false",
		"APDRenewalPolicyNumber": "",
		"APDRenewalTerm": "",
		"IsTGLRenewalPolicy": "false",
		"TGLRenewalPolicyNumber": "",
		"TGLRenewalTerm": "",
		"IsMTCRenewalPolicy": "false",
		"MTCRenewalPolicyNumber": "",
		"MTCRenewalTerm": ""
	},
	"NonFunctional": {
		"LastSubmittedPage": "/Commercial/Auto/Endorsement/Summary-UW",
		"Milestones": [
			-1,
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			8
		],
		"LastUserToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InV3LmpheSIsIlVzZXJJZCI6IjEzNjYyIiwiRmlyc3ROYW1lIjoiSmF5YWtyaXNobmFuIiwiTGFzdE5hbWUiOiJTIiwiZW1haWwiOiJqYXlha3Jpc2huYW5zQGNvZ2l0YXRlLnVzIiwicm9sZSI6Ik1HQSxBZ2VudCxVbmRlcndyaXRlciIsIkZlYXR1cmVzIjoiUXVvdGUgSW5kaWNhdGlvbixGb3JtYWwgUXVvdGUsQXBwcm92ZSBSZWZlcnJhbHMsUmVxdWVzdCB0byBCaW5kLEJpbmQsSXNzdWUsU3RhcnQgUmVuZXdhbCxSZXF1ZXN0IEVuZG9yc2VtZW50LE9PUyxSZXF1ZXN0IENhbmNlbGxhdGlvbixDYW5jZWwsUmVpbnN0YXRlLEJhY2tkYXRlIEVmZiAvIEVuZG9yc2UgRGF0ZXMsVmlldyBSYXRpbmcgV29ya3NoZWV0LFByaW50IFJhdGluZyBXb3Jrc2hlZXQsRG93bmxvYWQgLyBQcmludCBEb2NzLExvY2sgQWNjb3VudHMsUmVwb3J0aW5nLFVubG9jayBVc2VycyIsIlNpdGVJZCI6IjcwIiwibmJmIjoxNjg5NjY2NDE5LCJleHAiOjE2ODk2NzcyMTksImlhdCI6MTY4OTY2NjQxOX0.OHLoXDWcjVu9itHHuPJbvlctJy7yLDc65daSAULgrDc"
	},
	"PolicyStatusHistory": [
		{
			"OldStatus": "Policy In Force-Bind",
			"NewStatus": "Endorsement Initiated",
			"ChangedBy": "AGT194",
			"ChangedDate": "2023-07-06"
		},
		{
			"OldStatus": "Endorsement Initiated",
			"NewStatus": "Endorsement Initiated",
			"ChangedBy": "Jennifer Cifuentes",
			"ChangedDate": "2023-07-07"
		},
		{
			"OldStatus": "Policy In Force - Endorsement Awaiting UW Approval",
			"NewStatus": "Endorsement Initiated",
			"ChangedBy": "Jennifer Cifuentes",
			"ChangedDate": "2023-07-07"
		}
	],
	"PolicyTerm": {
		"Value": 12,
		"ValueType": "Months"
	},
	"RatingAttribute": {
		"HiredAuto": "Yes",
		"HiredAutoCount": 60,
		"NonOwnedAuto": "Yes",
		"NonOwnedAutoCount": 20,
		"IsWaiverOfSubrogation": "Yes",
		"WaiverOfSubrogation": 20,
		"RefrigeratedBreakdown": "Yes",
		"InFullPremiumCharge": "Excluded",
		"PrimaryNonContributory": "No",
		"WaiverOfTransferOfRights": "No",
		"TrailersCount": 150,
		"TrailerAgreement": "Yes",
		"RefrigerationDeductible": 2500,
		"DryVanFlatbedDeductible": 0,
		"Fmcsa": {
			"VehicleCount": 0,
			"DriverCount": 0
		},
		"LOBsSelected": [
			"AL",
			"PD",
			"CG",
			"GL"
		]
	},
	"RatingErrors": [],
	"CustomErrors": []
}

export const overrideReturnPremiumSchema = [
	{
		key: "overrideReturnPremium",
		type: "Card",
		title: "Override Return Premium",
		className: " clearfix",
		titleClassName: "commonHead commonHeadPadding",
		childsClassName: "boxWrapper px-3 commonShadow",
		controls: [
			{
				key: "premiumAmount",
				label: "Enter premium amount",
				type: "currency",
				prefix: "$",
				value: "",
				props: { class: "inputText", required: true },
				labelClass: "inputLabel ddlUnderwriterList",
				positionClass: "col-md-4",
				isColummnDisplay: false,
				dataPath: ""
			}
		]
	}
];

export const overrideFeesSchema = [
	{
		key: "overrideFeesSchema",
		type: "Card",
		title: "Override Fees",
		className: " clearfix",
		titleClassName: "commonHead commonHeadPadding",
		childsClassName: "boxWrapper px-3 commonShadow",
		controls: [
			{
				key: "feesamount",
				label: "Enter fees amount",
				type: "currency",
				prefix: "$",
				value: "",
				props: { class: "inputText", required: true },
				labelClass: "inputLabel ddlUnderwriterList",
				positionClass: "col-md-4",
				isColummnDisplay: false,
				dataPath: ""
			}
		]
	}
];

export const submitInsuredSignatureSchema = [
	{
		key: "insuredSignature",
		type: "Card",
		title: "Submit Insured Signature",
		className: " clearfix",
		titleClassName: "commonHead commonHeadPadding",
		childsClassName: "boxWrapper px-3 commonShadow",
		controls: [
			{
				key: "insuredEmail",
				label: "Enter Insured Email",
				type: "email",
				value: "",
				props: { class: "inputText", required: true, placeholder: "Enter Email Address" },
				labelClass: "inputLabel ddlUnderwriterList",
				positionClass: "col-md-4",
				isColummnDisplay: false,
				dataPath: "InsuredAccount.Communications.1.Value"
			}
		]
	}
];

export const cancellationReasonsMasters = [
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Insured Request",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "Y",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Non Pay Finance",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Non Pay",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "N",
		"BillingCanProcess": "Y",
		"NoticePeriod": "10"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Double Coverage",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "R",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "VOID AB INITIO",
		"CancellationType": "Flat",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "MMR-During Review Period",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "10"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "MMR-After Review Period",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Out of State",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "NSF for down payment",
		"CancellationType": "Flat",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "N",
		"BillingCanProcess": "Y",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "NSF for payment",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "N",
		"BillingCanProcess": "Y",
		"NoticePeriod": "10"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Recancel back to Orig cancel effective date- PR",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Underwriter's Judgment-Fail to provide license Info",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Underwriter's Judgment-No Excluded driver Endorsement",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Underwriter's Judgment-Failure to respond to UW memo",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Underwriter's Judgment-Exceed Mac Violation points",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Underwriter's Judgment-Ins risk on new drv/veh after rev period",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Underwriter's Judgment-Allowing excl driver access to insured veh",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Underwriter's Judgment-Signed App not rec'd",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "Insured Request",
		"CancellationType": "ShortRate",
		"UsedByState": "Y",
		"AgentCanProcess": "Y",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "Non Pay Finance",
		"CancellationType": "ShortRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "Non Pay",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "N",
		"BillingCanProcess": "Y",
		"NoticePeriod": "15"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "Double Coverage",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "R",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "PROOF OF RESIDENCY Insured Not Eligible GS 58-37-1",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "60"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "VOID AB INITIO",
		"CancellationType": "Flat",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "MMR",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "Out of State",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "NSF for down payment",
		"CancellationType": "Flat",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "N",
		"BillingCanProcess": "Y",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "NSF for payment",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "N",
		"BillingCanProcess": "Y",
		"NoticePeriod": "15"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "Recancel back to Orig cancel effective date- PR",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "NA"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "Underwriter's Judgment-Fail to provide license Info",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "N",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "Underwriter's Judgment-Failure to respond to UW memo",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "N",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "Underwriter's Judgment-Signed App not rec'd",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "GA",
		"CancellationReason": "Signed Application not Received",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	},
	{
		"Id": null,
		"State": "NC",
		"CancellationReason": "Signed Application not Received",
		"CancellationType": "ProRate",
		"UsedByState": "Y",
		"AgentCanProcess": "N",
		"IHCanProcess": "Y",
		"BillingCanProcess": "N",
		"NoticePeriod": "30"
	}
]

export const policyStatusMaster = {
	//common
	PolicyInForceSignaturePending: { status: 'Active Policy - Bind Signature Pending', show: true, AgentActionOptions: ['view'], UWActionOptions: ['view'] },
	PolicyInForceBindSignatureCompleted: { status: 'Active Policy', show: true, AgentActionOptions: ['view', 'endorse', 'cancel'], UWActionOptions: ['view', 'endorse', 'cancel'] },
	Application: { status: 'Application', show: true, AgentActionOptions: ['view'], UWActionOptions: ['view'] },
	Endorsed: { status: 'Endorsed', show: true, AgentActionOptions: ['view', 'endorse', 'cancel'], UWActionOptions: ['view', 'endorse', 'cancel'] },
	Renewed: { status: 'Renewed', show: true, AgentActionOptions: ['view'], UWActionOptions: ['view'] },

	//Cancel Status
	CancellationInitiated: { status: 'Cancellation Initiated', show: true, AgentActionOptions: ['view', 'endorse', 'cancel'], UWActionOptions: ['view', 'endorse', 'cancel'] },
	PendingCancellation: { status: 'Pending Cancellation', show: true, AgentActionOptions: ['view', 'endorse', 'cancel'], UWActionOptions: ['view', 'endorse', 'cancel'] },
	Cancelled: { status: 'Policy Cancelled', show: true, AgentActionOptions: ['view', 'reinstate'], UWActionOptions: ['view', 'reinstate'] },
	PolicyInForceCancellationRequestPendingApproval: { status: 'Cancellation Request Pending Approval', show: true, AgentActionOptions: ['view', 'cancel'], UWActionOptions: ['view', 'cancel'] },
	PolicyInForceCancellationRequestOnHold: { status: 'Cancellation Request On Hold', show: true, AgentActionOptions: ['view', 'cancel'], UWActionOptions: ['view', 'cancel'] },
	PolicyInForceCancellationSignaturePending: { status: 'Cancellation Signature Pending', show: true, AgentActionOptions: ['view', 'cancel'], UWActionOptions: ['view', 'cancel'] },
	PolicyInForceCancellationSignatureCompleted: { status: 'Cancellation Signature Completed', show: false, AgentActionOptions: ['view', 'cancel'], UWActionOptions: ['view', 'cancel'] },
	PolicyInForceCancellationRequestRejected: { status: 'Cancellation Request Rejected', show: true, AgentActionOptions: ['view', 'endorse', 'cancel'], UWActionOptions: ['view', 'endorse', 'cancel'] },

	//reinstatement status
	ReinstateInitiated: { status: 'Reinstate Initiated', show: true, AgentActionOptions: ['view', 'reinstate'], UWActionOptions: ['view', 'reinstate'] },
	PolicyCancelledReinstatementRequestPendingUWApproval: { status: 'Reinstatement Request Pending Approval', show: true, AgentActionOptions: ['view', 'reinstate'], UWActionOptions: ['view', 'reinstate'] },
	PolicyCancelledReinstatementRequestRejected: { status: 'Reinstatement Request Rejected', show: false, AgentActionOptions: ['view'], UWActionOptions: ['view'] },
	PolicyCancelledeReinstatementRequestOnHold: { status: 'Reinstatement Request On Hold', show: true, AgentActionOptions: ['view', 'reinstate'], UWActionOptions: ['view', 'reinstate'] },
	PolicyCancelledReinstatementSignaturePending: { status: 'Reinstatement Signature Pending', show: true, AgentActionOptions: ['view', 'reinstate'], UWActionOptions: ['view', 'reinstate'] },
	PolicyCancelledReinstatementSignatureCompleted: { status: 'Reinstatement Signature Completed', show: false, AgentActionOptions: ['view', 'reinstate'], UWActionOptions: ['view', 'reinstate'] },
	Reinstated: { status: 'Reinstated', show: false, AgentActionOptions: ['view', 'endorse', 'cancel'], UWActionOptions: ['view', 'endorse', 'cancel'] },

	//Endorsement status
	EndorsementInitiated: { status: 'Endorsement Initiated', show: true, AgentActionOptions: ['view', 'endorse', 'cancel'], UWActionOptions: ['view', 'endorse', 'cancel'] },
	EndorsementRequestRejected: { status: 'Endorsement Request Rejected', show: true, AgentActionOptions: ['view', 'endorse', 'cancel'], UWActionOptions: ['view', 'endorse', 'cancel'] },
	EndorsementRequestPendingUWApproval: { status: 'Endorsement Pending Approval', show: true, AgentActionOptions: ['view', 'endorse'], UWActionOptions: ['view', 'endorse'] },
	EndorsementRequestOnHold: { status: 'Endorsement Request On Hold', show: true, AgentActionOptions: ['view', 'endorse'], UWActionOptions: ['view', 'endorse'] },
	EndorsementSignaturePending: { status: 'Endorsement Signature Pending', show: true, AgentActionOptions: ['view', 'endorse'], UWActionOptions: ['view', 'endorse'] },
	EndorsementSignatureCompleted: { status: 'Endorsement Signature Completed', show: false, AgentActionOptions: ['view', 'endorse'], UWActionOptions: ['view'] }

}

export const formKeys = {
	CancelAndReinstate: {
		CancellationEffectiveDate: "cancellationeffectivedate",
		CancellationType: "cancellationtype",
		Reason: "reason",
		SignatureType: "signatureType",
		ReinstatementTerms: "reinstatementterms",
		ReinstatementEffectiveDate: "reinstatementeffectivedate"
	},
}
