import React from "react";
import ModalPopup from "../../../core/modal/modal";

const OnRejectOnHold = (props) => {
  const {
    buttonName,
    submitLabel,
    closeLabel,
    showModal,
    setShowModal,
    formModel,
    formSchema,
    onClose,
    onFormSubmit,
    onSchemaChange,
    handleOnHoldReject
  } = props;

  return (
    <>
      <a
        id="onPolicyHoldBtn"
        className="btnStyle btnPrim display-block mb-10"
        style={{ textDecoration: "none" }}
        onClick={handleOnHoldReject}
      >
        {buttonName}
      </a>

      <ModalPopup
        type="form"
        size="md"
        submitLabel={submitLabel}
        closeLabel={closeLabel}
        showModal={showModal}
        setShowModal={setShowModal}
        formModel={formModel}
        formSchema={formSchema}
        onClose={onClose}
        onSchemaChange={onSchemaChange}
        onFormSubmit={onFormSubmit}
      />
    </>
  );
};
export default OnRejectOnHold;
