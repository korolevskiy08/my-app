import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const add_post = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY';
const SAND_MESSAGE = 'SEND-MESSAGES';


let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi, how are you?', likeCount: 20 },
                { id: 2, message: "It's my first post", likeCount: 15 }
            ],
            newPostText: "What's new?",

            nowPostChanging: false,
        },
        dialogsPage: {
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
        },
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    cancelChangingPost() {
        this._state.profilePage.newPostText = this._state.profilePage.postData[this._state.profilePage.nowPostChanging].message
        this._rerenderEntireTree(this._state)
    },
    selectPostToChange(i) {                            // функция возвращает сообщение в textarea
        const selectedPost = this._state.profilePage.postData[i].message
        this._state.profilePage.newPostText = selectedPost
        this._state.profilePage.nowPostChanging = i
        this._rerenderEntireTree(this._state)
    },
    savePostChanges() {
        this._state.profilePage.postData[this._state.profilePage.nowPostChanging].message = this._state.profilePage.newPostText;
        this._state.profilePage.nowPostChanging = false;
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree(this._state)
    },
    updateNewPostText(newText) {                        // принимает намерения измения textarea
        this._state.profilePage.newPostText = newText;  // newText - аргумент который передается из UI (let text)
        this._rerenderEntireTree(this._state)           // перерисовываем текстарея
    },
    dispatch(action) {
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._rerenderEntireTree(this._state);
    }
}

export let addPostActionCreator = () => ({ type: add_post });

export let updateNewPostTextActionCreator = (text) =>
    ({ type: updateNewPostText, newText: text });

export let sendMessageActionCreator = () => ({ type: SAND_MESSAGE });

export let updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;
window.store = store;