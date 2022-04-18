const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY';
const SAND_MESSAGE = 'SEND-MESSAGES';

let initialState = {
        dialogsData: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Zhenya' },
            { id: 3, name: 'Marusia' },
            { id: 4, name: 'Pablo' },
            { id: 5, name: 'Alexey' },
        ],
        messageData: [
            { id: 1, message: 'hi' },
            { id: 2, message: 'how are you?' },
            { id: 3, message: "I don't no" },
            { id: 4, message: 'bla bla' },
            { id: 5, message: 'bla bla bla' },
        ],
        newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
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

export let sendMessageActionCreator = () => ({ type: SAND_MESSAGE });

export let updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });


export default dialogsReducer;