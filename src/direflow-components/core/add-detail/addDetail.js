import React, { useState } from 'react';
import DynamicForm from '../dynamic-form/dynamic-form';
import BootstrapTable from 'react-bootstrap-table-next';

const AddDetail = (props) => {
  const [update, setUpdate] = useState(false);
  const [formDataModal, setFormDataModal] = useState(props.schemaData);
  const [formInfoSchema, setFormInfoSchema] = useState(props.infoModel);

  const onTableAdd = (model) => {
    setUpdate(!update)
    props.onTableAdd(model)
  }

  return (
    <>
      <div className='boxWrapper border-0 px-3 commonShadow'>
        <div className='row'>
          <div className='col-md-12'>
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
              defaultValues={formDataModal}
              validators={[]}
              model={formInfoSchema}
              dataModel={formDataModal}
              onSubmit={(model, e) => {
                // onTableAdd(model);
                onTableAdd(model);
              }}
              onChange={(model, key) => {
                // onChange(model, key);
                props.onChange(model, key);
              }}
              onBlur={(model, key) => { }}
            />
          </div>
          <div className='col-md-12 mt-3 text-center mb-4'>
            <button type="button" onClick={props.onReset} className="btn btnStyle btnReject">{props.resetLabel}</button>
            <button type="submit" form='setViolationForm' id="submitsetViolationForm" className="btn btnStyle btnPrim">{props.saveLabel}</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='singleBox customDataTable alignBottTable'>
              {/* <BootstrapTable keyField="ViolationNumber" bordered={false} columns={props.columns} data={dataObj} /> */}
              <BootstrapTable keyField={props.keyField} bordered={false} columns={props.columns} data={props.rowData} />
            </div>
          </div>
        </div>

      </div>
    </>
  );
  //#endregion

}

export default AddDetail;
