import moment from "moment";
import { CancellationSchema } from "../schemas/cancelschema";

export const GetSchema = (schema = false, role, dataModel, base) => {
    let policySchema = CancellationSchema;

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

export const SetSchemaDefaultValues = (defaultSchema, dataModel, role, setDefaultValuesHandler, { PolicyStatusMaster, cancellationKeys, commonKeys }) => {
    let schema = defaultSchema;
    let model = dataModel;

    let user = role;
    let isCancellationSubmitted = ([PolicyStatusMaster.PolicyInForceCancellationSignaturePending, PolicyStatusMaster.PolicyCancelled, PolicyStatusMaster.CancellationOnHold].includes(model.PolicyStatus));

    // let roleUW = [commonKeys.RoleUnderwriter, commonKeys.RoleUnderwritingManager];
    let isCancelApproved = ([PolicyStatusMaster.PolicyCancelled, PolicyStatusMaster.PolicyInForceCancellationSignaturePending].includes(model.PolicyStatus));

    schema = JSON.parse(JSON.stringify(schema));

    schema.map(s => {
        s.controls = s.controls.map(c => {
            switch (c.key) {
                case cancellationKeys.schemaKeys.BusinessName:
                    c.label = model?.InsuredAccount?.DisplayName;
                    break;
                case cancellationKeys.schemaKeys.MailingAddress:
                    c.label = model?.InsuredAccount?.BusinessInfo?.Locations[0]?.Address?.UnFormattedAddress;
                    break;
                case cancellationKeys.schemaKeys.LOB:
                    c.label = model?.Attributes?.Lob;
                    break;
                case cancellationKeys.schemaKeys.EffectiveDate:
                    c.label = moment(model?.EffectiveDate).format('L');
                    break;
                case cancellationKeys.schemaKeys.ExpiryDate:
                    c.label = moment(model?.ExpirationDate).format('L');
                    break;
                case cancellationKeys.schemaKeys.PolicyNumber:
                    c.label = model?.PolicyNumber ? model?.PolicyNumber : "NA";
                    break;
                case cancellationKeys.schemaKeys.CancellationDate:
                    c.props.minDate = moment(model?.TransactionHistory[model?.TransactionHistory.length - 1].EffectiveDate)
                    c.props.maxDate = model?.ExpirationDate;
                    c.props.disabled = (user === commonKeys.RoleAgent && [PolicyStatusMaster.PolicyInForceCancellationRequestPendingApproval, PolicyStatusMaster.PolicyInForceCancellationSignaturePending].includes(model.PolicyStatus)) || (user === commonKeys.RoleUnderwriter && model.Transaction.PremiumType === "Flat");
                    break;
                case cancellationKeys.schemaKeys.CancellationType:
                    c.props.disabled = (isCancellationSubmitted || isCancelApproved) ? true : false;
                    break;

                case cancellationKeys.schemaKeys.CancellationReason:
                    c.props.disabled = (isCancellationSubmitted || isCancelApproved) ? true : false;
                    break;
                case cancellationKeys.schemaKeys.CancellationRequestedBy:
                    c.props.disabled = (isCancellationSubmitted || isCancelApproved) ? true : false;
                    break;
                case cancellationKeys.schemaKeys.CancellationRemark:
                    c.props.disabled = (isCancellationSubmitted || isCancelApproved) ? true : false;
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

export const CancellationActionButtons = (status, role, { PolicyStatusMaster }, reRate = false, buttonStatus) => {
    if (buttonStatus) {
        return buttonStatus;
    }

    let userRoles = {
        "Agent": [
            {
                policyStatus: PolicyStatusMaster.PolicyInForce,
                actionButtons: { showActionButton: true, showCalculateBtn: true }
            },
            {
                policyStatus: PolicyStatusMaster.PolicyInForceCancellationRequestPendingApproval,
                actionButtons: {}
            },
            {
                policyStatus: PolicyStatusMaster.CancellationInitiated,
                actionButtons: { showActionButton: true, showCalculateBtn: false, cancellationcard: true, showSubmitForApprovalBtn: true, showRevertBtn: true }
            },
            {
                policyStatus: PolicyStatusMaster.PolicyInForceCancellationSignaturePending,
                actionButtons: { showActionButton: true, showResendSignature: true, cancellationcard: true }
            }
        ],
        "Underwriter": [
            {
                policyStatus: PolicyStatusMaster.CancellationInitiated,
                actionButtons: { showActionButton: true, showApproveCancelationBtn: true, showCalculateBtn: false, cancellationcard: true, showDownloadFormBtn: true, showRevertBtn: true }
            },
            {
                policyStatus: PolicyStatusMaster.PolicyInForceCancellationRequestPendingApproval,
                actionButtons: { showActionButton: true, showApproveCancelationBtn: true, showCalculateBtn: false, cancellationcard: true, showDownloadFormBtn: true, showOnRejectBtn: true }
            },
            {
                policyStatus: PolicyStatusMaster.PolicyInForceCancellationSignaturePending,
                actionButtons: { showActionButton: true, showResendSignature: true }
            }
        ]
    }
    if (!reRate && !([PolicyStatusMaster.PolicyCancelled, PolicyStatusMaster.PolicyInForceCancellationSignaturePending].includes(status)))
        return { showActionButton: true, showCalculateBtn: true }
    else {
        if (userRoles[role]?.find(val => val?.policyStatus == status))
            return userRoles[role]?.find(val => val?.policyStatus == status)?.actionButtons;
        else return {};
    }
}

export const GetCancellationType = (cancellationDateInput, effectiveDateInput) => {
    let cancellationDate = moment(cancellationDateInput).format('MM/DD/YYYY');
    let effectiveDate = moment(effectiveDateInput).format('MM/DD/YYYY');
    let effectiveDateAfterThreeMonths = moment(effectiveDateInput).add(3, 'M');
    let isSame = moment(cancellationDate).isSame(effectiveDate);
    let isBefore = moment(cancellationDate).isBefore(effectiveDateAfterThreeMonths);
    let isAfter = moment(cancellationDate).isAfter(effectiveDateAfterThreeMonths);
    debugger;
    if (isSame) {
        return 'Flat'
    }
    else if (isBefore) {
        return 'ShortRate'
    }
    else if (isAfter) {
        return 'ProRate'
    }
    else {
        return "ShortRate"
    }
}

export const AddUWExtraFields = (role, dataModel, policySchema, base) => {
    if (role === base?.commonKeys?.RoleUnderwriter) {
        if (!policySchema[1].controls.some((e) => e.key === "cancellationmep")) {
            policySchema[1].controls.push({
                "key": "cancellationmep",
                "label": "Waive MEP",
                "type": "toggle",
                "value": "no",
                "options": [{
                    label: "Yes",
                    value: "yes"
                }, {
                    label: "No",
                    value: "no"
                    ,
                }],
                "props": {
                    "class": "inputText",
                    "disabled": false,
                    "primaryColor": "#851E32"
                },
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
                "dataPath": `WaiveMEP`,
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
        if (!policySchema[1].controls.some((e) => e.key === "inspectionfee")) {
            policySchema[1].controls.push({
                "key": "inspectionfee",
                "label": "Return Inspection Fee",
                "type": "number2",
                "value": "",
                "props": {
                    "class": "inputText",
                    "placeholder": "Please enter return inspection fee",
                    "maxlength": "200",
                    "disabled": false,
                    "primaryColor": "#851E32"
                },
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
                "errorMessage": "",
                "dataPath": `ReturnInspectionFee`,
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
                "label": "Return Policy Fee",
                "type": "number2",
                "value": "",
                "props": {
                    "class": "inputText",
                    "placeholder": "Please enter return policy fee",
                    "maxlength": "200",
                    "disabled": false,
                    "primaryColor": "#851E32"
                },
                "labelClass": "inputLabel ddlUnderwriterList",
                "positionClass": "col-md-4 mt-4",
                "isColummnDisplay": false,
                "errorMessage": "",
                "dataPath": `ReturnPolicyFee`,
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
        const termsIndx = policySchema[1].controls.findIndex(i => i.key === "cancellationterms");
        const termsControl = policySchema[1].controls.filter(i => i.key === "cancellationterms")[0];
        policySchema[1].controls.splice(termsIndx, 1);
        policySchema[1].controls.push(termsControl);
    }
    return policySchema;
}

export const AddUWExtraDataFields = (role, WaiveMEP, ReturnInspectionFee, ReturnPolicyFee, base, useExtraField) => {
    if (role === base.commonKeys.RoleUnderwriter && useExtraField) {
        return {
            WaiveMEP,
            ReturnInspectionFee,
            ReturnPolicyFee
        }
    }
    return {};
}

export const InspectionAndPolicyFeeCalc = (respModel, model, role, base, toast, MEP) => {
    const returnInspectionfee = model?.ReturnInspectionFee ? parseFloat(model?.ReturnInspectionFee) : 0;
    const returnPolicyfee = model?.ReturnPolicyFee ? parseFloat(model?.ReturnPolicyFee) : 0;
    // to preserve previous waive Mep value.
    const waiveMEP = model?.WaiveMEP == 'yes' ? MEP : 'no';
    let tempWaiveMEP = MEP;
    if (role === base.commonKeys.RoleUnderwriter) {
        const orgInspectionFee = respModel.FeesAndTaxes.filter(s => s.Code === "INSFEE")[0].AnnualAmount;
        const orgPolicyFee = respModel.FeesAndTaxes.filter(s => s.Code === "PFEE")[0].AnnualAmount;

        if (returnInspectionfee < 0 || returnInspectionfee > orgInspectionFee) {
            toast && toast(`Inspection Fee Must be between 0 and ${orgInspectionFee}`, true, "INSFEEERROR");
            return { isFailed: true };
        }
        if (returnPolicyfee < 0 || returnPolicyfee > orgPolicyFee) {
            toast && toast(`Policy Fee Must be between 0 and ${orgPolicyFee}`, true, "PFEEERROR");
            return { isFailed: true };
        }

        if (model?.WaiveMEP == 'yes') {
            tempWaiveMEP = 0.0;
        }

        let inspectionfeeIndex = respModel.FeesAndTaxes.findIndex(s => s.Code === "INSFEE");
        let policyfeeIndex = respModel.FeesAndTaxes.findIndex(s => s.Code === "PFEE");

        if (inspectionfeeIndex != -1 && returnInspectionfee) {
            respModel.FeesAndTaxes[inspectionfeeIndex].Value = returnInspectionfee;
            respModel.FeesAndTaxes[inspectionfeeIndex].IsOverride = true;
        }
        else {
            respModel.FeesAndTaxes[inspectionfeeIndex].Value = 0;
            respModel.FeesAndTaxes[inspectionfeeIndex].IsOverride = true;
        }

        if (policyfeeIndex != -1 && returnPolicyfee) {
            respModel.FeesAndTaxes[policyfeeIndex].Value = returnPolicyfee;
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
        respModel.Transaction.MEP = parseFloat(tempWaiveMEP);
    }
    return { respModel, waiveMEP };
}

export const removeExtraFields = (model) => {
    if (model.hasOwnProperty('WaiveMEP')) {
        delete model.WaiveMEP;
    }
    if (model.hasOwnProperty('ReturnPolicyFee')) {
        delete model.ReturnPolicyFee;
    }
    if (model.hasOwnProperty('ReturnInspectionFee')) {
        delete model.ReturnInspectionFee;
    }
    if (model.hasOwnProperty('inspectionFee')) {
        delete model.inspectionFee;
    }
    if (model.hasOwnProperty('policyFee')) {
        delete model.policyFee;
    }
}