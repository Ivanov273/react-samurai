import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength15, minLength2,  required} from "../../../utils/validators";
import {renderField} from "../../FormControls/FormsControl";
window.props=[]
const MyPost = React.memo((props) => {
    window.props.push(props)
    let PostMass = props.posts.map(p => <Post message={p.text} key={p.id} like={p.like}/>)
    let addPost = (value) => {
        props.onaddDialogs(value.profile)
    }


    return (
        <div>
            <div>
               <ProfileFormRedux onSubmit={addPost} />
            </div>
            {PostMass}
        </div>
    );
}
)

const ProfileForm=(props)=>{
    const {handleSubmit}=props
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field placeholder='Enter your message' name='profile'  component={renderField} type='text' validate={[ maxLength15, minLength2]} />
            </div>
            <button type="submit">Submit</button>

        </form>
    )
}
export default MyPost;
let ProfileFormRedux = reduxForm({
    // a unique name for the form
    form: 'profileform'
})(ProfileForm)
