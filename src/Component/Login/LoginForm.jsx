import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderFieldLogin} from "../FormControls/FormsControl";
import {email, maxLength15, minLength2} from "../../utils/validators";
import s from "./LoginForm.module.css"
const LoginForm=(props)=>{
    const {handleSubmit}=props
     return (
        <form onSubmit={handleSubmit} >
        <div>
            <Field placeholder='login' name='login' placeholder='email' component={renderFieldLogin} type='text' validate={email} />
        </div>
        <div>
            <Field name='password' placeholder='password' component={renderFieldLogin} type='text' validate={[maxLength15,minLength2]}/>
        </div>
        <div>
            <Field label='remember me' name='remember' component='input' type='checkbox' description="Show the title of the item"  />Remember me
        </div>
            <button type="submit">Submit</button>
           <div className={s.ErrorLoginForm}>{props.error ? props.error:''}</div>
    </form>
     )
}
let LoginFormRedux = reduxForm({
    // a unique name for the form
    form: 'loginform'
})(LoginForm)
export default LoginFormRedux