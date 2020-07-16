import React from "react";
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";
import style from "./UserInfo.module.sass";
import Preloader from "../../common/Preloader";

function UserInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={style.top}>
                <Avatar img={props.profile.photos}/>
                <Info info={props.profile}/>
            </div>
        );
    }

}

export default UserInfo;