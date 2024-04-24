import { summaryActionButtonsKeys } from "./keys"

const policyStatusMaster = {
  QuoteIndication: 'Quote Indication',
  Submission: 'Submission', // when we move from Quote to Application
  SubmissionDeclined: "Submission Declined",
  SubmissionDeclinedByUW: "Submission Declined by UW",
  ReferralAwaitingUWReview: 'Referral - Awaiting UW Review', // When UW rules are hit
  QuoteExpired: 'Quote Expired', // Calcualated in batch Job based on no.OfDays Quote is old
  QuoteOffered: 'Quote Offered', // When UW approve and offer Quote submitted to him by agent
  UWQuoteDeclined: 'UW - Quote Declined', // When underwriter declines Quote
  BindSignaturePending: 'Bind Signature Pending', //When Bind Signature is pending by Insured and Agent 
  BindRequestAwaitingUWApproval: 'Bind Request - Awaiting UW Approval', // Agent submitted the application now, waiting for UW approval
  RetailerQuoteDeclined: 'Retailer - Quote Declined', // When Agent rejects the policy
  PolicyInForce: 'Policy In Force', // UW Approves the policy
  BindRequestDeclinedbyUW: 'Bind Request Declined by UW', // UW declined bind request by Agent
  BindRequestonHold: 'Bind Request on Hold', // UW put policy in application on Hold coz some documents or something 
  //PolicyInForceEndorsed: 'Policy In Force-Endorsed', // UW approves endorsed policy submitted
  EndorsementInitiated: "Endorsement Initiated",
  EndorsementRequestAwaitingUWApproval: "Policy In Force - Endorsement Request Awaiting UW Approval",
  EndorsementRequestOnHold: "Policy In Force - Endorsement Request On Hold",
  CancellationInitiated: "Cancellation Initiated",
  CancellationOnHold: "Cancellation on Hold",
  PolicyInForceCancellationRequestPendingApproval: 'Cancellation Request Pending Approval', // Agents cancels a policy but Waiting for UW approval
  PolicyInForceCancellationSignaturePending: 'Cancellation Signature Pending',
  PolicyCancelled: 'Policy Cancelled', // Policy is cancelled by UW
  ReInstatementInitiated: "Reinstate Initiated",
  PolicyInForceReInstated: 'Policy ReInstated',
  EndorsementRequestDecline: 'Endorsement Declined by UW',
  PolicyCancelledReinstatementRequestPendingUWApproval: 'Reinstatement Request Pending Approval',
  PolicyCancelledReinstatementSignaturePending: 'Reinstatement Signature Pending',
  PolicyCancelledReinstatementSignatureCompleted: 'Reinstatement Signature Completed'
}

const transactionTypeMaster = {
  QUOTE: 'Quote', // for all the Transaction > Type before bind
  APPLICATION: 'Application',
  POLICY: 'Policy', // when policy is bound
  ENDORSEMENT: 'Endorsement', // for all endorsement transactions
  CANCELLATION: 'Cancellation', // for all cancellation
  REINSTATE: 'Reinstate', // for all reinstatement
  RENEWAL: 'Renewal', // for all renewal
}

const transactionStatusMaster = {
  INPROGRESS: 'In-Progress',
  RATED: 'Rated',
  READYTOCOMMIT: 'Ready-To-Commit',
  COMMITTED: 'Committed'
}

const premiumTypeMaster = {
  FLAT: 'Flat',
  PRO_RATE: 'ProRate',
  SHORT_RATE: 'ShortRate'
}

const statusMaster = {
  Active: 'Active',
  InActive: 'InActive'
}

const roleMaster = {
  "Underwriter": [
    {
      key: policyStatusMaster.Submission,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.AdjustPricingAndCommission, summaryActionButtonsKeys.AddOrRemoveOptionalForm, summaryActionButtonsKeys.ApproveAndOfferQuote, summaryActionButtonsKeys.EditSubmission, summaryActionButtonsKeys.DeclineSubmission]
    },
    {
      key: policyStatusMaster.SubmissionDeclined,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.EditSubmission]
    },
    {
      key: policyStatusMaster.SubmissionDeclinedByUW,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.EditSubmission]
    },
    {
      key: policyStatusMaster.QuoteOffered,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.AddOrRemoveOptionalForm, summaryActionButtonsKeys.BindIssuePolicy, summaryActionButtonsKeys.EditQuote, summaryActionButtonsKeys.DeclineQuote]
    },
    {
      key: policyStatusMaster.ReferralAwaitingUWReview,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.AdjustPricingAndCommission, summaryActionButtonsKeys.AddOrRemoveOptionalForm, summaryActionButtonsKeys.ApproveAndOfferQuote, summaryActionButtonsKeys.EditSubmission, summaryActionButtonsKeys.DeclineSubmission]
    },
    {
      key: policyStatusMaster.UWQuoteDeclined,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.EditSubmission]
    },
    {
      key: policyStatusMaster.RetailerQuoteDeclined,
      value: [summaryActionButtonsKeys.UnderwrittingRules]
    },
    {
      key: policyStatusMaster.QuoteExpired,
      value: [summaryActionButtonsKeys.RefreshSubmission]
    },
    {
      key: policyStatusMaster.BindSignaturePending,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.AddOrRemoveOptionalForm, summaryActionButtonsKeys.BindIssuePolicy, summaryActionButtonsKeys.EditQuote, summaryActionButtonsKeys.DeclineSubmission]
    },
    {
      key: policyStatusMaster.BindRequestAwaitingUWApproval,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.BindIssuePolicy, summaryActionButtonsKeys.EditQuote, summaryActionButtonsKeys.OnHoldBindRequest, summaryActionButtonsKeys.DeclineBindRequest]
    },
    {
      key: policyStatusMaster.BindRequestDeclinedbyUW,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.EditSubmission]
    },
    {
      key: policyStatusMaster.BindRequestonHold,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.BindIssuePolicy, summaryActionButtonsKeys.EditQuote, summaryActionButtonsKeys.DeclineBindRequest]
    },
    {
      key: policyStatusMaster.PolicyInForce,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.EndorsePolicy, summaryActionButtonsKeys.CancelPolicy]
    },
    {
      key: policyStatusMaster.EndorsementInitiated,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.EndorsePolicy, summaryActionButtonsKeys.CancelPolicy]
    },
    {
      key: policyStatusMaster.EndorsementRequestAwaitingUWApproval,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.EndorsePolicy, summaryActionButtonsKeys.CancelPolicy]
    },
    {
      key: policyStatusMaster.EndorsementRequestOnHold,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.EndorsePolicy, summaryActionButtonsKeys.CancelPolicy]
    },
    {
      key: policyStatusMaster.PolicyInForceCancellationRequestPendingApproval,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.ReviewCancellation]
    },
    {
      key: policyStatusMaster.PolicyCancelled,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.ReinstatePolicy]
    },
    {
      key: policyStatusMaster.CancellationInitiated,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.EndorsePolicy, summaryActionButtonsKeys.CancelPolicy]
    },
    {
      key: policyStatusMaster.PolicyInForceCancellationSignaturePending,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.CancelPolicy]
    },
    {
      key: policyStatusMaster.ReInstatementInitiated,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.ReinstatePolicy]
    },
    {
      key: policyStatusMaster.PolicyCancelledReinstatementRequestPendingUWApproval,
      value: [summaryActionButtonsKeys.UnderwrittingRules, summaryActionButtonsKeys.ReinstatePolicy]
    }
  ],
  "Agent": [
    {
      key: policyStatusMaster.Submission,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.EditSubmission]
    },
    {
      key: policyStatusMaster.SubmissionDeclined,
      value: [summaryActionButtonsKeys.AssignedUWDetails]
    },
    {
      key: policyStatusMaster.SubmissionDeclinedByUW,
      value: [summaryActionButtonsKeys.AssignedUWDetails]
    },
    {
      key: policyStatusMaster.QuoteOffered,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.EditQuote, summaryActionButtonsKeys.SignDocuments, summaryActionButtonsKeys.DeclineQuote]
    },
    {
      key: policyStatusMaster.ReferralAwaitingUWReview,
      value: [summaryActionButtonsKeys.AssignedUWDetails]
    },
    {
      key: policyStatusMaster.UWQuoteDeclined,
      value: [summaryActionButtonsKeys.AssignedUWDetails]
    },
    {
      key: policyStatusMaster.RetailerQuoteDeclined,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.RefreshSubmission]
    },
    {
      key: policyStatusMaster.QuoteExpired,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.RefreshSubmission]
    },
    {
      key: policyStatusMaster.BindSignaturePending,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.SignatureButtons]
    },
    {
      key: policyStatusMaster.BindRequestAwaitingUWApproval,
      value: [summaryActionButtonsKeys.AssignedUWDetails]
    },
    {
      key: policyStatusMaster.BindRequestDeclinedbyUW,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.EditSubmission]
    },
    {
      key: policyStatusMaster.BindRequestonHold,
      value: [summaryActionButtonsKeys.AssignedUWDetails]
    },
    {
      key: policyStatusMaster.PolicyInForce,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.EndorsePolicy, summaryActionButtonsKeys.CancelPolicy]
    },
    {
      key: policyStatusMaster.EndorsementInitiated,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.EndorsePolicy, summaryActionButtonsKeys.CancelPolicy]
    },
    {
      key: policyStatusMaster.EndorsementRequestAwaitingUWApproval,
      value: [summaryActionButtonsKeys.AssignedUWDetails]
    },
    {
      key: policyStatusMaster.EndorsementRequestOnHold,
      value: [summaryActionButtonsKeys.AssignedUWDetails]
    },
    {
      key: policyStatusMaster.PolicyInForceCancellationRequestPendingApproval,
      value: [summaryActionButtonsKeys.AssignedUWDetails]
    },
    {
      key: policyStatusMaster.PolicyInForceCancellationSignaturePending,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.ReviewCancellation]
    },
    {
      key: policyStatusMaster.CancellationInitiated,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.EndorsePolicy, summaryActionButtonsKeys.CancelPolicy]
    },
    {
      key: policyStatusMaster.PolicyCancelled,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.ReinstatePolicy]
    },
    {
      key: policyStatusMaster.ReInstatementInitiated,
      value: [summaryActionButtonsKeys.AssignedUWDetails, summaryActionButtonsKeys.ReinstatePolicy]
    }
  ]
}

export {
  premiumTypeMaster as PremiumTypeMaster, statusMaster as StatusMaster, policyStatusMaster as PolicyStatusMaster,
  transactionTypeMaster as TransactionTypeMaster, transactionStatusMaster as TransactionStatusMaster, roleMaster as RoleMaster
}
