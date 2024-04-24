import React from "react";
import ModalPopup from "../../../core/modal/modal"

const OnReview = (props) => {

  return (
    <>
      {
        (props.modalType === "policyUnderReview")
        &&
        <>
        <a id="underReviewBtn" className="btnStyle btnPrim display-block mb-10" style={{ textDecoration: 'none' }} onClick={() => props.onButtonClick}>Under Review</a>
          <ModalPopup
            type="form"
            size="md"
            submitLabel="Under Review"
            closeLabel="Cancel"
            showModal={props.showModal}
            setShowModal={() => {}}
            formModel={props.onReviewData}
            formSchema={props.onReviewSchema}
            onClose={() => {}}
            onFormSubmit={(model) => {
              props.onFormSubmit(model);
            }}
            onSchemaChange={(schema, key) => {
              props.onSchemaChange(schema, key);
            }}
          />
        </>
      }
      {
        (props.modalType === "submissionDecline")
        &&
        <>
        <a id="declineBtn" className="btnStyle btnPrim display-block mb-10" style={{ textDecoration: 'none' }} onClick={() => props.onButtonClick}>Decline Submission</a>
          <ModalPopup
            type="form"
            size="md"
            submitLabel="Decline Submission"
            closeLabel="Cancel"
            showModal={props.showModal}
            setShowModal={() => {}}
            formModel={props.onReviewData}
            formSchema={props.onReviewSchema}
            onClose={() => {}}
            onFormSubmit={(model) => {
              props.onFormSubmit(model);
            }}
            onSchemaChange={(schema, key) => {
              props.onSchemaChange(schema, key);
            }}
          />
        </>
      }
      {
        (props.modalType === "submissionClose")
        &&
        <>
        <a id="closeBtn" className="btnStyle btnPrim display-block mb-10" style={{ textDecoration: 'none' }} onClick={() => props.onButtonClick}>Close Submission</a>
          <ModalPopup
            type="form"
            size="md"
            submitLabel="Close Submission"
            closeLabel="Cancel"
            showModal={props.showModal}
            setShowModal={() => {}}
            formModel={props.onReviewData}
            formSchema={props.onReviewSchema}
            onClose={() => {}}
            onFormSubmit={(model) => {
              props.onFormSubmit(model);
            }}
            onSchemaChange={(schema, key) => {
              props.onSchemaChange(schema, key);
            }}
          />
        </>
      }
    </>
  );
};
export default OnReview;
