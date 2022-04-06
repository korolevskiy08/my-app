import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Messages from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    let newMessageBody = state.newMessageBody;


    let dialogsElements = state.dialogsData.map((dialog, i) => <Dialog key={i} name={dialog.name} id={dialog.id} />)
    let messagesElements = state.messageData.map((m, i) => <Messages key={i} message={m.message} />)

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        console.log(body)
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messeges}>
                <div> {messagesElements} </div>
                <div>
                    <div><textarea value={newMessageBody}
                       placeholder='enter your message'
                       
                        onChange={onNewMessageChange}
                    ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;