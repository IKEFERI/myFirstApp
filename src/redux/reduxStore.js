import messagesReducer from "./messagesReducer";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import {combineReducers, createStore} from "redux";


let reducers = combineReducers({
    pMessages: messagesReducer,
    pUser: userReducer,
    pUsers: usersReducer
})
let store = createStore(reducers);

export default store;