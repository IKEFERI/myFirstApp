import React from "react";
import style from "./Avatar.module.sass";

function Avatar(props) {
    return (
        <div className={style.avatar}>
            <a href="#"><img
                src={props.img.large}
                className="responsive" alt="img"/></a>
        </div>
    );
}

export default Avatar;