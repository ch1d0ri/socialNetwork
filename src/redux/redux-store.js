import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducers from "./users-reducers";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        sidebar:sidebarReducer,
        usersPage:usersReducers,
        auth: authReducer
    }
)
let store = createStore(reducers, applyMiddleware (thunkMiddleware))

export default store