import React from "react";
import s from './s.module.css'
import empty from './../../assets/images/empty.jpg'

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    
    return (
        <div className={s.container}>
                <img src={user.avatar || empty} alt="avatar" />
            <div>
                <span>{user.fistName}</span>
                <span> {user.lastName}</span>
            </div>
        </div>
    )
}

export default Profile