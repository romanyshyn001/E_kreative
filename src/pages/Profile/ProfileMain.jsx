import React from "react";
import s from "./ProfileMain.module.css";
import empty from "./../../assets/images/empty.jpg";

const ProfileMain = ({ user }) => {
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <img src={user.avatar || empty} alt="avatar" />
      </div>
      <div className={s.userInfo}>
        <span> {user.firstname}</span>
        <span> {user.lastname}</span>
      </div>
    </div>
  );
};

export default ProfileMain;
