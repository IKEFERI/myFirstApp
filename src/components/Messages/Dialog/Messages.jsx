import style from "./Messages.module.sass";
import React from "react";
import DialogsNav from "../DialogsNav";
import DialogContainer from "./DialogContainer";

function Messages(props) {
    return (
        <div className={style.messages}>

            <DialogsNav/>
            <DialogContainer/>

        </div>
    );
}

export default Messages;