import React, { useState } from "react";
import PageHead from "../../../layouts/head/head";
import { useEffect } from "react";
import DynamicForm from "../../../core/dynamic-form/dynamic-form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import DataTable from "../../../core/data-table/datatable";
import ModalPopup from "../../../core/modal/modal";
import CancelReinstateButtons from "../cancelreinstatebtn/buttons";
import { Popover } from "react-bootstrap";

const CancellationLanding = (props) => {
  const {
    onFormSubmit,
    onSchemaChange,
    downloadForm,
    RequestCancellation,
    // ApproveCancellation,
    sendSignature,
    downloadSignature,
    ExitPage,
    submitForApproval,
    createNoticeHandler,
    CreateRecessionNotice,
    
    UploadDocumentModalForm,
    RejectModalForm,
    HoldModalForm,
    AdjustPremiumForm,
    SubmitSignatureForm,
    OverrideFeesForm,
    OverrideReturnPremiumForm,
    ResendSignatureForm,
    closeModalPopUp,

    RevertAlertModalForm,
    ApproveAlertModalForm,
    AbandonCancelAlertModalForm
  } = props;

  const [cancellationLandingData, setCancellationLandingData] = useState(
    props.cancellationLandingData
  );
  const [cancellationSchema, setcancellationSchema] = useState(
    props.cancellationSchema
  );
  const [toggleStatus, setToggleStatus] = useState(props.toggleStatus);
  const [totalFeesAndTaxes, setTotalFeesAndTaxes] = useState(
    props.totalFeesAndTaxes
  );
  const [tableRows, setTableRows] = useState(props.documentTable?.tableRows);
  const [showModalPopUp, setShowModalPopUp] = useState(false);
  const [showAlertModalPopUp, setShowAlertModalPopUp] = useState(false);
  const [modalPopUp, setModalPopUp] = useState({
    header: "",
    schema: [],
    dataModel: {},
    onFormSubmit: () => {},
    onSchemaChange: () => {},
  });
  const [alertModalPopUp, setAlertModalPopUp] = useState({
    header: "",
    title: "",
    onSuccess: () => {},
  });

  let ModalPopUpForm = {
    type: "form",
    dialogClassName: "modal-30w",
    size:"md",
    submitLabel: modalPopUp?.submitLabel || "SUBMIT",
    closeLabel: modalPopUp?.closeLabel || "CLOSE",
    header: modalPopUp?.header,
    showModal: showModalPopUp,
    validators: [],
    formModel: modalPopUp?.dataModel,
    formSchema: modalPopUp?.schema,
    onBlur: (model, key) => {
      // onBlur(model, key);
    },
    onSchemaChange: (model, key) => {
      modalPopUp.onSchemaChange(model, key);
    },
    onElementClick: (e, key) => {
      // onElementClick(e, key);
    },
    onFormSubmit: (dataModel, event) => {
      modalPopUp.onFormSubmit(dataModel, event);
    },
    onClose: (e) => {
      setShowModalPopUp(false);
    },
  };

  let AlertModalForm = {
    type:"confirm",
    size:"md",
    successLabel:"Ok",
    closeLabel:"Close",
    header:alertModalPopUp.header || "Confirm",
    showModal: showAlertModalPopUp,
    onClose:()=>setShowAlertModalPopUp(false),
    id:"confirmModal",
    html: alertModalPopUp.title || "Are you sure to proceed?",
    onSuccess:() => {
      alertModalPopUp.onSuccess && alertModalPopUp.onSuccess();
      setShowAlertModalPopUp(false);
    }
  }

  useEffect(() => {
    setcancellationSchema(props.cancellationSchema);
  }, [props.cancellationSchema]);

  useEffect(() => {
    setCancellationLandingData(props.cancellationLandingData);
  }, [props.cancellationLandingData]);

  useEffect(() => {
    setToggleStatus(props.toggleStatus);
  }, [props.toggleStatus]);

  useEffect(() => {
    setTableRows(props.documentTable?.tableRows);
  }, [props.tableRows]);

  useEffect(() => {
    setTotalFeesAndTaxes(props.totalFeesAndTaxes);
  }, [props.totalFeesAndTaxes]);

  useEffect(()=>{
    if(closeModalPopUp != undefined){
      setShowModalPopUp(!closeModalPopUp);
    }
  }, [closeModalPopUp]);

  const eventHandlerObj = {
    onClickReject: async () => {
      setModalPopUp(RejectModalForm);
      await delay(100);
      setShowModalPopUp(true);
    },
    onClickHold: async () => {
      setModalPopUp(HoldModalForm);
      await delay(100);
      setShowModalPopUp(true);
    },
    onClickViewForms: () => {
      downloadForm();
    },
    onClickRevert: async () => {
      setAlertModalPopUp(RevertAlertModalForm);
      await delay(100);
      setShowAlertModalPopUp(true);
    },
    onClickAdjustPremium: async () => {
      setModalPopUp(AdjustPremiumForm);
      await delay(100);
      setShowModalPopUp(true);
    },
    onClickSendSignature: () => {
      sendSignature();
    },
    onClickDownloadSignature: () => {
      downloadSignature(cancellationLandingData);
    },
    onClickRequestToCancelation: () => {
      RequestCancellation();
    },
    onClickApproveCancelation: async () => {
      setAlertModalPopUp(ApproveAlertModalForm);
      await delay(100);
      setShowAlertModalPopUp(true);
    },
    onClickExit: () => {
      ExitPage();
    },
    onClickSubmitForApproval: () => {
      const checkValidity = document.getElementById("cancellationForm")?.checkValidity();
      if(!checkValidity){
        props.toast && props.toast("Please fill/select all mandatory fields", true);
        return;
      }
      submitForApproval();
    },
    onClickSubmitSignature: async () => {
      const checkValidity = document.getElementById("cancellationForm")?.checkValidity();
      if(!checkValidity){
        props.toast && props.toast("Please fill/select all mandatory fields", true);
        return;
      }
      setModalPopUp(SubmitSignatureForm);
      await delay(100);
      setShowModalPopUp(true);
    },
    onClickOverrideReturnPremium: async () => {
      setModalPopUp(OverrideReturnPremiumForm);
      await delay(100);
      setShowModalPopUp(true);
    },
    onClickOverrideFees: async () => {
      setModalPopUp(OverrideFeesForm);
      await delay(100);
      setShowModalPopUp(true);
    },
    onClickResendSignature: async () => {
      const checkValidity = document.getElementById("cancellationForm")?.checkValidity();
      if(!checkValidity){
        props.toast && props.toast("Please fill/select all mandatory fields", true);
        return;
      }
      setModalPopUp(ResendSignatureForm);
      await delay(100);
      setShowModalPopUp(true);
    },
    onClickCreateNotice: () => {
      createNoticeHandler();
    },
    onClickAbandonCancellation: async () => {
      setAlertModalPopUp(AbandonCancelAlertModalForm);
      await delay(100);
      setShowAlertModalPopUp(true);
    },
    onClickCreateRecessionNotice: () => {
      CreateRecessionNotice();
    }
  };

  const currencyFormat = (num) => {
    let formattedResp = "";
    try {
      if (typeof num == "string" && num.length > 0) {
        num = num.replaceAll(",", "");
      }
      if (parseInt(num) == 0 || (num && !isNaN(num) && isFinite(num))) {
        num = num.toString();
        return (formattedResp =
          "$" +
          parseFloat(num)
            .toFixed(2)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
      } else return "$0.00";
    } catch (error) {
      console.error("Utilities.Shared.Helpers.CurrencyFormat ", error);
      throw Error();
    }
  };

  const renderFeesAndTaxes = (props) => (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Fees And Taxes Split</Popover.Title>
      <Popover.Content>
        <ol>
          {props?.map((tax) => {
            return (
              <>
                {
                  tax.Amount != 0 && <li>
                    {tax.ProductFeesAndTaxes?.Description} - {tax.Amount < 0 ? `(${currencyFormat(Math.abs(tax.Amount))})`: currencyFormat(tax.Amount)}
                  </li>
                }
              </>
            );
          })}
          {props.filter(i=>i.Amount != 0).length === 0 ? "No Fees And Taxes" : ""}
        </ol>
      </Popover.Content>
    </Popover>
  );

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const UploadDocumentsTableArgs = {
    tableKey: "table1",
    keyField: "id",
    cols: props.documentTable?.tableCols,
    rows: tableRows,
    isBordered: true,
    needPagination: false,
    needSearchBar: false,
    needCSVExport: false,
  };

  return (
    <>
      <div className="newSection">
        <div className="cntWmenu">
          <PageHead
            title={props.config?.PageTitle}
            description={props.config?.PageDesc}
            favicon = {props.config?.favicon}
          />
          <div className="main-content">
            <DynamicForm
              key="cancellationLanding"
              title=""
              formId="cancellationForm"
              onChangeValidateForm="true"
              positionClass="form"
              titlePositionClass="form-title"
              formPositionClass="dynamic-form"
              actionsPositionClass="form-actions"
              submitPositionClass="btn btn-primary m-3 float-right"
              defaultValues={cancellationLandingData}
              validators={[]}
              model={cancellationSchema}
              dataModel={cancellationLandingData}
              onSubmit={async (model) => {
                onFormSubmit(model);
              }}
              onChange={(model, key) => {
                onSchemaChange(model, key);
              }}
              onBlur={() => {
                console.log("blurred");
              }}
              sideBtnHandler={(btnKey, indx)=>{props.sideBtnHandler && props.sideBtnHandler(btnKey, indx)}}
            />
            <br />
            {/* Cancellation form submit button*/}
            <div class="d-flex align-items-center my-2 justify-content-between">
              {toggleStatus.showCalculateBtn && (
                // <div className="col-md-12 text-start">
                <button
                  type="submit"
                  form="cancellationForm"
                  className="btnStyle btn btnSecon"
                >
                  Calculate
                </button>
              )}
              {toggleStatus?.showAdjustPremiumBtn && (
                // <div className="row pdfButtH mx-2">
                // <div className="my-4 pe-0 text-center">
                <button
                  className="btn btnStyle btnSecon me-0"
                  onClick={() => eventHandlerObj.onClickAdjustPremium()}
                >
                  Adjust Return Premium
                </button>
                //   </div>
                // </div>
              )}
            </div>
            {/* Card to show upload document button and a table of uploaded documents */}
            {props.toggleStatus.showDocumentsCard && (
              <div className="main-content">
                <br />
                <h4>Documents</h4>
                <div className="col-md-12 mt-4 align-right">
                  {
                    <button
                      className="btnStyle btn btnSecon"
                      onClick={() => {
                        setModalPopUp(UploadDocumentModalForm);
                        setShowModalPopUp(true);
                      }}
                    >
                      Upload Documents
                    </button>
                  }
                </div>
                <br />
                <DataTable {...UploadDocumentsTableArgs} />
              </div>
            )}

            {/*Cancellation card appearing after validating and submitting the form*/}
            {toggleStatus.cancellationcard && (
              <div className="formBox mt-5">
                <div className="boxWrapper-backgr returnPremiContainer commonShadow">
                  <div className="row">
                    <div className="col-lg-10 mx-auto mb-4">
                      <div className="row returnValueHead text-center mt-5">
                        <div className="col">
                          <h3 className="primaryColor3">
                            {props.cancellationCardConfig?.title ||
                              "PREMIUM INFORMATION"}
                          </h3>
                        </div>
                      </div>
                      <div className="row returnValueHead text-center mt-5">
                        {props.cancellationCardConfig?.withoutFeesTxt && (
                          <div className="col">
                            <h5 className="primaryColor3">
                              {props.cancellationCardConfig?.withoutFeesTxt || "Return Premium Amount"}
                              {props.cancellationCardConfig?.subWithoutFeesTxt && <p className="primaryColor3">
                                {props.cancellationCardConfig?.subWithoutFeesTxt}
                              </p>}
                            </h5>
                          </div>
                        )}
                        {props.cancellationCardConfig?.feesAndTaxesTxt && (
                          <div className="col">
                            <div className="d-inline-flex">
                              <h5 className="primaryColor3">
                                {props.cancellationCardConfig
                                  ?.feesAndTaxesTxt || "Fees And Taxes"}
                                &nbsp;
                              </h5>
                              {props.cancellationCardConfig?.isSplitOverlay && (
                                <OverlayTrigger
                                  overlay={renderFeesAndTaxes(
                                    cancellationLandingData?.FeesAndTaxes
                                  )}
                                >
                                  <i className="">
                                    <FontAwesomeIcon
                                      icon={faCircleInfo}
                                      size="lg"
                                    />
                                  </i>
                                </OverlayTrigger>
                              )}
                            </div>
                          </div>
                        )}
                        {props.cancellationCardConfig?.withFeesTxt && (
                          // removed this class col-lg-4 position-relative text-center
                          <div className="col">
                            <h5 className="primaryColor3">
                              {props.cancellationCardConfig?.withFeesTxt ||
                                "With Fees and Taxes"}
                            </h5>
                          </div>
                        )}
                      </div>
                      <div className="row returnValue text-center">
                        {props.cancellationCardConfig?.withoutFeesTxt && (
                          <div className="col">
                            <h3 className="primary-color mt-4 primaryColor11">
                              {cancellationLandingData?.TotalPremium
                                ?.EffectivePremium < 0
                                ? "(" +
                                  currencyFormat(
                                    Math.abs(
                                      cancellationLandingData?.TotalPremium
                                        .EffectivePremium
                                    )
                                  ) +
                                  ")"
                                : currencyFormat(
                                    cancellationLandingData?.TotalPremium
                                      ?.EffectivePremium
                                  )}
                            </h3>
                          </div>
                        )}
                        {props.cancellationCardConfig?.feesAndTaxesTxt && (
                          // removed this class col-lg-4 text-center
                          <div className="col">
                            <h3 className="primary-color mt-4 primaryColor11">
                              {totalFeesAndTaxes < 0
                                ? "(" +
                                  currencyFormat(Math.abs(totalFeesAndTaxes)) +
                                  ")"
                                : currencyFormat(totalFeesAndTaxes)}
                            </h3>
                          </div>
                        )}
                        {props.cancellationCardConfig?.withFeesTxt && (
                          <div className="col">
                            <h3 className="primary-color mt-4 primaryColor11">
                              {cancellationLandingData?.TotalPremium
                                ?.EffectivePremiumWithFeesAndTaxes < 0
                                ? "(" +
                                  currencyFormat(
                                    Math.abs(
                                      cancellationLandingData?.TotalPremium
                                        ?.EffectivePremiumWithFeesAndTaxes
                                    )
                                  ) +
                                  ")"
                                : currencyFormat(
                                    cancellationLandingData?.TotalPremium
                                      ?.EffectivePremiumWithFeesAndTaxes
                                  )}
                            </h3>
                          </div>
                        )}
                      </div>
                      {!props.cancellationCardConfig?.isSplitOverlay && (
                        <div className="row text-center mt-5">
                          {
                            <ul>
                              <hr />
                              {cancellationLandingData?.FeesAndTaxes?.map(
                                (tax) => {
                                  return (
                                    <li
                                      style={{ margin: "auto" }}
                                      className="d-flex justify-content-center w-50"
                                    >
                                      <span
                                        className="col"
                                        style={{ textAlign: "right" }}
                                      >
                                        {tax.ProductFeesAndTaxes?.Description}
                                      </span>
                                      <span className="col">
                                        $ {tax.Amount}
                                      </span>
                                    </li>
                                  );
                                }
                              )}
                              <hr />
                            </ul>
                          }
                        </div>
                      )}
                      
                      {/* Applicant statement card */}
                      {props.toggleStatus.showSignature && (
                        <>
                          <div className="row my-2" id="ret-prem-info-2">
                            <h5 className="mb-4">APPLICANT'S STATEMENT</h5>
                            <p className="mb-0">
                              {props.config?.signatureStatement}
                            </p>
                            <div className="col-lg-2 ms-auto me-xxl-0 me-lg-5 mt-4">
                              <p className="btnStyle btnPrim mb-10 py-2 px-1">
                                Insured Signature
                                <span className="ms-2">
                                  <FontAwesomeIcon
                                    style={{ fontSize: "20px" }}
                                    icon={faSquareCheck}
                                  />
                                </span>
                              </p>
                            </div>
                          </div>
                          {/* {toggleStatus.showSubmitForApprovalBtn && (
                            <div className="row pdfButtH">
                              <div className="my-4 pe-0 text-center">
                                <button
                                  type="button"
                                  className="btn btnStyle btnSecon me-0"
                                  onClick={submitForApproval}
                                >
                                  Submit For Approval
                                </button>
                              </div>
                            </div>
                          )} */}
                        </>
                      )}

                      {/** For downloading form */}
                      <a alt="filedownload" id="filedownload"></a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {toggleStatus.showActionButton && (
              <>
                <CancelReinstateButtons
                  toggleStatus={toggleStatus}
                  eventHandlerObj={eventHandlerObj}
                  btnName={props.btnName}
                />
              </>
            )}
          </div>
        </div>

        {/* Modal popup */}
        <ModalPopup {...ModalPopUpForm} />
        <ModalPopup {...AlertModalForm} />
      </div>
    </>
  );
};

export default CancellationLanding;
