import React, { useContext } from 'react'
import NoteContext from "../context/notes/noteContext";

export const NoteItem = (props) => {

    const {title, description} = props;
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <>

        <div className='col-md-6 col-lg-4 my-3' > 
            <div className="card" style={{width: "20rem", marginLeft: "auto", marginRight: "auto"}}>
            <div className="card-body" >
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <i onClick={() => {updateNote(note);props.showAlert("Successfully edited note", "success");}} className="fa-solid fa-pen-to-square mx-2"></i>
                <i onClick={() => {deleteNote(note._id);props.showAlert("Successfully deleted note", "success");}} className="fa-solid fa-trash mx-2"></i>
            </div>
            </div>
        </div>

        </>
  )
}
