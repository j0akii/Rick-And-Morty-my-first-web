import style from './Header.module.css';
import icon from '../img/Icon.png';
import title from '../img/Title.png';
import { useNavigate } from 'react-router-dom';

export default function Header () {
    const nav = useNavigate()
    const navigation = () => {
        nav('/logIn')
    }

    return (
        <div className={style.container}>
            <img className={style.icon} src={icon} />
            <img className={style.title} src={title} />
            <div className={style.containerBtn}>
                <button className={style.boton} onClick={navigation}>GET INTO THE MULTIVERSE! </button>
            </div>
        </div>
    )
}