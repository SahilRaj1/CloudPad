import React, { useContext } from "react";

export default function Home() {

    const context = useContext(contextValue);
    const { notes, setNotes } = context;

    return (
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
                <button type="submit" className="btn btn-primary my-1">Add</button>
            </div>

            {/* view notes here */}
            <div className="container-fluid my-5">
              <h1 className="text-center">My Notes</h1>
            </div>

        </div>
    );
}
