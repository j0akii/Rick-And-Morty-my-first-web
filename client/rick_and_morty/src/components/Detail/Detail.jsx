import React from 'react';
import axios from 'axios';
import style from './Detail.module.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Detail () {
    const [character, setCharacter] = useState({});
    const params = useParams();

    useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${params.id}`)
    .then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } 
      else {
         window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
    }, [params.id]);

    return (
        <div className={style.container}>
            <div className={style.containerStats}>
                <h1 className={style.h1}>{character.name}</h1>
                <div className={style.containerh2}>
                    <h2 className={style.h2}>Status: {character.status}</h2>
                    <h2 className={style.h2}>Gender: {character.gender}</h2>
                    <h2 className={style.h2}>Specie: {character.species}</h2>
                </div>
            </div>
            <img className={style.img} src={character.image} alt="" />
        </div>
    )
}