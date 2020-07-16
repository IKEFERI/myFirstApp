import React from "react";
import {inputMessageActionCreator, sendMessageActionCreator} from "../../../redux/messagesReducer";
import Dialog from "./Dialog";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";


// function DialogContainer(props) {
//
//     return (
//
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let sendMessage = (messagesContainer) => {
//                         //messagesContainer
//                         let action = sendMessageActionCreator(messagesContainer);
//                         store.dispatch(action);
//                     }
//                     let inputMessage = (text) => {
//                         //input
//                         let action = inputMessageActionCreator(text);
//                         store.dispatch(action);
//                     }
//                     return <Dialog messages={state.pMessages.messageItems} updateInputMessage={inputMessage}
//                                    sendMessage={sendMessage} newMessageText={state.pMessages.newMessageText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//
//     );
// }

let mapStateToProps = (state) => {
    return {
        messages: state.pMessages.messageItems,
        newMessageText: state.pMessages.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateInputMessage: (text) => {dispatch(inputMessageActionCreator(text));},
        sendMessage: () => {dispatch(sendMessageActionCreator());}
    }
}
const DialogContainer = connect (mapStateToProps,mapDispatchToProps)(Dialog);




export default DialogContainer;