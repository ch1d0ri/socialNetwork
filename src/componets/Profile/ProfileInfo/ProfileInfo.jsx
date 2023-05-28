import style from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader'
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    const initialPhoto = 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png'
    return (

        <div>
            <div>
                <img src='https://cdn.mos.cms.futurecdn.net/M7fDTpDnJcZ4dt3myngzxi.jpg' />
            </div>
            <div className={style.descriptionBlock}>
                <div className={style.photoStyle}>
                    <img src = { props.profile.photos.large != null? props.profile.photos.large : initialPhoto}
                     />
                </div>

                <div className={style.description}>
                    <p>{props.profile.fullName}</p>
                    <p>About me: {props.profile.aboutMe}</p>
                    <p>Contacts:</p>
                    <ul>
                        <li><a href={props.profile.contacts.facebook}>Facebook</a></li>
                        <li><a href={props.profile.contacts.website}>Website</a></li>
                        <li><a href={props.profile.contacts.vk}>Vk</a></li>
                        <li><a href={props.profile.contacts.twitter}>Twitter</a></li>
                        <li><a href={props.profile.contacts.instagram}>Instagram</a></li>
                        <li><a href={props.profile.contacts.youtube}>Youtube</a></li>
                        <li><a href={props.profile.contacts.github}>GitHub</a></li>
                    </ul>
                    <p>Описание к поиску работы: {props.profile.lookingForAJobDescription}</p>

                </div>

            </div>
        </div>
    )
}
export default ProfileInfo;