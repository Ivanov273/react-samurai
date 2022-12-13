import React from 'react';
import s from './ProfileInfo.module.css'
import userPhoto from "../../../img/rik.jpg";
import Preloader from "../../Common/Preloader";
import ProfileStratus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div>

        <div>
            <img className={s.userImage}
                 src={props.profile.photos.large != null ? props.profile.photos.small : userPhoto}/>
            <ProfileStratus {...props} profilestatus={props.profilestatus}/>
        </div>

        <div>
            {props.profile.fullName}
        </div>
        <div>
            {props.profile.userId}
        </div>


    </div>
}
export default ProfileInfo;