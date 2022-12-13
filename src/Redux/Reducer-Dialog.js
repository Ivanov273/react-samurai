const ADD_DIALOG = 'ADD-DIALOG'
let initstate = {
    TextData: [
        {id: 1, text: '4444444'},
        {id: 2, text: 'acascascascsac'},
        {id: 3, text: 'dvsvsdacascascascsac'},
        {id: 4, text: 'acascascascsac'}
    ],
    DialogData: [
        {id: 1, name: 'Mikee'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'Mikee'},
        {id: 4, name: 'Mikee'},
        {id: 5, name: 'Ylia'}
    ],
}
const reducerDialog = (state = initstate, action) => {
    let StateCopy = {...state}
    switch (action.type) {
        case ADD_DIALOG:
            let newelement = {
                id: 5,
                text: action.newDialog
            }
            StateCopy={
                ...state,
                TextData: [...state.TextData,newelement],
                newDialog: action.newDialog
            }
            return StateCopy


        default:
            return state
    }
}
export const ActionCreatorAddDialog = (values) => ({type: ADD_DIALOG,newDialog:values})
export default reducerDialog