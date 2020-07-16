import React from "react";
import style from "./UserBlog.module.sass"
import PostingPanelContainer from "./PostingPanelContainer";
import PostsContainer from "./PostsContainer";

function UserBlog() {
    return (
        <div className={style.bottom}>
            <PostingPanelContainer/>
            <PostsContainer/>
        </div>
    );
}

export default UserBlog;