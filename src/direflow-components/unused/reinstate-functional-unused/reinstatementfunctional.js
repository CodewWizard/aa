import React, { useState, useEffect } from "react";
import ReinstatementLanding from "../../business/components/reinstat/landing";
import {
  toggleStatus,
  config,
  reinstatementCardConfig,
  onRejectUISchema,
  onHoldUISchema,
  sendForSignatureSchema,
} from "./utilities/configs";
import NProgress from 'nprogress';

const ReinstatementFunctional = (props) => {

  const { actionName, mutationQuery, requestedPage, userType, keys, save, updatePolicyStatus, triggerNotification, Status } = props;

  const [reinstatementLandingData, setReinstatementLandingData] = useState(
    props.uiDataModel
  );
  const [buttonStatus, setButtonStatus] = useState(props.toggleStatus || toggleStatus);

  let sum = reinstatementLandingData?.FeesAndTaxes?.filter((fee) => fee.Code != "SERVICEFEE").reduce((x, y) => x + y.AnnualAmount, 0);
  const [totalFeesAndTaxes, setTotalFeesAndTaxes] = useState(sum);
  const [closeModalPopUp, setCloseModalPopUp] = useState(true);


  const onSchemaChange = (model, key) => {
    if (model?.SignatureType == "Electronic") {
      setButtonStatus((prev) => {
        return {
          ...prev,
          showActionButton: true,
          showSubmitSignature: true,
          showDownloadFormBtn: false
        }
      });
    }
    else if (model?.SignatureType == "Wet/Handwritten") {
      setButtonStatus((prev) => {
        return {
          ...prev,
          showActionButton: true,
          showSubmitSignature: false,
          showDownloadFormBtn: true
        }
      });
    }
    props.onSchemaChange && props.onSchemaChange(model, key);
  };

  const calculateReinstatementPremium = async (model) => {
    NProgress.start();
    let tempModel = { ...model };

    if (props.preCalculatePremium) {
      tempModel = props.preCalculatePremium(model);
    }

    // check status 
    let reinstateResponse = { ...tempModel };
    if (tempModel.PolicyStatus != Status.ReInstatementInitiated) {
      reinstateResponse = await save(tempModel, actionName.startReinstatement, mutationQuery.startReinstatement, requestedPage.ReinstateLanding, "");
    }

    if (reinstateResponse) {

      if (reinstateResponse.Transaction.Reason == undefined || reinstateResponse.Transaction.Reason == null || reinstateResponse.Transaction.Reason == "") {
        props.toast && props.toast("Please select reinstatement reason", true);
      }
      else {
        if (props.postStartReinstatement) {
          reinstateResponse = props.postStartReinstatement(reinstateResponse, tempModel);
        }
        let raterResponse = await save(reinstateResponse, actionName.RateEndorsement, mutationQuery.rateEndorsement, requestedPage.ReinstateLanding, "");


        if (raterResponse) {
          if (props.postRateEndorsement) {
            raterResponse = props.postRateEndorsement(raterResponse, reinstateResponse);
          }
          const updatedButtonStatus = {
            showCalculateBtn: false,
            reinstatementcard: true,
            showActionButton: true,
            showApproveBtn: true,
            showOnRejectBtn: true,
            showOnHoldBtn: raterResponse.PolicyStatus == keys.reinstatementRequestOnHold && userType == "UW" ? false : true
          }
          setReinstatementLandingData(raterResponse);
          setButtonStatus(prev => {
            let temp = { ...prev, ...updatedButtonStatus };
            return { ...temp, ...props?.additionalStates };
          });
        }
        else {
          console.log("Error in Calculation of Premium");
          props.toast && props.toast("Error in Calculation of Premium", true);
        }
      }
    }
    else {
      console.log("Error in Starting Reinstatement");
      props.toast && props.toast("Error in Starting Reinstatement", true);
    }
    NProgress.done();
  };

  const handleRejectReinstatement = async (policy) => {
    NProgress.start();
    let UpdatedPolicy = reinstatementLandingData;
    UpdatedPolicy.NonFunctional.LastSubmittedPage = requestedPage.ReinstateLanding;
    UpdatedPolicy.Transaction.RejectRemarks = policy.Transaction.RejectRemarks;

    if (props.preRejectReinstatement) {
      policy = props.preRejectReinstatement(policy);
    }
    let respSave = await save(policy, "", mutationQuery.updatePolicy, requestedPage.ReinstateLanding, "");

    // use this prop for some addition mutation like Revert.
    if (props.postSaveRejectRemark) {
      //   const respRevert = await save(respSave, actionName.Revert, mutationQuery.revertTransaction, "", "");
      respSave = await props.postSaveRejectRemark(respSave);
    }

    if (respSave) {
      let resPolicy = await save(respSave, actionName.UpdateStatusAction, mutationQuery.updatePolicyStatus, requestedPage.ReinstateLanding, "");

      if (resPolicy) {
        console.log("Reinstate request has been Rejected");
        props.toast && props.toast("Reinstate request has been Rejected");
        setCloseModalPopUp(new Date().getTime());
        // use this prop to redirect user to accounthub page and notifyUser.
        if (props.postReinstateReject) {
          props.postReinstateReject(resPolicy);
        }
      }
      else {
        console.log("Reinstate Failed to Update Status");
        props.toast && props.toast("Reinstate Failed to Update Status", true);
      }
    }
    else {
      console.log("Failed to Update Policy")
      props.toast && props.toast("Failed to Update Policy", true);
    }

    NProgress.done();
  }

  const handleHoldReinstatement = async (policy) => {
    NProgress.start();
    policy.Transaction.Remarks = reinstatementLandingData?.Transaction?.Remarks;
    policy.NonFunctional.LastSubmittedPage = requestedPage.ReinstateLanding;

    if (props.preHoldReinstatement) {
      policy = props.preHoldReinstatement(policy);
    }

    const resp = await save(policy, "", mutationQuery.updatePolicy, requestedPage.ReinstateLanding, "");

    if (resp) {

      let resPolicy = await save(resp, actionName.UpdateStatusAction, mutationQuery.updatePolicyStatus, requestedPage.ReinstateLanding, "");

      if (resPolicy) {
        props.toast && props.toast("Policy Reinstatement On Hold");
        setCloseModalPopUp(new Date().getTime());

        // use this prop to notify users if needed and to redirect user to accounthub page.
        if (props.postReinstateHold) {
          await props.postReinstateHold(resPolicy);
        }
      }
      else {
        console.log("Someting Went Wrong");
        props.toast && props.toast("Someting Went Wrong", true);
      }
    }
    else {
      console.log("Something Went Wrong");
      props.toast && props.toast("Someting Went Wrong", true);
    }
    NProgress.done();
  }

  const ReinstatePolicy = async () => {
    NProgress.start();
    let tempPolicy = reinstatementLandingData;

    if (props.preApproveReinstatement) {
      tempPolicy = props.preApproveReinstatement(tempPolicy);
    }

    let raterResponse = await save(tempPolicy, "", mutationQuery.updatePolicy, requestedPage.ReinstateLanding, "");

    if (raterResponse) {

      let respSave = await save(raterResponse, actionName.BindReinstate, mutationQuery.bindReinstate, requestedPage.ReinstateLanding, "", -1);

      if (respSave) {
        respSave.PolicyStatus = keys.reinstateStatus;
        if (props.postReinstatePolicy) {
          respSave = await props.postReinstatePolicy(respSave);
        }

        props.toast && props.toast("Policy has been Reinstated successfully");
      }
      else {
        props.toast && props.toast("Something Went Wrong", true);
      }
    }
    else {
      console.log("Error during Rate Policy.");
      props.toast && props.toast("Error during Rate Policy.", true);
    }
    NProgress.done();
  }

  const downloadForm = async (policy) => {
    NProgress.start();

    const resp = await save(policy, "", mutationQuery.updatePolicy, requestedPage.ReinstateLanding, "");
    const printresponse = await triggerNotification(keys.downloadFormKey, "pdf", keys.downloadFormTemplate, resp, {});

    const url = window.URL.createObjectURL(printresponse);
    var dlnk = document.getElementById('filedownload');
    dlnk.href = url;
    dlnk.setAttribute(
      'download',
      `document.pdf`,
    );
    dlnk.click();
    NProgress.done();
  }

  const submitForSignature = async (model) => {
    NProgress.start();

    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (model.InsuredAccount.Communications[2].Value != "" && emailRegex.test(model.InsuredAccount.Communications[2].Value)) {
      model.InsuredAccount.Communications[1].Value = model.InsuredAccount.Communications[2].Value;
      model.InsuredAccount.Communications.pop();
      await save(model, "", mutationQuery.updatePolicy, requestedPage.applicationSummary, "");
      if (props.postSendForSignature) {
        props.postSendForSignature(model);
      }
      setCloseModalPopUp(new Date().getTime());
      props.toast && props.toast("Submit for Signature Successfully");
    }
    else {
      console.log("Email address is not in correct format.");
      props.toast && props.toast("Email address is not in correct format.", true);
    }

    NProgress.done();
  }

  const RejectModalForm = {
    header: "Reject Reinstatement",
    schema: onRejectUISchema,
    dataModel: reinstatementLandingData,
    onSchemaChange: (model, key) => { },
    onFormSubmit: handleRejectReinstatement,
  };

  const HoldModalForm = {
    header: "Hold Reinstatement",
    schema: onHoldUISchema,
    dataModel: reinstatementLandingData,
    onSchemaChange: (model, key) => { },
    onFormSubmit: handleHoldReinstatement,
  };

  const SubmitSignatureForm = {
    header: "E-Sign Email",
    schema: sendForSignatureSchema,
    dataModel: reinstatementLandingData,
    onSchemaChange: (model, key) => { },
    onFormSubmit: submitForSignature,
  };

  useEffect(() => {
    setReinstatementLandingData(props.uiDataModel);
  }, [props.uiDataModel]);

  return (
    <>
      <ReinstatementLanding
        uiDataModel={reinstatementLandingData}
        uiSchema={props.uiSchema}
        config={config}
        toggleStatus={buttonStatus}
        onSchemaChange={onSchemaChange}
        onFormSubmit={calculateReinstatementPremium}
        totalFeesAndTaxes={totalFeesAndTaxes}
        reinstatementCardConfig={reinstatementCardConfig}
        RejectModalForm={RejectModalForm}
        HoldModalForm={HoldModalForm}
        ReinstatePolicy={ReinstatePolicy}
        downloadForm={downloadForm}
        SubmitSignatureForm={SubmitSignatureForm}
        closeModalPopUp={closeModalPopUp}
      />
      <a alt="filedownload" id="filedownload"></a>
    </>
  );
};

export default ReinstatementFunctional;
