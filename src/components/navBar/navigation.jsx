import { NavLink } from 'react-router-dom';
import s from './s.module.css';
import React from 'react';
import { useSelector } from 'react-redux';

const NavBar = () => {

const { isAuth } = useSelector(state => state.login)

    return (
        <div className={s.main}>
            <nav >
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
                {
                    localStorage.token != null || isAuth
                ? 
                <div className={s.item}>
                    <NavLink to='/logout'>Log out</NavLink>
                </div>
                : <div className={s.item}>
                    <NavLink to='/auth'>Log In</NavLink>
                </div>
                }       
            </nav>
        </div>
    )
}

export default NavBar;