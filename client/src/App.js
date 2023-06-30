import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/noteState";
import { Alert } from './components/Alert';
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AddNote } from "./components/AddNote";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";


function App() {

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    return (
        <NoteState>
            <Router>
                    <Navbar showAlert={showAlert} />
                    <Alert alert={alert} />
                    <div className="container">
                        <Routes>
                            {localStorage.getItem('token')} && (<Route exact path="/" element={<Home showAlert={showAlert} />}></Route>)
                            <Route exact path="/" element={<Home showAlert={showAlert}/>}></Route>
                            <Route exact path="/addnote" element={<AddNote showAlert={showAlert}/>}></Route>
                            <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
                            <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>
                            <Route exact path="/profile" element={<Profile showAlert={showAlert} />}></Route>
                            <Route exact path="*" element={<NotFound />}></Route>
                        </Routes>
                    </div>
            </Router>
        </NoteState>
    );
}

export default App;
