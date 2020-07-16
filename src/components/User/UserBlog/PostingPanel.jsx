import React from "react";
import style from "./PostingPanel.module.sass";


function PostingPanel(props) {
    let onAddPost = (e) => {
        e.preventDefault();
        props.addPost();
    }
    let onInputPostTitle = (e) => {
        let text = e.target.value;
        props.onNewPostTitle(text);
    }
    let onInputPostText = (e) => {
        let text = e.target.value;
        props.onNewPostText(text);
    }
    let onInputPostImgUrl = (e) => {
        let text = e.target.value;
        props.onNewPostImgUrl(text);
    }
    return (
        <div className={style.postingPanel}>
            <form onSubmit={onAddPost}>
                <input onChange={onInputPostTitle} type="text" placeholder="Title" value={props.newPostTitle}/>
                <textarea onChange={onInputPostText} placeholder="Description" cols="30" rows="10" value={props.newPostText}/>
                <input onChange={onInputPostImgUrl} type="text" placeholder="Img URL" value={props.newPostImgUrl}/>
                <button>Post</button>
            </form>
        </div>
    );
}

export default PostingPanel;