import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import { AddNote } from "./AddNote";
import { NoteItem } from "./NoteItem";

export const Notes = (props) => {

    const context = useContext(NoteContext);
    const { notes, getNotes } = context;

    useEffect(() => {
      getNotes();
    }, []);

    return (
      <>
      <AddNote showAlert={props.showAlert} />
      <div className="container-fluid my-5">
          <h1 className="text-center mb-3">My Notes</h1>
          <div className="row" >
              { notes.map((note) => {
                  return <NoteItem note={note} key={note._id} title={note.title} description={note.description} showAlert={props.showAlert} />
              }) }
          </div>
      </div>
      </>
    )
}
