import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import store from '../../../redux/state';
import Button from '../../button/button';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state';

const MyPosts = (props) => {

    let newPostElement = React.createRef();                     // ссылка на значение в <textarea>

    let postsElements =
        props.postData.map((el, i) => <Post
            selectPostToChange={() => selectPostToChange(i)} key={i} message={el.message} likeCount={el.likeCount} nowPostChanging={props.nowPostChanging === i} />)

    let addPost = () => {                                       // функция добавляет пост 
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {                                  // функция отлавливает намерения пользователя изменить state и отправляет его в BLL
        let text = newPostElement.current.value;                // берем значение из текстарея
        let action = updateNewPostTextActionCreator(text)       // отправляем наше значение в стэйт
        props.dispatch(action)                                  // изменения состояния по type 
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
                    {props.nowPostChanging === false ? <button onClick={addPost}> Add post </button> : <React.Fragment><button onClick={store.savePostChanges}> Save </button> <button onClick={store.cancelChangingPost}> Cancel </button></React.Fragment>}
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;