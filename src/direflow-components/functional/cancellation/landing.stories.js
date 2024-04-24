import React from "react";
import CancellationFunctional from "./landing";
import { storeKeys, cancellationKeys, commonKeys, apolloKeys, routeKeys } from "./dummy/keys"
import { PolicyStatusMaster, TransactionTypeMaster } from "./dummy/status"
import { alertMsgs } from "./dummy/messages"
import { UPDATE_POLICY, GET_NOTIFICATION_API, START_CANCELLATION, RATE_ENDORSEMENT, BIND_CANCELLATION, REVERT_TRANSACTION, LOADMASTERSDATA } from "./dummy/query"
import { staticItems } from "./dummy/static"
import { newPolicy } from "./dummy/policy-status/new"
import { initiatedPolicy } from "./dummy/policy-status/cancel-initiated"
import { appPendPolicy } from "./dummy/policy-status/cancel-pending-app"
import { cancelPendSign } from "./dummy/policy-status/cancel-pending-sign"
import { CancellationSchema } from "../utilities/schemas/cancelschema";
import { emailConfigs } from './dummy/emailconfig'
import moment from "moment";

const policyReducer = newPolicy;

const loggedInUserReducer = {
    "encodedJWT": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InV3LnJvdGhlcnQiLCJVc2VySWQiOiIxMzY4OSIsIkZpcnN0TmFtZSI6Ik1hcmsiLCJMYXN0TmFtZSI6IlJvdGhlcnQiLCJlbWFpbCI6ImpheWFrcmlzaG5hbnNAY29naXRhdGUudXMiLCJyb2xlIjoiQWdlbnQsVW5kZXJ3cml0ZXIiLCJGZWF0dXJlcyI6IkFsbCBGZWF0dXJlcyIsIlNpdGVJZCI6IjcyIiwiUHJvZHVjdHMiOiIiLCJuYmYiOjE3MDk4MDY5OTIsImV4cCI6MTcwOTgxNzc5MiwiaWF0IjoxNzA5ODA2OTkyfQ.-dVlJvwsunUXo0KAges1AgZW0rMnvKE59kZo-Mafc6o",
    "JWTValidTill": 1803256205831,
    "decodedJWT": {
        "Username": "agent.rothert",
        "UserId": "13690",
        "FirstName": "Paul",
        "LastName": "Rothert",
        "email": "jayakrishnans@cogitate.us",
        "role": "Underwriter",
        "Features": "All Features",
        "SiteId": "72",
        "Products": "",
        "nbf": 1703245405,
        "exp": 1703256205,
        "iat": 1703245405
    }
}

const postSuccess = (key, model) => {
    return {
        useDefaultFeature: true,
        input: model,
        buttonStatus: {},
        // works oonly for approve cancellation
        afterDefault: (model, formsList, generateDocsRes, uploadDocsRes) => {}
    }
}

export default {
    title: 'Design System/Functional/Cancellation',
    component: CancellationFunctional,
    argTypes: {
        formKey: {
            description: "Holds key value for html form.",
            table: {
                category: 'Element'
            }
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'Add Detail component will generate the html form to capture user input and emits as an event with updated html table.',
            },
        },
    }
};

const CancellationArgs = {
    // schema: [CancellationSchema[1]],
    store: {
        getState: () => {
            return {
                policyReducer,
                loggedInUserReducer,
            }
        },
        dispatch: () => {
            return true;
        }
    },
    keys: {
        storeKeys,
        cancellationKeys,
        commonKeys,
        apolloKeys,
        routeKeys
    },
    status: {
        PolicyStatusMaster,
        TransactionTypeMaster
    },
    env: {
        NEXT_PUBLIC_GQL_END_POINT: "https://dev-cancel-reinstate.azurewebsites.net/api/policygraphql",
        NEXT_PUBLIC_FORM_FACTORY_API_URL: "https://dev.cogitate.us/lcnc/formfactoryapi/api/",
        NEXT_PUBLIC_DMS_API_NAME: 'dms',
        NEXT_PUBLIC_DMS_CONTAINER_NAME: "dms",
        NEXT_PUBLIC_DMS_API_BASE_URL: 'https://devdiep2dms.azurewebsites.net/api/',
        NEXT_PUBLIC_DMS_API_POST_Upload_to_Blob: 'upload-to-blob',
        NEXT_PUBLIC_DMS_API_AUTH: 'Basic dGVzdDp0ZXN0VXNlclBhc3N3b3Jk',
        NEXT_PUBLIC_DMS_API_GET_DOC_LIST_RELATIVE_URL: "blob-list?",
        NEXT_PUBLIC_MASTER_DATA_URL: "https://dev-jeb-graphql.azurewebsites.net/api/",
        NEXT_PUBLIC_STORAGE_ACCOUNT: "ctsdiep2devstorage"
    },
    query: {
        UPDATE_POLICY,
        GET_NOTIFICATION_API,
        START_CANCELLATION,
        RATE_ENDORSEMENT,
        BIND_CANCELLATION,
        REVERT_TRANSACTION,
        LOADMASTERSDATA
    },
    toast: (msg, error) => {
        if (error) {
            alert(`Error - ${msg}`)
        }
        else {
            alert(`Success - ${msg}`)
        }
    },
    staticItems,
    alertMsgs,
    postSuccess,
    logout: () => { },
    setDefaultValuesHandler: (schema) => {
        console.log(">>>>>><<<<<", schema);
    },
    emailConfigs,
    CustomHeaders: {
        "X-Cogitate-DMSPath": "Attributes.Carrier & '' & Attributes.Coverholder & '/' & Attributes.Lob & '/' & Attributes.State & '/' & PolicyNumber",
        "X-Cogitate-PolicyInfoId": "PolicyNumber",
        "X-Cogitate-PolicyNumber": "PolicyNumber",
        "X-Cogitate-CarrierCode": "Attributes.Carrier",
        "X-Cogitate-CoverholderCode": "Attributes.Coverholder",
        "X-Cogitate-Lob": "Attributes.FormType",
        "X-Cogitate-State": "Attributes.State",
        "X-Cogitate-TransactionCount": "Transaction.Number",
        "X-Cogitate-TransactionType": "Transaction.Type",
        "X-Cogitate-TransactionDate": `'${moment().toDate()}'`,
        "X-Cogitate-UserName": "Audit.LastUpdatedBy",
        "X-Cogitate-FileName": "'Test'",
        "X-Cogitate-ApplicationStatus": "PolicyStatus"
    },
    isProgramTypeLOB: false,
    preRaterCallHandler: (model) => {
        console.log("Model>>>", model);
        // model.FeesAndTaxes[3].IsOverride = true;
        // model.FeesAndTaxes[3].Value = 50;
        return model;
    },
    programTypeValue: "HO3"
};

const Template = (args) => <CancellationFunctional {...args} />;

export const Landing = Template.bind({});
Landing.args = CancellationArgs;