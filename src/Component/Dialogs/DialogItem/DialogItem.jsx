import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
const DialogItem = (props) => {

    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink className={navData => navData.isActive ? s.active : s.dialog}
                     to={'/dialogs/' + props.id}> {props.name}</NavLink>

        </div>
    )
}

export default DialogItem