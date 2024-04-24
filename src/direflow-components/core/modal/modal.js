import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import DynamicForm from "../dynamic-form/dynamic-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import ReactHtmlParser from "react-html-parser";
// import axios from "axios";

// import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const ModalPopup = (props) => {
  // const { pdfViewerModel,urlObject } = props;
  const [showModal, setShowModal] = useState(props.showModal);
  const [formModel, setFormModel] = useState(props?.formModel);
  const [formSchema, setFormSchema] = useState(props?.formSchema);

  // const fileUrl = pdfViewerModel?.fileUrl;
 
  // const [initialRender, setInitialRender] = useState(false);
  // const [blob, setBlob] = useState(urlObject);

  // const getDoc = async () => {
  //   const doc = await axios.get(fileUrl, { responseType: "blob" });
  //   if (doc) {
  //       const _blob = new Blob([doc.data], { type: "application/pdf" });
  //       const url = URL.createObjectURL(_blob);
  //       var dlnk = document.getElementById("filedownload");
  //       dlnk.href = url;
  //       dlnk.setAttribute("target", "_blank");
  //       dlnk.click();
  //   }
  // };

  // const valueCheck = () => {
  //     setInitialRender(true);
  // };
  // useEffect(() => {
  //     if (initialRender) {
  //         getDoc();
  //     }
  // }, [fileUrl, valueCheck]);

  useEffect(() => {
    setShowModal(props.showModal);
  }, [props.showModal]);

  useEffect(() => {
    setFormModel(props?.formModel);
  }, [props.formModel]);

  useEffect(() => {
    setFormSchema(props?.formSchema);
  }, [props.formSchema]);

  const onSchemaChange = (changedDataModel, key) => {
    if (props.type === "form") {
      setFormModel(changedDataModel);
      props.onSchemaChange(changedDataModel, key);
    }
  }

  const onBlur = (changedDataModel, key) => {
    if (props.type === "form") {
      setFormModel(changedDataModel);
      props.onBlur(changedDataModel, key);
    }
  }

  const onFormSubmit = (dataModel, event) => {
    if (props.type === "form") {
      // props.setShowModal(false);
      setFormModel(dataModel);
      props.onFormSubmit(dataModel, event);
    }
  }

  const onSuccess = (e) => {
    // props.setShowModal(false);
    props.onSuccess && props.onSuccess(e);
  }

  const onFailure = (e) => {
    // props.setShowModal(false);
    props.onFailure && props.onFailure(e);
  }

  const onClose = (e) => {
    // props.setShowModal(false);
    props.onClose && props.onClose(e);
  }

  return (
    <>
      <Modal id={props.type} 
        className="popStyle-border" 
        show={props.showModal} 
        onHide={onClose} 
        backdrop="static"
        keyboard={false} 
        centered size={props.size || "lg"} 
        dialogClassName={props.dialogClassName}
      >
        {
          (props.header?.length > 0 || props.htmlHeader?.length > 0) ?
            <Modal.Header>
              {
                props.htmlHeader ? ReactHtmlParser(props.htmlHeader) : <></>
              }
              <div className="d-flex justify-content-between w-100">
                <h5>{props.header}</h5>
                {props.useCloseIcon && <FontAwesomeIcon onClick={props.closeIconClick} icon={faClose} fontSize="20px" style={{ cursor: "pointer" }} />}
              </div>
            </Modal.Header>
            : ''
        }
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              {
                ["alert", "confirm"].includes(props.type)
                  ?
                  props.message?.length > 0 ? <p>{props.message}</p> : <>{props.html}</>
                  :
                //   ["pdfviewer"].includes(props?.type) ? (
                //     <div>
                //         <DocViewer
                //             documents={blob}
                //             pluginRenderers={DocViewerRenderers}
                //         />
                //         <a onClick={valueCheck} id="filedownload">
                //             Click to View Full Document
                //         </a>
                //     </div>
                // ) :
                (
                  <DynamicForm
                    key="modalForm"
                    title=""
                    formId={props.type + "modalForm"}
                    positionClass="form"
                    titlePositionClass="form-title"
                    formPositionClass="dynamic-form"
                    submitPositionClass="btn btn-primary m-3 float-right"
                    defaultValues={formModel}
                    validators={props.validators || []}
                    model={formSchema}
                    dataModel={formModel}
                    onSubmit={(model, event) => {
                      onFormSubmit(model, event);
                    }}
                    onChange={(model, key) => { onSchemaChange(model, key) }}
                    onBlur={(model, key) => { props.onBlur && props.onBlur(model, key) }}
                    onElementClick={(model, key) => { props.onElementClick(model, key) }}
                    onError={(e, model, errors) => props.onError(e, model, errors)}
                    apiKey={props.apiKey}
                  />
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-end">
          {
            (["confirm", "form"].includes(props.type) && props.closeLabel?.length > 0) &&
            <button type="button" id="closeBTN" className="btn btnStyle btnClose" onClick={onClose}>{props.closeLabel}</button>
          }
          {
            (["confirm"].includes(props.type) && props.failLabel?.length > 0) &&
            <button type="button" id="failureBTN" className="btn btnStyle btnReject" onClick={onFailure}>{props.failLabel}</button>
          }
          {
            (["alert", "confirm", "form"].includes(props.type) && props.successLabel?.length > 0) &&
            <button type="button" id="successBTN" className="btn btnStyle btnPrim" onClick={onSuccess}>{props.successLabel}</button>
          }
          {
            (["form"].includes(props.type) && props.submitLabel?.length > 0) &&
            <button type="submit" id="submitBTN" form={props.type + "modalForm"} className="btn btnStyle btnPrim">{props.submitLabel}</button>
          }
          {
            (["form"].includes(props.type) && props.extraSubmitLabel?.length > 0) &&
            <button type="submit" id="extraSubmitBTN" form={props.type + "modalForm"} className="btn btnStyle btnPrim">{props.extraSubmitLabel}</button>
          }
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalPopup;
