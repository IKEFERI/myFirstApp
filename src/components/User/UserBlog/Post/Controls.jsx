import style from "./Controls.module.sass";
import React from "react";


function Controls(props) {
    return (
        <div className={style.controls}>
            <a href="#" className={style.like}>Like {props.likes}</a>
            <a href="#" className={style.comment}>Comments {props.comments}</a>
            <a href="#" className={style.repost}>Repost {props.reposts}</a>
            <a href="#" className={style.share}>Share</a>
        </div>
    );
}
export default Controls;