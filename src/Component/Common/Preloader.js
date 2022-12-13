import s from "../Users/Users.module.css";
import loader from "../../img/loader2.gif";
import React from "react";

let Preloader = ()=>{
    return <div>
        <img className={s.loader} src={loader} />
    </div>
}
export default Preloader