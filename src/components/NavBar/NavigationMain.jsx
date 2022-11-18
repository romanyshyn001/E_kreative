import { NavLink } from "react-router-dom";
import s from "./NavigationMain.module.css";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "../../pages/Profile/ProfileMain";
import { useState } from "react";
import hamburger from "../../assets/images/hamburger.png";

const NavigationMain = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const { isAuthorized } = useSelector((state) => state.authMe.authorize);

  const [click, setClick] = useState(Boolean);
  const handleClick = () => setClick(!click);

  const btnClick = () => {
    if (window.innerWidth < 900) {
      return handleClick();
    }
  };
  const button = (route, value, style = null, authAction = null) => {
    return (
      <button type={"submit"} className={style} onClick={authAction}>
        <NavLink to={route}>{value}</NavLink>
      </button>
    );
  };
  // console.log(click);

  return (
    <nav className={s.topNav}>
      <div>
        <button className={s.burger} onClick={handleClick}>
          <img src={hamburger} alt="humburger" />
        </button>
      </div>

      <div className={!click ? s.menuMain : s.show}>
        <div className={s.menuContainer}>
          <div className={s.firstPart}>
            {button("posts", "Article", s.item, btnClick)}
            {button("announcements", "Announcements", s.item, btnClick)}
            {button("user", "User", s.item, btnClick)}
            {isAuthorized && (
              <>{button("logout", "Log out", s.item, handleClick)}</>
            )}
          </div>
          <div className={s.secondPart}>
            {!isAuthorized && (
              <div>
                {button("auth", "Log In", s.login, btnClick)}
                {button("register", "Register", s.register, btnClick)}
              </div>
            )}
          </div>
        </div>
      </div>
            {isAuthorized && (
              <div className={s.profile}>
                <Profile user={user} />
              </div>
            )}
    </nav>
   
  );
};

export default NavigationMain;
