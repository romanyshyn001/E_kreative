<<<<<<< HEAD
import { Route, Routes, Navigate } from 'react-router-dom';
import s from'./App.module.css';
import LoginForm from './components/Auth/LoginMain';
import LogOut from './components/Auth/Logout/LogOut';
import NavBar from './components/navBar/navigation';
import PostContainer from './pages/post/PostsMain';
=======
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import MenuNavigation from './Components/Navigation/Navbar';
import './App.css'
import PersonageHome from './pages/Personage/PersonageHome';
import MovieHome from './pages/Movies/MovieHome';
import HomePage from './pages/Home/HomePage';
>>>>>>> 3d7d3b84a8b261690f1209447a459f980bff15b3

function App() {
  return (
    <div className={s.main}>
      
    <div className={s.App_header}>
      <NavBar/>
    </div>

<<<<<<< HEAD
       <Routes>
         <Route path="/" element={<Navigate replace to="/article" />} />
         <Route path='/article' element={<PostContainer/>}/>      
         <Route path='/auth' element={<LoginForm/>}/>
         <Route path='/logout' element={<LogOut/>}/>
       </Routes>
</div>
  );
=======
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
>>>>>>> 3d7d3b84a8b261690f1209447a459f980bff15b3
}

export default App;
