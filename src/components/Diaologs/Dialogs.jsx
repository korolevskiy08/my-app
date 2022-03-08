import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Messages from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = 
    props.dialogsData.map( dialog => <Dialog name={dialog.name} id={dialog.id} /> )

    let messagesElements = 
    props.messageData.map( m => <Messages message={m.message}/> ) 

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