import React from 'react'

export const NoteItem = (props) => {

    const {title, description} = props;
    
    const handleEdit = () => {
        props.showAlert("Successfully edited note", "success")
    }

    const handleDelete = () => {
        props.showAlert("Successfully deleted note", "success")
    }

    return (
        <>

        <div className='col-md-6 col-lg-4 my-3' style={{ margin: "auto", display: "flex", justifyContent: "center" }}> 
            <div className="card" style={{width: "20rem"}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <i onClick={handleEdit} className="fa-solid fa-pen-to-square mx-2"></i>
                <i onClick={handleDelete} className="fa-solid fa-trash mx-2"></i>
            </div>
            </div>
        </div>

        </>
  )
}
