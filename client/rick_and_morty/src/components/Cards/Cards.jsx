import Card from '../Card/Card';
import style from './Cards.module.css'
import React from 'react';
import Header from '../HeaderCards/HeaderCards'


export default function Cards({characters, onClose, onSearch}) {

   return (
      <div className={style.container}>
         <Header onSearch={onSearch}/>
         <div className={style.containerCard}>
            {characters.map(({id, name, status, species, gender, origin, image}) => {
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
   );
}
