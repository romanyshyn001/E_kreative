import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import MenuNavigation from './Components/Navigation/Navbar';
import './App.css'
import PersonageHome from './pages/Personage/PersonageHome';
import MovieHome from './pages/Movies/MovieHome';
import HomePage from './pages/Home/HomePage';

function App() {

   return (
      <div className='App-header'>
         <MenuNavigation/>
         <div>
            <Routes>
               <Route path='/homepage' element={<HomePage/>}></Route>
               <Route path="/" element={<Navigate replace to="/homepage" />} />
               <Route path='/movies/:movieId' element={<MovieHome/>}></Route>
               <Route path='personage/:perId' element={<PersonageHome/>}></Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;
