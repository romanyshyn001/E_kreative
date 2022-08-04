import React from "react";
import s from './ProfileMain.module.css'
import empty from './../../assets/images/empty.jpg'

const ProfileMain = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    
    return (
        <div className={s.container}>
                <img src={user.avatar || empty} alt="avatar" />
            <div>
                <span>{user.firstName}</span>
                <span> {user.lastName}</span>
            </div>
        </div>
    )
}

export default ProfileMain