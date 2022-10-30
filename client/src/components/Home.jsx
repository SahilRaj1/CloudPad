import React from "react";
import { Notes } from "./Notes";


export default function Home(props) {

    const handleAdd = () => {
        props.showAlert("Successfully added note", "success")
    }

    return (
        <>
        <div className="my-3">


            {/* add a note */}
            <h1 className="text-center">Add a Note</h1>
            <div className="container-fluid">
                <div className="mb-3 mt-4">
                    <label htmlFor="noteTitle" className="form-label">
                        <h4>Title</h4>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="noteTitle"
                        placeholder="Enter title here"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="noteTextArea" className="form-label">
                        <h4>Note</h4>
                    </label>
                    <textarea
                        className="form-control"
                        id="noteTextArea"
                        rows="4"
                        placeholder="Enter note here"
                    ></textarea>
                </div>
                <button type="submit" onClick={handleAdd} className="btn btn-primary my-1">Add</button>
            </div>

            {/* view notes here */}
            <Notes showAlert={props.showAlert} />

        </div>
        </>
    );
}
