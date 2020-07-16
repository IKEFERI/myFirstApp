import style from "./Picture.module.sass";
import React from "react";


function Picture(props) {
    return (
        <a href="#" className={style.picture}>
            <img src={props.url} className="responsive" alt="picture"/>
        </a>
    );
}

export default Picture;