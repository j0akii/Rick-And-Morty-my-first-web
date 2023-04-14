import React from "react";
import style from './About.module.css'

export default function About () {

    return (
        <div className={style.container}>
            <div className={style.card}>
                <h1 className={style.h1}>About this project!</h1>
                <h3 className={style.h3}>This is my first WebSite!. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime odit distinctio iste sapiente quo, nulla iure unde quasi, atque ducimus nostrum vero tempora natus sit debitis voluptatum molestiae eaque nesciunt.</h3>
            </div>
        </div>
    )
}