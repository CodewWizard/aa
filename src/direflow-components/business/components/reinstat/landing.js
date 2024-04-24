import React, { useEffect, useState } from "react";
import DynamicForm from "../../../core/dynamic-form/dynamic-form";
import PageHead from "../../../layouts/head/head";
import { Popover } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faSquareCheck, faUpload } from "@fortawesome/free-solid-svg-icons";
import ModalPopup from "../../../core/modal/modal";
import CancelReinstateButtons from "../cancelreinstatebtn/buttons";
import DataTable from "../../../core/data-table/datatable";

const ReinstatementLanding = (props) => {
  const {
    config,
    onFormSubmit,
    onSchemaChange,
    downloadForm,
    ReinstatePolicy,
    submitForApproval,
    RequestToReinstatePolicy,
    RevertPolicy,
    ExitHandler,
    RejectModalForm,
    HoldModalForm,
    SubmitSignatureForm,
    closeModalPopUp,
    UploadDocumentModalForm,
    ResendSignatureForm,
    RevertAlertModalForm,
    ApproveAlertModalForm,
    CreateRecessionNotice
  } = props;

  const [reinstatementSchema, setReinstatementSchema] = useState(
    props.uiSchema
  );
  const [reinstatementLandingData, setReinstatementLandingData] = useState(
    props.uiDataModel
  );
  const [toggleStatus, setToggleStatus] = useState(props.toggleStatus);
  const [showModalPopUp, setShowModalPopUp] = useState(false);
  const [modalPopUp, setModalPopUp] = useState({
    header: "",
    schema: [],
    dataModel: {},
    onFormSubmit: () => {},
    onSchemaChange: () => {},
  });
  const [totalFeesAndTaxes, setTotalFeesAndTaxes] = useState(
    props.totalFeesAndTaxes
  );
  const [tableRows, setTableRows] = useState(props.documentTable?.tableRows);
  const [showAlertModalPopUp, setShowAlertModalPopUp] = useState(false);
  const [alertModalPopUp, setAlertModalPopUp] = useState({
    header: "",
    title: "",
    onSuccess: () => {},
  });

  useEffect(() => {
    setReinstatementLandingData(props.uiDataModel);
  }, [props.uiDataModel]);
  useEffect(() => {
    setReinstatementSchema(props.uiSchema);
  }, [props.uiSchema]);
  useEffect(() => {
    setToggleStatus(props.toggleStatus);
  }, [props.toggleStatus]);
  useEffect(() => {
    setTotalFeesAndTaxes(props.totalFeesAndTaxes);
  }, [props.totalFeesAndTaxes]);

  useEffect(()=>{
    if(closeModalPopUp != undefined){
      setShowModalPopUp(!closeModalPopUp);
    }
  }, [closeModalPopUp]);

  // utility functions
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

  let ModalPopUpForm = {
    type: "form",
    dialogClassName: "modal-30w",
    size: "md",
    submitLabel: "SUBMIT",
    closeLabel: "CLOSE",
    header: modalPopUp.header,
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

  const UploadDocumentsTableArgs = {
    tableKey: props.documentTable?.tableKey || "TransactionType",
    keyField: "id",
    cols: props.documentTable?.tableCols,
    rows: tableRows,
    isBordered: true,
    needPagination: false,
    needSearchBar: false,
    needCSVExport: false,
  };

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
      downloadForm(reinstatementLandingData);
    },
    onClickApproveReinstate: async () => {
      setAlertModalPopUp(ApproveAlertModalForm);
      await delay(100);
      setShowAlertModalPopUp(true);
    },
    onClickRequestReinstate: () => {
      RequestToReinstatePolicy();
    },
    onClickRevert: async () => {
      setAlertModalPopUp(RevertAlertModalForm);
      await delay(100);
      setShowAlertModalPopUp(true);
    },
    onClickExit: () => {
      ExitHandler();
    },
    onClickSubmitForApproval: () => {
      const checkValidity = document.getElementById("reinstatementForm")?.checkValidity();
      if(!checkValidity){
        props.toast && props.toast("Please fill/select all mandatory fields", true);
        return;
      }
      submitForApproval();
    },
    onClickSubmitSignature: async () => {
      setModalPopUp(SubmitSignatureForm);
      await delay(100);
      setShowModalPopUp(true);
    },
    onClickResendSignature: async () => {
      setModalPopUp(ResendSignatureForm);
      await delay(100);
      setShowModalPopUp(true);
    },
    onClickCreateRecessionNotice: () => {
      CreateRecessionNotice();
    }
  };
  
  return (
    <>
      <div className="newSection">
        <div className="cntWmenu">
          <PageHead title={config.PageTitle} description={config.PageDesc} 
            favicon = {config?.favicon} />
          <div className="main-content">
            {/* Dynamic Form  */}
            <DynamicForm
              key="reinstatementForm"
              title=""
              formId="reinstatementForm"
              onChangeValidateForm="true"
              positionClass="form"
              titlePositionClass="form-title"
              formPositionClass="dynamic-form"
              actionsPositionClass="form-actions"
              submitPositionClass="btn btn-primary m-3 float-right"
              defaultValues={reinstatementLandingData}
              validators={[]}
              model={reinstatementSchema}
              dataModel={reinstatementLandingData}
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
            {/* Calculate Button */}
            {toggleStatus.showCalculateBtn && (
              <div className="col-md-12 mt-4 text-start">
                <button
                  type="submit"
                  form="reinstatementForm"
                  className="btn btnStyle btnSecon "
                >
                  Calculate
                </button>
              </div>
            )}

            {props.toggleStatus.showDocumentsCard && (
              <div className="main-content mt-4">
                <div className="d-flex justify-content-between mb-2">
                  <h4>Documents</h4>
                  {props.toggleStatus.showUploadDocBtn && <button
                    className="btnStyle btn btnSecon"
                    onClick={() => {
                      setModalPopUp(UploadDocumentModalForm);
                      setShowModalPopUp(true);
                    }}
                  >
                    Upload Documents
                  </button>}
                </div>
                <DataTable {...UploadDocumentsTableArgs} />
            </div>
            )}

            {/*Reinstatement Card  */}
            {toggleStatus.reinstatementcard && (
              <div className="formBox mt-5">
                <div className="boxWrapper-backgr returnPremiContainer commonShadow">
                  <div className="row">
                    <div className="col-lg-10 mx-auto mb-4">
                      <div className="row returnValueHead text-center mt-5">
                        <h3 className="primaryColor3">
                          {props.reinstatementCardConfig?.title ||
                            "PREMIUM INFORMATION"}
                        </h3>
                      </div>
                      <div className="row returnValueHead mt-5 text-center">
                        {props.reinstatementCardConfig?.withoutFeesTxt && (
                          <div className="col">
                            <h5 className="primaryColor3">
                              {props.reinstatementCardConfig?.withoutFeesTxt || "Return Premium Amount"}
                              {props.reinstatementCardConfig
                                ?.subWithoutFeesTxt && (
                                <p className="primaryColor3">
                                  {
                                    props.reinstatementCardConfig
                                      ?.subWithoutFeesTxt
                                  }
                                </p>
                              )}
                            </h5>
                          </div>
                        )}

                        {props.reinstatementCardConfig?.feesAndTaxesTxt && (
                          <div className="col">
                            <div className="d-inline-flex">
                              <h5 className="primaryColor3">
                                {props.reinstatementCardConfig
                                  ?.feesAndTaxesTxt ||
                                  "Reinstatement Fees And Taxes"}
                              </h5>
                              {props.reinstatementCardConfig
                                ?.isSplitOverlay && (
                                <>
                                  &nbsp;
                                  <OverlayTrigger
                                    overlay={renderFeesAndTaxes(
                                      reinstatementLandingData?.FeesAndTaxes
                                    )}
                                  >
                                    <i className="">
                                      <FontAwesomeIcon
                                        icon={faCircleInfo}
                                        size="lg"
                                      />
                                    </i>
                                  </OverlayTrigger>
                                </>
                              )}
                            </div>
                          </div>
                        )}
                        {props.reinstatementCardConfig?.withFeesTxt && (
                          <div className="col">
                            <h5 className="primaryColor3">
                              {props.reinstatementCardConfig?.withFeesTxt ||
                                "REINSTATEMENT PREMIUM WITH FEES & TAXES"}
                            </h5>
                          </div>
                        )}
                      </div>
                      <div className="row returnValue text-center">
                        {props.reinstatementCardConfig?.withoutFeesTxt && (
                          <div className="col">
                            <h3 className="primary-color mt-4 primaryColor11">
                              {reinstatementLandingData?.TotalPremium
                                ?.EffectivePremium >= 0
                                ? currencyFormat(
                                    reinstatementLandingData?.TotalPremium
                                      ?.EffectivePremium
                                  )
                                : "(" +
                                  currencyFormat(
                                    Math.abs(
                                      reinstatementLandingData?.TotalPremium
                                        ?.EffectivePremium
                                    )
                                  ) +
                                  ")"}
                            </h3>
                          </div>
                        )}
                        {props.reinstatementCardConfig?.feesAndTaxesTxt && (
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
                        {props.reinstatementCardConfig?.withFeesTxt && (
                          <div className="col">
                            <h3 className="primary-color mt-4 primaryColor11">
                              {reinstatementLandingData?.TotalPremium
                                ?.EffectivePremiumWithFeesAndTaxes >= 0
                                ? currencyFormat(
                                    reinstatementLandingData?.TotalPremium
                                      ?.EffectivePremiumWithFeesAndTaxes
                                  )
                                : "(" +
                                  currencyFormat(
                                    Math.abs(
                                      reinstatementLandingData?.TotalPremium
                                        ?.EffectivePremiumWithFeesAndTaxes
                                    )
                                  ) +
                                  ")"}
                            </h3>
                          </div>
                        )}
                      </div>

                      {!props.reinstatementCardConfig?.isSplitOverlay && (
                        <div className="row text-center">
                          {
                            <ul>
                              <hr />
                              {reinstatementLandingData?.FeesAndTaxes?.map(
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

                      {/* Signature Added*/}
                      {toggleStatus.showSignature && (
                        <>
                          <div className="row my-2" id="ret-prem-info-2">
                            <h5 className="mb-4">APPLICANT'S STATEMENT</h5>
                            <p className="mb-0">{config.signatureStatement}</p>
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
                        </>
                      )}
                      <br />

                      {/** For downloading form */}
                      <a alt="filedownload" id="filedownload"></a>
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
      </div>
      {/*  */}
      <ModalPopup {...ModalPopUpForm} />
      <ModalPopup {...AlertModalForm} />
      {/*  */}
    </>
  );
};

export default ReinstatementLanding;
