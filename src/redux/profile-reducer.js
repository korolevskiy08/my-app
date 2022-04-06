const add_post = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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
    }
}
export default profileReducer;