const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY';
const SAND_MESSAGE = 'SEND-MESSAGES';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SAND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;