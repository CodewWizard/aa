import gql from "graphql-tag"
import { CORE_POLICY_FIELDS } from "./fragment";

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

export const BIND_CANCELLATION = gql`
${CORE_POLICY_FIELDS}
mutation Mutation($policyNumber: String) {
  bindCancellation(PolicyNumber: $policyNumber) {
    ...CorePolicyFields
  }
}
`;

export const START_CANCELLATION = gql`
${CORE_POLICY_FIELDS}
mutation startCancellation($transactionType: String, $policyNumber: String, $effectiveDate: String, $lastSubmittedPage: String) {
  startCancellation(TransactionType: $transactionType, PolicyNumber: $policyNumber, EffectiveDate: $effectiveDate, LastSubmittedPage: $lastSubmittedPage) {
    ...CorePolicyFields
  }
}
`;

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