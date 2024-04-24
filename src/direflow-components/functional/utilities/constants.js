export const actions = {
    StartCancellation: "startCancellation",
    BindCancellation: "bindCancellation",
    StartReinstate: "startReinstate",
    BindReInstate: "bindReinstate",
    RevertTransaction: "revertTransaction",
    PutMutation: "putItem",
    RateCancellation: "rateCancellation",
    RateReinstate: "rateReinstate",
    HelloSign: "helloSign",
    HelloSignResend: "helloSignResend",
    RateEndorsement: "rateEndorsement"
}

export const postActions = {
    StartReinstate: "startReinstate",
    BindReInstate: "bindReinstate",
    RateReinstate: "rateReinstate",
    StartCancellation: "startCancellation",
    BindCancellation: "bindCancellation",
    RateCancellation: "rateCancellation",
    RevertTransaction: "revertTransaction",
    RejectTransaction: "rejectTransaction",
    DownloadDocuments: "downloadDocuments",
    ViewDocuments: "viewDocuments",
    SubmitForReinstateApproval: "submitForReinstateApproval",
    SubmitForCancellationApproval: "submitForCancellationApproval",
    SubmitForCancellationSignatures: "submitForCancellationSignatures",
    SubmitForResendCancellationSignatures: "submitForResendCancellationSignatures",
    SubmitForReinstateSignatures: "submitForReinstateSignatures",
    SubmitForResendReinstateSignatures: "submitForResendReinstateSignatures"
}

export const notificationKeys = {
    ApproveCancellation: "ApproveCancellation",
    RejectCancellation: "RejectCancellation",
    SubmitForCancellationApproval: "SubmitForCancellationApproval",
    ApproveReinstatement: "ApproveReinstatement",
    RejectReinstatement: "RejectReinstatement",
    SubmitForReinstatementApproval: "SubmitForReinstatementApproval"

}

export const notesEndPoints = {
    "create": "create-notes",
    "read": "read-notes",
    "update": "update-notes"
}

export const defaultEditorParameters = {
    defaultNumberOfLines: 15,
    defaultHeightOfLines: 31
}