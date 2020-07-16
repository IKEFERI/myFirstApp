import store from "./redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from "react-redux";

// let rerrenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }
// rerrenderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     rerrenderEntireTree(state);
// });

