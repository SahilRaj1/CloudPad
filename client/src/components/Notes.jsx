import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import { AddNote } from "./AddNote";
import { NoteItem } from "./NoteItem";

export const Notes = (props) => {

    const context = useContext(NoteContext);
    const { notes } = context;

  return (
    <>
    <AddNote showAlert={props.showAlert} />
    <div className="container-fluid my-5">
        <h1 className="text-center">My Notes</h1>
        <div className="row" style={{margin: "auto"}}>
            { notes.map((note) => {
                return <NoteItem title={note.title} description={note.description} showAlert={props.showAlert} />
            }) }
        </div>
    </div>
    </>
  )
}
