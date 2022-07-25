import React from "react";
import s from './s.module.css'
import {  useSelector } from "react-redux/es/exports";
import ava2 from './../../assets/images/ava2.png'

const Profile = () => {
    const userAva = JSON.parse(localStorage.getItem('user'))
    const {user} = useSelector(state => state.authMe)
    
    return (
        <div className={s.container}>
                <img src={userAva.avatar || ava2} alt="avatar" />
            <div>
                <span>{user.fistName}</span>
                <span> {user.lastName}</span>
            </div>
        </div>
    )
}

export default Profile