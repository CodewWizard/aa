import React, { useEffect, useState, useRef } from "react";
import NProgress from 'nprogress';
import moment from "moment";
import ReinstatementLanding from "../../business/components/reinstat/landing.js"
import { Base } from "../utilities/helpers/Base.js"
import { rejectModalSchema, submitInsuredSignatureSchema } from "../utilities/schemas/modalForm";
import { GetSchema, ReinstatementButtonStatus, SetSchemaDefaultValues } from "../utilities/helpers/reinstatement.js";
import { GenerateDocument, GetPushNotificationAPI, fetchForms, getDMSProperties, getFilesListFromDMS, save, scrollToElement, updatePolicyStatus, uploadFilesToDMS } from "../utilities/helpers/shared.js";
import { postActions, notificationKeys } from '../utilities/constants'
import { InspectionAndPolicyFeeCalc } from '../utilities/helpers/reinstatement.js'


const GetCancellationEffectiveDate = (landingData) => {
    const cancellationTransaction = landingData.TransactionHistory.find(i => i.Type === "Cancellation");
    if (cancellationTransaction) {
        return moment(cancellationTransaction.EffectiveDate);
    }
    return undefined;
}

const ReinstatementFunctional = (props) => {
    const { store,
        keys,
        schema,
        status,
        setDefaultValuesHandler,
        env,
        query,
        staticItems,
        alertMsgs,
        logout,
        router,
        lastSubmittedPageList,
        emailConfigs,
        CustomHeaders,
        dmsProperties,
        isProgramTypeLOB,
        config,
        programTypeValue
    } = props;

    const base = new Base(store, keys, status, env, staticItems, alertMsgs, logout, query, emailConfigs, CustomHeaders, dmsProperties, isProgramTypeLOB, programTypeValue);
    const { PolicyStatusMaster, TransactionTypeMaster, reinstatementKeys, storeKeys, routeKeys, commonKeys, apolloKeys } = base;
    const role = base.setLoginUserRole();
    const [reinstatementLandingData, setReinstatementLandingData] = useState({
        ...base.getStoreState(storeKeys.PolicyReducer)
    });
    const [reinstatementSchema, setReinstatementSchema] = useState(SetSchemaDefaultValues(GetSchema(schema, role, reinstatementLandingData, base), reinstatementLandingData, role, setDefaultValuesHandler, base));
    const [totalFeesAndTaxes, setTotalFeesAndTaxes] = useState(0);
    const [buttonStatus, setButtonStatus] = useState(ReinstatementButtonStatus(reinstatementLandingData.PolicyStatus, role, base, props.buttonStatus));
    const cancellationEffectiveDate = useRef(GetCancellationEffectiveDate(reinstatementLandingData));

    const onSchemaChange = (changedSchema, key) => {
        if (props.onSchemaChange) {
            changedSchema = props.onSchemaChange(changedSchema, key);
        }

        if (key && props.onUISchemaChange) {
            setReinstatementSchema(prevSchema => props.onUISchemaChange(prevSchema, changedSchema, key));
        }

        if (key) {
            setButtonStatus({ reinstatementcard: false, showApproveBtn: false, showDownloadFormBtn: false, showRevertBtn: false, showOnRejectBtn: false, showRevertBtn: false, showResendSignature: false, showCalculateBtn: true })
            setReinstatementLandingData({ ...changedSchema });
        }
    }

    useEffect(() => {
        if ([PolicyStatusMaster.ReInstatementInitiated, PolicyStatusMaster.PolicyCancelledReinstatementRequestPendingUWApproval, PolicyStatusMaster.PolicyCancelledReinstatementSignaturePending].includes(reinstatementLandingData.PolicyStatus)) {
            let feesandtaxesamout = 0;
            reinstatementLandingData.FeesAndTaxes.forEach(ft => feesandtaxesamout += ft.Amount);
            setTotalFeesAndTaxes(feesandtaxesamout);
            setButtonStatus(ReinstatementButtonStatus(reinstatementLandingData.PolicyStatus, role, base, props.buttonStatus, true))
        } else {
            reinstatementLandingData.Transaction.RequestedBy = "";
            reinstatementLandingData.Transaction.Reason = "";
            reinstatementLandingData.Transaction.Remarks = "";
            setReinstatementLandingData({ ...reinstatementLandingData })
        }
        scrollToElement(100);
    }, [])

    useEffect(() => {
        if (reinstatementLandingData) {
            reinstatementLandingData.FeesAndTaxes = reinstatementLandingData.FeesAndTaxes.map((obj) => {
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
    }, [reinstatementLandingData])


    const onFormSubmit = async () => {
        try {
            debugger;
            NProgress.start();
            let model = JSON.parse(JSON.stringify(reinstatementLandingData));

            if (props.customValidationHandler) {
                const isValid = props.customValidationHandler(model);
                if (!isValid) return;
            }

            if (model.PolicyStatus !== PolicyStatusMaster.ReInstatementInitiated) {
                model.Transaction.Type = TransactionTypeMaster.REINSTATE;
                model.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.StartReinstatement || routeKeys.ReinstatementLanding;
                model = await save(model, apolloKeys.StartReinstate, env.NEXT_PUBLIC_GQL_END_POINT, base);
            }
            if (model) {
                const calInspecPolicyFee = reinstatementSchema[1].controls.filter(x => x.key === "inspectionfee" || x.key === "policyfee").length > 0;
                if (calInspecPolicyFee) {
                    let isFailed;
                    ({ respModel: model, isFailed } = InspectionAndPolicyFeeCalc(model, reinstatementLandingData, role, base, props.toast));
                    if (isFailed) {
                        NProgress.done()
                        return;
                    }
                }
                model.Transaction.RequestedBy = reinstatementLandingData.Transaction.RequestedBy;
                model.Transaction.Reason = reinstatementLandingData.Transaction.Reason;
                model.Transaction.Remarks = reinstatementLandingData.Transaction.Remarks;
                model.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.RateReinstatement || routeKeys.ReinstatementLanding;

                if (props.preRaterCallHandler) {
                    model = props.preRaterCallHandler(model);
                }

                const raterResp = await save(model, apolloKeys.RateEndorsement, env.NEXT_PUBLIC_GQL_END_POINT, base);
                if (raterResp) {
                    const feesandtaxesamount = raterResp?.FeesAndTaxes?.reduce((total, ft) => total + ft.Amount, 0) ?? 0;
                    setTotalFeesAndTaxes(feesandtaxesamount);
                    setReinstatementLandingData(raterResp);
                    const postSuccessResponse = await props.postSuccess(postActions.RateReinstate, raterResp);
                    if (!postSuccessResponse?.useDefaultFeature && postSuccessResponse?.buttonStatus) {
                        setButtonStatus(ReinstatementButtonStatus(postSuccessResponse.input?.PolicyStatus, role, base, postSuccessResponse.buttonStatus));
                    }
                    else {
                        const hasCancelEffectivedatePassed = moment(raterResp.Transaction.EffectiveDate).isAfter(cancellationEffectiveDate.current);
                        let btnStatus = {};
                        if (role === commonKeys.RoleAgent && hasCancelEffectivedatePassed && raterResp?.PolicyStatus === PolicyStatusMaster.ReInstatementInitiated) {
                            btnStatus = { showActionButton: true, showCalculateBtn: true, reinstatementcard: true, showSubmitForApprovalBtn: false, showSubmitSignature: true, showRevertBtn: true };
                        }
                        else {
                            btnStatus = ReinstatementButtonStatus(raterResp.PolicyStatus, role, base, false, true)
                        }
                        setButtonStatus(btnStatus);
                    }
                }
            }
            scrollToElement(100);
            NProgress.done();

        } catch (error) {
            props.toast && props.toast(alertMsgs.Reinstatement.CalculatePremiumFailure, true);
            NProgress.done();
        }
    }
    const ReinstatePolicy = async () => {
        try {
            NProgress.start();
            const model = JSON.parse(JSON.stringify(reinstatementLandingData));

            model.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.BindReInstate || routeKeys.ReinstatementLanding;
            if (props.updateForms) {
                const formList = await fetchForms(model, base);
                model.Forms = [...formList];
            }
            const respSave = await save(model, apolloKeys.PutMutation, env.NEXT_PUBLIC_GQL_END_POINT, base);

            if (respSave) {
                const resp = await save(respSave, apolloKeys.BindReInstate, env.NEXT_PUBLIC_GQL_END_POINT, base);
                if (resp) {
                    const postSuccessResponse = await props.postSuccess(postActions.BindReInstate, resp);
                    if (postSuccessResponse?.useDefaultFeature) {
                        const transactionType = postSuccessResponse?.input?.Transaction.Type;
                        const formList = await fetchForms(postSuccessResponse?.input, base);
                        const dmsProperties = getDMSProperties(postSuccessResponse?.input, "Reinstatement Document", `${postSuccessResponse?.input.PolicyNumber}_REI_${postSuccessResponse?.input.Transaction.Number}_ReinstatementDocument.pdf`, base);
                        const formsResponse = await GenerateDocument(postSuccessResponse?.input, false, false, formList, { 'Content-Type': 'application/json' }, 'blob', transactionType, base);
                        const uploadResponse = await uploadFilesToDMS(postSuccessResponse?.input, formsResponse, dmsProperties, base);
                        const blobName = dmsProperties?.Filename ?? "";
                        const blobUri = uploadResponse?.[0]?.Uri ?? "";
                        GetPushNotificationAPI(postSuccessResponse?.input, commonKeys.ActionEmailAgent, [], [], "", blobUri, blobName, query.GET_NOTIFICATION_API, base, false, notificationKeys.ApproveReinstatement);
                        props.toast && props.toast(alertMsgs.Reinstatement.PolicyReinstated);
                        router && router.push(routeKeys.ApplicationSummary.toLocaleLowerCase());
                    }
                }
            }
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Reinstatement.PolicyReinstateFailure, true);
            NProgress.done();
        }
    }
    const RevertTransaction = async () => {
        try {
            NProgress.start();
            let model = JSON.parse(JSON.stringify(reinstatementLandingData));
            const resp = await save(model, apolloKeys.RevertTransaction, env.NEXT_PUBLIC_GQL_END_POINT, base);
            if (resp) {
                const postSuccessResp = await props.postSuccess(postActions.RevertTransaction, resp);
                if (postSuccessResp?.useDefaultFeature) {
                    props.toast && props.toast(alertMsgs.Reinstatement.PolicyReinstatedReverted);
                    router && router.push(routeKeys.DashboardAccountHub.toLowerCase());
                }
            }
            NProgress.done()
        } catch (error) {
            props.toast && props.toast(alertMsgs.Reinstatement.PolicyReinstatedRevertedFailed, true);
            NProgress.done()
        }
    }
    const RejectTransaction = async (model) => {
        try {
            NProgress.start();
            const policy = JSON.parse(JSON.stringify(reinstatementLandingData));

            policy.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.RejectTransaction || routeKeys?.ApplicationSummary;
            const resp = await save(policy, apolloKeys.RevertTransaction, env.NEXT_PUBLIC_GQL_END_POINT, base);

            if (resp) {
                resp.Transaction.Remarks = model.RejectRemarks;
                resp.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.RejectTransaction || routeKeys?.ApplicationSummary;
                const respSave = await save(resp, apolloKeys.PutMutation, env.NEXT_PUBLIC_GQL_END_POINT, base);

                if (respSave) {
                    const postSuccessResp = await props.postSuccess(postActions.RejectTransaction, respSave);
                    if (postSuccessResp?.useDefaultFeature) {
                        GetPushNotificationAPI(postSuccessResp?.input, commonKeys.ActionEmailAgent, [], [], "", "", "", query.GET_NOTIFICATION_API, base, true, notificationKeys.RejectReinstatement);
                        props.toast && props.toast(alertMsgs.Reinstatement.PolicyReinstateRejected);
                        router && router.push(routeKeys.DashboardAccountHub.toLowerCase());
                    }
                }
            }
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Reinstatement.PolicyReinstateRejectedFailed, true);
            NProgress.done();
        }
    }
    const DownloadForm = async () => {
        try {
            NProgress.start();
            let formsResponse, policy, isDownload = false;;
            const postSuccessResp = await props.postSuccess(postActions.DownloadDocuments, reinstatementLandingData);
            if (postSuccessResp?.useDefaultFeature) {
                const formList = await fetchForms(postSuccessResp?.input, base);
                formsResponse = await GenerateDocument(postSuccessResp?.input, true, false, formList, { 'Content-Type': 'application/json' }, 'blob', TransactionTypeMaster.REINSTATE, base);
            }
            if (!postSuccessResp.useDefaultFeature && postSuccessResp?.formsResponse) {
                formsResponse = postSuccessResp.formsResponse;
            }
            isDownload = postSuccessResp?.isDownload;
            let url = window.URL.createObjectURL(formsResponse);
            let downloadLink = document.getElementById('filedownload');
            downloadLink.href = url;
            if (!isDownload) {
                const _blob = new Blob([formsResponse], { type: "application/pdf" });
                url = window.URL.createObjectURL(_blob);
                downloadLink.href = url;
                downloadLink.setAttribute("target", "_blank");
            }
            else {
                downloadLink.setAttribute('download', `${postSuccessResp?.input.PolicyNumber || postSuccessResp?.input.QuoteNumber}_Reinstatement_Summary.pdf`);
            }
            downloadLink.click();
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Shared.SomethingWentWrong, true);
            NProgress.done();
        }
    }
    const SubmitForApproval = async () => {
        try {
            NProgress.start();
            const model = updatePolicyStatus(reinstatementLandingData, PolicyStatusMaster.PolicyCancelledReinstatementRequestPendingUWApproval)

            model.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.SubmitForApproval || routeKeys?.ApplicationSummary;
            const resp = await save(model, apolloKeys.PutMutation, env.NEXT_PUBLIC_GQL_END_POINT, base);
            if (resp) {
                const postSuccessResp = await props.postSuccess(postActions.SubmitForReinstateApproval, resp);
                if (postSuccessResp?.useDefaultFeature) {
                    GetPushNotificationAPI(postSuccessResp?.input, commonKeys.ActionEmailUnderWriter, [], [], "", commonKeys.TemplateNameNotificationUnderWriter, "", "", query.GET_NOTIFICATION_API, base, false, notificationKeys.SubmitForReinstatementApproval);
                    props.toast && props.toast(alertMsgs.Reinstatement.PolicyReinstateApprovalPending);
                    router && router.push(routeKeys.ApplicationSummary.toLowerCase());
                }
            }
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Shared.SomethingWentWrong, true);
            NProgress.done();
        }
    }

    const onSubmitSignature = async (model) => {
        try {
            NProgress.start();
            model = updatePolicyStatus(model, PolicyStatusMaster.PolicyCancelledReinstatementSignaturePending);

            model.Transaction.Date = moment().toDate();
            model.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.SubmitForSignature || routeKeys.ReinstatementLandingHelloSign;
            let resp = await save(model, apolloKeys.PutMutation, env.NEXT_PUBLIC_GQL_END_POINT, base);

            if (resp) {
                const postSuccessResp = await props.postSuccess(postActions.SubmitForReinstateSignatures, resp);
                if (postSuccessResp?.useDefaultFeature) {
                    props.toast && props.toast(alertMsgs.Cancellation.SendForInsuredSign);
                    router && router.push(routeKeys.ApplicationSummary.toLowerCase());
                }
            }
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Cancellation.SendForInsuredSignFailed, true);
            NProgress.done();
        }
    }

    const onSubmitResendSignature = async (model) => {
        try {
            NProgress.start();
            model.Transaction.Date = moment().toDate();
            model.NonFunctional.LastSubmittedPage = lastSubmittedPageList?.SubmitForResendSignature || routeKeys.ReinstatementLandingHelloSignResend;
            let resp = await save(model, apolloKeys.PutMutation, env.NEXT_PUBLIC_GQL_END_POINT, base);

            if (resp) {
                const postSuccessResp = await props.postSuccess(postActions.SubmitForResendReinstateSignatures, resp);
                if (postSuccessResp?.useDefaultFeature) {
                    props.toast && props.toast(alertMsgs.Cancellation.ResendForInsuredSign);
                    router && router.push(routeKeys.ApplicationSummary.toLowerCase());
                }
            }
            NProgress.done();
        } catch (error) {
            props.toast && props.toast(alertMsgs.Cancellation.ResendForInsuredSignFailed, true);
            NProgress.done();
        }
    }

    const approveAlertModalForm = {
        header: "",
        title: "Are you sure to proceed with Reinstatement?",
        onSuccess: ReinstatePolicy,
    }

    const revertModalForm = {
        header: "",
        title: "",
        onSuccess: RevertTransaction,
    }

    const rejectModalForm = {
        header: "",
        schema: rejectModalSchema,
        dataModel: {},
        onFormSubmit: RejectTransaction,
        onSchemaChange: (changedSchema) => { },
    }
    const SubmitSignatureForm = {
        schema: submitInsuredSignatureSchema,
        dataModel: reinstatementLandingData,
        onSchemaChange: (model, key) => { },
        onFormSubmit: (dataModel, event) => onSubmitSignature(dataModel)
    }

    const ResendSignatureForm = {
        schema: submitInsuredSignatureSchema,
        dataModel: reinstatementLandingData,
        onSchemaChange: (model, key) => { },
        onFormSubmit: (dataModel, event) => onSubmitResendSignature(dataModel)
    }


    return <>
        <div className="newSection">
            <div className="cntWmenu">
                <ReinstatementLanding
                    config={
                        {
                            PageTitle: config?.PageTitle || "Reinstatement Page",
                            PageDescription: config?.PageDescription || "Page captures details about reinstatement of an application.",
                            favicon: config?.favicon || "images/favicon.ico"
                        }
                    }
                    toggleStatus={buttonStatus}
                    btnName={props.btnName}
                    uiDataModel={reinstatementLandingData}
                    uiSchema={reinstatementSchema}
                    totalFeesAndTaxes={totalFeesAndTaxes}
                    onSchemaChange={onSchemaChange}
                    reinstatementCardConfig={reinstatementKeys.reinstatementCardConfig}
                    ReinstatePolicy={ReinstatePolicy}
                    RevertPolicy={RevertTransaction}
                    onFormSubmit={onFormSubmit}
                    downloadForm={DownloadForm}
                    submitForApproval={SubmitForApproval}
                    ApproveAlertModalForm={approveAlertModalForm}
                    RevertAlertModalForm={revertModalForm}
                    RejectModalForm={rejectModalForm}
                    SubmitSignatureForm={SubmitSignatureForm}
                    ResendSignatureForm={ResendSignatureForm}
                    sideBtnHandler={() => {
                        router && router.push(routeKeys.ApplicationSummary.toLowerCase())
                    }}
                />
            </div>
        </div>
    </>
}

export default ReinstatementFunctional;