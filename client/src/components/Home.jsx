import React from "react";

export default function Home() {
    return (
        <div className="my-3">

            {/* add a note */}
            <h1 className="text-center">Add a Note</h1>
            <div className="container-fluid">
                <div class="mb-3 mt-4">
                    <label for="noteTitle" class="form-label">
                        <h4>Title</h4>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="noteTitle"
                        placeholder="Enter title here"
                    />
                </div>
                <div class="mb-3">
                    <label for="noteTextArea" class="form-label">
                        <h4>Note</h4>
                    </label>
                    <textarea
                        class="form-control"
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
