import style from "./DialogsNav.module.sass";
import React from "react";

function DialogsNav() {
    return (
        <div className={style.dialogsNav}>
            <div className={style.item}>
                <div className={style.avatar}>
                    <img className="responsive"
                         src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
                         alt="avatar"/>
                </div>
                <div className={style.info}>
                    <div className={style.name}>Ivan Petrovich</div>
                    <div className={style.time}>10:00</div>
                    <div className={style.preview}>Lorem ipsum dolor sit amet,..</div>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.avatar}>
                    <img className="responsive"
                         src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
                         alt="avatar"/>
                </div>
                <div className={style.info}>
                    <div className={style.name}>Ivan Petrovich</div>
                    <div className={style.time}>10:00</div>
                    <div className={style.preview}>Lorem ipsum dolor sit amet,..</div>
                </div>
            </div>

            <div className={style.item}>
                <div className={style.avatar}>
                    <img className="responsive"
                         src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
                         alt="avatar"/>
                </div>
                <div className={style.info}>
                    <div className={style.name}>Ivan Petrovich</div>
                    <div className={style.time}>10:00</div>
                    <div className={style.preview}>Lorem ipsum dolor sit amet,..</div>
                </div>
            </div>
            <div className={style.item}>
                <div className={style.avatar}>
                    <img className="responsive"
                         src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
                         alt="avatar"/>
                </div>
                <div className={style.info}>
                    <div className={style.name}>Ivan Petrovich</div>
                    <div className={style.time}>10:00</div>
                    <div className={style.preview}>Lorem ipsum dolor sit amet,..</div>
                </div>
            </div>
        </div>
    );
}

export default DialogsNav;