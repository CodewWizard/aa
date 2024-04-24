import React from "react";
import NoteTaker from "./noteTaker";


export default {
    title: 'Design System/Functional/NoteTaker',
    component: NoteTaker,
}

const NoteTakerArgs = {
    classes: {},
    accessRoles: [],
    additionalFields: {
        AgentName: "Rohit",
        AgentCode: "C1141"
    },
    jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImFnZW50LnJvdGhlcnQiLCJVc2VySWQiOiIxMzY5MCIsIkZpcnN0TmFtZSI6IlBhdWwiLCJMYXN0TmFtZSI6IlJvdGhlcnQiLCJlbWFpbCI6ImpheWFrcmlzaG5hbnNAY29naXRhdGUudXMiLCJyb2xlIjoiQWdlbnQiLCJGZWF0dXJlcyI6IkFsbCBGZWF0dXJlcyIsIlNpdGVJZCI6IjcyIiwiUHJvZHVjdHMiOiIiLCJuYmYiOjE3MTE2MDM5NzAsImV4cCI6MTcxMTYxNDc3MCwiaWF0IjoxNzExNjAzOTcwfQ.OhUD6Bq8zQHRU-4Ua2VlX2-E4e5lSSizdWPFagVHHIs",
    referencenumber: "GAPA00900303",
    notesPerReference: 3,
    query: [
        {
            src: "c.AgentName",
            exp: "=",
            def: "'Rohit'",
            operator: "AND"
        }
    ],
    env: {
        NOTES_API: "http://localhost:7077/api"
    },
    toastHandler: (msg, isError) => { alert(msg) },
    errorHandler: (msg, error) => { console.log(error); }
}
const Template = (args) => <NoteTaker {...args} />;

// export const Landing = Template.bind({});
// Landing.args = NoteTakerArgs;