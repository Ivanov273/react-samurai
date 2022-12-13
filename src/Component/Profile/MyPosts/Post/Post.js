import React from 'react';
import s from './Post.module.css'
const Post = (props) =>{
    return (
        <div className={s.item}>
            <div className={s.user_photo}>
                <img
                    src="https://doctor-veterinar.ru/media/k2/items/cache/675d28c04794e3c683f4419536c4c15f_L.jpg"
                    alt=""/></div>
            <div className={s.item_text}>
                <div className={s.item_text}>{props.message}  </div>
            </div>
            <div className={s.like}>like{props.like}</div>
        </div>
    );
}
export default Post;

