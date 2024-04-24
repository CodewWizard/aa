import axios from "axios";
import moment from "moment";
import { removeExtraFields } from "./cancellation";
import jsonata from "jsonata";
import { uuid } from 'uuidv4';

let d = new Date();
let dformat = (
    d.getFullYear().toString().padStart(2, '0') + "-" +
    (d.getMonth() + 1).toString().padStart(2, '0') + "-" +
    d.getDate().toString().padStart(2, '0')
);

export const scrollToElement = (time) => {
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, time)
}

export const callAPI = async (url, type = 'GET', payload = null, headers = {}, responseType = '') => {
    try {
        const config = {
            headers,
            responseType
        }

        switch (type.toUpperCase()) {
            case 'POST': {
                const response = await axios.post(url, payload, config);
                if (response.status >= 200 && response.status < 300) {
                    return response.data;
                } else {
                    throw new Error(`API call failed with status code ${response.status}`);
                }
            }
            case 'GET': {
                const response = await axios.get(url, config);
                if (response.status >= 200 && response.status < 300) {
                    return response.data;
                } else {
                    throw new Error(`API call failed with status code ${response.status}`);
                }
            }
            default: {
                throw new Error(`Invalid HTTP method ${type.toUpperCase()}`);
            }
        }
    } catch (error) {
        console.log('error: ', error);
        throw error;
    }
}

export const getQuery = (key, policyObj, { query, PolicyStatusMaster, apolloKeys }) => {
    let payload = { input: policyObj };
    let objQuery = query.UPDATE_POLICY;
    let policyNumber = policyObj.PolicyNumber;
    let effectiveDate = policyObj.Transaction.EffectiveDate;
    let transactionType = policyObj.Transaction.Type;
    let lastSubmittedPage = policyObj.NonFunctional.LastSubmittedPage;

    switch (key) {
        case apolloKeys.StartCancellation:
            payload = {
                policyNumber,
                transactionType,
                effectiveDate,
                lastSubmittedPage
            }
            objQuery = query.START_CANCELLATION;
            break;
        case apolloKeys.StartReinstate:
            payload = {
                policyNumber,
                transactionType,
                effectiveDate,
                lastSubmittedPage
            }
            objQuery = query.START_REINSTATE;
            break;
        case apolloKeys.RateEndorsement:
            payload = { input: policyObj }
            objQuery = query.RATE_ENDORSEMENT;
            break;
        case apolloKeys.RevertTransaction:
            payload = { input: policyObj }
            objQuery = query.REVERT_TRANSACTION;
            break;
        case apolloKeys.BindCancellation:
            payload = { policyNumber }
            objQuery = query.BIND_CANCELLATION;
            break;
        case apolloKeys.BindReInstate:
            payload = { policyNumber, policyReinstatedStatus: PolicyStatusMaster.PolicyInForce }
            objQuery = query.BIND_REINSTATE;
            break;
        default:
            break;
    }

    return { payload, query: objQuery };
}

export const save = async (policy, queryType, gqlEp, base) => {
    try {
        // getting logged user JWT
        debugger;
        const loggedUser = base.getStoreState(base.storeKeys.LoggedInUserReducer);
        const JWT = loggedUser.encodedJWT;
        const expiryDate = new Date(loggedUser.JWTValidTill);
        const currentDate = new Date();
        if (expiryDate < currentDate) {
            base.logout();
            return;
        }

        // removing unwanted fields from model
        removeExtraFields(policy);

        // setting audit details
        policy.Audit = {
            ...policy.Audit,
            LastUpdatedBy: loggedUser.decodedJWT?.Username,
            LastUpdatedOn: moment().toISOString()
        }

        // get Query from query type
        const { payload, query } = getQuery(queryType, policy, base)

        const opName = query.definitions.filter(item => item.kind === "OperationDefinition")[0].name?.value || "mutation";

        const gqlpayload = JSON.stringify({
            operationName: opName,
            query: typeof query === "string" ? query : query.loc.source.body,
            variables: payload
        });

        const resp = await callAPI(gqlEp, "POST", gqlpayload, {
            Authorization: `Bearer ${JWT}`,
            'Content-Type': 'application/json',
            "Ocp-Apim-Subscription-Key": base.env.NEXT_PUBLIC_ADAPTIVE_SUBSCRIPTION_KEY,
            "x-correlationid": uuid() || null,
            "xsessionid": `${policy?.QuoteNumber}-${policy?.QuoteVersion}`
        });

        // storing back to redux
        if (resp) {
            base.store.dispatch({
                type: "PUT_POLICY",
                payload: resp.data[queryType]
            });
        };

        return resp.data[queryType];
    } catch (error) {
        console.log('error: ', error);
        throw error;
    }
}

export const updatePolicyStatus = (policyModel, newStatus) => {
    try {
        policyModel.PolicyStatusHistory.push({
            "OldStatus": policyModel.PolicyStatus,
            "NewStatus": newStatus,
            "ChangedBy": policyModel.AccountId == "UW" ? policyModel.UnderWriter.Code : policyModel.Agent.Code,
            "ChangedDate": dformat
        });
        policyModel.PolicyStatus = newStatus;
        return policyModel;
    } catch (error) {
        console.log('error: ', error);
        throw error;
    }
}

export const GenerateDocument = async (policy, isDraft, isAgent = false, forms = [], contentType = {}, type = "blob", transType = null, base) => {
    try {
        const productCode = policy?.Attributes.Product;
        // const programType = policy.Attributes?.FormType || policy.Attributes?.Lob;
        const programType = base.programTypeValue ? base.programTypeValue : policy.Attributes?.FormType || policy.Attributes?.Lob;
        const transactionType = transType != null ? base.staticItems.FormFactoryTransactionTypes[transType] : base.staticItems.FormFactoryTransactionTypes[policy.Transaction.Type];
        let formlist = [];
        if (forms.length == 0) {
            policy.Forms.map((form, formSeq) => {
                if (!["no form #", "test form"].includes(form.FormName)) {
                    formlist.push({
                        "formName": form.FormName,
                        "Sequence": form.Sequence
                    })
                }
            })
        } else {
            forms.map((form, formSeq) => {
                formlist.push({
                    "formName": form.formName,
                    "Sequence": (formSeq + 1)
                });
            });
        }
        const tempPolicy = JSON.parse(JSON.stringify(policy));
        const payload = {
            Policy: tempPolicy,
            FormList: formlist,
            IsDraft: isDraft,
            IsAgent: isAgent,
            Mode: "",
            ValuePairs: {},
            formLocation: {
                ContainerName: base.env.NEXT_PUBLIC_DMS_CONTAINER_NAME || "dms",
                StorageName: base.env.NEXT_PUBLIC_STORAGE_ACCOUNT
            }
        };
        const url = `${base.env.NEXT_PUBLIC_FORM_FACTORY_API_URL}ProductForm/GenerateFormsDoc?productCode=${productCode}&transactionType=${transactionType}&programType=${programType}&pageSize=`;
        const resp = await callAPI(url, 'POST', payload, contentType, type);
        return resp;
    } catch (error) {
        console.log('error: ', error);
        throw error;
    }
};


export const getMailSubject = (key, policy, { PolicyStatusMaster, commonKeys, TransactionTypeMaster }, isRejected = false) => {

    let subject = "";
    let policyNumber = policy.QuoteNumber != policy.PolicyNumber ? policy.PolicyNumber : policy.QuoteNumber

    if (key == commonKeys.ActionEmailAgent) {
        if (policy.PolicyStatus == PolicyStatusMaster.ReferralAwaitingUWReview) {
            subject += `Referral Notification, #${policyNumber} - ${policy.InsuredAccount.DisplayName}: ${policy.Risks.Properties[0].Address.UnFormattedAddress}`
        }
        else if (policy.PolicyStatus == PolicyStatusMaster.PolicyCancelled && !isRejected) {
            subject += `Cancellation Request Approved, #${policyNumber} - ${policy.InsuredAccount.DisplayName}: ${policy.Risks.Properties[0].Address.UnFormattedAddress}`
        }
        else if (policy.PolicyStatus == PolicyStatusMaster.PolicyInForce && policy.Transaction.Type == TransactionTypeMaster.REINSTATE && !isRejected) {
            subject += `Reinstatement Request Approved, #${policyNumber} - ${policy.InsuredAccount.DisplayName}: ${policy.Risks.Properties[0].Address.UnFormattedAddress}`
        }
        else if (policy.PolicyStatus == PolicyStatusMaster.PolicyInForce && isRejected) {
            subject += `Cancellation Request Rejected, #${policyNumber} - ${policy.InsuredAccount.DisplayName}: ${policy.Risks.Properties[0].Address.UnFormattedAddress}`
        }
        else if (policy.PolicyStatus == PolicyStatusMaster.PolicyCancelled && isRejected) {
            subject += `Reinstatement Request Rejected, #${policyNumber} - ${policy.InsuredAccount.DisplayName}: ${policy.Risks.Properties[0].Address.UnFormattedAddress}`
        }
    }
    else if (key == commonKeys.ActionEmailUnderWriter) {
        if (policy.PolicyStatus == PolicyStatusMaster.ReferralAwaitingUWReview) {
            subject += `Referral Notification, #${policyNumber} - ${policy.InsuredAccount.DisplayName}: ${policy.Risks.Properties[0].Address.UnFormattedAddress}`
        }
        else if (policy.PolicyStatus == PolicyStatusMaster.PolicyInForceCancellationRequestPendingApproval) {
            subject += `Cancellation Request Pending Approval For #${policyNumber} - ${policy.InsuredAccount.DisplayName}: ${policy.Risks.Properties[0].Address.UnFormattedAddress}`
        }
        else if (policy.PolicyStatus == PolicyStatusMaster.PolicyCancelledReinstatementRequestPendingUWApproval) {
            subject += `Reinstatement Request Pending Approval For #${policyNumber} - ${policy.InsuredAccount.DisplayName}: ${policy.Risks.Properties[0].Address.UnFormattedAddress}`
        }
    } else if (key === "Policy Documents") {
        subject += "Policy Documents"
    }

    return subject
}

const getReciepentMail = (key, policy, { commonKeys }) => {

    if (key == commonKeys.ActionEmailAgent) {
        return policy?.Agent?.Details?.Contact?.EmailId
    }
    else if (key == commonKeys.ActionEmailUnderWriter) {
        return policy?.UnderWriter?.Details?.Contact?.EmailId
    }

    return ""
}

const getExpressionValue = async (jsonpath, data) => {
    try {
        const expression = jsonata(jsonpath)
        const result = await expression.evaluate(data)
        return result
    } catch (e) {
        return null
    }
}

// query, env, base, keys, status,
export const GetPushNotificationAPI = async (policy, key, attachmentNames, attachmentTemplates, body = "", blobUri = "", blobName = "", query, base, isRejected, notificationKey) => {
    try {
        const notificationsData = await getMasters(policy.Attributes.Client, 'NotificationMaster', base);
        let {
            sender = "noreply@cogitate.us",
            recipient = getReciepentMail(key, policy, base),
            emailCC = "",
            emailBCC = "",
            subject = getMailSubject(key, policy, base, isRejected),
            tempBody = " ",
            bodyTemplate = "",
            notification_Type = "E"
        } = {};

        let emailConfigs
        if (notificationsData.length) {
            emailConfigs = notificationsData.find(c => c.NotificationKey === notificationKey);
            if (emailConfigs) {
                sender = await getExpressionValue(emailConfigs.From, policy);
                recipient = await getExpressionValue(emailConfigs.To, policy);
                emailCC = await getExpressionValue(emailConfigs.CC, policy);
                emailBCC = await getExpressionValue(emailConfigs.BCC, policy);
                subject = await getExpressionValue(emailConfigs.Subject, policy);
                tempBody = emailConfigs.BodyTemplate ? "" : body || " ";
                bodyTemplate = emailConfigs.BodyTemplate;
                notification_Type = emailConfigs.NotificationType;
            }
        }

        const input = {
            Sender: sender || "noreply@cogitate.us",
            Recipient: recipient || getReciepentMail(key, policy, base),
            CC: emailCC || "",
            BCC: emailBCC || "",
            Subject: subject || getMailSubject(key, policy, base, isRejected),
            BodyTemplate: bodyTemplate || "",
            Body: tempBody,
            AttachmentNames: attachmentNames,
            AttachmentTemplates: attachmentTemplates,
            PolicyNumber: policy.PolicyNumber,
            QuoteNumber: policy.QuoteNumber,
            Type: notification_Type || "E",
            BlobName: blobName,
            BlobUri: blobUri
        }

        let tempCustomHeaders = {}
        if (base.CustomHeaders || emailConfigs.CustomHeaders) {
            for (const [k, v] of Object.entries(base.CustomHeaders || emailConfigs.CustomHeaders)) {
                tempCustomHeaders[k] = await getExpressionValue(v, policy)
            }
            debugger;
            input.CustomHeaders = JSON.stringify(tempCustomHeaders);
        }

        const payload = JSON.stringify({
            operationName: "postToNotificationAPI",
            query: typeof query === "string" ? query : query.loc.source.body,
            variables: { input: input }
        })

        const loggedUser = base.getStoreState(base.storeKeys.LoggedInUserReducer);
        const JWT = loggedUser.encodedJWT;
        const resp = await callAPI(base.env.NEXT_PUBLIC_GQL_END_POINT, 'POST', payload, {
            Authorization: `Bearer ${JWT}`,
            'Content-Type': 'application/json'
        });
        let returnResponse = {};
        if (resp) returnResponse = resp.data[base.apolloKeys.PostToNotificationAPI] ?? [];
        return returnResponse;
    } catch (error) {
        console.log(error);
    }


};

export const getFilesListFromDMS = async (requestInput, base) => {
    try {
        const apiBaseURL = base.env.NEXT_PUBLIC_DMS_API_BASE_URL;
        const apiRelativeURL = base.env.NEXT_PUBLIC_DMS_API_GET_DOC_LIST_RELATIVE_URL;
        let apiDynamicURL = base.commonKeys.EmptyString;
        // let programType = requestInput.Attributes.FormType || requestInput.Attributes.Lob;
        const programType = base.programTypeValue ? base.programTypeValue : (requestInput.Attributes.FormType || requestInput.Attributes.Lob);
        apiDynamicURL = `container=${base.env.NEXT_PUBLIC_DMS_CONTAINER_NAME}&blobpath=${requestInput.Attributes.Carrier}${requestInput.Attributes.Coverholder}/${programType}/${requestInput.Attributes.State}/${requestInput.PolicyNumber || requestInput.QuoteNumber}`
        const apiURL = apiBaseURL + apiRelativeURL + apiDynamicURL;
        const apiResponse = await callAPI(apiURL, "GET", null, { 'Authorization': base.env.NEXT_PUBLIC_DMS_API_AUTH }, '');
        return apiResponse;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const fetchForms = async (policy, base) => {
    try {
        const productCode = policy.Attributes.Product;
        const transactionType = base.staticItems.FormFactoryTransactionTypes[policy.Transaction.Type];
        // const programType = policy.Attributes.FormType || policy.Attributes.Lob;
        const programType = base.programTypeValue ? base.programTypeValue : (policy.Attributes.FormType || policy.Attributes.Lob);
        const url = `${base.env.NEXT_PUBLIC_FORM_FACTORY_API_URL}ProductForm/${productCode}/${transactionType}/GET/${programType}`;
        const resp = await callAPI(url, 'GET', null, { 'Content-Type': 'application/json' });
        return resp.length ? resp : [];
    } catch (error) {
        console.log('error: ', error);
        throw error;
    }
}

export const getDMSProperties = (model, documentType, fileName, base) => {
    const loggedInuser = base.getStoreState(base.storeKeys.LoggedInUserReducer);

    const programType = base.programTypeValue ? base.programTypeValue : base.isProgramTypeLOB ? model?.Attributes?.Lob : model?.Attributes?.FormType;

    const dmsProperties = {
        "QuoteNumber": model?.QuoteNumber,
        "PolicyNumber": model?.PolicyNumber,
        "DocumentType": documentType,
        "CarrierCode": model?.Attributes.Carrier,
        "CoverholderCode": model?.Attributes.Coverholder,
        "LobCode": model?.Attributes.FormType || model?.Attributes.Lob,
        "StateCode": model?.Attributes.State,
        "TransactionCount": model?.Transaction.Number.toString(),
        "TransactionType": model.Transaction.Type,
        "TransactionDate": moment().toDate(),
        "Filename": fileName,
        "EffectiveDate": model?.EffectiveDate,
        "DMSContainerName": base.env.NEXT_PUBLIC_DMS_CONTAINER_NAME || "dms",
        "PolicyStatus": model?.PolicyStatus,
        "FolderName": model?.Transaction.Type,
        "UserName": `${loggedInuser.decodedJWT.FirstName} ${loggedInuser.decodedJWT.LastName}`,
        "BlobPath": `${model.Attributes.Carrier}${model.Attributes.Coverholder}/${programType}/${model.Attributes.State}/${model.PolicyNumber || model.QuoteNumber}/${fileName}`,
        ...base.dmsProperties
    };
    return dmsProperties
}

export const getMasters = async (Client, Table, base) => {
    try {
        const { env } = base;

        let url = `${env.NEXT_PUBLIC_MASTER_DATA_URL}master?client=${Client}&table=${Table}`;
        let resp = await callAPI(url, "GET");

        return resp;

    } catch (error) {
        console.log('error: ', error);
    }
}

export const uploadFilesToDMS = async (policy, filesToUpload, metadata, base) => {
    try {
        const blobPath = metadata.BlobPath;
        let formData = new FormData();
        formData.append('file', filesToUpload, 'blob');
        formData.append('containerName', base.env.NEXT_PUBLIC_DMS_API_NAME);
        formData.append('blobPath', blobPath)
        formData.append('metadata', JSON.stringify(metadata));
        const apiURL = base.env.NEXT_PUBLIC_DMS_API_BASE_URL + base.env.NEXT_PUBLIC_DMS_API_POST_Upload_to_Blob;
        const apiResponse = await callAPI(apiURL, "POST", formData, { 'Authorization': base.env.NEXT_PUBLIC_DMS_API_AUTH, 'content-type': 'multipart/form-data' });
        return apiResponse;
    } catch (err) {
        console.log('err: ', err);
        throw err;
    }
}

export const invokeAdaptiveAPI = async (inputModel, extraParams, loggedInuser) => {
    const adaptiveUrl = extraParams.AdaptiveApiURL;
    const generateApadtiveUrl =
        adaptiveUrl +
        "?inputkey=" +
        extraParams.InputKey +
        "&outputkey=" +
        extraParams.OutputKey;
    let header = {};

    if (
        extraParams.SubcriptionKey !== undefined &&
        extraParams.SubcriptionKey !== ""
    ) {
        header = {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": extraParams.SubcriptionKey,
            "Authorization": `Bearer ${extraParams?.AuthToken}`
        };
    }
    if (extraParams.needDoc !== undefined && extraParams.needDoc) {
        header.policyId = `${inputModel.QuoteNumber}`;
        header.templatePath = extraParams.TemplatePath;
        header.destinationPath =
            "dms/" +
            inputModel.Attributes.Client +
            "/" +
            inputModel.Attributes.Lob +
            "/" +
            `${header.policyId}` +
            "/" +
            extraParams.Filename +
            ".pdf";

        let userName = `${loggedInuser.decodedJWT.FirstName} ${loggedInuser.decodedJWT.LastName}`;
        if (!userName) {
            userName = inputModel.Audit.LastUpdatedBy;
        }

        const filesToUpload = {
            DocumentType: extraParams.DocumentType,
            FolderName: extraParams.FolderName,
        };

        const metaDataDmsValues = metaDataDms(
            inputModel,
            extraParams.containerName,
            userName,
            filesToUpload
        );

        header = { ...header, metadata: JSON.stringify(metaDataDmsValues) };
    }
    let output = inputModel;

    try {
        output = await callAPI(
            generateApadtiveUrl,
            "POST",
            inputModel,
            header
        );
    } catch (error) {
        output = inputModel;
    }

    return output;
};


const metaDataDms = (policy, containerName = 'dms', userName, filesToUpload) => {
    const policyId = policy.QuoteNumber;
    const metadata = {
        Container: containerName,
        Client: policy.Attributes.Client,
        CarrierCode: policy.Attributes.Carrier,
        CoverholderCode: policy.Attributes.Coverholder,
        Lob: policy.Attributes.Lob,
        State: policy.Attributes.State,
        PolicyNumber: policy.PolicyNumber,
        QuoteNumber: policy.QuoteNumber.toString(),
        QuoteVersion: (policy.QuoteVersion ?? 0).toString(),
        Applicationstatus: policy.PolicyStatus,
        TransactionNumber: policy.Transaction.Number.toString(),
        TransactionType: policy.Transaction.Type,
        TransactionDate: moment().toDate(),
        UserName: userName,
        FormId: filesToUpload.FormId,
        FormName: filesToUpload.FormName,
        FormDesc: filesToUpload.FormDescription,
        FormType: filesToUpload.FormType,
        DocumentType: `${filesToUpload.DocumentType.trim()}`,
        FolderName: `${filesToUpload.FolderName.trim()}`,
        PolicyId: policy.QuoteNumber
    };

    const baseName = metadata.DocumentType.trim();
    const extension = "pdf";
    const timestamp = moment().format('MMDDHHmmss');

    metadata.Filename = `${baseName}_${timestamp}.${extension}`;
    metadata.PolicyId = `${policyId}`;

    return metadata;
}