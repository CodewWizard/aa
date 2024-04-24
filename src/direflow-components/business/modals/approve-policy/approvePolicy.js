import React from "react";
import ModalPopup from "../../../core/modal/modal"

const TransactionTypeMaster = {
  QUOTE: 'Quote', // for all the Transaction > Type before bind
  POLICY: 'Policy', // when policy is bound
  ENDORSEMENT: 'Endorsement', // for all endorsement transactions
  CANCELLATION: 'Cancellation', // for all cancellation
  REINSTATE: 'Reinstate', // for all reinstatement
  RENEWAL: 'Renewal' // for all renewal
}

const ApprovePolicy = (props) => {

  const { summary, handleApprovePolicy, approvePolicy, setApprovePolicy, toggleCheckbox } = props;

  return (
    <>
      {
        summary.Transaction.Type == TransactionTypeMaster.ENDORSEMENT
          ?
          <a id="approvePolicyBtn" className="btnStyle btnPrim display-block mb-10" onClick={handleApprovePolicy} style={{ textDecoration: 'none' }} >Approve Endorsement</a>
          :
          <a id="approvePolicyBtn" className="btnStyle btnPrim display-block mb-10" onClick={handleApprovePolicy} style={{ textDecoration: 'none' }} >Approve Policy</a>
      }
      <ModalPopup
        type="confirm"
        size="xl"
        successLabel={(summary.Transaction.Type == TransactionTypeMaster.ENDORSEMENT) ? "Approve Endorsement" : "Bind Policy"}
        closeLabel="Cancel"
        showModal={approvePolicy}
        header="GENERATE FORMS"
        setShowModal={setApprovePolicy}
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
        onClose={handleApprovePolicy}
        onSuccess={(summary.Transaction.Type == TransactionTypeMaster.ENDORSEMENT) ? props?.endorse : props?.bind}
        onSchemaChange={(model, key) => { }}
      />
    </>
  );
};
export default ApprovePolicy;
