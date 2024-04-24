import ReinstateCancelButtons from "./buttons";
import React from "react";

export default {
  title: "Design System/Business/Components/ReinstateCancelButtons",
  component: ReinstateCancelButtons,
};

const toggleStatus = {
  showCalculateBtn: true,

  reinstatementcard: true,

  showSignature: true,
  showSubmitForApprovalBtn: true,

  showActionButton: true,
  showOnRejectBtn: true,
  showOnHoldBtn: true,
  showApproveBtn: true,
  showDownloadFormBtn: true,
  showRequestToReinstatementBtn: true,
  showExitBtn: true,
  showRevertBtn: true,

  showApproveCancelationBtn: true,
  showRequestToCancelationBtn: true,
  showAdjustPremiumBtn: true,
  showSendSignatureBtn: true,
  showDownloadSignatureBtn: true,
  showSubmitSignature: true,
  showBtnCenter: false,

  showOverrideReturnPremium: true,
  showOverrideFees: true,

  showCreateRecessionNoticeBtn: true
};

const eventHandlerObj = {
  onClickReject: () => {
    alert("Success");
  },
  onClickHold: () => {
    alert("Success");
  },
  onClickViewForms: () => {
    alert("Success");
  },
  onClickApproveReinstate: () => {
    alert("Success");
  },
  onClickRequestReinstate: () => {
    alert("Success");
  },
  onClickRevert: () => {
    alert("Success");
  },
  onClickAdjustPremium: () => {
    alert("Success");
  },
  onClickSendSignature: () => {
    alert("Success");
  },
  onClickDownloadSignature: () => {
    alert("Success");
  },
  onClickRequestToCancelation: () => {
    alert("Success");
  },
  onClickApproveCancelation: () => {
    alert("Success");
  },
  onClickExit: () => {
    alert("success");
  },
  onClickOverrideReturnPremium: () => {
    alert("OverrideReturnPremium");
  },
  onClickOverrideFees: () => {
    alert("OverrideFees");
  },
};

export const Buttons = () => (
  <ReinstateCancelButtons
    toggleStatus={toggleStatus}
    eventHandlerObj={eventHandlerObj}
  />
);
