import React from 'react';
import classes from'./ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNjf-BXFLlCx8qX_844X5C1Vlwan7pA19qCw&usqp=CAU" />
            </div>
            <div className={classes.discriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;