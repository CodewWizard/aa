import gql from "graphql-tag"
import { CORE_POLICY_FIELDS } from "../../cancellation/dummy/fragment";

export const UPDATE_POLICY = gql`
${CORE_POLICY_FIELDS}
mutation Mutation($input: inpPolicy) {
  putItem(input: $input) {
    ...CorePolicyFields
  }
}
`;

export const GET_NOTIFICATION_API = gql`
query postToNotificationAPI($input: inpQueryNotification) {
   postToNotificationAPI(input: $input)
}`

export const REVERT_TRANSACTION = gql`
  ${CORE_POLICY_FIELDS}
  mutation revertTransaction($input: inpPolicy) {
    revertTransaction(input: $input) {
      ...CorePolicyFields
    }
  }
`;

export const RATE_ENDORSEMENT = gql`
${CORE_POLICY_FIELDS}
mutation RateEndorsementMutation($input: inpPolicy) {
  rateEndorsement(input: $input) {
    ...CorePolicyFields
  }
}
`;

export const BIND_REINSTATE = gql`
${CORE_POLICY_FIELDS}
mutation Mutation($policyNumber: String, $policyReinstatedStatus: String) {
  bindReinstate(PolicyNumber: $policyNumber, policyReinstatedStatus: $policyReinstatedStatus) {
    ...CorePolicyFields
  }
}
`;

export const START_REINSTATE = gql`
${CORE_POLICY_FIELDS}
mutation Mutation($policyNumber: String, $transactionType: String, $effectiveDate: String, $lastSubmittedPage: String) {
  startReinstate(PolicyNumber: $policyNumber, TransactionType: $transactionType, EffectiveDate: $effectiveDate, LastSubmittedPage: $lastSubmittedPage) {
    ...CorePolicyFields
  }
}
`;

export const LOADMASTERSDATA = gql`
query loadMasters($input: inpLoadMasters) {
  loadMasters(input: $input) {
    NotificationKey
	  Lob
	  From
    CC
    BCC
    Subject
    BodyTemplate
    NotificationType
    HasAttachments
    PushToDMS
    DmsFolderName
    To
  }
}
`;