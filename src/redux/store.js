import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    message: "Hello, World!",
                    LikeCount: 10,
                    photo: "https://vot-enot.com/wp-content/uploads/2021/12/scale_1200-e1649948122460.jpg"
                },
                {
                    message: "I`am angry enot!",
                    LikeCount: 17,
                    photo: "https://static.tildacdn.com/tild6439-6163-4361-a630-666235663432/photo.png"
                },
                {
                    message: "heheheh hieiei",
                    LikeCount: 100,
                    photo: "https://cdnn1.ukraina.ru/img/103060/50/1030605097_426:0:1701:1275_1920x0_80_0_0_01f35edd33700d73ac6370e86f44fe5f.jpg"
                },
                {
                    message: "shshshsh kksks",
                    LikeCount: 102,
                    photo: "https://25.img.avito.st/image/1/1.DHxgWLa6oJVW8WKQdBgcA5T7ppHUe6hX0fukndzzog.6XGmuGIp8aCX5zHI-bR7GUMg44RLe5Gxs7YD3OSYils"
                },
                {
                    message: "i am not enot! ",
                    LikeCount: 201,
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsygMZGbIEDUPzKGIll7SjS3Ok9oIAIzWu6m8N-YytUDIDRPG5UboX6i8tucxROfshwwU&usqp=CAU"
                },
                {
                    message: "uwu",
                    LikeCount: 390,
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFChrEDloi_eYNQvBb00rVhWDSKeNrtK0N5H6MKw4j3-Jzw6nIrj3Z3qSgnUOLDQzueg&usqp=CAU"
                },
                {message: "SHHHHHH SHHH", LikeCount: 14, photo: "https://808.media/wp-content/uploads/2022/04/enot.jpg"}
            ],
            newPostText: 'katansyLearningReact'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi, I`m Alex"},
                {id: 2, message: "Hi, I`m Mike"},
                {id: 3, message: "Hi, I`m Viktor"},
                {id: 4, message: "Hi, I`m Svetlana"},
            ],
            dialogs: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Mike"},
                {id: 3, name: "Viktor"},
                {id: 4, name: "Svetlana"}
            ],
            sendMes: "Write somehere!"
        },
        sidebar:{}
    },
    _callSubscriber() {
        console.log("state changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost() {
        let newPost = {
            message: this._state.profilePage.newPostText,
            LikeCount: 0,
            photo: "https://808.media/wp-content/uploads/2022/04/enot.jpg"
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state);
    },


    giveMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.sendMes
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.sendMes = ''
        this._callSubscriber(this._state)
    },
    receiveMessage(text) {
        this._state.dialogsPage.sendMes = text;
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer()
        this._callSubscriber(this._state)

    }
}




window.state = store
export default store;