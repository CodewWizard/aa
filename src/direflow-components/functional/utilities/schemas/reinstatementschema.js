const reinstatemenetUISchema = [
    {
        "key": "PolicyDetails",
        "type": "Card",
        "title": "Policy Details",
        "sideButtons": [ "Back to Summary" ],
        "className": " clearfix",
        "titleClassName": "commonHead commonHeadPadding",
        "childsClassName": "boxWrapper px-3 commonShadow",
        "controls": [
            {
                "key": "businessname",
                "label": "",
                "type": "label",
                "value": "Insured Name",
                "props": {},
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4",
                "isColummnDisplay": false,
            },
            {
                "key": "mailingaddress",
                "label": "",
                "type": "label",
                "value": "Mailing Address",
                "props": {},
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4",
                "isColummnDisplay": false,
            },
            {
                "key": "lineOfBusiness",
                "label": "Line of Business",
                "type": "label",
                "value": "Line of Business",
                "props": {},
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4",
                "isColummnDisplay": false,
                "dataPath": "Attributes.Lob"
            },
            {
                "key": "policyeffectivedate",
                "label": "",
                "value": "Policy Start Date",
                "type": "label",
                "props": {},
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
            },
            {
                "key": "policyenddate",
                "label": "",
                "type": "label",
                "value": "Policy End Date",
                "props": {},
                "labelClass": "ddlUnderwriterList",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
            },
            {
                "key": "policynumber",
                "label": "Policy Number",
                "type": "label",
                "value": "Policy Number",
                "props": {},
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
                "dataPath": "PolicyNumber"
            }
        ]
    },
    {
        "key": "ReinstateDetails",
        "type": "Card",
        "title": "Reinstate Details",
        "className": " mt-4",
        "titleClassName": "commonHead commonHeadPadding",
        "childsClassName": "boxWrapper px-3 commonShadow",
        "controls": [
            {
                "key": "EffectiveDate",
                "label": "Reinstate Effective Date*",
                "type": "date2",
                "props": {
                    "class": "inputText",
                    "dayPlaceholder": "dd",
                    "monthPlaceholder": "mm",
                    "yearPlaceholder": "yyyy",
                    "format": "MM/dd/yyyy",
                    "clearIcon": false,
                    "required": true,
                    "disabled": true
                },
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
                "errorMessage": "Please enter valid date - Minimum can be today",
                "dataPath": "Transaction.EffectiveDate"
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
                        "key": "insuranceDepartment",
                        "label": "DEPARTMENT OF INSURANCE",
                        "value": "DEPARTMENT OF INSURANCE"
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
                    { key: "errorCancelled", label: "Cancelled in Error", value: "Cancelled in Error" },
                    { key: "enggRecommendations", label: "Compliance with Engineering Recommendations", value: "Compliance with Engineering Recommendations" },
                    { key: "companyRequest", label: "Finance Company Request", value: "Finance Company Request" },
                    { key: "inspectionCompleted", label: "Inspection completed", value: "Inspection completed" },
                    { key: "paymentReceived", label: "Payment Received", value: "Payment Received" },
                    { key: "agencyPaymentReceived", label: "Payment received by agency", value: "Payment received by agency" },
                    { key: "financeCmpPaymentReceived", label: "Payment received by finance company", value: "Payment received by finance company" },
                    { key: "dateCorrection", label: "Policy data correction", value: "Policy data correction" },
                    { key: "uwInfoReceived", label: "Recommendations complied with underwriting information received", value: "Recommendations complied with underwriting information received" }
                ],
                "errorMessage": "Please select reason",
                "dataPath": "Transaction.Reason"
            },
            {
                "key": "reinstateterms",
                "label": "Reinstate Terms/Notes",
                "type": "text",
                "value": "",
                "props": {
                    "class": "inputText",
                    "placeholder": "Please enter reinstate notes (Max 200 characters)",
                    "maxlength": "200",
                    "disabled": false
                },
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
                "errorMessage": "Please enter reinstate Notes",
                "dataPath": "Transaction.Remarks"
            }
        ]
    }
];

export default reinstatemenetUISchema;