import React, { useContext, useState } from 'react'
import NoteContext from "../context/notes/noteContext";

export const AddNote = (props) => {

    const context = useContext(NoteContext);
    const { addNote } = context;

    const handleAdd = () => {
        addNote(note);
        props.showAlert("Successfully added note", "success")
    }

    const [note, setNote] = useState({title: "", description: "", tag: ""});

    const onChange = (event) => {
        setNote({...note, [event.target.name]: event.target.value})
    }

  return (
    <>
        <h1 className="text-center">Add a Note</h1>
        <div className="container-fluid">
            <div className="mb-3 mt-4">
                <label htmlFor="title" className="form-label">
                    <h4>Title</h4>
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter title here"
                    onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    <h4>Note</h4>
                </label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="4"
                    placeholder="Enter note here"
                    onChange={onChange}
                ></textarea>
            </div>
            <button type="submit" onClick={handleAdd} className="btn btn-primary my-1">Add</button>
        </div>
    </>
  )
}
