import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../../src/assets/images/users.png'
import {NavLink} from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <div className={styles.itemUser}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={styles.userPhoto}
                                         src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                </NavLink>
                            </div>
                            <div className={styles.infoUser}>{u.name}</div>
                            <div className={styles.infoUser}>{'u.location.city'}, {'u.location.country'}</div>
                            <div className={styles.infoUser}>{u.status}</div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                    props.unfollow(u.id)

                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                    props.follow(u.id)

                                }}> Follow</button>}
                        </div>
                    </div>)
            }
        </div>
    )
}
export default Users;