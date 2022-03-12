import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.wallPaper}>
                <img src="https://t3.ftcdn.net/jpg/03/96/94/42/360_F_396944237_QynilCqWYBTTcBntwZw41HQJRup9phO6.jpg" />
            </div>
                <div className={classes.discriptionBlock}>
                    <div className={classes.avatarProfile}>
                    <img src='https://www.meme-arsenal.com/memes/d15becf94aca31bfe3492de9c9d9b5a5.jpg' />
                    </div>
                    <div className={classes.discriptionProfile}>
                    discription
                    </div>
                </div>
        </div>
    )
}

export default ProfileInfo;