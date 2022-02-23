import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialog = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <Dialog name='Dimych' id='1'/>
                <Dialog name='Zhenya' id='2'/>
                <Dialog name='Marusia' id='3'/>
                <Dialog name='Pablo' id='4'/>
                <Dialog name='Alexey' id='5'/>
            </div>
            <div className={classes.messeges}>
                <Messages message='hi'/>
                <Messages message='how are you?'/>
                <Messages message="I don't no"/>
            </div>
        </div>
    )
}

export default Dialogs;