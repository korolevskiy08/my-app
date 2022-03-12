import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://www.meme-arsenal.com/memes/d15becf94aca31bfe3492de9c9d9b5a5.jpg' />
            <span> {props.message} </span>
            <div>
                <span> Like {props.likeCount} </span>
            </div>
        </div>
    )
}
export default Post;