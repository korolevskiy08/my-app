import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post value='20' message='Hi, how are you?' />
                <Post value='15' message="It's my first post" />
            </div>
        </div>
    )
}
export default MyPosts;