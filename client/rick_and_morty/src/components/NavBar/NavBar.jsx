import React from 'react';
import style from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

export default function NavBar ({ onSearch }) {
    return (
        <nav className={style.container}>
            <div className={style.containerBoton}>
                <NavLink to={'/Home'} className={style.inicio}>
                    <button className={style.botonInicio}>HOME</button>
                </NavLink>
                 <NavLink to={'/favorites'} className={style.cards}>
                    <button className={style.botonCards}>FAVORITES</button>
                </NavLink>
                <NavLink to={'/about'} className={style.about}>
                    <button className={style.botonAbout}>ABOUT</button>
                </NavLink>
                <NavLink to={'/'} className={style.cards}>
                    <button className={style.botonCards}>QUIT</button>
                </NavLink>
            </div>

            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

