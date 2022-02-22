import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from'./Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjf-BXFLlCx8qX_844X5C1Vlwan7pA19qCw&usqp=CAU" />
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;