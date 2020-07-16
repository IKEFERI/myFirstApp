import React from "react";

const sendMessage = "sendMessage";
const inputMessage = "inputMessage";


let initState = {
    userPhoto: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
    userInfo: {
        name: "Ares Vasilyevich"
    },
    messageItems: [
        {
            "avatar": "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
            "name": "Ivan Petrovich",
            "time": "10:00",
            "text": <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>,
            "self": 0,
            "id": "0"
        },
        {
            "avatar": "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
            "name": "Ivan Petrovich",
            "time": "10:00",
            "text": <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>,
            "self": 1,
            "id": "1"
        },
        {
            "avatar": "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
            "name": "Ivan Petrovich",
            "time": "10:00",
            "text": <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>,
            "self": 0,
            "id": "2"
        }
    ],
    newMessageText: "",
}


const messagesReducer = (state = initState, action) => {

    switch (action.type) {

        case sendMessage:

            const _date = new Date();
            const _time = _date.getHours() + ":" + _date.getMinutes();
            return {
                ...state,
                messageItems: [...state.messageItems, {
                    "avatar": state.userPhoto,
                    "name": state.userInfo.name, //state.UserInfo.name
                    "time": _time,
                    "text": state.newMessageText,
                    "self": 1,
                    "id": state.messageItems[Object.keys(state.messageItems).length - 1].id + 1
                } ],
                newMessageText : "",
            }
        case inputMessage:
            console.log(action.value);
            return {
                ...state,
                newMessageText: action.value
            }
        default:
            return state
    }
}
export const sendMessageActionCreator = () => ({
    type: sendMessage
});

export const inputMessageActionCreator = (val) => ({type: inputMessage, value: val});

export default messagesReducer;