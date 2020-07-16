import React from "react";
import style from "./Content.module.sass";
import {Route, Switch} from "react-router-dom";
import Messages from "./Messages/Dialog/Messages";
import UsersContainer from "./Friends/FriendsContainer";
import UserContainer from "./User/UserContainer";

function Content() {
    return (
        <main className={style.content}>
            <Switch>
                <Route exact path='/user/:userI?' render={() => <UserContainer/>}/>
                <Route exact path='/messages' render={() => <Messages/>}/>
                <Route exact path='/users' render={() => <UsersContainer/>}/>
            </Switch>
        </main>
    );
}

export default Content;