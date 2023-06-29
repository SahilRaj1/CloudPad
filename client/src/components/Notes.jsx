import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import { NoteItem } from "./NoteItem";
import { useNavigate } from "react-router-dom";

export const Notes = (props) => {
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        } else {
            navigate("/login");
        }
    }, []);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({
        id: "",
        title: "",
        description: "",
        tag: "Not Specified",
    });

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id,
            title: currentNote.title,
            description: currentNote.description,
            tag: currentNote.tag,
        });
    };

    const handleEdit = () => {
        // addNote(note.title, note.description, note.tag);
        refClose.current.click();
        editNote(note.id, note.title, note.description, note.tag);
        props.showAlert("Successfully updated note", "success");
    };

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    };

    return (
        <>
            <button
                ref={ref}
                type="button"
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            ></button>
            <div className="modal" tabIndex="-1" id="exampleModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Note</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3 mt-4">
                                    <label
                                        htmlFor="title"
                                        className="form-label"
                                    >
                                        <h5>Title</h5>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        placeholder="Enter title here"
                                        onChange={onChange}
                                        value={note.title}
                                        minLength={3}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">
                                        <h5>Tag</h5>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="tag"
                                        name="tag"
                                        placeholder="Enter tag here"
                                        onChange={onChange}
                                        value={note.tag}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="description"
                                        className="form-label"
                                    >
                                        <h5>Note</h5>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        rows="4"
                                        placeholder="Enter note here"
                                        onChange={onChange}
                                        value={note.description}
                                        minLength={5}
                                        required
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                ref={refClose}
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                disabled={
                                    note.title.length < 3 ||
                                    note.description.length < 5
                                }
                                onClick={handleEdit}
                                type="button"
                                className="btn btn-primary"
                            >
                                Update Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <h1 className="text-center mb-4 box-title">My Notes</h1>
                {notes.length>0?<div className="row">
                    {notes.map((note) => {
                        return (
                            <NoteItem
                                note={note}
                                updateNote={updateNote}
                                key={note._id}
                                title={note.title}
                                description={note.description}
                                showAlert={props.showAlert}
                            />
                        );
                    })}
                </div>: <div className="container text-center mt-5">
                    <h2>You don't have any notes :(</h2>    
                </div>}
            </div>
        </>
    );
};
