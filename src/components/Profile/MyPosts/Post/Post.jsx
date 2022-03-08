import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' />
            <span> {props.message} </span>
            <div>
                <span> Like {props.likeCount} </span>
            </div>
        </div>
    )
}
export default Post;