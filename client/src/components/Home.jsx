import React from "react";
import { Notes } from "./Notes";


export default function Home(props) {

    return (
        <>
        <div className="my-3">
            {localStorage.getItem('token')? <Notes showAlert={props.showAlert} /> : 
            
                <div className="container mt-5">
                    <div className="jumbotron pt-2">
                        <h1 className="display-4">Welcome to CloudPad</h1>
                        <p className="lead">Write, secure, and access your notes from anywhere.</p>
                        <hr className="my-4" />
                        <ul className="list-group">
                            <li className="list-group-item">Write your notes</li>
                            <li className="list-group-item">Secure your notes on cloud</li>
                            <li className="list-group-item">Access your notes from anywhere</li>
                            <li className="list-group-item">Edit or delete your notes</li>
                            <li className="list-group-item">Give your notes a relevant tag</li>
                            <li className="list-group-item">Maintain privacy using credentials</li>
                        </ul>
                        <p className="lead">
                        <a className="btn btn-primary btn-lg mt-4" href="http://localhost:3000/signup" role="button">Get Started</a>
                        </p>
                    </div>
                </div>
            
            }
        </div>
        </>
    );
}
