import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={classes.dialog}>
                <NavLink to='/dialogs/2'>Zhenya</NavLink>
                </div>
                <div className={classes.dialog}>
                <NavLink to='/dialogs/3'>Marusia</NavLink>
                </div>
                <div className={classes.dialog}>
                <NavLink to='/dialogs/4'>Pablo</NavLink>
                </div>
                <div className={classes.dialog}>
                <NavLink to='/dialogs/5'>Alexey</NavLink>
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