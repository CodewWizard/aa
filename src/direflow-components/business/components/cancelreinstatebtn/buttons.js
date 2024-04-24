import { useEffect, useState } from "react";
import React from "react";

const CancelReinstateButtons = (props) => {
  const { eventHandlerObj } = props;

  const [toggleStatus, setToggleStatus] = useState(props.toggleStatus);
  const [btnName, setBtnName] = useState(props.btnName || {});

  useEffect(() => {
    setToggleStatus(props.toggleStatus);
  }, [props.toggleStatus]);

  const commonBtns = (
    <>
      {toggleStatus?.showApproveBtn && (
        <>
          <div className="row pdfButtH  mx-2">
            <div className="text-center my-4 pe-0">
              <button
                type="button"
                id="approvebtn"
                className="btn btnStyle btnSecon me-0"
                onClick={() => eventHandlerObj.onClickApproveReinstate()}
              >
                {btnName.ApproveReinstateBtnName || "Approve Reinstatement"}
              </button>
            </div>
          </div>
        </>
      )}
      {toggleStatus?.showApproveCancelationBtn && (
        <div className="row pdfButtH mx-2">
          <div className="my-4 pe-0 text-center">
            <button
              className="btn btnStyle btnSecon me-0"
              onClick={() => eventHandlerObj.onClickApproveCancelation()}
            >
              {btnName.ApproveCancelBtnName || "Approve Cancellation"}
            </button>
          </div>
        </div>
      )}
      {toggleStatus?.showRequestToReinstatementBtn && (
        <div className="row pdfButtH mx-2">
          <div className="my-4 pe-0 text-center">
            <button
              className="btn btnStyle btnSecon me-0"
              onClick={() => eventHandlerObj.onClickRequestReinstate()}
            >
              {btnName.RequestToReinstateBtnName || "Request to Reinstatement"}
              {/* Submit For Approval */}
            </button>
          </div>
        </div>
      )}
      {toggleStatus?.showRequestToCancelationBtn && (
        <div className="row pdfButtH mx-2">
          <div className="my-4 pe-0 text-center">
            <button
              className="btn btnStyle btnSecon me-0"
              onClick={() => eventHandlerObj.onClickRequestToCancelation()}
            >
              {btnName.RequestToCancelBtnName || "Request To Cancellation"}
            </button>
          </div>
        </div>
      )}
      {toggleStatus.showSubmitForApprovalBtn && (
        <div className="row pdfButtH">
          <div className="my-4 pe-0 text-center">
            <button
              type="button"
              className="btn btnStyle btnSecon me-0"
              onClick={() => eventHandlerObj.onClickSubmitForApproval()}
            >
              {btnName.SubmitForApprovalBtnName || "Submit for Approval"}
            </button>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      <div class="clearfix">
        <div
          className={
            toggleStatus.showBtnCenter
              ? "d-flex align-items-center my-2 justify-content-center"
              : "d-flex float-start"
          }
        >
          {toggleStatus?.showSendSignatureBtn && (
            <div className="row pdfButtH mx-2">
              <div className="my-4 pe-0 text-center">
                <button
                  className="btn btnStyle btnSecon me-0"
                  onClick={() => eventHandlerObj.onClickSendSignature()}
                >
                  {btnName.SendSignatureBtnName || "Send Signature"}
                </button>
              </div>
            </div>
          )}
          {toggleStatus?.showDownloadSignatureBtn && (
            <div className="row pdfButtH mx-2">
              <div className="my-4 pe-0 text-center">
                <button
                  className="btn btnStyle btnSecon me-0"
                  onClick={() => eventHandlerObj.onClickDownloadSignature()}
                >
                  {btnName.DownloadSignatureBtnName || "Download Signature"}
                </button>
              </div>
            </div>
          )}
          {toggleStatus?.showOnRejectBtn && (
            <>
              <div className="row pdfButtH  mx-2">
                <div className="my-4 pe-0 text-center">
                  <button
                    type="button"
                    className="btnStyle btnClose display-block mb-10"
                    onClick={() => {
                      eventHandlerObj.onClickReject();
                    }}
                  >
                    {btnName.RejectBtnName || "REJECT"}
                  </button>
                </div>
              </div>
            </>
          )}
          {toggleStatus?.showAbandonCancellationBtn && (
            <>
              <div className="row pdfButtH  mx-2">
                <div className="text-center my-4 pe-0">
                  <button
                    type="button"
                    className="btn btnStyle btnSecon me-0 mr-4"
                    onClick={() => eventHandlerObj.onClickAbandonCancellation()}
                  >
                    {btnName.AbandonCancelBtnName || "Abandon Cancellation"}
                  </button>
                </div>
              </div>
            </>
          )}
          {toggleStatus?.showOnHoldBtn && (
            <>
              <div className="row pdfButtH  mx-2">
                <div className="my-4 pe-0 text-center">
                  <button
                    type="button"
                    className="btn btnStyle btnSecon me-0"
                    onClick={() => {
                      eventHandlerObj.onClickHold();
                    }}
                  >
                    {btnName.HoldBtnName || "ON HOLD"}
                  </button>
                </div>
              </div>
            </>
          )}
          {toggleStatus.showBtnCenter && commonBtns}
        </div>
        <div
          className={
            toggleStatus.showBtnCenter
              ? "d-flex align-items-center my-2 justify-content-center"
              : "d-flex float-end"
          }
        >
          {toggleStatus?.showExitBtn && (
            <>
              <div className="row pdfButtH  mx-2">
                <div className="my-4 pe-0 text-center">
                  <button
                    type="button"
                    className="btnStyle btnClose display-block mb-10"
                    onClick={() => eventHandlerObj.onClickExit()}
                  >
                    {btnName.ExitBtnName || "EXIT"}
                  </button>
                </div>
              </div>
            </>
          )}
          {toggleStatus?.showRevertBtn && (
            <div className="row pdfButtH mx-2">
              <div className="my-4 pe-0 text-center">
                <button
                  className="btn btnStyle btnSecon me-0"
                  onClick={() => eventHandlerObj.onClickRevert()}
                >
                  {btnName.RevertBtnName || "Revert"}
                </button>
              </div>
            </div>
          )}
          {toggleStatus?.showDownloadFormBtn && (
            <>
              <div className="row pdfButtH  mx-2">
                <div className="text-center my-4 pe-0">
                  <button
                    type="button"
                    className="btn btnStyle btnSecon me-0 mr-4"
                    onClick={() => eventHandlerObj.onClickViewForms()}
                  >
                    {btnName.DownloadFormBtnName || "View Forms"}
                  </button>
                </div>
              </div>
            </>
          )}
          {toggleStatus?.showCreateNoticeBtn && (
            <>
              <div className="row pdfButtH  mx-2">
                <div className="text-center my-4 pe-0">
                  <button
                    type="button"
                    className="btn btnStyle btnSecon me-0 mr-4"
                    onClick={() => eventHandlerObj.onClickCreateNotice()}
                  >
                    {btnName.CreateNoticeBtnName || "Create Notice"}
                  </button>
                </div>
              </div>
            </>
          )}
          {toggleStatus?.showCreateRecessionNoticeBtn && (
            <>
              <div className="row pdfButtH  mx-2">
                <div className="text-center my-4 pe-0">
                  <button
                    type="button"
                    className="btn btnStyle btnSecon me-0 mr-4"
                    onClick={() => eventHandlerObj.onClickCreateRecessionNotice()}
                  >
                    {btnName.CreateRecessionNoticeBtnName || "Create Recession Notice"}
                  </button>
                </div>
              </div>
            </>
          )}
          {toggleStatus?.showOverrideReturnPremium && (
            <>
              <div className="row pdfButtH  mx-2">
                <div className="text-center my-4 pe-0">
                  <button
                    type="button"
                    className="btn btnStyle btnSecon me-0 mr-4"
                    onClick={() => eventHandlerObj.onClickOverrideReturnPremium()}
                  >
                    {btnName.OverrideReturnPremiumBtnName || "Adjust premium"}
                  </button>
                </div>
              </div>
            </>
          )}
          {toggleStatus?.showOverrideFees && (
            <>
              <div className="row pdfButtH  mx-2">
                <div className="text-center my-4 pe-0">
                  <button
                    type="button"
                    className="btn btnStyle btnSecon me-0 mr-4"
                    onClick={() => eventHandlerObj.onClickOverrideFees()}
                  >
                    {btnName.OverrideFeesBtnName || "Adjust fees"}
                  </button>
                </div>
              </div>
            </>
          )}
          {toggleStatus?.showSubmitSignature && (
            <>
              <div className="row pdfButtH  mx-2">
                <div className="text-center my-4 pe-0">
                  <button
                    type="button"
                    className="btn btnStyle btnSecon me-0 mr-4"
                    onClick={() => eventHandlerObj.onClickSubmitSignature()}
                  >
                    {btnName.SubmitSignatureBtnName || "Send for Signature"}
                  </button>
                </div>
              </div>
            </>
          )}
          {toggleStatus?.showResendSignature && (
            <>
              <div className="row pdfButtH  mx-2">
                <div className="text-center my-4 pe-0">
                  <button
                    type="button"
                    className="btn btnStyle btnSecon me-0 mr-4"
                    onClick={() => eventHandlerObj.onClickResendSignature()}
                  >
                    {btnName.ResendSignatureBtnName || "Resend for Signature"}
                  </button>
                </div>
              </div>
            </>
          )}
          
          {!toggleStatus.showBtnCenter && commonBtns}
        </div>
      </div>
    </>
  );
};

export default CancelReinstateButtons;
