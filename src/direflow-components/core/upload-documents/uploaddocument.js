import React, { useState } from "react";
import DataTable from "../data-table/datatable";
import ModalPopup from "../modal/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faDownload,
  faEnvelopeSquare,
  faEye,
  faRefresh,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import NProgress from 'nprogress';
import mime from 'mime-types';

const UploadDocument = (props) => {
  const {
    UploadDocumentModalForm,
    EmailDocumentModalForm,
    groupByColumn,
    isShowExpandCol,
    closeModalPopUp
  } = props;

  const [modalPopUp, setModalPopUp] = useState({});
  const [showModalPopUp, setShowModalPopUp] = useState(false);

  const [downloadUri, setDownloadUri] = useState({});

  const [tableCols, setTableCols] = useState(props.tableCols);
  const [tableRowData, setTableRowData] = useState(props.tableRowData);
  const [tempTableRowData, setTempTableRowData] = useState(props.tableRowData);

  const pos = {
    start: "left",
    end: "right",
    center: "center",
  };

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const groupByColumnHandler = (column, dataRows) => {
    const result = [];
    const check = [];
    dataRows.forEach((item, indx) => {
      let temp = {};
      if (!check.includes(item[column])) {
        temp[column] = item[column];
        temp["Index"] = indx.toString();
        temp["headerStyle"] = { textAlign: "center" };
        result.push(temp);
        check.push(item[column]);
      }
    });
    return result;
  };

  const getFileExtension = (fileName) => {
    const index = fileName.lastIndexOf('.');
    if (index !== -1) {
      return fileName.substring(index + 1);
    }
    return "pdf";
  }
  const getContentType = (fileName) => {
    const fileExtension = getFileExtension(fileName);
    const contentType = mime.contentType(fileExtension);
    return contentType
  }

  const getDoc = async (fileUrl) => {
    NProgress.start();
    debugger;
    let filename = fileUrl.split("/");
    filename = filename[filename.length-1];
    const doc = await (await fetch(fileUrl)).blob();
    if (doc) {
      const _blob = new Blob([doc], { type: getContentType(filename) });
      const url = URL.createObjectURL(_blob);
      var dlnk = document.getElementById("filedownload");
      dlnk.href = url;
      dlnk.setAttribute("target", "_blank");
      dlnk.click();
    }
    NProgress.done();
  };

  const DocumentsActions = (cell, row, indx) => {
    let filename = row?.Uri?.split("/");
    filename = filename[filename.length-1];
    const fileExtension = getFileExtension(filename);

    return (
      <>
        <div className={`text-${props.docactionpos || "center"}`} key={`actions-${indx}`}>
          <a
            title="Download"
            className="display-inblock actionIcon ms-2"
            href={row.Uri}
            download
          >
            <FontAwesomeIcon icon={faDownload} size="lg" />
          </a>
          <a
            title="Email"
            className="display-inblock actionIcon ms-2"
            onClick={async () => {
              setDownloadUri(row?.Uri);
              setModalPopUp(EmailDocumentModalForm);
              await delay(100);
              setShowModalPopUp(true);
            }}
          >
            <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" />
          </a>
          <a
            title="View"
            className="display-inblock actionIcon ms-2"
            onClick={() => {
              if (props.getDoc) {
                props.getDoc(row?.Uri);
              } else {
                getDoc(row?.Uri);
              }
            }}
            style={props.ignoreFileView?.includes(fileExtension) ? {pointerEvents: "none", opacity: "0.5"} : {}}
          >
            <FontAwesomeIcon icon={faEye} className="fa-lg" />
          </a>
        </div>
      </>
    );
  };

  let ModalPopUpForm = {
    type: modalPopUp.type || "form",
    size: modalPopUp.size || "md",
    dialogClassName: modalPopUp.dialogClassName || "modal-30w",
    submitLabel: modalPopUp?.submitLabel,
    closeLabel: "Close",
    header: modalPopUp?.header,
    showModal: showModalPopUp,
    validators: [],
    formModel: modalPopUp?.dataModel,
    formSchema: modalPopUp?.schema,
    onSchemaChange: (model, key) => {
      modalPopUp.onSchemaChange && modalPopUp.onSchemaChange(model, key);
    },
    onFormSubmit: (dataModel, event) => {
      modalPopUp.onFormSubmit(dataModel, event, downloadUri);
    },
    onClose: (e) => {
      setModalPopUp(prev=>({...prev, dataModel: {}}));
      setShowModalPopUp(false);
    },
    onError: () => (e, model, errors) => {
      modalPopUp.onError && modalPopUp.onError(e, model, errors);
    },
    onBlur: () => {}
  };

  const defaultTableCols = [
    {
      dataField: "TransactionType",
      text: "Transaction Type",
      sort: false,
    },
    {
      dataField: "DocumentType",
      text: "Document Type",
      sort: false,
    },
    {
      dataField: "TransactionDate",
      text: "Transaction Date",
      sort: false,
      hidden: false,
    },
    {
      dataField: "EffectiveDate",
      text: "Effective Date",
      sort: false,
      hidden: false,
    },
    {
      dataField: "action",
      text: "Action",
      sort: false,
      hidden: false,
      formatter: DocumentsActions,
    },
  ];

  const expandRow = {
    renderer: (row) => {
      let expandTableRow = tempTableRowData.filter(
        (item) => item[groupByColumn] === row[groupByColumn]
      );

      return (
        <div className="row m-auto expandRows">
          <table className="table">
            <tbody>
            {expandTableRow.map((item, indx) => {
              return (
                <tr key={`tr-${indx}`}>
                  {tableCols.map((i, ix) => {
                    if (!i.hidden && i.dataField != 'action'){
                      return (
                        item[i.dataField] ? (
                          <td
                            key={`td-${ix}`}
                            style={i.headerStyle && i?.headerStyle()}
                          >
                            {i.dataField != groupByColumn
                              ? i.customFormatter
                                ? i.customFormatter(item[i.dataField], item)
                                : item[i.dataField]
                              : ""}
                          </td>
                        ) : <td key={`td-${ix}`}></td>
                      );
                    }
                  })}
                  <td>
                    <>{DocumentsActions("", item,indx)}</>
                  </td>
                  <td style={{width: "60px"}}></td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      );
    },
    showExpandColumn: isShowExpandCol ? isShowExpandCol : true,
    expandByColumnOnly: isShowExpandCol ? isShowExpandCol : true,
    onlyOneExpanding: true,
    expandColumnPosition: "right",
    expandColumnRenderer: ({ expanded }) => {
      if (expanded) {
        return <FontAwesomeIcon icon={faAngleUp} size="lg" />;
      }
      return <FontAwesomeIcon icon={faAngleDown} size="lg" />;
    },
    className: "p-0 m-0 text-center",
    parentClass: "text-center",
  };

  const UploadDocumentsTableArgs = {
    tableKey: props.tableKey,
    cols: tableCols || defaultTableCols,
    rows: tableRowData,
    isBordered: false,
    needPagination: false,
    needSearchBar: false,
    needCSVExport: false,
    expandRow: props.isExpandRow && expandRow,
    ...props.tableProps,
  };

  useEffect(() => {
    setTableCols((prev) => {
      if(!prev){
        return;
      }
      const incAction = prev.filter(x=>x.dataField == "action");
      if(incAction.length>0){
        return prev;
      }
      return [
        ...prev,
        {
          dataField: "action",
          text: "Action",
          sort: false,
          hidden: false,
          formatter: !props.isExpandRow && DocumentsActions,
          headerStyle: () => {
            return { textAlign: pos[props.docactionpos] || "center" };
          },
        },
      ];
    });
  }, []);

  useEffect(() => {
    setTempTableRowData(props.tableRowData);
    if (props.isExpandRow) {
      setTableRowData(groupByColumnHandler(groupByColumn, props.tableRowData));
    } else {
      setTableRowData(props.tableRowData);
    }
  }, [props.tableRowData]);

  useEffect(()=>{
    debugger;
    if(closeModalPopUp != undefined){
      setModalPopUp(prev=>({...prev, dataModel: {}}));
      setShowModalPopUp(false);
    }
  }, [closeModalPopUp]);

  return (
    <>
      <div className={props.parentClass || "first-table position-relative"}>
        {props.title && (
          <h3 className={props.titleClass || "m-0"}>
            {props.title} &nbsp;
            {props.getDocumentList && <a
            className=""
            onClick={() => {props.getDocumentList()}}
          >
            <FontAwesomeIcon icon={faRefresh} size="lg" />
          </a>}
          </h3>
        )}
        <div className="summaryEdit">
          {!props.hideUploadBtn && <a
            className="edit-2"
            onClick={async () => {
              setModalPopUp(UploadDocumentModalForm);
              await delay(100);
              setShowModalPopUp(true);
            }}
          >
            <FontAwesomeIcon icon={faUpload} size="lg" />
            Upload Document
          </a>}
        </div>
        <div className={props.tableClass || "w-100"}>
          <DataTable {...UploadDocumentsTableArgs} />
        </div>
      </div>

      {modalPopUp?.schema && <ModalPopup {...ModalPopUpForm} />}
      <a alt="filedownload" id="filedownload"></a>
    </>
  );
};

export default UploadDocument;
