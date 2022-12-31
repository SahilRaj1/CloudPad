import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState";
import { Alert } from './components/Alert';
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AddNote } from "./components/AddNote";
import Profile from "./components/Profile";


function App() {

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    return (
        <NoteState>
            <Router>
                    <Navbar showAlert={showAlert} />
                    <Alert alert={alert} />
                    <div className="container">
                        <Routes>
                            {localStorage.getItem('token')} && (<Route exact path="/mynotes" element={<Home showAlert={showAlert} />}></Route>)
                            {localStorage.getItem('token')} && <Route exact path="/about" element={<About />}></Route>
                            (<Route exact path="/addnote" element={<AddNote showAlert={showAlert}/>}></Route>)
                            <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
                            <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>
                            <Route exact path="/profile" element={<Profile showAlert={showAlert} />}></Route>
                        </Routes>
                    </div>
            </Router>
        </NoteState>
    );
}

export default App;
