import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ModalPopup from "../../../core/modal/modal";

const DynamicButtons = (props) => {
  const [schema, setSchema] = useState(props.buttonSchema);
  const [showModalPopUp, setShowModalPopUp] = useState(false);
  const [modalPopUp, setModalPopUp] = useState({
    header: "",
    schema: [],
    dataModel: {},
    onFormSubmit: () => {},
    onSchemaChange: () => {},
  });

  const position = {
    left: "left",
    right: "right",
    center: "center",
  };

  let ModalPopUpForm = {
    type: "form",
    dialogClassName: modalPopUp.props?.dialogClassName || "modal-30w",
    size: modalPopUp.props?.size || "md",
    submitLabel: modalPopUp.submitLabel || "SUBMIT",
    closeLabel: modalPopUp.closeLabel || "CLOSE",
    header: modalPopUp.header,
    showModal: showModalPopUp,
    validators: [],
    formModel: modalPopUp?.dataModel,
    formSchema: modalPopUp?.schema,
    onBlur: (model, key) => {
      // onBlur(model, key);
    },
    onSchemaChange: (model, key) => {
      modalPopUp.onSchemaChange(model, key);
    },
    onElementClick: (e, key) => {
      // onElementClick(e, key);
    },
    onFormSubmit: (dataModel, event) => {
      modalPopUp.onFormSubmit(dataModel, event);
    },
    onClose: (e) => {
      setShowModalPopUp(false);
    },
  };

  const onClick = (e, item) => {
    item.onClick && item.onClick(e, item.key);
    if (item.isModal) {
      setModalPopUp(item.modalSchema);
      setShowModalPopUp(true);
    }
    props.globalClick && props.globalClick(e, item.key);
  };

  const showhideButtonUsingKey = (showhideButtons) => {
    debugger;
    let temp = [...schema];
    temp = temp.map((item)=>{
      if(showhideButtons?.show && showhideButtons?.show?.includes(item.key)){
        item.hide = false;
      }
      else if(showhideButtons?.hide && showhideButtons?.hide?.includes(item.key)){
        item.hide = true;
      }
      return item;
    });
    
    setSchema(temp);
  };

  const buttonHtml = (item, pos) => {
    return (
      <>
        <button
          style={item.style || {}}
          disabled={item.disabled ? item.disabled : false}
          key={item.key || pos}
          onClick={(e) => {
            onClick(e, item);
          }}
          className={item.class || "btn btnStyle btnSecon me-0 m-2"}
          {...item.props}
        >
          {item.value || "Button"}
        </button>
      </>
    );
  };

  const renderButtons = () => {
    let tempLeft = [];
    let tempCenter = [];
    let tempRight = [];

    schema.forEach((item, pos) => {
      if (item?.position === position.left) {
        tempLeft.push(item);
      } else if (item.position === position.center) {
        tempCenter.push(item);
      } else {
        tempRight.push(item);
      }
    });

    return (
      <>
        {tempLeft.length > 0 && (
          <div className="d-flex float-start">
            {tempLeft?.map((item, pos) => {
              return item.hide ? (
                ""
              ) : (
                buttonHtml(item, pos)
              );
            })}
          </div>
        )}
        {tempCenter.length > 0 && (
          <div className="d-flex align-items-center my-2 justify-content-center">
            {tempCenter?.map((item, pos) => {
              return item.hide ? (
                ""
              ) : (
                buttonHtml(item, pos)
              );
            })}
          </div>
        )}
        {tempRight.length > 0 && (
          <div className="d-flex float-end">
            {tempRight?.map((item, pos) => {
              return item.hide ? (
                ""
              ) : (
                buttonHtml(item, pos)
              );
            })}
          </div>
        )}
      </>
    );
  };

  useEffect(() => {
    setSchema(props.buttonSchema);
  }, [props.buttonSchema]);

  useEffect(() => {
    showhideButtonUsingKey(props.showhideButtons);
  }, [props.showhideButtons]);

  return (
    <>
      <div className="clearfix">{renderButtons()}</div>
      <ModalPopup {...ModalPopUpForm} />
    </>
  );
};

export default DynamicButtons;
