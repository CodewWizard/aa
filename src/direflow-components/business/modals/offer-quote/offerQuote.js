import React from "react";
import ModalPopup from "../../../core/modal/modal";

const OfferQuote = (props) => {
  return (
    <>
      <a
        id="btnAdjustPremium"
        className="btnStyle btnPrim display-block mb-10"
        onClick={() => {}}
        style={{ textDecoration: "none" }}
      >
        Approve Formal Quote
      </a>
      <ModalPopup
        type="form"
        size="lg"
        submitLabel="Send Quote"
        closeLabel="Cancel"
        showModal={props.showOfferQuoteModal}
        setShowModal={() => {}}
        formModel={props.offerQuoteData}
        formSchema={props.offerQuoteSchema}
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
export default OfferQuote;
