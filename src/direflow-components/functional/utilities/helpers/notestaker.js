import moment from "moment";
import { notesEndPoints } from "../constants";
import { callAPI } from "./shared"

const createNotes = async (content, referenceInfo, lastNotesLineNumber, jwt, env, additionalFields = {}) => {
    const payload = {
        ReferenceNumber: referenceInfo.referenceNumber,
        Client: referenceInfo.client,
        Content: content,
        LastNotesLineNumber: lastNotesLineNumber,
        AdditionalFields: additionalFields ?? {}
    }
    const headers = {
        "Authorization": `Bearer ${jwt}`
    }

    const response = await callAPI(`${env.NOTES_API}/${notesEndPoints.create}`, "POST", payload, headers, "json");

    return response;
}

const getNotesContent = (response) => {
    const notes = response[0];
    let Content = "";
    notes.Notes.forEach((note) => {
        Content += `${note.Note}`;
        Content += `\n\t\t\t\t****   "${note.NotedBy || "Anonymous"}" Noted On ${moment.unix(note.NotedOn).format("MM/DD/YYYY HH:mm ")}   ****\n`
    });

    return Content;
}

const readNotes = async (referenceInfo, jwt, env, query = []) => {
    const payload = {
        ReferenceNumber: referenceInfo.referenceNumber,
        Client: referenceInfo.client,
        query
    }
    const headers = {
        "Authorization": `Bearer ${jwt}`
    }

    const response = await callAPI(`${env.NOTES_API}/${notesEndPoints.read}`, "POST", payload, headers, "json");

    // Append Notes Content.
    if (response.length > 0)
        response[0].Content = getNotesContent(response);

    return response;
}

const updateNotes = async (notes, jwt, env) => {
    const payload = {
        ...notes
    }
    const headers = {
        "Authorization": `Bearer ${jwt}`
    }

    const response = await callAPI(`${env.NOTES_API}/${notesEndPoints.update}`, "POST", payload, headers, "json");

    return response;
}

export { createNotes, readNotes, updateNotes }