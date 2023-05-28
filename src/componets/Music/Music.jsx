import style from './Music.module.css';
const Music = (props) =>{
    return(
        <div>
            <iframe   width="80%" height="70" src="https://music.yandex.ru/iframe/#track/56633029/8402914"/>
            <iframe  width="80%" height="70"
                    src="https://music.yandex.ru/iframe/#track/93917350/18978802">Слушайте <a
                href='https://music.yandex.ru/album/18978802/track/93917350'>Dead Inside</a> — <a
                href='https://music.yandex.ru/artist/7914739'>АДЛИН</a> на Яндекс Музыке
            </iframe>
        </div>
    );
}
export default Music;