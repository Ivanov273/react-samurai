import React from 'react'
import s from './SideBarItem.module.css'

const SideBarItem = (props) => {

    return (
        <div className={s.SideBar_friends_item}><img
            src={props.img} alt=""/>{props.name}
        </div>

    )
}
export default SideBarItem