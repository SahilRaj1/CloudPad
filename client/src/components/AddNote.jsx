import React, { useContext, useState, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";

export const AddNote = (props) => {

    const context = useContext(NoteContext);
    const { addNote } = context;
    
    let navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
    }, []);

    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: "General",
    });

    const handleAdd = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        props.showAlert("Successfully added note", "success");
        setNote({ title: "", description: "", tag: "" });
    };

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    };

    if (!localStorage.getItem("token")) {
        navigate("/login");
    } else {
        return (
            <>
                <div className="container box mt-5">
                    <h1 className="text-center mb-4 box-title">Add a Note</h1>
                    <div className="container-fluid box-content mb-1">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title">
                                    <h5 style={{ fontWeight: "600" }}>Title</h5>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    placeholder="Enter title here"
                                    onChange={onChange}
                                    value={note.title}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag">
                                    <h5 style={{ fontWeight: "600" }}>Tag</h5>
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
                            <div className="mb-4">
                                <label htmlFor="description">
                                    <h5 style={{ fontWeight: "600" }}>Note</h5>
                                </label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    rows="5"
                                    placeholder="Enter note here"
                                    onChange={onChange}
                                    value={note.description}
                                ></textarea>
                            </div>
                        </form>
                        <button
                            disabled={
                                note.title.length < 3 ||
                                note.description.length < 5
                            }
                            type="submit"
                            onClick={handleAdd}
                            className="btn btn-primary my-1"
                        >
                            Add Note
                        </button>
                    </div>
                </div>
            </>
        );
    }
};
