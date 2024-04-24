import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { defaultEditorParameters } from "../../utilities/constants";

const NotesEditor = (props) => {
    const {
        currNotes,
        onChangeNotes,
        referenceNumber,
        showHeader,
        disabled,
        hasNotes,
        handleAuthorization,
        setLastNotesLineNumber,
        LastNotesLineNumber = 0
    } = props;

    const { defaultHeightOfLines, defaultNumberOfLines } = defaultEditorParameters;

    // Using Refs to manipulate the DOM instead of States, to avoid unnecessary renders. 
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const editorRef = useRef(null);
    const constEditorRef = useRef(null);

    const [savedNotes, setSaveNotes] = useState("");
    const [newNotes, setNewNotes] = useState("");
    const [lineNumberArray, setLineNumberArray] = useState([]);

    // Editor Helpers
    // Function to Calculate Number of Lines Based on default height and default height of the lines.
    const getLineNumbersArray = (constEditorHeight = 0, contentEditorHeight = null) => {
        let length = contentEditorHeight ? (constEditorHeight / defaultHeightOfLines) + (contentEditorHeight / defaultHeightOfLines) : (constEditorHeight / defaultHeightOfLines) + defaultNumberOfLines;
        const lineNumbers = Array.from(
            { length: length },
            (_, i) => i + 1
        );
        editorRef.current.style.height = `${(lineNumbers.length) * defaultHeightOfLines + (defaultHeightOfLines - 10)}px`;
        return lineNumbers;
    }

    // Wrapper Function To Set Line Numbers and Last Noted Line Number Details.
    const setEditorParameters = () => {
        const lineNumbersTemp = getLineNumbersArray(constEditorRef.current?.scrollHeight);
        // Reset the editor(textarea) height to its default state when loading saved contents.
        contentRef.current.style.height = `${defaultNumberOfLines * defaultHeightOfLines}px`;
        // Scroll to last Noted Notes LineNumber using LastNotesLineNumber stored in db.
        containerRef.current.scrollTo(0, (disabled ? LastNotesLineNumber : (lineNumbersTemp.length)) * (defaultHeightOfLines));

        setLineNumberArray(lineNumbersTemp);
        setLastNotesLineNumber(constEditorRef.current?.scrollHeight / defaultHeightOfLines);
    }

    // Function to Set 'height' of Editor equal to 'scrollHeight' of Editor(textarea) and Calculate lineNumbers.
    const setScrollHeight = (content) => {
        let scroll_height = contentRef.current.scrollHeight;
        if (content.length == 0) {
            scroll_height = 0;
        }
        contentRef.current.style.height = `${scroll_height}px`;

        if (scroll_height > (defaultNumberOfLines * defaultHeightOfLines) || content.length == 0) {
            const updateLineNumbersArray = getLineNumbersArray(constEditorRef.current?.scrollHeight, scroll_height);
            if (lineNumberArray.length != updateLineNumbersArray.length) {
                setLineNumberArray(updateLineNumbersArray);
            }
        }
    };

    // Change Handler to set the Current Contents to parent's content state.
    const onChangeHandler = (e) => {
        setScrollHeight(e.target.value);
        setNewNotes(e.target.value);
        onChangeNotes(e.target.value);
    };

    // UseEffect
    useEffect(() => {
        const handleResize = () => {
            setEditorParameters()
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setEditorParameters();
    }, [savedNotes]);

    useEffect(() => {
        setSaveNotes(currNotes);
    }, [currNotes]);

    useEffect(() => {
        if (contentRef?.current) {
            contentRef.current.focus();
        }
    }, [currNotes, disabled]);

    useEffect(() => {
        setNewNotes(props.newNotes);
    }, [props.newNotes]);

    return (
        <>
            {showHeader && (
                <div className="w-50 mb-4 ms-4">
                    <div className="row">
                        <span className="fw-bold text-center border  p-2 col-7">
                            Reference Number*
                        </span>
                        <span className="text-center border p-2 col">{referenceNumber}</span>
                    </div>
                </div>
            )}
            <div ref={containerRef} className="main-container">
                <div className="line-number-container">
                    {lineNumberArray.map((linenumber) => (
                        <p className="line-number" key={`linenumber-${linenumber}`}>
                            {linenumber}
                        </p>
                    ))}
                </div>

                <div ref={editorRef} className="editor-container border">
                    <pre ref={constEditorRef} className="editor-common const-data-editor">{savedNotes}</pre>
                    <textarea
                        disabled={disabled}
                        ref={contentRef}
                        value={newNotes}
                        onInput={onChangeHandler}
                        autoFocus={true}
                        className="editor-common curr-data-editor border-0"
                    ></textarea>
                </div>
                {!hasNotes && (
                    <div className="bg-white no-notes-container border">
                        <div className="no-notes-message">
                            <FontAwesomeIcon icon={faFilePen} fontSize={50} />
                            <h5 className="m-2">No Notes Found</h5>
                            <button type="button" id="successBTN" className="btn btnStyle btnPrim" onClick={() => { handleAuthorization() }}>+ Add Notes</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export { NotesEditor };
