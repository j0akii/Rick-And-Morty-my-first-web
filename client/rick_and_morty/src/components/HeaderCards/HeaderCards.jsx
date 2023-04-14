import React from "react";
import style from './HeaderCards.module.css'


export default function Header({ onSearch }) {

    return (
        <div className={style.container}>
            <h1 className={style.h1}>MULTIVERSE OF CARDS</h1>
            <h2 className={style.h2}>Here you can see al your card collection and add even more!(If you press in the character title you also can see more info!)</h2>
            <h3 className={style.h3}>Press this button to create a random card:</h3>
            <div className={style.botonContainer}>
                <button className={style.boton} onClick={() => {
                    const min = 1;
                    const max = 800;
                    const numeroAleatorio = Math.floor(Math.random() * (max - min +1) + min)
                    return onSearch(numeroAleatorio)
                }}>{}RANDOMIZE</button>
            </div>
        </div>
    )
}