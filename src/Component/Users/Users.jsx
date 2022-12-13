import React from 'react'
import Paginator from "../Common/Paginators";
import User from "./User";

let Users = (props) => {
    return <div>
        <Paginator TotalCount={props.TotalCount} SetUserPage={props.SetUserPage} currentPage={props.currentPage} portionsize={props.portionsize}
                   pagesize={props.pagesize}/>
        {
            props.Users.map(u => <User key={u.id}
                                       followUsersThunkCreator={props.followUsersThunkCreator}
                                       unfollowUsersThunkCreator={props.unfollowUsersThunkCreator}
                                       user={u}
                                       isfetchingprogress={props.isfetchingprogress}/>
            )
        }
    </div>

}
export default Users