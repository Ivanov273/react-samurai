import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props)=>{
    const exitToLogin=()=>{

       props.AuthThunkDeleteLogin()


    }

    return (
        <header className={s.main} >
            <div><img className={s.logo}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
            </div>
         <div className={s.wrapper_login}>

             { props.isAuth ? <div>{props.login}  <button onClick={exitToLogin} >Выйти</button></div> : <NavLink className={s.login}  to="/login" ></NavLink>}

         </div>

        </header>
    );
}

export default Header;