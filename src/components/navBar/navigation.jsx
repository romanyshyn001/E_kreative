import { NavLink } from 'react-router-dom';
import s from './s.module.css';
import React from 'react';

const NavBar = () => {

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
                  </div>

                  { localStorage.token != null 
                  ?  <div className={s.item}>
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