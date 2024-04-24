import React from "react";
import ModalPopup from "../../../core/modal/modal";

const UnderwriterAlerts = (props) => {
  const {
    uwAlerts,
    setUWAlerts,
    handleViewAlerts,
    summary,
    header,
    successLabel,
    size,
    buttonLabel,
    ruleList1,
    header1,
    ruleList2,
    header2
  } = props;

  const uwAlertBody = (data, header) => {
    return <>
      {header && <h5>{header}</h5>}
      <ul>
        {data?.map((value, index) => (
          <>
            <div className={props.divClass || "row"}>
              <span style={{textAlign:"right"}} className={props.spanClass || "col-1"}>{index + 1}.</span>
              <li className={props.liClass || "col-11 p-0"} key={index}>
                {/*{index + 1}. {value.Description} - {value.Reason}*/}
                {value.Reason}
              </li>
            </div>
          </>
        ))}
      </ul>
    </>
  }

  return (
    <>
      <a
        className="btnStyle btnPrim display-block mb-10"
        style={{ textDecoration: "none" }}
        onClick={handleViewAlerts}
      >
        {buttonLabel}
      </a>
      <ModalPopup
        type="alert"
        size={size}
        successLabel={successLabel}
        header={header}
        showModal={uwAlerts}
        setShowModal={setUWAlerts}
        onSuccess={handleViewAlerts}
        dialogClassName={props.dialogClassName}
        html={
          props.isSplitDisplay? 
          <div className="row">
            <div className="col-md-6">
              {uwAlertBody(ruleList1, header1)}
            </div>
            <div className="col-md-6">
              {uwAlertBody(ruleList2, header2)}
            </div>
          </div> 
          :
          uwAlertBody(summary?.Rules?.MatchingRules)
        }
      />
    </>
  );
};

export default UnderwriterAlerts;
