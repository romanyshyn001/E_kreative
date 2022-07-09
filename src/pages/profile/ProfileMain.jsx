import React from "react";
import s from './s.module.css'
import {  useSelector } from "react-redux/es/exports";
import userAva from './../../assets/images/userAva.png'
const Profile = () => {
    
    const {user} = useSelector(state => state.authMe)
    return (
        <div className={s.container}>
                <img src={user.avatar || userAva} alt="image" />
            <div>
                <span>{user.fistName}</span>
                <span> {user.lastName}</span>
            <div>
                </div>
            </div>
        </div>
    )
}

export default Profile