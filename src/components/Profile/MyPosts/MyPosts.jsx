import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsElements =
        props.postData.map((el, i) => <Post 
        key={i} message={el.message} likeCount={el.likeCount} />)

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div className={classes.createNewPost}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;