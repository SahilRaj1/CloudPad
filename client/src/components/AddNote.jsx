import React, { useContext, useState } from 'react'
import NoteContext from "../context/notes/noteContext";
import { Notes } from './Notes';

export const AddNote = (props) => {

    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "General" });

    const handleAdd = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        props.showAlert("Successfully added note", "success")
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }

    return (
        <>
            <h1 className="text-center">Add a Note</h1>
            <div className="container-fluid">
                <form>
                    <div className="mb-3 mt-4">
                        <label htmlFor="title" className="form-label">
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
                        <label htmlFor="description" className="form-label">
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
                        ></textarea>
                    </div>
                </form>
                <button disabled={note.title.length<3 || note.description.length<5} type="submit" onClick={handleAdd} className="btn btn-primary my-1">Add</button>
            </div>
        </>
    )
}

