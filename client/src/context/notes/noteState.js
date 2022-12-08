import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";

    const [notes, setNotes] = useState([]);

    // Get all notes
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0YjAxMDAwZWU0M2E5ZGZlYjRlODVkIn0sImlhdCI6MTY2NTg2MzMxN30.xWH6_CMAjmAn5BOe9kF2ookregn9o6NwPgX7CEGPtcU",
            },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    };

    // Add a note
    const addNote = async (title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0YjAxMDAwZWU0M2E5ZGZlYjRlODVkIn0sImlhdCI6MTY2NTg2MzMxN30.xWH6_CMAjmAn5BOe9kF2ookregn9o6NwPgX7CEGPtcU",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();

        console.log(json);
        setNotes(notes.concat(json));
    };

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0YjAxMDAwZWU0M2E5ZGZlYjRlODVkIn0sImlhdCI6MTY2NTg2MzMxN30.xWH6_CMAjmAn5BOe9kF2ookregn9o6NwPgX7CEGPtcU",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();

        // logic to edit note in client
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    };

    // Delete a note
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "auth-token":
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0YjAxMDAwZWU0M2E5ZGZlYjRlODVkIn0sImlhdCI6MTY2NTg2MzMxN30.xWH6_CMAjmAn5BOe9kF2ookregn9o6NwPgX7CEGPtcU",
            },
        });
        const json = await response.json();
        console.log(json);

        console.log(`Deleting note with id ${id}`);
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNotes);
    };

    return (
        <NoteContext.Provider
            value={{ notes, setNotes, addNote, editNote, deleteNote, getNotes }}
        >
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
