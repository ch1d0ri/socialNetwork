import style from './Nav.module.css'
import NavigationItems from "./NavItems";
import React from "react";

const Nav = () => {
    const dataNavItems = {
        items: [
            {path: '/profile', nameItem: 'Profile'},
            {path: '/dialogs', nameItem: 'Dialogs'},
            {path: '/news', nameItem: 'News'},
            {path: '/music', nameItem: 'Music'},
            {path: '/settings', nameItem: 'Settings'},
            {path: '/friends', nameItem: 'Friends'},
            {path: '/users', nameItem: 'Users'}
        ]
    }
    let NavItems = dataNavItems.items.map( n => <NavigationItems path={n.path} navItemName={n.nameItem}/>)
    return (
        <div className={style.nav}>
            {NavItems}

            <div className={style.friendsNav}>
                <div className={style.friendsItem}>
                    <div className={style.friendsItemImg}>
                        <img
                            src="https://img.freepik.com/premium-vector/portrait-of-young-man-avatar-of-guy-for-social-networks-abstract-male-portrait-full-face-isolated-illustration-in-flat-style_276162-44.jpg"></img>
                    </div>
                    <div className={style.item}>Viktor</div>
                </div>
                <div className={style.friendsItem}>
                    <div className={style.friendsItemImg}>
                        <img src="https://img.icons8.com/office/512/user-female-skin-type-4.png"></img>
                    </div>
                    <div className={style.item}>
                        Eva
                    </div>
                </div>
                <div className={style.friendsItem}>
                    <div className={style.friendsItemImg}>
                        <img
                            src="https://img.icons8.com/external-others-inmotus-design/512/external-Avatar-avatars-others-inmotus-design-6.png"></img>
                    </div>
                    <div className={style.item}>
                        Andrey
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Nav;
