let rerenderEntireTree = () => {
    console.log('state changed')
}

let state = {
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
        ]
    }
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export let cancelChangingPost = () => {
    state.profilePage.newPostText = state.profilePage.postData[state.profilePage.nowPostChanging].message
    rerenderEntireTree(state)
}

export let selectPostToChange = (i) => {                            // функция возвращает сообщение в textarea
    const selectedPost = state.profilePage.postData[i].message
    state.profilePage.newPostText = selectedPost
    state.profilePage.nowPostChanging = i
    rerenderEntireTree(state)
}

export let savePostChanges = () => {
    state.profilePage.postData[state.profilePage.nowPostChanging].message = state.profilePage.newPostText;
    state.profilePage.nowPostChanging = false;
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0,
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;