import React, { useEffect } from "react";
import { useState } from "react";
import CancellationLanding from "../../business/components/cancel/landing";
import { Base } from "../utilities/helpers/Base";
import { overrideFeesSchema, overrideReturnPremiumSchema, rejectModalSchema, submitInsuredSignatureSchema } from "../utilities/schemas/modalForm";
import { AddUWExtraDataFields, CancellationActionButtons, GetCancellationType, GetSchema, SetSchemaDefaultValues, InspectionAndPolicyFeeCalc } from "../utilities/helpers/cancellation";
import { GenerateDocument, GetPushNotificationAPI, fetchForms, getDMSProperties, getFilesListFromDMS, save, scrollToElement, updatePolicyStatus, uploadFilesToDMS } from "../utilities/helpers/shared"
import { notificationKeys, postActions } from "../utilities/constants"
import NProgress from "nprogress";
import moment from "moment";

const CancellationFunctional = (props) => {
    const {
        store,
        keys,
        schema,
        status,
        setDefaultValuesHandler,
        env,
        query,
        staticItems,
        alertMsgs,
        router,
        lastSubmittedPageList,
        logout,
        emailConfigs,
        CustomHeaders,
        dmsProperties,
        isProgramTypeLOB,
        customMEP,
        config,
        programTypeValue
    } = props;

    // Creating Base Class instance for shared utilities
    const base = new Base(store, keys, status, env, staticItems, alertMsgs, logout, query, emailConfigs, CustomHeaders, dmsProperties, isProgramTypeLOB, programTypeValue);
    const { PolicyStatusMaster, TransactionTypeMaster, cancellationKeys, commonKeys, storeKeys, routeKeys, apolloKeys } = base;

    const role = base.setLoginUserRole();
    const MEP = customMEP || base.getStoreState(storeKeys.PolicyReducer).Transaction.MEP;

    const [cancellationLandingData, setCancellationLandingData] = useState({
        ...base.getStoreState(storeKeys.PolicyReducer),
        ...AddUWExtraDataFields(role, "no", 0, 0, base, true)
    });
    const [cancellationSchema, setCancellationSchema] = useState(SetSchemaDefaultValues(GetSchema(schema, role, cancellationLandingData, base), cancellationLandingData, role, setDefaultValuesHandler, base));
    const [buttonStatus, setButtonStatus] = useState(CancellationActionButtons(cancellationLandingData?.PolicyStatus, role, base, false, props.buttonStatus));
    const [totalFeesAndTaxes, setTotalFeesAndTaxes] = useState(0);

    // events of the dynamic form
    const onSchemaChange = (changedSchema, key) => {
        if (props.onSchemaChange) {
            changedSchema = props.onSchemaChange(changedSchema, key);
        }
        else {
            switch (key) {
                case cancellationKeys.schemaKeys.CancellationDate:
                    changedSchema.Transaction.PremiumType = GetCancellationType(changedSchema.Transaction.EffectiveDate, cancellationLandingData.EffectiveDate);
                    break;
                case cancellationKeys.schemaKeys.CancellationType:
                    if (changedSchema.TransactionHistory.length <= 1 && changedSchema.Transaction.PremiumType === "Flat") {
                        changedSchema.Transaction.EffectiveDate = moment(changedSchema.EffectiveDate).format("YYYY-MM-DD");
                    }
                    changedSchema = { ...changedSchema, ...AddUWExtraDataFields(role, "no", 0, 0, base, true) }
                    break;
                default:
                    break;
            }
        }

        if (key && props.onUISchemaChange) {
            setCancellationSchema(prevSchema => props.onUISchemaChange(prevSchema, changedSchema, key));
        }

        if (key) {
            setButtonStatus({ ...buttonStatus, cancellationcard: false, showApproveCancelationBtn: false, showDownloadFormBtn: false, showSubmitForApprovalBtn: false, showRevertBtn: false, showSubmitSignature: false, showOnRejectBtn: false, showCalculateBtn: true })
            setCancellationLandingData(changedSchema);
        }
    }

    // calculate premium
    const onFormSubmit = async () => {
        try {
            let model = JSON.parse(JSON.stringify(cancellationLandingData));

            // Flat Cancellation Not Applied on Endorsed Policy
            const noOfTransactions = model.TransactionHistory.length;
            if (model.Transaction.PremiumType === "Flat" && noOfTransactions > 1) {
                props.toast && props.toast("Flat Cancellation is not allowed on endorsed policy", true);
                return;
            }

            if (props.customValidationHandler) {
                const isValid = props.customValidationHandler(model);
                if (!isValid) return;
            }

            NProgress.start();
            if (model.PolicyStatus == PolicyStatusMaster.PolicyInForce) {
                model.Transaction.Type = TransactionTypeMaster.CANCELLATION;

                model.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.StartCancellation || routeKeys.CancelLanding;
                model = await save(model, apolloKeys.StartCancellation, env.NEXT_PUBLIC_GQL_END_POINT, base);
            }
            if (model) {
                let calInspecPolicyFee = cancellationSchema[1].controls.filter(x => x.key === "inspectionfee" || x.key === "policyfee").length > 0;
                if (calInspecPolicyFee) {
                    let isFailed;
                    ({ respModel: model, isFailed } = InspectionAndPolicyFeeCalc(model, cancellationLandingData, role, base, props.toast, MEP));
                    if (isFailed) {
                        NProgress.done()
                        return;
                    }
                }

                model.Transaction.EffectiveDate = cancellationLandingData.Transaction.EffectiveDate;
                model.Transaction.PremiumType = cancellationLandingData.Transaction.PremiumType;
                model.Transaction.RequestedBy = cancellationLandingData.Transaction.RequestedBy;
                model.Transaction.Reason = cancellationLandingData.Transaction.Reason;
                model.Transaction.Remarks = cancellationLandingData.Transaction.Remarks;

                model.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.RateCancellation || routeKeys.CancelLanding;
                if (props.preRaterCallHandler) {
                    model = props.preRaterCallHandler(model);
                }

                let raterCall = await save(model, apolloKeys.RateEndorsement, env.NEXT_PUBLIC_GQL_END_POINT, base);

                let feesandtaxesamout = 0;
                if (raterCall) {
                    raterCall.FeesAndTaxes.forEach(ft => feesandtaxesamout += ft.Amount);
                    setTotalFeesAndTaxes(feesandtaxesamout);

                    setCancellationLandingData({
                        ...raterCall,
                        ...AddUWExtraDataFields(role, cancellationLandingData.WaiveMEP, cancellationLandingData.ReturnInspectionFee, cancellationLandingData.ReturnPolicyFee, base, calInspecPolicyFee)
                    });

                    const postSuccessResp = await props.postSuccess(postActions.RateCancellation, raterCall);
                    let btnStatus;
                    if (postSuccessResp?.useDefaultFeature) {
                        btnStatus = CancellationActionButtons(raterCall?.PolicyStatus, role, base, true);
                        if (model.Transaction.Reason == "Insured Request-C10" && role == commonKeys.RoleAgent) {
                            btnStatus = { ...btnStatus, showSubmitSignature: true, showSubmitForApprovalBtn: false };
                        }
                    }
                    else {
                        btnStatus = postSuccessResp?.buttonStatus;
                    }
                    setButtonStatus(btnStatus);
                }
            }
            scrollToElement(100);
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Reinstatement.CalculatePremiumFailure, true);
            NProgress.done();
        }
    }

    // UW reject Cancellation
    const rejectTransaction = async (model) => {
        try {
            NProgress.start();
            let UpdatedPolicy = JSON.parse(JSON.stringify(cancellationLandingData));

            UpdatedPolicy.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.RejectTransaction || routeKeys?.ApplicationSummary;
            const resp = await save(UpdatedPolicy, apolloKeys.RevertTransaction, env.NEXT_PUBLIC_GQL_END_POINT, base);

            if (resp) {
                resp.Transaction.Remarks = model.RejectRemarks;
                resp.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.RejectTransaction || routeKeys?.ApplicationSummary;
                const respSave = await save(resp, apolloKeys.PutMutation, env.NEXT_PUBLIC_GQL_END_POINT, base);

                if (respSave) {
                    const postSuccessResp = await props.postSuccess(postActions.RejectTransaction, respSave);

                    if (postSuccessResp?.useDefaultFeature) {
                        GetPushNotificationAPI(postSuccessResp?.input, commonKeys.ActionEmailAgent, [], [], "", "", "", query.GET_NOTIFICATION_API, base, true, notificationKeys.RejectCancellation);
                        props.toast && props.toast(alertMsgs.Cancellation.CancellationRejected);
                        router && router.push(routeKeys.DashboardAccountHub.toLowerCase());
                    }
                }
            }
            else {
                props.toast && props.toast(alertMsgs.Cancellation.PolicyCancellationRejectedFailed, true);
            }
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Cancellation.PolicyCancellationRejectedFailed, true);
            NProgress.done();
        }
    }

    // UW approve Cancellation
    const cancelPolicy = async () => {
        try {
            NProgress.start();
            cancellationLandingData.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.BindCancellation || routeKeys.CancelLanding;
            if(props.updateForms){
                const formList = await fetchForms(cancellationLandingData, base);
                cancellationLandingData.Forms = [...formList];
            }
            const respSave = await save(cancellationLandingData, apolloKeys.PutMutation, env.NEXT_PUBLIC_GQL_END_POINT, base);

            if (respSave) {
                let resp = await save(respSave, apolloKeys.BindCancellation, env.NEXT_PUBLIC_GQL_END_POINT, base);
                if (resp) {
                    const postSuccessResp = await props.postSuccess(postActions.BindCancellation, resp);

                    if (postSuccessResp?.useDefaultFeature) {
                        const transactionType = postSuccessResp?.input.Transaction.Type;
                        const formList = await fetchForms(postSuccessResp?.input, base);
                        const dmsProperties = getDMSProperties(postSuccessResp?.input, "Cancellation Document", `${postSuccessResp?.input.PolicyNumber}_CAN_${postSuccessResp?.input.Transaction.Number}__CancellationDocumen.pdf`, base);
                        const formsResponse = await GenerateDocument(postSuccessResp?.input, false, false, formList, { 'Content-Type': 'application/json' }, 'blob', transactionType, base);
                        const uploadResponse = await uploadFilesToDMS(postSuccessResp?.input, formsResponse, dmsProperties, base);
                        const blobName = dmsProperties?.Filename ?? "";
                        const blobUri = uploadResponse?.[0]?.Uri ?? "";
                        GetPushNotificationAPI(postSuccessResp?.input, commonKeys.ActionEmailAgent, [], [], "", blobUri, blobName, query.GET_NOTIFICATION_API, base, false, notificationKeys.ApproveCancellation);
                        props.toast && props.toast(alertMsgs.Cancellation.PolicyCancelled);
                        router && router.push(routeKeys.DashboardAccountHub.toLowerCase());
                    }
                }
            }
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Cancellation.PolicyCancelledFailure, true);
            NProgress.done();
        }
    }

    // UW-Agent revert Cancellation
    const revertTransaction = async (model) => {
        try {
            debugger;
            NProgress.start();
            let UpdatedPolicy = JSON.parse(JSON.stringify(cancellationLandingData));

            const resp = await save(UpdatedPolicy, apolloKeys.RevertTransaction, env.NEXT_PUBLIC_GQL_END_POINT, base);
            if (resp) {
                const postSuccessResp = await props.postSuccess(postActions.RevertTransaction, resp);
                if (postSuccessResp?.useDefaultFeature) {
                    props.toast && props.toast(alertMsgs.Cancellation.PolicyCancellationReverted);
                    router && router.push(routeKeys.DashboardAccountHub.toLowerCase());
                }
            }
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Cancellation.PolicyCancellationRevertedFailed, true);
            NProgress.done();
        }
    }

    // Agent UW submit for Approval of Cancellation
    const submitForApproval = async () => {
        try {
            NProgress.start();
            let model = updatePolicyStatus(cancellationLandingData, PolicyStatusMaster.PolicyInForceCancellationRequestPendingApproval);

            model.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.SubmitForApproval || routeKeys?.ApplicationSummary;
            let resp = await save(model, apolloKeys.PutMutation, env.NEXT_PUBLIC_GQL_END_POINT, base);
            debugger;
            if (resp) {
                const postSuccessResp = await props.postSuccess(postActions.SubmitForCancellationApproval, resp);

                if (postSuccessResp?.useDefaultFeature) {
                    GetPushNotificationAPI(postSuccessResp?.input, commonKeys.ActionEmailUnderWriter, [], [], "", "", "", query.GET_NOTIFICATION_API, base, false, notificationKeys.SubmitForCancellationApproval);
                    props.toast && props.toast(alertMsgs.Cancellation.PolicyCancellationApprovalPending);
                    router && router.push(routeKeys.ApplicationSummary.toLowerCase());
                }
            }
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Cancellation.PolicyCancelledFailure, true);
            NProgress.done();
        }
    }

    // UW view Cancellation Forms 
    const viewForm = async () => {
        try {
            NProgress.start();
            let formsResponse, isDownload = false;
            const postSuccessResp = await props.postSuccess(postActions.ViewDocuments, cancellationLandingData);
            if (postSuccessResp?.useDefaultFeature) {
                if (postSuccessResp?.input.Transaction.Reason === 'Insured Request-C10') {
                    const data = await getFilesListFromDMS(postSuccessResp?.input, base);
                    const signedDoc = data.filter(item => item.documenttype === "Signed Cancellation Forms")[0];
                    var dlnk = document.getElementById("filedownload");
                    dlnk.href = signedDoc?.Uri;
                    dlnk.setAttribute("target", "_blank");
                    return;
                }
                const transactionType = postSuccessResp?.input.Transaction.Type;
                const formList = await fetchForms(postSuccessResp?.input, base);
                formsResponse = await GenerateDocument(postSuccessResp?.input, true, false, formList, { 'Content-Type': 'application/json' }, 'blob', transactionType, base);
            }
            else {
                formsResponse = postSuccessResp?.formsResponse;
            }
            isDownload = postSuccessResp?.isDownload;
            if (formsResponse) {
                const _blob = new Blob([formsResponse], { type: "application/pdf" });
                const url = URL.createObjectURL(_blob);
                var dlnk = document.getElementById("filedownload");
                dlnk.href = url;
                if (isDownload) {
                    dlnk.setAttribute(
                        'download',
                        postSuccessResp?.input.PolicyNumber + '_Cancellation_Summary.pdf',
                    );
                }
                else {
                    dlnk.setAttribute("target", "_blank");
                }
                dlnk.click();
            }
            NProgress.done();
        } catch (err) {
            props.toast && props.toast(alertMsgs.Shared.DocumentDownloadFailed, true);
            NProgress.done();
        }
    }

    // Agent Submit Signature 
    const onSubmitSignature = async (model) => {
        try {
            NProgress.start();
            model = updatePolicyStatus(model, PolicyStatusMaster.PolicyInForceCancellationSignaturePending);

            model.Transaction.Date = moment().toDate();
            model.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.SubmitForSignature || routeKeys.CancelLandingHelloSign;
            let resp = await save(model, apolloKeys.PutMutation, env.NEXT_PUBLIC_GQL_END_POINT, base);

            if (resp) {
                const postSuccessResp = await props.postSuccess(postActions.SubmitForCancellationSignatures, resp);

                if (postSuccessResp?.useDefaultFeature) {
                    props.toast && props.toast(alertMsgs.Cancellation.SendForInsuredSign);
                    router && router.push(routeKeys.ApplicationSummary.toLowerCase());
                }
            }
            else {
                props.toast && props.toast(alertMsgs.Cancellation.SendForInsuredSignFailed);
            }
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Cancellation.SendForInsuredSignFailed);
            NProgress.done();
        }
    }

    // Agent - UW Signature
    const onSubmitResendSignature = async (model) => {
        try {
            NProgress.start();

            model.Transaction.Date = moment().toDate();
            model.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.SubmitForResendSignature || routeKeys.CancelLandingHelloSignResend;
            let resp = await save(model, apolloKeys.PutMutation, env.NEXT_PUBLIC_GQL_END_POINT, base);
            if (resp) {
                const postSuccessResp = await props.postSuccess(postActions.SubmitForCancellationSignatures, resp);

                if (postSuccessResp?.useDefaultFeature) {
                    props.toast && props.toast(alertMsgs.Cancellation.ResendForInsuredSign);
                    router && router.push(routeKeys.ApplicationSummary.toLowerCase());
                }
            }
            else {
                props.toast && props.toast(alertMsgs.Cancellation.ResendForInsuredSignFailed, true);
            }
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Cancellation.ResendForInsuredSignFailed, true);
            NProgress.done();
        }
    }

    // Modal Forms for action buttons
    const rejectModalForm = {
        header: "",
        schema: rejectModalSchema,
        dataModel: {},
        onFormSubmit: rejectTransaction,
        onSchemaChange: () => { },
    }
    const approveAlertModalForm = {
        header: "",
        title: "Are you sure to proceed with Cancellation?",
        onSuccess: cancelPolicy,
    }
    const revertModalForm = {
        header: "",
        title: "",
        onSuccess: revertTransaction,
    }
    const SubmitSignatureForm = {
        schema: submitInsuredSignatureSchema,
        dataModel: cancellationLandingData,
        onSchemaChange: (model, key) => { },
        onFormSubmit: (dataModel, event) => onSubmitSignature(dataModel)
    }
    const ResendSignatureForm = {
        schema: submitInsuredSignatureSchema,
        dataModel: cancellationLandingData,
        onSchemaChange: (model, key) => { },
        onFormSubmit: (dataModel, event) => onSubmitResendSignature(dataModel)
    }
    const OverrideFeesForm = {
        schema: overrideFeesSchema,
        dataModel: {},
        onSchemaChange: (model, key) => { },
        onFormSubmit: (dataModel, event) => console.log(dataModel),
    };
    const OverrideReturnPremiumForm = {
        schema: overrideReturnPremiumSchema,
        dataModel: {},
        onSchemaChange: (model, key) => { },
        onFormSubmit: (dataModel, event) => console.log(dataModel),
    };

    // useEffects
    useEffect(() => {
        // to disable browser back button
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, document.title, window.location.href);
        });
        let feesandtaxesamout = 0;
        let tempData = cancellationLandingData;
        if ([PolicyStatusMaster.CancellationInitiated, PolicyStatusMaster.PolicyInForceCancellationRequestPendingApproval, PolicyStatusMaster.PolicyInForceCancellationSignaturePending].includes(cancellationLandingData.PolicyStatus)) {
            tempData.FeesAndTaxes.forEach(ft => feesandtaxesamout += ft.Amount);
            let buttonStatus = CancellationActionButtons(tempData?.PolicyStatus, role, base, true, props.buttonStatus);
            if (tempData.Transaction.Reason == "Insured Request-C10" && role == commonKeys.RoleAgent && tempData.PolicyStatus !== PolicyStatusMaster.PolicyInForceCancellationSignaturePending) {
                buttonStatus = { ...buttonStatus, showSubmitSignature: true, showSubmitForApprovalBtn: false };
            }
            setButtonStatus(buttonStatus);
        }
        else {
            tempData.Transaction.RequestedBy = "";
            tempData.Transaction.Reason = "";
            tempData.Transaction.Remarks = "";
            if (moment(moment().format("YYYY-MM-DD")) > moment(tempData.Transaction.EffectiveDate)) {
                tempData.Transaction.EffectiveDate = moment().format("YYYY-MM-DD");
            }
            tempData.Transaction.PremiumType = GetCancellationType(tempData?.Transaction.EffectiveDate, tempData?.EffectiveDate);
        }

        setCancellationLandingData({ ...tempData });
        setTotalFeesAndTaxes(feesandtaxesamout);
        if (!schema) {
            setCancellationSchema(SetSchemaDefaultValues(GetSchema(schema, role, cancellationLandingData, base), cancellationLandingData, role, setDefaultValuesHandler, base));
        }

        scrollToElement(100);
    }, []);

    useEffect(() => {
        console.log(">>>>>>>>>>>>", cancellationLandingData);
        if (cancellationLandingData) {
            cancellationLandingData.FeesAndTaxes = cancellationLandingData.FeesAndTaxes.map((obj) => {
                if (obj.ProductFeesAndTaxes === null) {
                    return {
                        ...obj,
                        ProductFeesAndTaxes: {
                            Description: obj.Description
                        }
                    }
                }
                return obj;
            });
        }
    }, [cancellationLandingData])

    return <>
        <div className="newSection">
            <div className="cntWmenu">
                <CancellationLanding
                    config={
                        {
                            PageTitle: config?.PageTitle || "Cancellation Page",
                            PageDescription: config?.PageDescription || "Page captures details about cancellation of an application.",
                            favicon: config?.favicon || "images/favicon.ico"
                        }
                    }
                    toggleStatus={buttonStatus}
                    btnName={props.btnName}
                    cancellationCardConfig={base.cancellationKeys.cancellationCardConfig}

                    cancellationLandingData={cancellationLandingData}
                    cancellationSchema={cancellationSchema}

                    onSchemaChange={onSchemaChange}
                    onFormSubmit={onFormSubmit}

                    totalFeesAndTaxes={totalFeesAndTaxes}

                    downloadForm={() => {
                        viewForm()
                    }}
                    submitForApproval={submitForApproval}

                    ApproveAlertModalForm={approveAlertModalForm}
                    OverrideReturnPremiumForm={OverrideReturnPremiumForm}
                    OverrideFeesForm={OverrideFeesForm}
                    SubmitSignatureForm={SubmitSignatureForm}
                    ResendSignatureForm={ResendSignatureForm}
                    RevertAlertModalForm={revertModalForm}
                    RejectModalForm={rejectModalForm}

                    sideBtnHandler={() => {
                        router && router.push(routeKeys.ApplicationSummary.toLowerCase())
                    }}
                />
            </div>
        </div>
    </>
}

export default CancellationFunctional;