import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Messages from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = 
    props.state.dialogsData.map((dialog, i) => <Dialog 
    key={i} name={dialog.name} id={dialog.id} /> )

    let messagesElements = 
    props.state.messageData.map((m, i) => <Messages
    key={i} message={m.message}/> ) 

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