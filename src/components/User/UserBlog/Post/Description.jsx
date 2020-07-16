import style from "./Description.module.sass";
import React from "react";


function Description(props) {
    return (
        <div className={style.description}>
            {props.text}
        </div>
    );
}
export default Description;