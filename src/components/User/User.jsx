import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import UserBlog from "./UserBlog/UserBlog";
import style from "./User.module.sass"

function User(props) {
    return (
        <div className={style.user}>
            <UserInfo profile={props.profile}/>
            <UserBlog />
        </div>
    );
}

export default User;