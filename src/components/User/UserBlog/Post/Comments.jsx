import style from "./Comments.module.sass";
import React from "react";


function Comments() {
    return (
        <div className={style.comments}>

            <div className={style.item}>
                <a href="#" className="img_wrap"><img src="" alt="" className="responsive"/></a>
                <div className="content">
                    <div className="name">Yerosluv</div>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A est exercitationem
                            expedita magnam nam</p>
                    </div>
                    <div className="controls">
                        <a href="#" className={style.like}>Like</a>
                        <a href="#" className={style.response}>Response</a>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Comments;