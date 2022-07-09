import { NavLink } from 'react-router-dom';
import s from './s.module.css';
import React from 'react';
import { useSelector } from "react-redux/es/exports";
import Profile from '../../pages/profile/ProfileMain';

const NavBar = () => {

   const { isAuth } = useSelector(state => state.authMe)
   // console.log('isAuthMe, isAuth', isAuthMe, isAuth)
    return (
         <div className={s.main}>
            <nav>
                  <div className={s.menuMain}>
                     <div className={s.item}>
                        <NavLink to='/article'>Article</NavLink>
                     </div>
                     <div className={s.item}>
                        <NavLink to='/announcements'>Announcements</NavLink>
                     </div>
                     <div className={s.item}>
                        <NavLink to='/users'>Users</NavLink>
                     </div>
                     <div className={s.item}>
                        <NavLink to='/myposts'>My posts</NavLink>
                     </div>
                  </div>

                  { localStorage.token != null || isAuth
                  ?  <div className={s.auth}>
                        <Profile/>
                        <NavLink to='/logout'>Log out</NavLink>
                     </div> 
                  :  <div>
                        <div className={s.auth}>
                              <NavLink to='/auth'>Log In</NavLink>
                        </div>
                        <div className={s.auth}>
                              <NavLink to='/register'>Register</NavLink>
                        </div>
                     </div>
                  }
                  
            </nav>
         </div>
    )
}

export default NavBar;