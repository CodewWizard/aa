export const config = {
  PageTitle: "Commercial Auto - Reinstatement",
  PageDesc: "Page captures details about reinstatement of an application.",
  signatureStatement: `I have read the above application and any
    attachments. I declare that the information
    provided in them is true, complete and correct to
    the best of my knowledge and belief. This
    information is being offered to the company as an
    inducement to issue the policy for which I am
    applying.`,
};

export const toggleStatus = {
  showCalculateBtn: true,
  reinstatementcard: false,
  showSignature: false,
  showSubmitForApprovalBtn: false,
  showActionButton: false,
  showOnRejectBtn: false,
  showOnHoldBtn: false,
  showApproveBtn: false,
  showDownloadFormBtn: false,
  showRequestToReinstatementBtn: false,
  showExitBtn: false,
  showRevertBtn: false,
  showBtnCenter: false,
  showSubmitSignature: false,
};

export const reinstatementCardConfig = {
  title: "Return Premium Information",
  withFeesTxt: "Re-instate Premium Amount",
  isSplitOverlay: true,
};

export const onRejectUISchema = [
  {
    key: "rejectremark",
    type: "Card",
    title: "REJECT REMARK",
    className: " mt-2",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "",
    controls: [
      {
        key: "enterRejectRemark",
        label: "",
        type: "textarea",
        props: {
          required: true,
          class: "inputText",
          rows: "4",
          cols: "50",
          placeholder: "Enter Remark",
          maxlength: "200",
        },
        labelClass: "inputLabel",
        positionClass: "col-md-12",
        isColummnDisplay: false,
        errorMessage: "Please enter Remark",
        dataPath: "Transaction.RejectRemarks",
      },
    ],
  },
];

export const onHoldUISchema = [
  {
    key: "onholdremark",
    type: "Card",
    title: "ON HOLD REMARK",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "",
    controls: [
      {
        key: "enterOnHoldRemark",
        label: "",
        type: "textarea",
        props: {
          required: true,
          class: "inputText",
          rows: "4",
          cols: "50",
          placeholder: "Enter Remark",
          maxlength: "200",
        },
        labelClass: "inputLabel",
        positionClass: "col-md-12",
        isColummnDisplay: false,
        errorMessage: "Please enter Remark",
        dataPath: "Transaction.HoldRemarks",
      },
    ],
  },
];

export const sendForSignatureSchema = [
  {
    key: "sendforsignature",
    type: "Card",
    title: "",
    className: "clearfix",
    titleClassName: "commonHead commonHeadPadding",
    childsClassName: "",
    controls: [
      {
        key: "insuredname",
        label: "Insured Name",
        type: "text",
        props: { required: true, disabled: "true", class: "inputText" },
        labelClass: "inputLabel",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        errorMessage: "Please enter Remark",
        dataPath: "InsuredAccount.FirstName",
      },
      {
        key: "phonenumber",
        label: "Phone Number",
        type: "text",
        props: { required: true, disabled: "true", class: "inputText" },
        labelClass: "inputLabel",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        errorMessage: "Please enter Remark",
        dataPath: "InsuredAccount.Communications.0.Value",
      },
      {
        key: "email",
        label: "Email Address",
        type: "text",
        props: { required: true, disabled: "true", class: "inputText" },
        labelClass: "inputLabel",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        errorMessage: "Please enter Remark",
        dataPath: "InsuredAccount.Communications.1.Value",
      },
      {
        key: "manualemail",
        label: "Enter Email Address",
        type: "text",
        props: { required: true, class: "inputText" },
        labelClass: "inputLabel",
        positionClass: "col-md-6",
        isColummnDisplay: false,
        errorMessage: "Please enter Remark",
        dataPath: "InsuredAccount.Communications.2.Value",
      },
    ],
  },
];

export const documentTable = {
  tableCols: [
    {
      dataField: "DocumentType",
      text: "DOCUMENT TYPE",
      sort: false,
      headerStyle: () => {
        return { width: "20%", textAlign: "center" };
      },
    },
    {
      dataField: "TransactionDate",
      text: "Uploaded / Created Date",
      sort: false,
      headerStyle: () => {
        return { width: "25%", textAlign: "center" };
      },
    },
    {
      dataField: "Uri",
      text: "FileUrl",
      sort: false,
      headerStyle: () => {
        return { width: "20%", textAlign: "center" };
      },
      hidden: true,
    },
  ],
};
