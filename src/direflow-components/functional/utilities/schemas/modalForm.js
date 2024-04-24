
const submitInsuredSignatureSchema = [
    {
        key: "insuredSignature",
        type: "Card",
        title: "Submit for Insured Signature",
        className: " clearfix",
        titleClassName: "commonHead commonHeadPadding",
        childsClassName: "",
        controls: [
            {
                key: "insuredEmail",
                label: "Enter Insured Email",
                type: "email",
                value: "",
                props: { class: "inputText", required: true, placeholder: "Enter Insured Email Address" },
                labelClass: "inputLabel ddlUnderwriterList col-md-12 mb-2",
                positionClass: "col-md-12",
                isColummnDisplay: false,
                dataPath: "InsuredAccount.Communications.1.Value"
            }
        ]
    }
];

const rejectModalSchema = [
    {
        key: "rejectremark",
        type: "Card",
        title: "Reject Remark",
        className: " mt-2",
        titleClassName: "commonHead commonHeadPadding",
        childsClassName: "",
        controls: [
            {
                key: "enterRejectRemark",
                label: "",
                type: "textarea",
                props: { required: true, class: "inputTextArea", rows: "4", cols: "50", placeholder: "Enter Remark", maxlength: "200" },
                labelClass: "inputLabel",
                positionClass: "col-md-12",
                isColummnDisplay: false,
                errorMessage: "Please enter Remark",
                dataPath: "RejectRemarks"
            }
        ]
    },
];

const overrideFeesSchema = [
    {
        key: "overrideFeesSchema",
        type: "Card",
        title: "Override Fees",
        className: " clearfix",
        titleClassName: "commonHead commonHeadPadding",
        childsClassName: "",
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

const overrideReturnPremiumSchema = [
    {
        key: "overrideReturnPremium",
        type: "Card",
        title: "Override Return Premium",
        className: " clearfix",
        titleClassName: "commonHead commonHeadPadding",
        childsClassName: "",
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

export { submitInsuredSignatureSchema, rejectModalSchema, overrideFeesSchema, overrideReturnPremiumSchema }