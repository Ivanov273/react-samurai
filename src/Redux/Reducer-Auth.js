import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SETAUTH = 'SETAUTH'

let initstate = {
    userid: '',
    login: '',
    email: '',
    isAuth: 'false'
}
const reducerAuth = (state = initstate, action) => {
    switch (action.type) {
        case SETAUTH:
            return {
                ...state,
                ...action.data

            }
        default:
            return state
    }
}
export const SetAuth = (userid, login, email, isAuth) => ({type: SETAUTH, data: {userid, login, email, isAuth}})
export const AuthThunk = () => async (dispatch) => {
    let response = await usersAPI.apiAuth()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(SetAuth(id, login, email, true))
    }
}
export const AuthThunkLogin = (email, password, rememberMe) => async (dispatch) => {
    let response = await usersAPI.apiLogin(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(AuthThunk())
        } else {
            dispatch(stopSubmit('loginform', {_error: response.data.messages[0]}))

        }
}
export const AuthThunkDeleteLogin = () => {
    return async (dispatch) => {
        let response = await usersAPI.apiDeleteLogin()
                    if (response.data.resultCode === 0) {
                dispatch(SetAuth(null, null, null, false))
            }
    }
}

export default reducerAuth