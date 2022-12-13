import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import {Navigate} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {renderFieldDialog} from "../FormControls/FormsControl";
import {alphaNumeric, maxLength30, minLength2} from "../../utils/validators";

const Dialogs = (props) => {
    let AddDialog = (values) => {
        props.onaddDialogs(values.dialog)
    }
    let DialogMass = props.DialogData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let MessagesElement = props.TextData.map(t => <MessageItem key={t.id} text={t.text}/>)
    if(!props.Auth) return <Navigate to={"/login"} />
    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <div className={s.dialog_items}>
                    {DialogMass}
                </div>
            </div>
            <div className={s.messages}>
                {MessagesElement}
                <div>
                    <DialogFormRedux onSubmit={AddDialog}/>
                </div>
            </div>
        </div>
    )
}

const DialodForm=(props)=>{
    const {handleSubmit}=props
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field placeholder='Enter your message' name='dialog' component={renderFieldDialog} type='text' validate={[maxLength30,minLength2,alphaNumeric]} />
            </div>
                        <button type="submit">Submit</button>

        </form>
    )
}
export default Dialogs
let DialogFormRedux = reduxForm({
    // a unique name for the form
    form: 'loginform'
})(DialodForm)

