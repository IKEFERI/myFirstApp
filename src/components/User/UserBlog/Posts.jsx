import style from "./Posts.module.sass";
import React from "react";
import Post from "./Post/Post";


function Posts(props) {

    let posts = props.postItems.map(d => <Post key={d.id} data={d}/>).reverse();
    return (
        <div className={style.posts}>
            {posts}
        </div>
    );
}

export default Posts;