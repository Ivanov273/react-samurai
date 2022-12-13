import {AuthThunk} from "./Reducer-Auth";

const SET_INITIALIZE = 'SET_INITIALIZE'

let initstate = {
    initialize: false
}
const reducerApp = (state = initstate, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
           return {
               ...state,
               initialize: true

           }
        default:
            return state
    }
}
export const SetInitializeApp = () => ({type: SET_INITIALIZE})
export const InitializeThunk =()=> (dispatch)=> {
    let promise = dispatch(AuthThunk())

Promise.all([promise]).then( () => {
    dispatch(SetInitializeApp())
})

}

export default reducerApp