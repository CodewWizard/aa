export const CancellationSchema = [
    {
        "key": "PolicyDetails",
        "type": "Card",
        "title": "Policy Details",
        "className": " clearfix",
        "titleClassName": "commonHead commonHeadPadding",
        "childsClassName": "boxWrapper px-3 commonShadow",
        "sideButtons": ["Back To Summary"],
        "controls": [
            {
                "key": "businessname",
                "label": "",
                "type": "label",
                "value": "Insured Name",
                "props": {},
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4",
                "isColummnDisplay": false
            },
            {
                "key": "mailingaddress",
                "label": "",
                "type": "label",
                "value": "Mailing Address",
                "props": {},
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4",
                "isColummnDisplay": false
            },
            {
                "key": "lineOfBusiness",
                "label": "",
                "type": "label",
                "value": "Line of Business",
                "props": {},
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4",
                "isColummnDisplay": false
            },
            {
                "key": "policyeffectivedate",
                "label": "",
                "value": "Policy start date",
                "type": "label",
                "props": {},
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false
            },
            {
                "key": "policyenddate",
                "label": "",
                "type": "label",
                "value": "Policy end date",
                "props": {},
                "labelClass": "ddlUnderwriterList",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false
            },
            {
                "key": "policynumber",
                "label": "",
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
                "label": "Cancellation Effective Date*",
                "type": "date2",
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
                    "maxDate": "2024-06-30",
                    "setDefaultDate": false
                },
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
                "errorMessage": "Please enter valid date - Minimum can be today",
                "dataPath": "Transaction.EffectiveDate",
                "conditionalDisabled": [
                    {
                        "src": "Transaction.PremiumType",
                        "exp": "==",
                        "needRefComp": false,
                        "target": "Flat",
                        "connector": "||"
                    }
                ]
            },
            {
                "key": "cancellationtype",
                "label": "Cancellation Type*",
                "type": "search-dropdown",
                "props": {
                    "required": true,
                    "class": "inputText",
                    "disabled": false,
                    "primaryColor": "#8dc6e8"
                },
                "labelClass": "inputLabel",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
                "options": [
                    {
                        "key": "flatcancellation",
                        "label": "Flat Cancellation",
                        "value": "Flat"
                    },
                    {
                        "key": "proratacancellation",
                        "label": "Pro Rata Cancellation",
                        "value": "ProRate"
                    },
                    {
                        "key": "shortratacancellation",
                        "label": "Short Rate Cancellation",
                        "value": "ShortRate"
                    }
                ],
                "errorMessage": "Please select Cancellation Type",
                "dataPath": "Transaction.PremiumType"
            },
            {
                "key": "requestedby",
                "label": "Requested By*",
                "type": "search-dropdown",
                "props": {
                    "required": true,
                    "class": "inputText",
                    "disabled": false,
                    "primaryColor": "#8dc6e8"
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
                "label": "Reason*",
                "type": "search-dropdown",
                "props": {
                    "required": true,
                    "class": "inputText",
                    "disabled": false,
                    "primaryColor": "#8dc6e8"
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
                    "placeholder": "Please enter cancellation notes (Max 200 characters)",
                    "maxlength": "200",
                    "disabled": false,
                    "noBlurEvent": true,
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