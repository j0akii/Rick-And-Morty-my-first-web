import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import Alert from './components/Alert/Alert';
import axios from 'axios'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const [alertMessage, setAlertMessage] = useState('');
   const navigate = useNavigate();
   const location = useLocation();
   const isHomePage = location.pathname === '/';
   const isLogInPage = location.pathname === '/logIn'

   function login(userData) {
      console.log('otro: ', access)
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         console.log(data)
         setAccess(data);
         access && navigate('/home');
         !access && setAlertMessage('The account you are trying to log in is not registered');
      })
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => char.id !== id)
      )
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch (id) {
      const busqueda = characters.find((char) => char.id == id)
      console.log(characters[0])

      if(busqueda) {
         setAlertMessage('The character already exists');
      }
      else {
         try {
            const character = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            return setCharacters((oldChars) => [...oldChars, character.data])
         }
         catch {
            return setAlertMessage('¡No hay personajes con este ID!');
         }
      }
   }

   return (
      <div className='App'>
         {!isHomePage && !isLogInPage && <NavBar onSearch={onSearch}/>}
         {alertMessage && <Alert message={alertMessage} onClose={() => setAlertMessage('')}/>}
         <Routes>
            <Route path='/' element={<Header />}/>

            <Route path='/logIn' element={<Form login={login}/>}/>

            <Route path='/home' element={<Cards characters={characters} onClose={onClose} onSearch={onSearch}/>}/>

            <Route path='/about' element={<About />}/>

            <Route path='/favorites' element={<Favorites onClose={onClose} />}/>

            <Route path='/detail/:id' element={<Detail />}/>
         </Routes>
      </div>
   );
}

export default App;