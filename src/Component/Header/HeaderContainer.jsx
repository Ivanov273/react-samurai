import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AuthThunk, AuthThunkDeleteLogin} from "../../Redux/Reducer-Auth";

class HeaderContainer extends React.Component {
    render(){
        return        <Header {...this.props}  />
    }
}
let mapStateToProps = (state)=>{
    return{
        isAuth: state.Auth.isAuth,
        login: state.Auth.login


    }
}
export default connect (mapStateToProps,{AuthThunk,AuthThunkDeleteLogin})(HeaderContainer)