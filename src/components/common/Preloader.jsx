import React from "react";
import style from "./Preloader.module.sass"
import preloader from "../../assets/img/ball-triangle.svg"

let Preloader = () => {
    return (
        <div className={style.preloaderWrapper}>
            <div>
                <img src={preloader} alt="Loading"/>
            </div>
        </div>
    )
}
export default Preloader;