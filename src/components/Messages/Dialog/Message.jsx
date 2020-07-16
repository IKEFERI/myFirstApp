import style from "./Message.module.sass";
import React from "react";


function Message(props) {
    return (
        <div key={props.data.key} className={style.message + (props.data.self?" " + style.self : "")}>
            <div className={style.title}>
                <div className={style.avatar}>
                    <img className="responsive"
                         src={props.data.avatar}
                         alt="avatar"/>
                </div>
                <div className={style.name}>{props.data.name}</div>
                <div className={style.time}>{props.data.time}</div>
            </div>
            <div className={style.text}>
                {props.data.text}
            </div>
        </div>
    );
}
export default Message;