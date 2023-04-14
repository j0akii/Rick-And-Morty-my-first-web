import style from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Card({
   id, 
   name, 
   status, 
   species, 
   gender, 
   origin, 
   image,
   onClose,
}) {
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);

   const { myFavorites } = useSelector((state) => state)

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      }
      else {
         setIsFav(true);
         dispatch(addFav({
            id, 
            name, 
            status, 
            species, 
            gender, 
            origin, 
            image,
         }));
      }
   }

   const superClose = () => {
      onClose(id);

      dispatch(removeFav(id));
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id == id) {
            setIsFav(true);
         }
      });
   }, [myFavorites])
   
   return (
      <div className={style.container}>
            <figure>
               <img src={image} alt='no cargo' className={style.img}/>
               <figcaption>
                  {isFav ? (
                     <button className={style.fav} onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button className={style.fav} onClick={handleFavorite}>🤍</button>
                  )}
                  <button onClick={superClose} className={style.onClose}>Delete</button>
                  <NavLink className={style.navStyle} to={`/detail/${id}`}>
                     <h1 className={style.h1}>{name}</h1>
                  </NavLink>
                  <h2 className={style.h2}>Status: {status}</h2>
                  <h2 className={style.h2}>Specie: {species}</h2>
                  <h2 className={style.h2}>Gender: {gender}</h2>
                  <p className={style.p}>{origin.name}</p>
               </figcaption>
            </figure>
      </div>
   );
}

// const mapStateToProps = (state) => {
//    return {
//       myFavorites: state.myFavorites
//    };
// };

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFav: (character) => {
//          dispatch(addFav(character))
//       },
//       removeFav: (id) => {
//          dispatch(removeFav(id))
//       }
//    }
// }

