import { NavLink } from "react-router-dom";
import s from "./NavigationMain.module.css";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "../../pages/Profile/ProfileMain";

const NavigationMain = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const { isAuthorized } = useSelector((state) => state.authMe);

  return (
    <div className={s.main}>
      <nav>
        <div className={s.menuMain}>
          <div className={s.item}>
            <NavLink to="/posts">Article</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/announcements">Announcements</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/users">Users</NavLink>
          </div>
        </div>

        {localStorage.token != null || isAuthorized ? (
          <div className={s.auth}>
            <Profile />
            <div className={s.userInfo}>
              <span> {user.firstname}</span>
              <span> {user.lastname}</span>
            </div>
            <NavLink to="/logout">Log out</NavLink>
          </div>
        ) : (
          <div>
            <div className={s.auth}>
              <NavLink to="/auth">Log In</NavLink>
            </div>
            <div className={s.auth}>
              <NavLink to="/register">Register</NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavigationMain;
