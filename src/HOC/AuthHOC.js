import React, {Component} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
let mapStateToPropsForRedirect = (state)=>({
    Auth: state.Auth.isAuth
})
export const WithAuthContainer = (Component) =>{
    class RedirectComponent extends React.Component {
        render(){
            if(!this.props.Auth) return <Navigate to={"/login"} />
            return <Component {...this.props} />
        }
    }

    let newRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return newRedirectComponent
}



/*
  let AuthContainer = (props)=>{
        if(!this.props.Auth) return <Navigate to={"/login"} />
        return <Component {...props} />
    }
    return AuthContainer
*/
/*
class RedirectComponent extends React.Component {
    render(){
        if(!this.props.Auth) return <Navigate to={"/login"} />
        return <Component {...this.props} />
    }
}
return RedirectComponent

 */