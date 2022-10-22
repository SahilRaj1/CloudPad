import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const s1 = {
        "name": "Sahil Raj",
        "age": "20"
    }

    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Ritika Jagtap",
                "age": "21"
            });
        }, 2000);
    }

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    );

}

export default NoteState; 