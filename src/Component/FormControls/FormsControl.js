import React from "react";
import s from './FormStyle.module.css'

const FormControls = ({input, meta, child, ...props}) => {
    return (
        <div >
            <div className={meta.error ? s.formControls : ''}>
                {props.children}
            </div>
            {meta.touched &&
                ((meta.error && <span className={s.error}>{meta.error}</span>))}
        </div>
    )
}

export const renderField = (props) => {
    return <FormControls {...props}><textarea {...props.input} {...props}  /> </FormControls>
}
export const renderFieldDialog = (props) => {
    return <FormControls {...props}><textarea {...props.input} {...props}  /> </FormControls>
}
export const renderFieldLogin = (props) => {
    return <FormControls {...props}><input {...props.input} {...props}  /> </FormControls>
}



