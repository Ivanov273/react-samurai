import React from 'react'
import s from './../Dialogs.module.css'

const MessageItem = (props) => {
    return (
        <div>
        <div>
        <div className={s.message_item}>{props.text}</div>

        </div>

        </div>
    )
}

export default MessageItem