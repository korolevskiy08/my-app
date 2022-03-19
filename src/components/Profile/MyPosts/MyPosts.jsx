import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { rerenderEntireTree } from '../../../render';
import { savePostChanges, cancelChangingPost } from '../../../redux/state'

const MyPosts = (props) => {

    let postsElements =
        props.postData.map((el, i) => <Post
            selectPostToChange={() => selectPostToChange(i)} key={i} message={el.message} likeCount={el.likeCount} nowPostChanging={props.nowPostChanging === i} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    let selectPostToChange = (i) => {
        props.selectPostToChange(i)
    }

    console.log(props.newPostText)
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div className={classes.createNewPost}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                {props.nowPostChanging === false ? <button onClick={addPost}> Add post </button> : <React.Fragment><button onClick={savePostChanges}> Save </button> <button onClick={cancelChangingPost}> Cancel </button></React.Fragment>}
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;