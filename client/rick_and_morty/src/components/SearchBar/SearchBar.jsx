import style from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div className={style.container}>
         <input type='search' className={style.input} value={id} onChange={handleChange}/>
         <button className={style.boton} onClick={() =>props.onSearch(id)}>Add</button>
      </div>
   );
}
