import React from 'react'
import LoginFormRedux, {LoginForm} from "./LoginForm";
import {Navigate} from "react-router-dom";

const Loginpage = (props)=>{
    const onSubmit = (formdata)=>{
       props.AuthThunkLogin(formdata.login,formdata.password,formdata.remember)
    }
    if(props.isAuth) return <Navigate to="/profile" />
    return <div>
        <h1>LOGIN</h1>
        <LoginFormRedux AuthThunkLogin={props.AuthThunkLogin}  onSubmit={onSubmit} />
    </div>
}

export default Loginpage