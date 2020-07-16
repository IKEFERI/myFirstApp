import style from "./Post.module.sass";
import React from "react";

import Picture from "./Picture";
import Title from "./Title";
import Description from "./Description";
import Controls from "./Controls";
import Comments from "./Comments";


function Post(props) {
    return (
        <div key={props.data.key} className={style.post}>
            <div>
                <Picture url={props.data.img}/>
                <Title title={props.data.title}/>
                <Description text={props.data.text}/>
                <Controls likes={props.data.likes} comments={props.data.comments} reposts={props.data.reposts}/>
                <Comments/>
            </div>

        </div>
    );
}

export default Post;