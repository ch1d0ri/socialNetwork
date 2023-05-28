import React from 'react'
import style from './NavItems.module.css'
import {NavLink} from "react-router-dom";
const NavigationItems = (props) =>{
    return (
        <div className={style.list}>
            <NavLink to={props.path}
                     className={navData => navData.isActive ? style.active : style.item}>{props.navItemName}</NavLink>
        </div>
    )
}
export default NavigationItems