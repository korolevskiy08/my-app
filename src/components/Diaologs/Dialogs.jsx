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

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Zhenya'},
        {id: 3, name: 'Marusia'},
        {id: 4, name: 'Pablo'},
        {id: 5, name: 'Alexey'},
    
    ]
    
    let messageData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: "I don't no"},
        {id: 4, message: 'bla bla'},
        {id: 5, message: 'bla bla bla'},
    
    ]

    let dialogsElements = dialogsData
    .map( dialog => <Dialog name={dialog.name} id={dialog.id} /> )


    let messagesElements = messageData
    .map( m => <Messages message={m.message}/> ) 

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messeges}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;