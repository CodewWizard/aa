import React from "react";
import ModalPopup from "../../../core/modal/modal"

const AddRemoveOptionalForm = (props) => {

  const { 
    // summary, 
    handleAddRemoveForm, 
    showAddRemoveForm,
    setShowAddRemoveForm, 
    toggleCheckbox
   } = props;

  return (
    <>
      {
          <a id="addorremoveFormBtn" className="btnStyle btnPrim display-block mb-10" onClick={handleAddRemoveForm} style={{ textDecoration: 'none' }} >{props.transactionTypeBtn || "Add/Remove Optional Forms"}</a>
      }
      <ModalPopup
        type="confirm"
        size="xl"
        successLabel={props.successLabel || "Submit"}
        closeLabel={props.closeLabel || "Cancel"}
        showModal={showAddRemoveForm}
        header={props.modalHeader || "GENERATE FORMS"}
        setShowModal={setShowAddRemoveForm}
        html={
          <div className='row'>
            <div className='col-md-6'>
              <div className='formsContainer'>
                <h5>Required Forms</h5>
                <div className="formsBox pt-2">
                  {
                    props.value["Required Forms"]?.length > 0 &&
                    props.value["Required Forms"].map((form, index) =>
                      <>
                        <label className="container-c pb-4">
                          <input data-val="true" data-val-required="The isChecked field is required." name={"form" + index} type="checkbox" disabled checked={form.IsChecked}></input>
                          {form.formName}
                          <span className="checkmark"></span>
                        </label>
                        {/* <input checked="" data-val="true" data-val-required="The isChecked field is required." disabled="" name="[0].isChecked" type="checkbox" value="true"></input> */}
                      </>
                    )
                  }
                </div>
              </div>
            </div>

            {/* // <!------------left table end and 2nd table start---------> */}
            <div className='col-md-6'>
              <div className='formsContainer'>
                <h5>Optional Forms</h5>
                <div className="formsBox pt-2">
                  {
                    props.value["Optional Forms"]?.length > 0 &&
                    props.value["Optional Forms"].map((form, index) =>
                      <label className="container-c pb-4" key={index}>
                        {
                          form.IsChecked == false ?
                            <input data-val="true" data-val-required="The isChecked field is optional." name={"form" + index} type="checkbox" onChange={(e) => toggleCheckbox(e, form)}></input>
                            :
                            <input data-val="true" data-val-required="The isChecked field is optional." name={"form" + index} type="checkbox" checked disabled></input>
                        }
                        {form.formName}
                        <span className="checkmark"></span>
                      </label>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        }
        onClose={handleAddRemoveForm}
        onSuccess={props?.onSuccessHandler}
        onSchemaChange={(model, key) =>{}}
      />
    </>
  );
};
export default AddRemoveOptionalForm;
