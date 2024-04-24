import React from "react";
import { default as Component } from "./integration";

const IntegrationArgs = {
    extraProps: {
        parentClass: "",
        inpPositionClass: "",
        btnPositionClass: ""
    },
    inpProps: { /** Any input attributes */ },
    btnProps: { /** Any Button attributes */ },
    integrationConfigs: {
        client: "Test",
        table: "AdaptiveApiIntegrations",
        env: {
            NEXT_PUBLIC_MASTER_DATA_URL: "https://dev-jeb-graphql.azurewebsites.net/api/"
        },
    },
    inputInvalidate: () => { }, // dynamic form method
    state: {}, // state inside dynamic form
    apiKey: "CapIqQuickSearch",
    loggedInuser: {
        decodedJWT: {
            FirstName: "Test",
            LastName: "test"
        },
        encodedJWT: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InV3LmNvZ2l0YXRlIiwiVXNlcklkIjoiMTM2OTEiLCJGaXJzdE5hbWUiOiJDb2dpdGF0ZSIsIkxhc3ROYW1lIjoiVW5kZXJ3cml0ZXIiLCJlbWFpbCI6Im5rYWRhbUBjb2dpdGF0ZS51cyIsInJvbGUiOiJVbmRlcndyaXRlciIsIkZlYXR1cmVzIjoiQWxsIEZlYXR1cmVzIiwiU2l0ZUlkIjoiNzMiLCJQcm9kdWN0cyI6IiIsIm5iZiI6MTcwOTAxMTQ2NCwiZXhwIjoxNzA5MDIyMjY0LCJpYXQiOjE3MDkwMTE0NjR9.q0WJV_c5mfMlieQqryDTM6PW1rB5RaZZeuPEktWBzhU"
    },
    onChange: (e) => { },
    toast: (msg, err) => { },
    setState: (data) => { /** Set state with response from ApdativeApi */ },
}

export default {
    title: "Design System/Functional/Integrations",
    component: Component
}

const Template = (args) => <Component {...args} />
export const IntegrationInput = Template.bind({});
IntegrationInput.args = IntegrationArgs;