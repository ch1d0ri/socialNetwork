const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USERS_PROFILE"

let initialState = {
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
    newPostText: 'katansyLearningReact',
    profile: null
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: state.newPostText,
                LikeCount: 0,
                photo: "https://808.media/wp-content/uploads/2022/04/enot.jpg"
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export default profileReducer;