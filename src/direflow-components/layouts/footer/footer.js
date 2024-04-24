import React, { useState } from "react";
import ModalPopup from "../../core/modal/modal";

const FooterComponent = (props) => {
  const [saveModal, setSaveModal] = useState(false);
  const toggleSaveModal = () => setSaveModal(!saveModal);
  const [cancelModal, setcancelModal] = useState(false);
  const toggleCancelModal = () => setcancelModal(!cancelModal);

    const onSuccess = (e) => {
    props.onSuccessSaveForLater && props.onSuccessSaveForLater(e);
    props.onSuccessCancelApplication && props.onSuccessCancelApplication(e);
    setSaveModal(false);
    setcancelModal(false);
  }
  
  const onFailure = (e) => {
    props.onFailureSaveForLater && props.onFailureSaveForLater(e);
    setSaveModal(false);
    setcancelModal(false);
  }

  const onClose = (e) => {
    props.onCloseSaveForLater && props.onCloseSaveForLater(e);
    props.onCloseCancelApplication && props.onCloseCancelApplication(e);
    setSaveModal(false);
    setcancelModal(false);
  }


  return (
    <>
      <div className="footButtSec bg-white shadow-lg border-end">
        <div className="row m-auto">
          <div className="col-6 ps-0">
          {
            props.needCustomBtn && 
            <button
              type="button"
              name="closeSearch"
              id="backBtn"
              className={props.customBtnClass || "btnStyle btnReject"}
              onClick={props.onCustomBtnClick}
            >
              {props.customBtnText || 'Custom'}
            </button>}
            {
            props.needBack && 
            <button
              type="button"
              name="closeSearch"
              id="backBtn"
              className={props.backBtnClass || "btnStyle btnReject"}
              onClick={props.onBack}
            >
              {props.backBtnText || 'Back'}
            </button>}
            {
            props.needCancel && 
            <button
              type="button"
              name="closeSearch"
              id="closeSearchBtn"
              className={props.closeBtnClass || "btnStyle btnClose"}
              onClick={toggleCancelModal}
            >
              {props.cancelBtnText || 'Cancel Application'}
            </button>}
          </div>
          <div className="col-6 pe-0 d-flex justify-content-end">
            {
            props.needSaveForLater && 
            <button
              type="button"
              id="saveForLaterBtn"
              className={props.saveBtnClass || "btn btnStyle btnPrim"}
              onClick={toggleSaveModal}
            >
              {props.saveBtnText || 'Save For Later'}
            </button>}
            {
            props.needNext && 
            <button
              type="submit"
              id="btnnext"
              form="pageChangeForm"
              className={props.nextBtnClass || "btn btnStyle btnSecon me-0"}
              onClick={props.onNext}
            >
              {props.nextBtnText || 'Next'}
            </button>}
          </div>
        </div>
      </div>

      {/**Modal for Save For Later */}
      <ModalPopup
        key="SaveForLater"
        type="confirm"
        size="md"
        successLabel="YES"
        failLabel="NO"
        message="Do you want to save Application Information?"
        showModal={saveModal}
        setShowModal={setSaveModal}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />

      {/**Modal for Cancel */}
      <ModalPopup
        key="Cancel"
        type="confirm"
        size="md"
        message="Do you want to cancel Application?"
        successLabel="YES"
        closeLabel="NO"
        showModal={cancelModal}
        setShowModal={setcancelModal}
        onSuccess={onSuccess}
        onClose={onClose}
      />
    </>
  );
};
export default FooterComponent;
