import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Dimych
                </div>
                <div className={classes.dialog}>
                    Zhenya
                </div>
                <div className={classes.dialog}>
                    Pablo
                </div>
                <div className={classes.dialog}>
                    Marusia
                </div>
                <div className={classes.dialog}>
                    Alexey
                </div>
            </div>
            <div className={classes.messeges}>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>how are you?</div>
                <div className={classes.message}>yo</div>
            </div>
        </div>
    )
}

export default Dialogs;