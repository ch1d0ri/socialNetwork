import './App.css';
import Nav from './componets/Nav/Nav';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Setings/Settings";
import React from "react";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from './componets/Profile/ProfileContainer';
import HeaderContainer from "./componets/Header/HeaderContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper ">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}></Route>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}></Route>
                        <Route path="/news" element={<News/>}></Route>
                        <Route path="/music" element={<Music/>}></Route>
                        <Route path="/settings" element={<Settings/>}></Route>
                        <Route path="/users" element={<UsersContainer/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
