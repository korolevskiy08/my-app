import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {
console.log(props)
    let newPostElement = React.createRef();                     // ссылка на значение в <textarea>

    let postsElements =
        props.postData.map((el, i) => <Post key={i} message={el.message} likeCount={el.likeCount} />)

    let addPost = () => {                                       // функция добавляет пост 
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {                                  // функция отлавливает намерения пользователя изменить state и отправляет его в BLL
        let text = newPostElement.current.value;                // берем значение из текстарея
        let action = updateNewPostTextActionCreator(text)       // отправляем наше значение в стэйт
        props.dispatch(action)                                  // изменения состояния по type 
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
                    <button onClick={addPost}> Add post </button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;