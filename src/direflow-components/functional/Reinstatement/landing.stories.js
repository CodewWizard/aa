import React from "react";
import ReinstatementFunctional from "./landing";
import { storeKeys, cancellationKeys, commonKeys, reinstatementKeys, apolloKeys, routeKeys } from "./dummy/keys";
import { PolicyStatusMaster, TransactionTypeMaster } from "./dummy/status";
import { staticItems } from './dummy/static';
import {
    UPDATE_POLICY,
    GET_NOTIFICATION_API,
    REVERT_TRANSACTION,
    RATE_ENDORSEMENT,
    BIND_REINSTATE,
    START_REINSTATE,
    LOADMASTERSDATA
} from "./dummy/query";
import { alertMsgs } from './dummy/messages';
import { cancelledPolicy } from './dummy/policy-status/cancel';
import { initiatedPolicy } from './dummy/policy-status/reinstate-initiated';
import { appPendPolicy } from './dummy/policy-status/reinstate-pending-app';
import { reinstatePendSign } from './dummy/policy-status/reinstate-pending-sign';
import { reinstatementButtonStatus as buttonStatus } from './dummy/buttonstatus'
import {emailConfigs} from './dummy/emailconfig'
import moment from "moment";

const policyReducer = initiatedPolicy;
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
        formsResponse: {},
        isDownload: false
    }
}

export default {
    title: 'Design System/Functional/Reinstatement',
    component: ReinstatementFunctional,
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

const ReinstatementArgs = {
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
        reinstatementKeys,
        apolloKeys,
        routeKeys
    },
    status: {
        PolicyStatusMaster,
        TransactionTypeMaster
    },
    staticItems,
    alertMsgs,
    env: {
        NEXT_PUBLIC_GQL_END_POINT: "https://dev-cancel-reinstate.azurewebsites.net/api/policygraphql",
        NEXT_PUBLIC_FORM_FACTORY_API_URL: "https://dev.cogitate.us/lcnc/formfactoryapi/api/",
        NEXT_PUBLIC_DMS_API_NAME: 'dms',
        NEXT_PUBLIC_DMS_CONTAINER_NAME: 'dms',
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
        REVERT_TRANSACTION,
        RATE_ENDORSEMENT,
        BIND_REINSTATE,
        START_REINSTATE,
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
    // buttonStatus,
    postSuccess,
    logout: () => {
        console.log('user loggedout')
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
    preRaterCallHandler: (model) => {
        console.log("Model>>>", model);
        return model;
    },
    programTypeValue: "HO3",
    updateForms: true
};

const Template = (args) => <ReinstatementFunctional {...args} />;

export const Landing = Template.bind({});
Landing.args = ReinstatementArgs;