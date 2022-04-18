const add_post = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';


let initialState = {
        postData: [
            { id: 1, message: 'Hi, how are you?', likeCount: 20 },
            { id: 2, message: "It's my first post", likeCount: 15 }
        ],
        newPostText: "What's new?",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_post:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            state.postData.push(newPost);
            state.newPostText = ''
            return state;
        case updateNewPostText:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export let addPostActionCreator = () => ({ type: add_post });

export let updateNewPostTextActionCreator = (text) =>
    ({ type: updateNewPostText, newText: text });

export default profileReducer;