import React from "react";
import Notes from "./notes";
import "./noteEditor/style.scss"


export default {
    title: 'Design System/Functional/Notes',
    component: Notes,
    parameters: {
        docs: {
            description: {
                component:
                    "Notes Taker is Simple Notes Editor for storing any thoughts or concerns about the policy or the subject.",
            },
        },
    },
    argTypes: {
        referenceInfo: {
            description: "Includes Reference Information like Reference Number and Client. (Required)",
            table: {
                category: "Object",
            },
        },
        jwt: {
            description: "Used for Authorization to read, create or update the notes.(Required)",
            table: {
                category: "String",
            }
        },
        env: {
            description: "Used to get Environment variables like NOTES_API: the endpoint used to read, create or update notes. (Required)",
            table: {
                category: "Object",
            }
        },
        toastHandler: {
            description: "Callback to handle toast messages. Passes two params: message : String and IsErrorMessage: Boolean",
            table: {
                category: "Function",
            }
        },
        errorHandler: {
            description: "Callback to handle detailed error object. Passes two params: message : String and error: Error Object",
            table: {
                category: "Function",
            }
        },
        minLength: {
            description: "Minimum Length of the Notes, default is 0(inclusivei.e should be greater than 0). (Optional)",
            table: {
                category: "Number",
            }
        },
        accessRoles: {
            description: "Array of Roles allowed to edit or create the note. E,g ['Agent', 'Underwriter']. (Optional)",
            table: {
                category: "Array",
            }
        },
        additionalFields: {
            description: "Used to Add additional fields to the notes object stored in database. Which can then be queried using query array. E.g: {AgentId: '123'}",
            table: {
                category: "Object",
            }
        },
        query: {
            description: `Array of Operations used to query the notes. E.g: [
                {
                    src: "c.AgentId",
                    def: "123",
                    exp: "=", // =, !=, >, <, >=, <=
                    operator: "AND" //AND, OR - connectors in case of multiple query fields.
                }
            ]`,
            table: {
                category: "Array",
            }
        }
    },
}

const NotesArgs = {
    classes: {},
    referenceInfo: {
        referenceNumber: "GAPA00900332",
        client: "Training"
    },
    accessRoles: [],
    additionalFields: {
        AgentName: "Ashwith",
        AgentCode: "C1141"
    },
    jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImloLnRlc3RnYTIiLCJVc2VySWQiOiIxMjkxMSIsIkZpcnN0TmFtZSI6ImloIiwiTGFzdE5hbWUiOiJ0ZXN0Z2EyIiwiZW1haWwiOiJzZGV2YWRpZ2FAY29naXRhdGUudXMiLCJyb2xlIjoiQWdlbnQiLCJGZWF0dXJlcyI6IlF1b3RlIiwiU2l0ZUlkIjoiNTYiLCJQcm9kdWN0cyI6IiIsIm5iZiI6MTY5MjM2MTYzMywiZXhwIjoxNzIzODk3NjMzLCJpYXQiOjE2OTIzNjE2MzN9.X_sU0GGel9mk5D-7BLbGPtcBhC332DEr3sxZChY9zGs",
    query: [],
    env: {
        NOTES_API: "https://dev-pni-notesservice.azurewebsites.net/api"
    },
    toastHandler: (msg, isError) => { alert(msg) },
    errorHandler: (msg, error) => { console.log(error); }
}
const Template = (args) => <Notes {...args} />;

export const Landing = Template.bind({});
Landing.args = NotesArgs;