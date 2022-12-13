import React from "react";
import Loginpage from "./Login";
import {connect} from "react-redux";
import {AuthThunkDeleteLogin, AuthThunkLogin} from "../../Redux/Reducer-Auth";

class LoginContainer extends React.Component{
    render() {
        ///if(props.Auth) return alert(props.isAuth)
        return <Loginpage isAuth={this.props.isAuth} AuthThunkLogin={this.props.AuthThunkLogin} />
    }
}
let mapStateToProps=(state)=>{
    return {
        login: state.Auth.login,
        isAuth: state.Auth.isAuth
    }
}
export default connect(mapStateToProps, {AuthThunkLogin,AuthThunkDeleteLogin})
(LoginContainer)