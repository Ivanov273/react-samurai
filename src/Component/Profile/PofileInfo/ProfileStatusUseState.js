import React, {useEffect, useState} from 'react';

 const ProfileStatus =(props)=> {
let  [editmode,Seteditmode]= useState(false)
let  [status,Setstatus]= useState(props.profilestatus)
     const activatedStatusMode = () => {
         Seteditmode(true)
     }
     const deactivateStatusMode = () => {
         Seteditmode(false)
             props.UpdateProfileThunkStatus(status)
     }
     const onStatusChange = (e) => {
         Setstatus( e.currentTarget.value)
     }
     useEffect(()=>{
         Setstatus(props.profilestatus)
     },[props.profilestatus])
        return <div>
            {!editmode && <div><span onClick={activatedStatusMode}
                >{props.profilestatus|| '--------'}</span>
            </div>}
            {editmode &&
                <div><input value={status} type="text" autoFocus={true} onBlur={deactivateStatusMode}  onChange={onStatusChange}  /></div>}

        </div>
}
export default ProfileStatus