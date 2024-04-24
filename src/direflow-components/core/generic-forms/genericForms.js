import React, { useState, useEffect } from "react";
import DynamicForm from "../dynamic-form/dynamic-form";

const GenericForms = (props) => {
  const [formDataModel, setFormDataModel] = useState([props.infoDataModel]);
  const [index, setIndex] = useState(1);
  const [formInfoSchema, setFormInfoSchema] = useState([...props.infoSchema]);
  const [arr, setArr] = useState(null);

  useEffect(() => {
    setArr(JSON.parse(JSON.stringify(props.infoSchema)));
  }, []);

  const replaceNewIndex = (schema, index) => {
    schema.map((c) => {
      if (c.dataPath) {
        let v = c.dataPath.split(".")[0];
        c.dataPath = c.dataPath.replace(v, index);
      } else {
        let v = c.key.split(".")[0];
        c.key = c.key.replace(v, index);
      }
    });
    return schema;
  };

  const onAddRow = () => {
    setIndex((preValue) => preValue + 1);
    let tempModal = [...formDataModel];
    tempModal.push(props.infoDataModel);
    setFormDataModel(tempModal);

    let schema = props.infoSchema.map((a) => a);
    let controlValues = schema[0].controls.map((v) => v);
    let newControls = controlValues.slice(0, arr[0].controls.length);
    let ctrls = JSON.parse(JSON.stringify(newControls));
    let newIndexs = replaceNewIndex(ctrls, index);
    formInfoSchema[0].controls.push(...newIndexs);
  };

  const onRemoveRow = (model, e) => {
    let name = e.target.name;

    let cpySchema = [...formInfoSchema];
    let controlValues = cpySchema[0].controls;

    let data = controlValues.map((c) => {
      if (c.name && c.name === name) {
        return controlValues.indexOf(c);
      }
    });
    let getClickNo = data.filter((a) => typeof a === "number");
    let index = getClickNo[getClickNo.length - 1];
    if (index < arr[0].controls.length && formInfoSchema[0].controls.length === arr[0].controls.length)
      setFormInfoSchema(cpySchema);
    else {
      cpySchema[0].controls.splice(index - (arr[0].controls.length - 1), index);
      setIndex((preValue) => preValue - 1);
      setFormInfoSchema(cpySchema);
    }
  };

  return (
    <div className="boxWrapper border-0 px-3 commonShadow">
      <div className="row">
        <div className="col-md-12 mt-3 text-center mb-4">
          <button
            type="button"
            onClick={onAddRow}
            form="setGenericForms"
            id="submitsetGenericForms"
            className="btn btnStyle btnPrim"
          >
            {props.addLabel}
          </button>
        </div>
        <div className="col-md-12">
          <>
            <DynamicForm
              key={props.formKey}
              title=""
              formId={props.formId}
              onChangeValidateForm="true"
              positionClass="col-md-12"
              titlePositionClass="form-title"
              formPositionClass="dynamic-form"
              actionsPositionClass="form-actions"
              submitPositionClass="btn btn-primary m-3 float-right"
              defaultValues={formDataModel}
              model={formInfoSchema}
              dataModel={formDataModel}
              onChange={(model, key) => {
                props.onChange(model, key);
              }}
              onElementClick={(formInfoSchema, e) =>
                onRemoveRow(formInfoSchema, e)
              }
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default GenericForms;
