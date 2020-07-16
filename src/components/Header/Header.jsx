import React from "react";
import style from "./Header.module.sass"
import {NavLink} from "react-router-dom";
import logo from "./logo.svg"
function Header() {
    return (
        <header className={style.menu}>
            <nav>
                <ul>
                    <li><img src={logo} alt="This project powered on React" className="responsive" title="This project powered on React"/></li>
                    <li><NavLink activeClassName={style.active} to="/dashboard" >Dashboard</NavLink></li>
                    <li><NavLink activeClassName={style.active} to="/user" >My page</NavLink></li>
                    <li><NavLink activeClassName={style.active} to="/messages" >Messages</NavLink></li>
                    <li><NavLink activeClassName={style.active} to="/random" >Random</NavLink></li>
                    <li><NavLink activeClassName={style.active} to="/users" >Users</NavLink></li>
                    <li><NavLink activeClassName={style.active} to="/settings" >Settings</NavLink></li>
                    <li><NavLink activeClassName={style.active} to="/contacts" >Contacts</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;