import React from "react";
import Posts from "./Posts";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


// function PostsContainer(props) {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     return <Posts postItems={state.pUser.postItems} />
//                 }
//             }
//         </StoreContext.Consumer>
//
//     );
// }

let mapStateToProps = (state) => {
    return {
        postItems: state.pUser.postItems
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {}
// }
const PostsContainer = connect (mapStateToProps)(Posts);


export default PostsContainer;