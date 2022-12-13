import {createSelector} from "reselect";

export const getUsers=(state)=>{
    return state.usersPage.users
}
export const getUsersSelectSuper = createSelector(getUsers,(users)=>{

   return users.filter(u=>true)
    }
)
export const getTotalCount=(state)=>{
    return state.usersPage.TotalCount
}
export const getpagesize=(state)=>{
    return state.usersPage.pagesize
}
export const getportionsize=(state)=>{
    return state.usersPage.portionsize
}
export const getcurrentPage=(state)=>{
    return state.usersPage.currentPage
}
export const getisfetching=(state)=>{
    return state.usersPage.isfetching
}
export const getisfetchingprogress=(state)=>{
    return state.usersPage.isfetchingprogress
}
export const getAuth=(state)=>{
    return state.Auth.isAuth
}