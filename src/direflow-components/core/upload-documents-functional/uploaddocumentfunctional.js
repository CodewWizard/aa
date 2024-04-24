import React, { useEffect, useState } from "react";
import { EmailDocumentDataModel, EmailDocumentSchemaUI, ManualFilesUploadSchemaDATA, UploadDocumentSchema } from "./utilities/schema";
import UploadDocument from "../upload-documents/uploaddocument";

import NProgress from 'nprogress';
// import "nprogress/nprogress.css";
NProgress.configure({
  minimum: 0.85,
  easing: 'ease',
  positionUsing: '',
  speed: 1000,
  trickle: true,
  trickleSpeed: 200,
  showSpinner: true,
  barSelector: '[role="bar"]',
  spinnerSelector: '[role="spinner"]',
  parent: 'body',
  template: `<div class="modalLoader" role="bar">
              <div class="loadBar loadBar1"></div>
              <div class="loadBar loadBar2"></div>
              <div class="loadBar loadBar3"></div>
              <div class="loadBar loadBar4"></div>
              <div class="loadBar loadBar5"></div>
              <div class="loadBar loadBar6"></div>
              <div class="loadBar loadBar7"></div>
              <div class="loadBar loadBar8"></div>
            </div>`,
});

const UploadDocumentFunctional = (props) => {
  const { policy, tableCols, groupColumnName = "TransactionType", fileProps = {}, dmsContainerName, getFilesListFromDMS, uploadFilesToDMS, columnList } = props;
  const [documentList, setDocumentList] = useState([]);
  const [uploadDocSchema, setUploadDocSchema] = useState(props?.uploadDocumentSchema || UploadDocumentSchema);
  const [uploadDataModel, setUploadDataModel] = useState(ManualFilesUploadSchemaDATA);
  const [emailDataModel, setEmailDataModel] = useState(EmailDocumentDataModel);
  const [closeModalPopUp, setCloseModalPopUp] = useState(false);
  const tempAllowedFiles = ["pdf", "xlsx", "csv", "eml", "png", "jpeg", "doc", "docx", "txt", "ppt", "pptx", "xls"];

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const getDocumentList = async () => {
    NProgress.start();
    let quoteDocList = [];
    let policyDocList = [];
    quoteDocList = await getFilesListFromDMS({
      carrierCode: policy.Attributes.Carrier,
      coverholderCode: policy.Attributes.Coverholder,
      lobCode: policy.Attributes.Lob,
      stateCode: policy.Attributes.State,
      referenceNumber: policy.QuoteNumber,
      cloudBlobContainer: dmsContainerName,
    });

    if (policy.PolicyNumber.length > 0 && policy.PolicyNumber != policy.QuoteNumber) {
      policyDocList = await getFilesListFromDMS({
        carrierCode: policy.Attributes.Carrier,
        coverholderCode: policy.Attributes.Coverholder,
        lobCode: policy.Attributes.Lob,
        stateCode: policy.Attributes.State,
        referenceNumber: policy.PolicyNumber,
        cloudBlobContainer: dmsContainerName
      });
    }

    let allDocList = [...quoteDocList.concat(policyDocList)];
    const uniqueDocList = allDocList.reduce((accumulator, current) => {
      if (!accumulator.find((item) => item.Uri === current.Uri)) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);
    let sortedDocList = uniqueDocList.sort(
      (a, b) =>
        new Date(b.transactiondate).getTime() -
        new Date(a.transactiondate).getTime()
    );

    if(columnList?.length>0){
      let tempList = [];
      columnList.forEach(cl=>{
        tempList.push(...sortedDocList.filter(sdl=>sdl[groupColumnName] === cl));
      });
      sortedDocList = [...tempList];
    }

    NProgress.done();
    setDocumentList(sortedDocList);
  };

  const onFileUpload = async (model) => {
    debugger;
    NProgress.start();

    const {allowedFiles = tempAllowedFiles, fileSize = 25*1024*1024} = fileProps;
    // validations for filesSize and fileType.
    if(model.UploadedFiles){
      let fileName = model.UploadedFiles[0]?.name;
      if(allowedFiles && !allowedFiles?.includes(fileName.split(".")[fileName.split(".").length-1]?.toLowerCase())){
        props.toast && props.toast(`Invalid File Type`, true);
        NProgress.done();
        setCloseModalPopUp(new Date().getTime());
        return;
      }
      if(model.UploadedFiles[0].size > fileSize){
        props.toast && props.toast(`File Size is greater than ${parseInt(fileSize/(1024*1024))}MB`, true);
        NProgress.done();
        setCloseModalPopUp(new Date().getTime());
        return;
      }
    }
    const resp = await uploadFilesToDMS(policy, model);
    if (resp) {
      await getDocumentList();

      // Extra conditions based on document type and policy status.
      if (props.updatePolicy) {
        props.updatePolicy(policy, model);
      }
      model = {
        "PolicyNumber": (policy?.PolicyNumber != "") ? policy?.PolicyNumber : policy?.QuoteNumber,
        "DocumentType": "",
        "UploadedFiles": []
      };
      setUploadDataModel(model);
      props.toast && props.toast("Document Uploaded Successfully");
      await delay(100);
      setCloseModalPopUp(new Date().getTime());
    }
    else {
      props.toast && props.toast("Something Went Wrong", true);
    }

    NProgress.done();
  }

  const onEmailDocument = async (dataModel, row) => {
    debugger;
    if (props.EmailDocument) {
      const res = await props.EmailDocument(dataModel, row);
      console.log(res);
    }
    setEmailDataModel({});
    await delay(100);
    setCloseModalPopUp(new Date().getTime());
  }

  const UploadDocumentModalForm = {
    schema: uploadDocSchema,//props?.uploadDocumentSchema || UploadDocumentSchema,
    submitLabel: "Upload",
    dataModel: props?.uploadDataModel || uploadDataModel,
    onSchemaChange: (model, key) => { },
    onFormSubmit: (dataModel, event) => onFileUpload(dataModel),
    dialogClassName: props.extras?.uploadDocDialogClassName || "modal-30w",
    size: props.extras?.uploadDocSize || "md"
  };

  const EmailDocumentModalForm = {
    submitLabel: "Email",
    schema: props?.emailDocumentSchemaUI || EmailDocumentSchemaUI,
    dataModel: props?.emailDataModel || emailDataModel,
    onFormSubmit: async (dataModel, event, Uri) => {
      await onEmailDocument(dataModel, { Uri });
    },
    dialogClassName: props.extras?.emailDialogClassName || "modal-30w",
    size: props.extras?.emailSize || "md"
  };

  const uploadDocArgs = {
    title: "Documents",
    tableKey: groupColumnName || "Index",
    tableCols,
    tableRowData: documentList,
    UploadDocumentModalForm,
    EmailDocumentModalForm,
    isExpandRow: props.isExpandRow != undefined ? props.isExpandRow : true,
    groupByColumn: groupColumnName,
    parentClass: props.parentClass,
    titleClass: props.titleClass,
    tableClass: props.tableClass,
    getDocumentList: props.useRefresh ? getDocumentList : false,
    docactionpos: props.docactionpos,
    getDoc: props.getDoc,
    ignoreFileView: props.ignoreFileView || [],
    hideUploadBtn: props.hideUploadBtn
  };

  useEffect(() => {
    setUploadDataModel((prev) => {
      return {
        ...prev,
        PolicyNumber: policy.PolicyNumber ? policy.PolicyNumber : policy.QuoteNumber,
      }
    });
    if (policy.QuoteNumber != "") getDocumentList();
  }, [policy]);

  useEffect(()=>{
    setUploadDocSchema(prev=>{
      if(!prev) return prev;
      prev.map((card)=>{
        return {
          ...card,
          controls: card.controls?.map((ctrl)=>{
            if(ctrl.key == "noteslabel1"){
              ctrl.value = `* Maximum file size - ${parseInt(fileProps?.fileSize/(1024*1024)) || "25"} MB`;
            }
            else if(ctrl.key == "noteslabel2"){
              ctrl.value = `** Allowed Formats - ${fileProps?.allowedFiles?.join(", ") || tempAllowedFiles.join(", ")}`;
            }
            return ctrl;
          })
        }
      });
      return prev;
    })
  }, []);

  return (
    <>
      {console.log('rendered')}
      <UploadDocument {...uploadDocArgs}
        closeModalPopUp={closeModalPopUp}
      />
    </>
  );
};

export default UploadDocumentFunctional;
