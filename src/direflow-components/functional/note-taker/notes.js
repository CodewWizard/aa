import React, { useEffect, useState } from "react";
import NProgress from "nprogress";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { NotesEditor } from "./noteEditor/notesEditor";
import { createNotes, readNotes, updateNotes } from "../utilities/helpers/notestaker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JWT from "jsonwebtoken"

const Notes = ({ jwt, referenceInfo, env, toastHandler, errorHandler, minLength = 0, accessRoles = [], additionalFields = {}, query = [] }) => {
    const [currNotes, setCurrNotes] = useState({ Content: "" });
    const [newNotes, setNewNotes] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [hasNotes, setHasNotes] = useState(false);
    const [isFetched, setIsFetched] = useState(false);
    const [lastNotesLineNumber, setLastNotesLineNumber] = useState(1);

    // helpers
    const handleErrors = (message, error) => {
        errorHandler && errorHandler(message, error);
        toastHandler && toastHandler(message, true);
    };

    // Methods
    const fetchNotes = async () => {
        try {
            NProgress.start();
            const response = await readNotes(referenceInfo, jwt, env, query);
            if (response.length > 0) {
                setHasNotes(true);
            }
            setCurrNotes(response[0]);
        } catch (error) {
            handleErrors("Failed To Load Notes", error);
        }
        finally {
            NProgress.done()
        }
    }

    const onChangeNotes = (data) => {
        setNewNotes(data);
    }

    const onSaveNotes = async () => {
        if (!referenceInfo.referenceNumber || referenceInfo.referenceNumber?.length === 0) {
            handleErrors("No Reference Number Found");
            return;
        }
        if (newNotes?.trim().length <= minLength) {
            handleErrors(!minLength ? "Notes Cannot Be Empty" : `Notes Must have Minimum of ${minLength} Letters`);
            return;
        }
        try {
            NProgress.start()
            if (currNotes?.Content) {
                const notes = {
                    ...currNotes,
                    Content: newNotes,
                    LastNotesLineNumber: lastNotesLineNumber
                }
                await updateNotes(notes, jwt, env);
            }
            else {
                await createNotes(newNotes, referenceInfo, lastNotesLineNumber, jwt, env, additionalFields);
            }
            await fetchNotes();
            setNewNotes("");
            toastHandler && toastHandler("Notes Added Successfully");
        }
        catch (error) {
            handleErrors("Notes Operation Failed", error);
        }
        finally {
            NProgress.done()
        }
    }

    const onCancel = () => {
        setNewNotes("");
        setIsDisabled(true);
        if (!currNotes?.Content) setHasNotes(false);
    }

    const handleAuthorization = () => {
        if (accessRoles.length != 0 && !accessRoles.includes(JWT.decode(jwt)?.role)) {
            toastHandler && toastHandler("Not Allowed", true);
            return;
        }
        setIsDisabled(false)
        setHasNotes(true);
    }

    useEffect(() => {
        fetchNotes().then(() => {
            setIsFetched(true);
        });
    }, []);

    return <>
        <div className="first-table position-relative">
            <h3 className="d-flex justify-content-between">
                NOTES
                <div className="anoteIcon me-3">
                    <FontAwesomeIcon title="Add Notes" icon={faEdit} fontSize={18} className="" cursor={"pointer"} onClick={() => handleAuthorization()} />
                </div>
            </h3>
            <div className="w-100 boxWrapper border-0 px-4 rounded-0">
                {isFetched ? <NotesEditor
                    newNotes={newNotes}
                    referenceNumber={referenceInfo?.referenceNumber || ""}
                    currNotes={currNotes?.Content || ""}
                    onChangeNotes={onChangeNotes}
                    disabled={isDisabled}
                    hasNotes={hasNotes}
                    handleAuthorization={handleAuthorization}
                    setLastNotesLineNumber={setLastNotesLineNumber}
                    LastNotesLineNumber={currNotes?.LastNotesLineNumber || 0}
                /> : <h6>Loading...</h6>}
                {
                    hasNotes && <div className="d-flex justify-content-end mt-2">
                        <button disabled={isDisabled} type="button" id="closeBTN" className="btn btnStyle btnClose" onClick={onCancel}>Cancel</button>
                        <button disabled={isDisabled} type="button" id="successBTN" className="btn btnStyle btnPrim" onClick={onSaveNotes}>Save</button>
                    </div>
                }
            </div>
        </div>
    </>
}

export default Notes;