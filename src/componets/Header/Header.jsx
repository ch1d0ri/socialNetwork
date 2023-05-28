import React from 'react'
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) =>{
    return(
      <header className={style.header}>
        <img src='https://www.meme-arsenal.com/memes/0c9e55b3665099d4abdc12825be7daae.jpg'></img>
          <div className={style.loginBlock}>
              {props.isAuth? props.login :<NavLink to={'/login'}>Login</NavLink>}

          </div>
      </header>
    );
  }
  export default Header;      