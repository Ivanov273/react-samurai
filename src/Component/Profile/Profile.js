import React from 'react';
import ProfileInfo from "./PofileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props} profilestatus={props.profilestatus} profile={props.profile} />
            <MyPostContainer  />

        </div>
    );
}
export default Profile;