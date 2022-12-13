import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../img/rik.jpg";
import {NavLink} from "react-router-dom";

let User = ({user,isfetchingprogress,followUsersThunkCreator,unfollowUsersThunkCreator}) => {
    return <div>
                <div className={s.main}>
                    <div className={s.users}>
                        <NavLink to={'/profile/' + user.id}>
                        <img className={s.usersPhoto} src={user.photos.small != null ? user.photos.small : userPhoto}/>
                        </NavLink>
                            <div className={s.button}>
                            {user.followed ? <button disabled={isfetchingprogress.some(id=> id ===user.id)} onClick={() => {
                           followUsersThunkCreator(user.id)

                            }}>unfollow</button> : <button disabled={isfetchingprogress.some(id=> id ===user.id)} onClick={() => {
                                unfollowUsersThunkCreator(user.id)
                            }}>follow</button>}
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.one}>{user.name}</div>
                        <div className={s.two}>}</div>
                        <div className={s.three}></div>
                        <div className={s.foor}></div>
                    </div>
                </div>
            </div>

}
export default User