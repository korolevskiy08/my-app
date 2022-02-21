import React from 'react';
import classes from'./Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjf-BXFLlCx8qX_844X5C1Vlwan7pA19qCw&usqp=CAU" />
            </div>
            <div>
                ava + discription
            </div>
            <div>
                My post
                <div>
                    New Posts
                </div>
                <div className={classes.posts}>
                <div className={classes.item}>
                    Post1
                </div>
                <div className={classes.item}>
                    Post2
                </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;