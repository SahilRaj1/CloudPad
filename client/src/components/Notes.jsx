import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { NoteItem } from "./NoteItem";

export const Notes = () => {

    const context = useContext(NoteContext);
    const { notes, setNotes } = context;

  return (
    <div className="container-fluid my-5">
        <h1 className="text-center">My Notes</h1>
        <div className="row" style={{margin: "auto"}}>
            { notes.map((note) => {
                return <NoteItem title={note.title} description={note.description} />
            }) }
        </div>
    </div>
  )
}
