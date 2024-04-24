import React from "react";
import ModalPopup from "../../../core/modal/modal";

const BindRequest = (props) => {
  console.log(props);
  return (
    <>
      <a
        id="btnAdjustPremium"
        className="btnStyle btnPrim display-block mb-10"
        onClick={() => {}}
        style={{ textDecoration: "none" }}
      >
        Submit Bind Request
      </a>
      <ModalPopup
        type="form"
        size="lg"
        submitLabel="Request to Bind"
        closeLabel="Cancel"
        showModal={props.showBindRequestModal}
        setShowModal={() => {}}
        formModel={props.bindRequestData}
        formSchema={props.bindRequestSchema}
        onClose={() => {}}
        onFormSubmit={(model) => {
          props.onFormSubmit(model);
        }}
        onSchemaChange={(schema, key) => {
          props.onSchemaChange(schema, key);
        }}
      />
    </>
  );
};
export default BindRequest;
