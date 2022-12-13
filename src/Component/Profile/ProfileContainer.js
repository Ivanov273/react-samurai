import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileThunk, ProfileThunkStatus, UpdateProfileThunkStatus} from "../../Redux/Reducer-Profile";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {WithAuthContainer} from "../../HOC/AuthHOC";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    )
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userid = this.props.params.userId
        if (!userid) {
    userid = this.props.userid

        }
        this.props.ProfileThunk(userid)
        this.props.ProfileThunkStatus(userid)
    }

    render() {

        return <div>
            <Profile {...this.props} profile={this.props.profile}
                     UpdateProfileThunkStatus={this.props.UpdateProfileThunkStatus}
                     />
        </div>
    }
}

let mapStateToProps = (state) => {

    return({
     profile: state.ProfilePage.profile,
     profilestatus: state.ProfilePage.profilestatus,
     userid: state.Auth.userid,
     isAuth: state.Auth.isAuth

 })}

//const ProfileContainerwithRouter = withRouter(RedirectComponent)
export default compose(connect(mapStateToProps, {ProfileThunk, ProfileThunkStatus, UpdateProfileThunkStatus}),
    WithAuthContainer,
    withRouter
)(ProfileContainer)


