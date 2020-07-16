import React from 'react';
// import logo from './logo.svg';
import './App.sass';
import Header from "./components/Header/Header";
import Content from "./components/Content";
import {BrowserRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
    return (
        <BrowserRouter history={history}>

            <div className="App">
                <Header/>
                <Content/>
            </div>

        </BrowserRouter>
    );
}


export default App;
