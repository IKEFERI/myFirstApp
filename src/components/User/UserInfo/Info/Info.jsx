import React from "react";
import style from "./Info.module.sass";

function Info(props) {
    return (

        <div className={style.info}>
            <div className={style.name}>
                {props.info.fullname}
            </div>
            <div className={style.status}>
                {props.info.status}
            </div>
            <div className={style.description}>
                Add description...
            </div>
            <div className={style.gallery}>
                Add photos...
            </div>
        </div>
    );
}

export default Info;