import style from "./Title.module.sass";
import React from "react";


function Title(props) {
    return (
        <h4 className={style.title}>
            {props.title}
        </h4>
    );
}

export default Title;