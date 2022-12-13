import React from 'react';
import {connect} from 'react-redux';
import {followUsersThunkCreator, getUsersThunkCreator, unfollowUsersThunkCreator} from '../../Redux/Reducer-Users';
import Users from './Users';
import Preloader from "../Common/Preloader";
import {Navigate} from "react-router-dom";
import {WithAuthContainer} from "../../HOC/AuthHOC";
import {compose} from "redux";
import {
    getAuth,
    getcurrentPage,
    getisfetching,
    getisfetchingprogress,
    getpagesize, getportionsize,
    getTotalCount,
    getUsersSelectSuper
} from "../../Redux/users-selector";


class UserContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pagesize)
    }
    SetUserPage = (p) => {
        this.props.getUsersThunkCreator(p, this.props.pagesize)
    }

    render() {
        if(!this.props.Auth) return <Navigate to={"/login"} />
        return <>
            {
                this.props.isfetching ? <Preloader/> : null

            }
            <Users SetUserPage={this.SetUserPage}
                   currentPage={this.props.currentPage}
                   Users={this.props.Users}
                   pagesize={this.props.pagesize}
                   portionsize={this.props.portionsize}
                   TotalCount={this.props.TotalCount}
                   isfetchingprogress={this.props.isfetchingprogress}
                   followUsersThunkCreator={this.props.followUsersThunkCreator}
                   unfollowUsersThunkCreator={this.props.unfollowUsersThunkCreator}
            />
        </>
    }
}
let RedirectComponent = WithAuthContainer(UserContainer)

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,

})
let mapStateToUsers = (state) => {
    return {
        Users: getUsersSelectSuper(state),
        TotalCount: getTotalCount(state),
        pagesize: getpagesize(state),
        portionsize: getportionsize(state),
        currentPage: getcurrentPage(state),
        isfetching: getisfetching(state),
        isfetchingprogress: getisfetchingprogress(state),
        Auth: getAuth(state)
    }
}

export default compose(
    WithAuthContainer,
    connect(mapStateToUsers, {
    getUsersThunkCreator,
    followUsersThunkCreator,
    unfollowUsersThunkCreator
})

)(RedirectComponent)



