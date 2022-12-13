import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import SideBar from "../SideBar/SideBar";

const Navbar = () => {
    //let state = props.store.getState()

    return (       <div className={s.main}>
            <nav className={s.mainNav}>
                <div className={s.main_nav}>
                    <div>
                        <NavLink className={navData => navData.isActive ? s.active : s.item}
                                 to="/profile">Profile</NavLink>
                    </div>
                    <div>
                        <NavLink className={navData => navData.isActive ? s.active : s.item}
                                 to="/dialogs">Dialogs</NavLink>
                    </div>
                    <div>
                        <NavLink className={navData => navData.isActive ? s.active : s.item} to="/users">Users</NavLink>
                    </div>
                    <div>
                        <NavLink className={navData => navData.isActive ? s.active : s.item} to="/news">News</NavLink>
                    </div>
                    <div>
                        <NavLink className={navData => navData.isActive ? s.active : s.item} to="/music">Music</NavLink>
                    </div>
                    <div>
                        <SideBar />
                    </div>
                </div>
            </nav>
        </div>

    );
}
export default Navbar;