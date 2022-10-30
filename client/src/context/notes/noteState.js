import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "63595a254845f46e54d65a3f",
          "user": "635957154845f46e54d65a3c",
          "title": "My Book",
          "description": "This is my first note on my first book",
          "tag": "General",
          "date": "2022-10-26T16:02:45.019Z",
          "__v": 0
        },
        {
          "_id": "63595a284845f46e54d65a41",
          "user": "635957154845f46e54d65a3c",
          "title": "second note",
          "description": "This is updated note",
          "tag": "General",
          "date": "2022-10-26T16:02:48.773Z",
          "__v": 0
        },
        {
          "_id": "63595a284845f46454d65a42",
          "user": "635957154845f46e54d65a3c",
          "title": "second note",
          "description": "This is updated note",
          "tag": "General",
          "date": "2022-10-26T16:02:48.773Z",
          "__v": 0
        },
        {
          "_id": "63595a284845f46e54d65a43",
          "user": "635957154845f46e54d65a3c",
          "title": "second note",
          "description": "This is updated note",
          "tag": "General",
          "date": "2022-10-26T16:02:48.773Z",
          "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)

    // Add a note
    const addNote = (title, description, tag) => {

      // TODO: API call

      const note = {
        "_id": "63595a284845f46e54d65a41",
        "user": "635957154845f46e54d65a3c",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-10-26T16:02:48.773Z",
        "__v": 0
      };
      setNotes(notes.concat(note));
    }

    // Edit a note
    const editNote = (id) => {
      
    }

    // Delete a note
    const deleteNote = (id) => {
      console.log(`Deleting note with id ${id}`);
      const newNotes = notes.filter((note) => {return note._id!==id});
      setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{notes, setNotes, addNote, editNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    );

}

export default NoteState;