let state = {
    profilePage: {
        postData: [
            { id: 1, message: 'Hi, how are you?', likeCount: 20 },
            { id: 2, message: "It's my first post", likeCount: 15 }
        ],
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

export default state;