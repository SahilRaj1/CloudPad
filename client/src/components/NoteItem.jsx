import React from 'react'

export const NoteItem = (props) => {

    const {title, description} = props;
    
    return (

    <div className='col-md-6 col-lg-4 my-3' style={{ margin: "auto", display: "flex", justifyContent: "center" }}> 
        <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
        </div>
        </div>
    </div>

  )
}
