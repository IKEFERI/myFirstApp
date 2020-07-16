import React from "react";
import {
    addPostActionCreator,
    newPostImgUrlActionCreator,
    newPostTextActionCreator, newPostTitleActionCreator
} from "../../../redux/userReducer";
import PostingPanel from "./PostingPanel";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


// function PostingPanelContainer() {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState();
//                     let addPost = () => {
//                         let action = addPostActionCreator();
//                         store.dispatch(action);
//                     }
//                     let inputPostFields = (text, fieldName) => {
//                         let action = inputPostFieldsActionCreator(text, fieldName);
//                         store.dispatch(action);
//                     }
//                     return <PostingPanel addPost={addPost} inputPostFields={inputPostFields}
//                                          newPostTitle={state.pUser.newPostTitle} newPostText={state.pUser.newPostText}
//                                          newPostImgUrl={state.pUser.newPostImgUrl}/>
//                 }
//             }
//         </StoreContext.Consumer>
//
//     );
// }


let mapStateToProps = (state) => {
    return {
        newPostTitle: state.pUser.newPostTitle,
        newPostText: state.pUser.newPostText,
        newPostImgUrl: state.pUser.newPostImgUrl
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onNewPostTitle: (text) => {
            dispatch(newPostTitleActionCreator(text));
        },
        onNewPostText: (text) => {
            dispatch(newPostTextActionCreator(text));
        },
        onNewPostImgUrl: (text) => {
            dispatch(newPostImgUrlActionCreator(text));
        }
    }
}
const PostingPanelContainer = connect(mapStateToProps, mapDispatchToProps)(PostingPanel);


export default PostingPanelContainer;