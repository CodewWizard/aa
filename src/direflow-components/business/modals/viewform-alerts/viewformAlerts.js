import React from "react";
import ModalPopup from "../../../core/modal/modal"


const ViewFormAlerts = (props) => {

  const { summary, handleViewforms, viewforms, setViewForms, toggleCheckbox, downloadDraft } = props;

  return (
    <>
      <a id="formsPopupBtn" className="btnStyle btnPrim display-block mb-10" style={{ textDecoration: 'none' }} onClick={handleViewforms}>View Forms</a>
      <ModalPopup
        type="confirm"
        size="xl"
        successLabel={(summary.IsPolicyBind == false) ? " Download Draft" : ""}
        closeLabel="Cancel"
        showModal={viewforms}
        setShowModal={setViewForms}
        html={
          props.value["Required Forms"]?.length > 0 &&
          props.value["Required Forms"].map((form, index) =>
            <label className='container-c pb-4' key={index}>
              {
                form.IsChecked == false ?
                  <input name={"form" + index} type="checkbox" onChange={(e) => toggleCheckbox(e, form)}></input>
                  :
                  <input name={"form" + index} type="checkbox" checked disabled></input>
              }
              {form.formDesc} {`(${form.formName})`}
              <span className="checkmark"></span>
            </label>
          )
        }
        onClose={handleViewforms}
        onSuccess={downloadDraft}
        onSchemaChange={(model, key) => { }}
      />
    </>
  );
};
export default ViewFormAlerts;
