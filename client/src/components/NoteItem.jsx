import React, { useContext } from 'react'
import NoteContext from "../context/notes/noteContext";

export const NoteItem = (props) => {

    const {title, description} = props;
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <>

        <div className='col-md-6 col-lg-4 my-4' > 
            <div className="card box-card" style={{width: "23rem", marginLeft: "auto", marginRight: "auto"}}>
            <div className="card-body box-content" >
                <h4 className="card-title mb-3" style={{"fontWeight": "600"}}>{title}</h4>
                <p className="card-text mb-4">{description}</p>
                <i onClick={() => {updateNote(note);}} className="fa-solid fa-pen-to-square mx-1"></i>
                <i onClick={() => {deleteNote(note._id); props.showAlert("Successfully deleted note", "success");}} className="fa-solid fa-trash mx-3"></i>
            </div>
            </div>
        </div>

        </>
  )
}
