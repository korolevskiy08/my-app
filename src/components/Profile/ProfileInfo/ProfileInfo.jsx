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
                    <img src='https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png' />
                    </div>
                    discription
                </div>
        </div>
    )
}

export default ProfileInfo;