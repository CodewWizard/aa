const consoleLogs = {
    Utilities: {
        Apollo: {
            Client: {
                ExecuteSubscribe: "Utilities.Apollo.Client.ExecuteSubscribe",
                ExecuteMutation: "Utilities.Apollo.Client.ExecuteMutation",
                ExecuteQuery: "Utilities.Apollo.Client.ExecuteQuery"
            },
            Operations: {
                LoadRenewal: "Utilities.Apollo.Operations.LoadRenewal",
                ProcessRenewalData: "Utilities.Apollo.Operations.ProcessRenewalData",
                LoadPolicyDetail: "Utilities.Apollo.Operations.LoadPolicyDetail",
                LoadPassivePolicies: "Utilities.Apollo.Operations.LoadPassivePolicies",
                CreateVersion: "Utilities.Apollo.Operations.CreateVersion",
                FetchMasterData: "Utilities.Apollo.Operations.FetchMasterData",
                FetchCoverageOptions: "Utilities.Apollo.Operations.FetchCoverageOptions",
                LoadAccountHub: "Utilities.Apollo.Operations.LoadAccountHub",
                LoadRenewels: "Utilities.Apollo.Operations.LoadRenewels",
                ProcessAccountHubData: "Utilities.Apollo.Operations.ProcessAccountHubData",
                SavePayload: "Utilities.Apollo.Operations.SavePayload",
                ValidateLogin: "Utilities.Apollo.Operations.ValidateLogin",
                TriggerNotification: "Utilities.Apollo.Operations.TriggerNotification",
                ValidateOTP: "Utilities.Apollo.Operations.ValidateOTP",
                GetAllByContainer: "Utilities.Apollo.Operations.GetAllByContainer",
                GetProductForms: "Utilities.Apollo.Operations.GetProductForms",
                GenerateDocument: "Utilities.Apollo.Operations.GenerateDocument",
                GetCoverageTemplates: "Utilities.Apollo.Operations.GetCoverageTemplates",
                AddCoverageTemplates: "Utilities.Apollo.Operations.AddCoverageTemplates",
                LoadQuoteDetail: "Utilities.Apollo.Operations.LoadQuoteDetail",
                LoadMultipleRating: "Utilities.Apollo.Operations.LoadMultipleRating",
                GetAnalyticsData: "Utilities.Apollo.Operations.GetAnalyticsData",
                RenewPolicy: "Utilities.Apollo.Operations.RenewPolicy",
                SaveConflicts: "Utilities.Apollo.Operations.SaveConflicts",
                ProcessOOS: "Utilities.Apollo.Operations.ProcessOOS",
                GetHash: "Utilities.Apollo.Operations.GetHash",
                StartEndorsement: "Utilities.Apollo.Operations.StartEndorsement",
                RateEndorsement: "Utilities.Apollo.Operations.RateEndorsement",
                BindEndorsement: "Utilities.Apollo.Operations.BindEndorsement",
                GetPushNotificationAPI: "Utilities.Apollo.Operations.GetPushNotificationAPI"
            }
        },
        Pages: {
            AccountHub: {
                AccounthubDataTableActions: "Utilities.Pages.AccountHub.accounthubDataTableActions",
                LoadDetails: "Utilities.Pages.AccountHub.LoadDetails"
            },
            Application: {
                UploadFilesToDMS: "Utilities.Pages.Application.UploadFilesToDMS",
                GetFilesListFromDMS: "Utilities.Pages.Application.GetFilesListFromDMS",
                GetFileFromDMS: "Utilities.Pages.Application.GetFileFromDMS",
                SendFileInEmail: "Utilities.Pages.Application.SendFileInEmail",
                NotifyUsers: "Utilities.Pages.Application.NotifyUsers",
                FetchFormFactory: "Utilities.Pages.Application.FetchFormFactory",
                AddRequiredForms: "Utilities.Pages.Application.AddRequiredForms",
                GetEmailTemplate: "Utilities.Pages.Application.GetEmailTemplate",
                GetTemplateName: "Utilities.Pages.Application.GetTemplateName",
                GetCategorizedForms: "Utilities.Pages.Application.GetCategorizedForms"
            },
            Endorsement: {
                FetchHistory: "Utilities.Pages.Endorsement.FetchHistory",
                ShowDifferences: "Utilities.Pages.Endorsement.ShowDifferences",
                CheckDiff: "Utilities.Pages.Endorsement.CheckDiff",
                GetPreviousVersion: "Utilities.Pages.Endorsement.GetPreviousVersion",
                GetConflictsForFutureTransactions: "Utilities.Pages.Endorsement.GetConflictsForFutureTransactions",
                SaveTransactionConflicts: "Utilities.Pages.Endorsement.SaveTransactionConflicts",
                SaveOOS: "Utilities.Pages.Endorsement.SaveOOS"
            },
            Shared: {
                SetProgress: "Utilities.Pages.Shared.SetProgress",
                SetNavigation: "Utilities.Pages.Shared.SetNavigation",
                ShowLoader: "Utilities.Pages.Shared.ShowLoader",
                GetStoreState: "Utilities.Pages.Shared.GetStoreState",
                SetInternalState: "Utilities.Pages.Shared.GetStoreState",
                CheckRiskQualification: "Utilities.Pages.Shared.CheckRiskQualification",
                CheckValidExperience: "Utilities.Pages.Shared.CheckValidExperience",
                ValidateLocations: "Utilities.Pages.Shared.ValidateLocations",
                GetCoverageOptions: "Utilities.Pages.Shared.GetCoverageOptions",
                LogoutUser: "Utilities.Pages.Shared.LogoutUser",
                FilterUsersData: "Utilities.Pages.Shared.FilterUsersData",
                GetUsersData: "Utilities.Pages.Shared.GetUsersData",
                ResetPolicy: "Utilities.Pages.Shared.ResetPolicy",
                UpdatePolicyStatus: "Utilities.Pages.Shared.UpdatePolicyStatus",
                UpdateTransactionStatus: 'Utilities.Pages.Shared.UpdateTransactionStatus',
                AddCoverageTemplate: "Utilities.Pages.Shared.AddCoverageTemplate",
                GetDefaultTemplate: "Utilities.Pages.Shared.GetDefaultTemplate",
                TriggerNotification: "Utilities.Pages.Shared.TriggerNotification",
                GetBindStatus: "Utilities.Pages.Shared.GetBindStatus",
                GetLastPage: "Utilities.Pages.Shared.GetLastPage",
                GetHoldStatus: "Utilities.Pages.Shared.GetHoldStatus",
                GetRejectStatus: "Utilities.Pages.Shared.GetRejectStatus",
                GetInsuredSignatureStatus: "Utilities.Pages.Shared.GetInsuredSignatureStatus",
                CallAIM: "Utilities.Pages.Shared.CallAIM",
                UpdateAuditDetails: "Utilities.Pages.Shared.UpdateAuditDetails",
                UpdateCreatedAuditDetails: "Utilities.Pages.Shared.UpdateCreatedAuditDetails",
            },
            Login: {
                ValidateLogin: "Utilities.Pages.Login.ValidateLogin",
                TriggersMasters: "Utilities.Pages.Login.TriggersMasters",
                TriggerAnalyticsData: "Utilities.Pages.Login.TriggerAnalyticsData",
                SetUserRole: "Utilities.Pages.Login.SetUserRole",
                CheckTokenValidity: "Utilities.Pages.Login.CheckTokenValidity",
            },
            Quote: {
                Save: "Utilities.Pages.Quote.Save",
                Bind: "Utilities.Pages.Quote.Bind"
            }
        },
        Shared: {
            Masters: {
                LoadMasters: "Utilities.Shared.Masters.LoadMasters",
                LoadCoverageOptions: "Utilities.Shared.Masters.LoadCoverageOptions",
                LoadMastersByContainer: "Utilities.Shared.Masters.LoadMastersByContainer",
                LoadCoverageTemplates: "Utilities.Shared.Masters.LoadCoverageTemplates"
            },
            Helpers: {
                AxiosPost: "Utilities.Shared.Helpers.AxiosPost",
                AxiosGet: "Utilities.Shared.Helpers.AxiosGet",
                InvalidType: "Utilities.Shared.Helpers.InvalidType",
                CallAPI: "Utilities.Shared.Helpers.CallAPI",
            },
            SchemaFromBlob: {
                FetchUISchema: "Utilities.Shared.SchemaFromBlob.FetchUISchema",
                LoadSchemaFromStorage: "Utilities.Shared.SchemaFromBlob.LoadSchemaFromStorage",
            }
        }
    }
};

const alertMsgs = {
    Login: {
        LoginFailed: "Wrong user id or password. Try again."
    },
    RiskQualification: {
        NotQualifiedRisks: "Some of the Risks are not qualified."
    },
    BusinessInfo: {
        DOTNotFound: "No matching record found.",
        DOTNotEntered: "Please enter a valid DOT Number",
        PolicyExpirationDate: "Policy Expiration Date cannot be before Effective Date"
    },
    Locations: {
        AtLeastOneLocation: "Please add at least one location to proceed !!!",
        AtMostFiveLocation: "At most 5 addresses are allowed !!!",
        AtLeastOneMailingAddress: "At Least 1 Mailing Address is must !!!",
        OnlyOneMailingAddress: "Only one mailing is allowed !!!",
        MailingAddressShouldBeInGA: "Mailing address should be in GA state",
        DuplicateAddress: "Duplicate Address found !!!",
        LocationSaved: "Location Saved Successfully.",
    },
    Shared: {
        TimeOut: "Session Timed Out !!",
        LogOut: "You have successfully logged out from the system.",
        SomethingWentWrong: "Ooops something went wrong !!",
        RiskIsMust: "Atleast one vehicle is must",
        CannotHaveMoreThan100: "Cannot have more than 100%",
        PercentageOwned: "Percentage owned should be between 0% and 100%",
        OneOfTheRaterFailed: "One of the rater failed",
        UWReferral: "Your policy is submitted for underwriter referral.",
        AdditionalInsuredCoverages: "Please add Additional Insured coverages.",
        ToDate: "Please select to date as well."
    },
    ActionButtons: {
        SaveFailed: "Failed policy update",
        EmailSendSuccess: "Email sent successfully",
        EmailSendFailed: "Email sending failed"
    },
    PaymentStatus: {
        Success: "Payment details has been updated successfully.",
    },
    ToasterMsg: {
        ReferToUW: "Risk has been submitted to Underwriter for some further review. Your Underwriter will contact you shortly.",
        SubmissionDeclined: "Submission has been declined as the property has an ineligible risk."
    },
    Endorsement: {
        RejectEndorsement: "Endorsement Rejected successfully.",
        OngoingEndorsement: "There is already an ongoing Transaction. Kindly continue with it or revert it.",
        EndorsementEffectiveGreater: "Endorsement effective date should not be greater than policy expiration",
        PriorBindDate: "Endorsement effective date cannot be prior to last bind transaction date.",
        EndorsementStarted: "Endorsement Started",
        EndorsementReverted: "Endorsement reverted successfully",
        EndorsementSubmitted: "Endorsment is submitted for UW Approval",
        DownpaymentAdjusted: "Down payment adjusted successfully.",
        EndorsementBindSuccess: "Policy is Endorsed successfully.",
        EndorsementBindFailure: "Failed to Endorsed policy.",
        QuoteOfferedSuccess: "Email for Endorsed Quote sent successfully.",
        QuoteOfferedFailed: "Failed to send Endorsed Quote Email."
    },
    Cancellation: {
        PolicyCancelled: "Policy Cancelled Successfully",
        PolicyCancelledFailure: "Policy Cancelled Failed",
        PolicyCancellationReverted: "Policy Cancellation Reverted Successfully",
        PolicyCancellationRevertedFailed: "Policy Cancellation Revert Failed",
        PolicyCancellationRejected: "Policy Cancellation Rejected Successfully",
        PolicyCancellationRejectedFailed: "Policy Cancellation Reject Failed",
        PolicyCancellationOnHold: "Policy Cancellation is on hold",
        PolicyCancellationOnHoldFailed: "Policy Cancellation on hold Failed",
        SendForInsuredSign: "Policy sent for Insured Signature",
        SendForInsuredSignFailed: "Policy sent for Insured Signature Failed",
        ResendForInsuredSign: "Policy Re-sent for Insured Signature",
        ResendForInsuredSignFailed: "Policy Re-sent for Insured Signature Failed",
        PolicyCancellationApprovalPending: "Policy Cancellation request sent for Underwriter Approval",
        AdjustPremiumFailed: "Adjust Premium Failed",
        IncorrectFlatCancellation: "Flat Cancellation is not possible for a date other than Effective Date of Coverage",
        CancellationRejected: "Cancellation request has been Rejected",
        FailedToUpdateStatus: "Failed to update policy status.",
        FailedToUpdatePolicy: "Failed to update policy.",
    },
    Reinstatement: {
        PolicyReinstated: "Policy Reinstated Successfully & Agent will be notified Shortly!",
        PolicyReinstateFailure: "Policy Reinstated Failed",
        CalculatePremiumFailure: "Premium Calculation Failed",
        ReinstateRejected: "Reinstate request has been Rejected",
        PolicyReinstatedReverted: "Policy Reinstated Reverted Successfully",
        PolicyReinstatedRevertedFailed: "Policy Reinstatement Revert Failed",
        PolicyReinstateApprovalPending: "Policy Reinstate request sent for Underwriter Approval",
        PolicyReinstateRejected: "Policy Reinstatement Rejected Successfully",
        PolicyReinstateRejectedFailed: "Policy Reinstatement Reject Failed",
    }
}
const validationMsgs = {
    Year: {
        WeeksPerYear: "Weeks entered should be between 1 and 52",
        ValidYear: "Year built is not valid",
        CurrentYear: "Year built cannot be greater than current year",
        RoofUpdateYear: "Roof Update Year cannot be less than year built or greater than current year",  // to be discuss
        HeatingUpdateYear: "Heating Update Year cannot be less than year built or greater than current year",  // to be discuss
        ElectricalUpdateYear: "Electrical Update Year cannot be less than year built or greater than current year",  // to be discuss
        PlumbingUpdateYear: "Plumbing Update Year cannot be less than year built or greater than current year",  // to be discuss
    },
    Locations: {
        SelectedState: "Risk address located in state that is not yet available",
    },
    LOB: {
        NonSelected: "Please select a LOB to continue",
        NonImplemented: "This LOB has not been implemented yet",
    },
    PolicyHolder: {
        PhoneNumber: "Phone Number is not valid",
        Email: "Email is not valid",
        AreaSQFT: "Area should be greater than 0",
        validCoverageA: "Coverage A cannot be smaller than 150k",
        validCoverageB: "Coverage B cannot be greater than Coverage A",
        validCoverageC: "Coverage C cannot be greater than Coverage A",
        validCoverageD: "Coverage D cannot be greater than Coverage A",
        validLossAssessment: "Loss Assessment should be between $1000 to $100,000",
    }
}

export { consoleLogs, alertMsgs, validationMsgs };