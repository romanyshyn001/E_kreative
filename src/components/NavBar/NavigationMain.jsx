import { NavLink } from "react-router-dom";
import s from "./NavigationMain.module.css";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "../../pages/Profile/ProfileMain";
import { useState } from "react";
import hamburger from "../../assets/images/hamburger.png";

const NavigationMain = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const { isAuthorized } = useSelector((state) => state.authMe);

  const [click, setClick] = useState(Boolean);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav>
        <button className={s.burger} onClick={handleClick}>
          <img src={hamburger} alt="humburger" />
        </button>
        <div className={click ? s.show : s.menuMain}>
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
          <div>
            <Profile user={user} />
            <div className={s.logout}>
              <NavLink to="/logout">Log out</NavLink>
            </div>
          </div>
        ) : (
          <div className={s.userAuth}>
            <div className={s.login}>
              <NavLink to="/auth">Log In</NavLink>
            </div>
            <div className={s.register}>
              <NavLink to="/register">Register</NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavigationMain;
