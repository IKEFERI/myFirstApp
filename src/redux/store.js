import React from "react";
import messagesReducer from "./messagesReducer";
import userReducer from "./userReducer";





let store = {
    _state: {
        pMessages: {
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
        },
        pUser: {
            userPhoto: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
            userInfo: {
                name: "Ares Vasilyevich"

            },
            postItems: [
                {
                    "img": "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg",
                    "title": "New blog post",
                    "date": "10:00",
                    "text": <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>,
                    "likes": "12",
                    "comments": "3",
                    "reposts": "10",
                    "id": "2"
                }
            ],
            newPostTitle: "",
            newPostText: "",
            newPostImgUrl: ""
        }


    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("Observer is not defined")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        let pMessages = this._state.pMessages;
        let pUser = this._state.pUser;
        this._state.pMessages = messagesReducer(pMessages, action);
        this._state.pUser = userReducer(pUser, action);
        this._callSubscriber(this._state);

    }
}


export default store;
