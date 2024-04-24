export const EmailDocumentSchemaUI = [
    {
      key: "EmailDocument",
      type: "Card",
      title: "EMAIL DOCUMENT",
      className: "",
      titleClassName: "commonHead commonHeadPadding",
      childsClassName: "",
      controls: [
        {
          key: "emailid",
          label: "Email Id*",
          type: "email",
          props: { required: true, class: "inputText", placeholder: "Email Id"},
          inputClass: "mb-3 flex-nowrap",
          positionClass: "col-md-12",
          isColummnDisplay: false,
          dataPath: "EmailId"
        },
        { 
          key: "optionalcomment", 
          type: "textarea inputTextArea", 
          props: { class: "inputText", rows:"4", cols:"50"}, 
          label: "Add optional email content",
          labelClass: "", 
          inputClass: "",
          positionClass: "col-md-12 mt-4", 
          isColummnDisplay: false, 
          dataPath: "Comments"
        }
      ]
    }
];

export const UploadDocumentSchema = [
    {
      key: "ManualFIlesUpload",
      type: "Card",
      title: "MANUAL UPLOAD",
      className: "",
      titleClassName: "commonHead commonHeadPadding",
      childsClassName: "",
      controls: [
        {
          key: "policynumber",
          label: "QUOTE / POLICY NUMBER*",
          props: { required: true, className: "inputText", disabled: true},
          inputClass: "mb-3 flex-nowrap",
          positionClass: "col-md-6",
          isColummnDisplay: false,
          dataPath: "PolicyNumber"
        },
        {
          key: "documentType",
          label: "DOCUMENT TYPE*",
          props: { required: true, className: "inputText", placeholder: "Document Type" },
          inputClass: "mb-3 flex-nowrap",
          positionClass: "col-md-6",
          isColummnDisplay: false,
          dataPath: "DocumentType"
        },
        { 
          key: "fileupload", 
          type: "file", 
          props: {required: true, className: "form-control", multiple: "multiple", accept: "application/pdf, application/vnd.ms-excel"}, 
          label: "SELECT FILES TO UPLOAD*",
          labelClass: "col-md-4", 
          inputClass: "",
          positionClass: "col-md-12 mt-4", 
          isColummnDisplay: false, 
          dataPath: "UploadedFiles"
        },
        {
          key: "noteslabel1",
          label: "",
          type: "label",
          value: "* Maximum file size - 25 MB",
          props: { className: "" },
          labelClass: "",
          inputClass: "col-md-8",
          positionClass: "col-sm-12 pt-3 pb-0 mb-0 fileuploadNotes",
          isColummnDisplay: false
        },
        {
          key: "noteslabel2",
          label: "",
          type: "label",
          value: "** Allowed Formats - jpeg, jpg, png, gif, bmp, xls, xlsx, doc, docx, odt, txt, pdf, pptx, ppt, rtf, eml, csv",
          props: { className: "" },
          labelClass: "",
          inputClass: "col-md-8",
          positionClass: "col-sm-12 pt-0 pb-0 mb-0 fileuploadNotes",
          isColummnDisplay: false
        }
      ]
    }
]

export const ManualFilesUploadSchemaDATA = {
  "PolicyNumber": "",
  "DocumentType": "",
  "UploadedFiles": []
};

export const EmailDocumentDataModel = {
  EmailId: "",
  Comments: "",
}