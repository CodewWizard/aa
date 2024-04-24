import React from "react";
import ModalPopup from "../../../core/modal/modal"

const AdjustPremium = (props) => {

  return (
    <>
      <a id="btnAdjustPremium" className="btnStyle btnPrim display-block mb-10" onClick={props.handleAdjustPremium} style={{ textDecoration: 'none' }}>Adjust Premium</a>
      <ModalPopup
        type="form"
        size="md"
        submitLabel="Submit"
        closeLabel="CANCEL"
        showModal={props.showAdjustPremiumModal}
        setShowModal={props.setShowAdjustPremiumModal}
        formModel={props.adjustPremiumData}
        formSchema={props.adjustPremiumSchema}
        onClose={props.handleAdjustPremium}
        onFormSubmit={model => {
          props.onAdjustPremium(model);
        }}
        onSchemaChange={(schema, key) => {
          props.onSchemaChange(schema, key);
        }}
      />
    </>
  );
};
export default AdjustPremium;
