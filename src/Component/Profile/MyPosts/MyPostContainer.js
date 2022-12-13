import React from 'react';
import {ActionCreatorAddPost, ActionCreatorUpdatePostText} from "../../../Redux/Reducer-Profile";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.ProfilePage.newPostText,
        posts: state.ProfilePage.PostData
    }
}
let mapDispatchToProps = (dispatch)=> {
    return {

        onaddDialogs: (value)=>{

                dispatch(ActionCreatorAddPost(value));

        }
    }
}
const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)


export default MyPostContainer;