import React from "react";
import style from './Form.module.css'
import { useState } from "react";
import validation from './validations'
import icon from '../img/IconImg.png'

export default function Form ( { login } ) {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value})
        validation({...userData, [property]: value}, errors, setErrors)
    }

    const sumbitHandler = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <div className={style.container}>
            <div className={style.background}>
                <h1 className={style.h1}>Log In:</h1>
                <img className={style.img} src={icon} alt="" />
                <form className={style.containerForm} onSubmit={sumbitHandler}>
                    <div className={style.containerInput}>
                        <label className={style.label}>Email</label>
                        <input className={style.input} type="text" name='email' onChange={handleChange} value={userData.email} />
                        {userData.email.length && <p className={style.error}>{errors.email}</p>}
                    </div>
                    <div className={style.containerInput}>
                        <label className={style.label}>Password</label>
                        <input className={style.input} type="text" name='password' onChange={handleChange} value={userData.password} />
                        {userData.password.length && <p className={style.error}>{errors.password}</p>}
                    </div>
                    <div className={style.containerBtn}>
                        <button className={style.button}>LOGIN</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
