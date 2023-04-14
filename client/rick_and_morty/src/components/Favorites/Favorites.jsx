import style from './Favorites.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { orderCards, filterCards, reset } from '../../redux/actions';

export default function Favorites ({ onClose }) {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector((state) => state);

    const handleOrder = (e) => {
        e.preventDefault()
        dispatch(orderCards(e.target.value));
    }
    const handleFIlter = (e) => {
        e.preventDefault()
        dispatch(filterCards(e.target.value))
    }

    const resetButton = () => {
        dispatch(reset())
    }

    return (
        <div className={style.body}>
            <div className={style.container}>
            <h1 className={style.h1}>Favorites List:</h1>
                <div className={style.containerSelect}>
                    <select className={style.select1} onChange={handleOrder}>
                        <option className={style.option} value="">Select Order</option>
                        <option className={style.option} value="A">Ascendente</option>
                        <option className={style.option} value="D">Descendente</option>
                    </select>
                    <select className={style.select2} onChange={handleFIlter}>
                        <option className={style.option} value="">Select Filter</option>
                        <option className={style.option} value="Male">Male</option>
                        <option className={style.option} value="Female">Female</option>
                        <option className={style.option} value="Genderless">Genderless</option>
                        <option className={style.option} value="unknown">unknown</option>
                    </select>
                    <button className={style.boton} onClick={resetButton}>Reset Filter</button> 
                </div>
            <div className={style.containerCard}>
                {myFavorites.map(({id, name, status, species, gender, origin, image}) => {
                return (
                    <Card 
                    onClose={onClose}
                    key={id}
                    id={id} 
                    name={name} 
                    status={status} 
                    species={species} 
                    gender={gender} 
                    origin={origin} 
                    image={image} />
                    )
                }) 
            }  
            </div>
        </div>
        </div>
    )
}