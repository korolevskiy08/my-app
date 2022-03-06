import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {

const postData = [
    {id: 1, message: 'Hi, how are you?', likeCount: 20},
    {id: 2, message: "It's my first post", likeCount: 15}
]

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post value={postData[0].likeCount} message={postData[0].message} />
                <Post value={postData[1].likeCount} message={postData[1].message} />
            </div>
        </div>
    )
}
export default MyPosts;