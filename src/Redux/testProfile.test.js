import React from "react";
import reducerProfile, {ActionCreatorAddPost, ActionDeletePost} from "./Reducer-Profile";

it('length of posts',()=>{
    let action = ActionCreatorAddPost('it kamasutra')
    let state = {
        PostData: [
            {id: 1, text: '5555555555555', like: 22},
            {id: 2, text: 'acascascascsac', like: 22},
            {id: 3, text: 'acascascascsac', like: 22},
            {id: 4, text: 'acascascascsac', like: 22},
            {id: 5, text: 'acascascascsac', like: 22},
            {id: 6, text: 'acascascascsac', like: 22},
            {id: 7, text: 'acascavdvdvdscascsac', like: 22}
        ]
    }
    let newstate = reducerProfile(state,action)
    expect(newstate.PostData.length).toBe(8)
})
it('should be delete',()=>{
    let action = ActionDeletePost(3)
    let state = {
        PostData: [
            {id: 1, text: '5555555555555', like: 22},
            {id: 2, text: 'acascascascsac', like: 22},
            {id: 3, text: 'acascascascsac', like: 22},
            {id: 4, text: 'acascascascsac', like: 22},
            {id: 5, text: 'acascascascsac', like: 22},
            {id: 6, text: 'acascascascsac', like: 22},
            {id: 7, text: 'acascavdvdvdscascsac', like: 22}
        ]
    }
    let newstate = reducerProfile(state,action)
    expect(newstate.PostData.length).toBe(6)
})