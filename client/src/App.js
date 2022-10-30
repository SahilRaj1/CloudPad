import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState";
import { Alert } from './components/Alert';
import { useState } from "react";


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
                    <Navbar />
                    <Alert alert={alert} />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
                            <Route exact path="/about" element={<About />}></Route>
                        </Routes>
                    </div>
            </Router>
        </NoteState>
    );
}

export default App;
