import React, { useEffect, useState } from "react";
import NProgress from "nprogress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faNoteSticky, faCopy } from "@fortawesome/free-solid-svg-icons";
import JWT from "jsonwebtoken";

import DataTable from "../../core/data-table/datatable";
import ModalPopup from "../../core/modal/modal"

import { tableColumns } from "../utilities/schemas/notestakerschema";
import { NotesEditor } from "./noteEditor/notesEditor";
import { createNotes, readNotes, updateNotes } from "../utilities/helpers/notestaker";

const NoteTaker = (props) => {

    const { classes, jwt, referencenumber, env, toastHandler, errorHandler, minLength = 0, accessRoles = [], notesPerReference = 1, additionalFields = {}, query = [] } = props;

    // Modal States
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [isAddComment, setIsAddComment] = useState(true);

    // Table data states
    const [tableCols, setTableCols] = useState(tableColumns);
    const [tableRowData, setTableRowData] = useState([]);
    const [message, setMessage] = useState("Loading...");
    const [disableCreate, setDisableCreate] = useState(false);

    // notes data states
    const [currNotes, setCurrNotes] = useState({});
    const [newNotes, setNewNotes] = useState("");

    const delay = ms => new Promise(res => setTimeout(res, ms));
    const currUserRole = JWT.decode(jwt).role;

    // Methods
    const readNotesHandler = async () => {
        try {
            NProgress.start();
            const response = await readNotes(referencenumber, jwt, env, query);
            if (response.length == 0) {
                setMessage("No Notes Found")
            }
            else if (response.length >= notesPerReference) {
                setDisableCreate(true);
            }
            setTableRowData(response);
        } catch (error) {
            errorHandler && errorHandler("readNotesHandler Failed", error);
            toastHandler && toastHandler("Failed To Load Notes", true);
            setMessage("Failed !!!")
        }
        finally {
            NProgress.done()
        }
    }

    const onChangeNotes = (data) => {
        setNewNotes(data);
    }

    const onCreateNotes = async () => {
        if(!referencenumber || referencenumber?.length === 0){
            toastHandler && toastHandler(`No Reference Number Found`, true);
            return;
        }
        if (newNotes?.trim().length <= minLength) {
            toastHandler && toastHandler(!minLength ? "Notes Cannot Be Empty" : `Notes Must have Minimum of ${minLength} Letters`, true);
            return;
        }
        try {
            NProgress.start()
            await createNotes(newNotes, referencenumber, jwt, env, additionalFields);
            await readNotesHandler();
            toastHandler && toastHandler("Added Notes Successfully");
        }
        catch (error) {
            errorHandler && errorHandler("onCreateNotes Failed", error);
            toastHandler && toastHandler("Notes Creation Failed", true);
        }
        finally {
            setShowCreateModal(false);
            NProgress.done()
        }
    }

    const onEditSubmitNotes = async () => {
        if (newNotes?.trim().length <= minLength) {
            toastHandler && toastHandler(!minLength ? "Notes Cannot Be Empty" : `Notes Must have Minimum of ${minLength} Letters`, true);
            return;
        }
        try {
            NProgress.start()
            const notes = {
                ...currNotes,
                Content: `${currNotes.Content}${newNotes}`
            }
            await updateNotes(notes, jwt, env);
            await readNotesHandler();
            toastHandler && toastHandler("Comment Added Successfully");
        }
        catch (error) {
            errorHandler && errorHandler("onEditSubmitNotes Failed", error);
            toastHandler && toastHandler("Add Comment Failed", true);
        }
        finally {
            setShowEditModal(false);
            NProgress.done()
        }
    }

    const onAddCommentNotes = () => { setIsAddComment(false) }

    // Modal PopUp Headers element
    const createHeader = `<h4 class="fw-bold w-100" >New Note</h4>`;
    const editHeader = ` <div class="w-100">
        <h4 class="fw-bold" >Note - ${referencenumber}</h4>
        <h5>General Note</h5>
    </div>`

    // Table Props & Actions
    const NotesActions = (cell, row, indx) => {

        return (
            <>
                <div className={`text-center`} key={`actions-${indx}`}>
                    <a
                        title="View"
                        className="display-inblock actionIcon ms-2"
                        onClick={async () => {
                            setCurrNotes(row);
                            await delay(100);
                            setIsAddComment(true);
                            setShowEditModal(true);
                        }}
                        style={(accessRoles.length == 0 || accessRoles?.includes(currUserRole)) ? {} : { pointerEvents: "none", opacity: "0.5" }}
                    >
                        <FontAwesomeIcon icon={faEye} className="fa-lg" />
                    </a>
                    <a
                        title="Copy"
                        className="display-inblock actionIcon ms-2"
                        onClick={() => {
                            navigator.clipboard.writeText(row.Content);
                            toastHandler && toastHandler("Copied To ClipBoard");
                        }}
                    >
                        <FontAwesomeIcon icon={faCopy} className="fa-lg" />
                    </a>
                </div>
            </>
        );
    };
    const NotesDataTableArgs = {
        tableKey: "id",
        cols: tableCols,
        rows: tableRowData,
        isBordered: false,
        needPagination: false,
        needSearchBar: false,
        needCSVExport: false,
        message,
    };

    // useEffects
    useEffect(() => {
        setTableCols(prev => {
            if (prev.findIndex(x => x.dataField === "actions") != -1) return prev;

            return [
                ...prev,
                {
                    dataField: "action",
                    text: "Action",
                    sort: false,
                    headerStyle: () => {
                        return { textAlign: "center" };
                    },
                    formatter: NotesActions
                },
            ]
        })
    }, []);

    useEffect(() => {
        readNotesHandler()
    }, []);

    return <>
        <div className={classes.parentClass || "first-table position-relative"}>
            <h3 className={classes.titleClass || "m-0"}>
                {classes.title || "Notes"}
            </h3>
            <div className="summaryEdit">
                {
                    <a
                        className="edit-2"
                        onClick={async () => {
                            await delay(100);
                            setShowCreateModal(true);
                        }}
                        style={(!disableCreate && (accessRoles.length == 0 || accessRoles?.includes(currUserRole))) ? {} : { pointerEvents: "none", opacity: "0.5" }}
                    >
                        <FontAwesomeIcon icon={faNoteSticky} size="lg" />
                        Create Note
                    </a>
                }
            </div>
            <div className={classes.tableClass || "w-100"}>
                <DataTable {...NotesDataTableArgs} />
            </div>
        </div>

        {/* Create New Notes */}
        <ModalPopup
            type={"confirm"}
            htmlHeader={createHeader}
            size={"lg"}
            dialogClassName={"modal-30w"}
            successLabel={"Save"}
            closeLabel={"Close"}
            showModal={showCreateModal}
            onSuccess={onCreateNotes}
            onClose={() => { setShowCreateModal(false) }}
            html={
                <NotesEditor showHeader={true} referenceNumber={referencenumber} currNotes={""} onChangeNotes={onChangeNotes} />
            }
        />

        {/* Edit Notes */}
        <ModalPopup
            type={"confirm"}
            htmlHeader={editHeader}
            size={"lg"}
            dialogClassName={"modal-30w"}
            successLabel={isAddComment ? "Add New Comment" : "Save"}
            closeLabel={"Close"}
            showModal={showEditModal}
            onSuccess={isAddComment ? onAddCommentNotes : onEditSubmitNotes}
            onClose={() => { setShowEditModal(false) }}
            html={
                <NotesEditor disabled={isAddComment} referenceNumber={referencenumber} currNotes={currNotes.Content} onChangeNotes={onChangeNotes} />
            }
        />
    </>
}

export default NoteTaker;