import reinstatemenetUISchema from "../schemas/reinstatementschema.js";
import moment from "moment";

export const GetSchema = (schema = false, role, dataModel, base) => {
    let policySchema = reinstatemenetUISchema;
    if (schema) {
        // to keep card same, change only the inputs
        const hasPolicyDetails = schema.filter(i => i.key === "PolicyDetails").length > 0;
        if (!hasPolicyDetails) {
            schema = [policySchema[0], ...schema];
        }
        return schema;
    }
    policySchema = AddUWExtraFields(role, dataModel, policySchema, base);
    return policySchema;
}

export const SetSchemaDefaultValues = (defaultSchema, dataModel, role, setDefaultValuesHandler, { PolicyStatusMaster, reinstatementKeys, commonKeys }) => {
    let schema = defaultSchema;
    let model = dataModel;

    let user = role;

    let roleUW = [commonKeys.RoleUnderwriter, commonKeys.RoleUnderwriter];
    let isReinstated = ([PolicyStatusMaster.PolicyInForce].includes(model.PolicyStatus) && roleUW.includes(user));

    schema = JSON.parse(JSON.stringify(schema));

    schema.map(s => {
        s.controls = s.controls.map(c => {
            switch (c.key) {
                case reinstatementKeys.schemaKeys.BusinessName:
                    c.label = model?.InsuredAccount?.DisplayName;
                    break;
                case reinstatementKeys.schemaKeys.PolicyNumber:
                    c.label = model?.PolicyNumber;
                    break;
                case reinstatementKeys.schemaKeys.LOB:
                    c.label = model?.Attributes?.Lob;
                    break;
                case reinstatementKeys.schemaKeys.MailingAddress:
                    c.label = model?.InsuredAccount?.BusinessInfo?.Locations[0]?.Address?.UnFormattedAddress;
                    break;
                case reinstatementKeys.schemaKeys.ReinstatementDate:
                    c.props.disabled = true;
                    c.props.minDate = moment(model?.EffectiveDate).format('L');
                    c.props.maxDate = moment(model?.ExpirationDate).format('L');
                    break;
                case reinstatementKeys.schemaKeys.EffectiveDate:
                    c.label = moment(model?.EffectiveDate).format('L');
                    break;
                case reinstatementKeys.schemaKeys.ExpiryDate:
                    c.label = moment(model?.ExpirationDate).format('L');
                    break;
                case reinstatementKeys.schemaKeys.RequestedBy:
                case reinstatementKeys.schemaKeys.RequestReason:
                case reinstatementKeys.schemaKeys.RequestTerms:
                case reinstatementKeys.schemaKeys.PolicyFee:
                case reinstatementKeys.schemaKeys.InspectionFee:
                    c.props.disabled = isReinstated;
                    break;
                default:
                    break;
            }
            return c;
        });
        return s;
    });


    if (setDefaultValuesHandler) {
        const tempSchema = setDefaultValuesHandler(schema, dataModel);
        if (tempSchema)
            schema = tempSchema;
    }

    return schema;
}

export const ReinstatementButtonStatus = (status, role, { PolicyStatusMaster }, buttonStatus = false, reRate = false) => {

    if (buttonStatus && Object.keys(buttonStatus).length > 0) {
        return buttonStatus;
    }

    const userRoles = {
        "Agent": [
            {
                policyStatus: PolicyStatusMaster.PolicyCancelled,
                actionButtons: { showActionButton: true, showCalculateBtn: true }
            },
            {
                policyStatus: PolicyStatusMaster.PolicyCancelledReinstatementRequestPendingUWApproval,
                actionButtons: { reinstatementcard: true }
            },
            {
                policyStatus: PolicyStatusMaster.PolicyCancelledReinstatementSignaturePending,
                actionButtons: { showActionButton: true, reinstatementcard: true, showResendSignature: true }
            },
            {
                policyStatus: PolicyStatusMaster.ReInstatementInitiated,
                actionButtons: { showActionButton: true, showCalculateBtn: false, reinstatementcard: true, showSubmitForApprovalBtn: true, showRevertBtn: true }
            }
        ],
        "Underwriter": [
            {
                policyStatus: PolicyStatusMaster.PolicyCancelled,
                actionButtons: { showActionButton: true, showCalculateBtn: true }
            },
            {
                policyStatus: PolicyStatusMaster.ReInstatementInitiated,
                actionButtons: { showActionButton: true, showCalculateBtn: false, reinstatementcard: true, showApproveBtn: true, showDownloadFormBtn: true, showRevertBtn: true, showOnRejectBtn: false }
            },
            {
                policyStatus: PolicyStatusMaster.PolicyCancelledReinstatementRequestPendingUWApproval,
                actionButtons: { showActionButton: true, showCalculateBtn: false, reinstatementcard: true, showApproveBtn: true, showDownloadFormBtn: true, showRevertBtn: false, showOnRejectBtn: true }
            }
        ]
    }
    if (!reRate && !([PolicyStatusMaster.PolicyCancelled, PolicyStatusMaster.PolicyCancelledReinstatementRequestPendingUWApproval].includes(status))) {
        return { showActionButton: true, showCalculateBtn: true }
    } else {
        if (userRoles[role]?.find(val => val?.policyStatus == status)) {
            const btns = userRoles[role]?.find(val => val?.policyStatus == status)?.actionButtons;
            return btns
        } else {
            return {};
        }
    }


}


export const InspectionAndPolicyFeeCalc = (respModel, model, role, base, toast) => {
    if (role === base.commonKeys.RoleUnderwriter) {
        const orgInspectionFee = respModel.FeesAndTaxes.filter(s => s.Code === "INSFEE")[0].AnnualAmount;
        const orgPolicyFee = respModel.FeesAndTaxes.filter(s => s.Code === "PFEE")[0].AnnualAmount;

        const InspectionFee = model.FeesAndTaxes.filter(s => s.Code === "INSFEE")[0].Value;
        const PolicyFee = model.FeesAndTaxes.filter(s => s.Code === "PFEE")[0].Value;

        if (parseFloat(InspectionFee) < 0 || parseFloat(InspectionFee) > parseFloat(orgInspectionFee)) {
            toast && toast(`Inspection Fee Must be between 0 and ${orgInspectionFee}`, true);
            return { isFailed: true };
        }
        if (parseFloat(PolicyFee) < 0 || parseFloat(PolicyFee) > parseFloat(orgPolicyFee)) {
            toast && toast(`Policy Fee Must be between 0 and ${orgPolicyFee}`, true);
            return { isFailed: true };
        }

        let inspectionfeeIndex = respModel.FeesAndTaxes.findIndex(s => s.Code === "INSFEE");
        let policyfeeIndex = respModel.FeesAndTaxes.findIndex(s => s.Code === "PFEE");

        if (inspectionfeeIndex != -1 && InspectionFee) {
            respModel.FeesAndTaxes[inspectionfeeIndex].Value = parseFloat(InspectionFee);
            respModel.FeesAndTaxes[inspectionfeeIndex].IsOverride = true;
        }
        else {
            respModel.FeesAndTaxes[inspectionfeeIndex].Value = 0;
            respModel.FeesAndTaxes[inspectionfeeIndex].IsOverride = true;
        }

        if (policyfeeIndex != -1 && PolicyFee) {
            respModel.FeesAndTaxes[policyfeeIndex].Value = parseFloat(PolicyFee);
            respModel.FeesAndTaxes[policyfeeIndex].IsOverride = true;
        }
        else {
            respModel.FeesAndTaxes[policyfeeIndex].Value = 0;
            respModel.FeesAndTaxes[policyfeeIndex].IsOverride = true;
        }

        // Using default Policy Fee and Inspection Fee behavior for Flat Cancellation.
        if (model.Transaction.PremiumType === "Flat") {
            respModel.FeesAndTaxes[policyfeeIndex].IsOverride = false;
            respModel.FeesAndTaxes[inspectionfeeIndex].IsOverride = false;
        }
    }
    return { respModel }
}

export const AddUWExtraFields = (role, dataModel, policySchema, base) => {
    if (role === base?.commonKeys?.RoleUnderwriter) {
        const inspectionfeeIndex = dataModel.FeesAndTaxes.findIndex(s => s.Code === "INSFEE");
        const policyfeeIndex = dataModel.FeesAndTaxes.findIndex(s => s.Code === "PFEE");
        if (!policySchema[1].controls.some((e) => e.key === "inspectionfee")) {
            policySchema[1].controls.push({
                "key": "inspectionfee",
                "label": "Inspection Fee",
                "type": "number2",
                "value": "",
                "props": {
                    "class": "inputText",
                    "placeholder": "Please enter inspection fee",
                    "maxlength": "200",
                    "disabled": false,
                    "primaryColor": "#851E32"
                },
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
                "errorMessage": "",
                "dataPath": `FeesAndTaxes.${inspectionfeeIndex}.Value`,
                "conditionalDisplay": [
                    {
                        "src": "Transaction.PremiumType",
                        "exp": "==",
                        "needRefComp": false,
                        "target": "ProRate",
                        "connector": "||"
                    },
                    {
                        "src": "Transaction.PremiumType",
                        "exp": "==",
                        "needRefComp": false,
                        "target": "ShortRate",
                        "connector": "||"
                    }
                ]
            })
        }
        if (!policySchema[1].controls.some((e) => e.key === "policyfee")) {
            policySchema[1].controls.push({
                "key": "policyfee",
                "label": "Policy Fee",
                "type": "number2",
                "value": "",
                "props": {
                    "class": "inputText",
                    "placeholder": "Please enter policy fee",
                    "maxlength": "200",
                    "disabled": false,
                    "primaryColor": "#851E32"
                },
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
                "errorMessage": "",
                "dataPath": `FeesAndTaxes.${policyfeeIndex}.Value`,
                "conditionalDisplay": [
                    {
                        "src": "Transaction.PremiumType",
                        "exp": "==",
                        "needRefComp": false,
                        "target": "ProRate",
                        "connector": "||"
                    },
                    {
                        "src": "Transaction.PremiumType",
                        "exp": "==",
                        "needRefComp": false,
                        "target": "ShortRate",
                        "connector": "||"
                    }
                ]
            })
        }
        const termsIndx = policySchema[1].controls.findIndex(i => i.key === "reinstateterms");
        const termsControl = policySchema[1].controls.filter(i => i.key === "reinstateterms")[0];
        policySchema[1].controls.splice(termsIndx, 1);
        policySchema[1].controls.push(termsControl);
    }
    return policySchema;
}