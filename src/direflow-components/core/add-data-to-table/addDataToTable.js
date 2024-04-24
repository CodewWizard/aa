import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AddDataToTable = (props) => {
    const { dataPath, onChange, tempPath, requiredDataFields, controlKey } = props;

    const [formDataModal, setFormDataModal] = useState(props.schemaData);
    const [rowData, setRowData] = useState(props.value || []);
    const [columns, setColumns] = useState(props.columns);
    const [deleteRowIndex, setDeleteRowIndex] = useState(-1);

    const getValueFromStatetByPath = (path, formDataModal) => {
        return path
            ?.split(".")
            .reduce((o, key) => (o && o[key]
                ? o[key] : null), formDataModal);
    };

    const checkRequiredFieldsAndValidate = () => {
        let focused = false;
        let errorCnt = 0;
        requiredDataFields.forEach((field, indx)=>{
            let fieldId, tempField;
            if(field.split(".").length == 2){
                debugger;
                const fieldSplits = field.split(".");
                fieldId = document.getElementsByClassName(fieldSplits[0])[fieldSplits[1]];
                if(fieldSplits[0].includes("select-")){
                    tempField =document.getElementById(fieldSplits[0].split("select-")[1]);
                }
            }
            else{
               fieldId = document.getElementById(field);
            }
            
            if(fieldId){
                if(fieldId?.value?.trim() == "" || tempField?.value?.trim() == ""){
                    fieldId.classList.add("error-show");
                    if(!focused){
                        fieldId.focus();
                        if(tempField) tempField.focus();
                        focused = true;
                    }
                    errorCnt++;
                }
                else{
                    fieldId.classList.remove("error-show");
                }
            }
        });
        return errorCnt ? true : false;
    }

    const onTableAdd = () => {
        debugger;
        if(requiredDataFields){
            if(checkRequiredFieldsAndValidate()){
                return;
            }
        }

        const data = getValueFromStatetByPath(dataPath, formDataModal) ;
        let tempObj = getValueFromStatetByPath(tempPath, formDataModal);
        
        if(props.onAddHandler){
            let validData = props.onAddHandler(tempObj, data);
            if(!validData){
                return false;
            }
        }

        data.push(tempObj);
        setRowData(data);
        onChange(data);
    }

    const onTableDelete = () => {
        debugger;
        let data = [...rowData];
        if(props.onTableDeleteHandler){
            let deleteData = props.onTableDeleteHandler(data, deleteRowIndex, controlKey);
            setDeleteRowIndex(-1);
            if(!deleteData){
                return;
            }
        }
        data.splice(deleteRowIndex, 1);
        setRowData(data);
        setDeleteRowIndex(-1);
        onChange(data);
    }

    const actions = (cell, row, rowIndex, formatExtraData) => {
        return (
            <>
                {props.ignoreIndex?.includes(rowIndex.toString()) ? "" : 
                <a
                    className={"actionIcon text-center"}
                    data-bs-toggle="tooltip"
                    title="Delete"
                    onClick={() => { setDeleteRowIndex(rowIndex) }}
                >
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                </a>}
            </>
        );
    }

    const columnActions = {
        dataField: 'actions',
        text: 'Actions',
        isDummyField: true,
        csvExport: false,
        formatter: actions,
        headerStyle: () => {
            return { textAlign: "center" };
        },
        style: () => {
            return {textAlign: "center"}
        }
    }

    useEffect(() => {
        setFormDataModal(props.schemaData);
        const data = getValueFromStatetByPath(dataPath, props.schemaData);
        if(data?.length > 0){
            setRowData(data);
        }
    }, [props.schemaData]);

    useEffect(() => {
        setRowData(props.value || []);
    }, [props.value]);

    useEffect(()=>{
        if(deleteRowIndex != -1){
            onTableDelete(deleteRowIndex);
        }
      }, [deleteRowIndex]);

    useEffect(()=>{
        debugger;
        setColumns([]);
        const validColumns = props.columns.filter((col)=>{
            return col.tablekey == controlKey;
        });
        setColumns(validColumns);
    }, []);

    return (
        <>
            <div key={`div-${controlKey}`} className={props.parentClass}>
                <div className='row'>
                    <div className='col-md-12 mt-3 text-end mb-4'>
                        <button onClick={onTableAdd} type="button" id="submitsetViolationForm" className="btn btnStyle btnPrim">{props.btnLabel || "Add"}</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='singleBox customDataTable alignBottTable'>
                            <BootstrapTable key={controlKey} noDataIndication={"No Data Added"} keyField={props.keyField} bordered={false} columns={[...columns,columnActions]} data={rowData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddDataToTable;
