import React from "react";

export const Alert = (props) => {
    return (
        props.alert && (
            <div class={`alert alert-${props.alert.type}`} role="alert">
                {props.alert.message}
            </div>
        )
    );
};
