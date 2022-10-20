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

  console.log("isAuthorized", isAuthorized);
  return (
    <>
      <nav>
        <button className={s.burger} onClick={handleClick}>
          <img src={hamburger} alt="humburger" />
        </button>
        <div className={!click ? s.menuMain : s.show}>
          {button("posts", "Article", s.item, btnClick)}
          {button("announcements", "Announcements", s.item, btnClick)}
          {button("user", "User", s.item, btnClick)}
          {!isAuthorized && (
            <div className={s.userAuth}>
              {button("auth", "Log In", s.login, btnClick)}
              {button("register", "Register", s.register, btnClick)}
            </div>
          )}
        </div>
        {isAuthorized && (
          <div>
            <Profile user={user} />
            {button("logout", "Log out", s.logout, handleClick)}
          </div>
        )}
      </nav>
    </>
  );
};

export default NavigationMain;
// const userLogged = () => {
//   if (isAuthorized) {
//     return (
//       <div>
//         <Profile user={user} />
//         {button("logout", "Log out", s.logout)}
//       </div>
//     );
//   }
//   return (
//     <div className={s.userAuth}>
//       {button("auth", "Log In", s.login)}
//       {button("register", "Register", s.register)}
//     </div>
//   );
// };
{
  /* <div className={s.item}>
            <NavLink to="/posts">Article</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/announcements">Announcements</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/users">Users</NavLink>
          </div> */
}

// {localStorage.token != null || isAuthorized ? (
//   <div>
//     <Profile user={user} />
//     {button("logout", "Log out", s.logout)}

//   </div>
// ) : (
//   <div className={s.userAuth}>
//     {authStatus("auth", "Log In", s.login)}
//     {authStatus("register", "Register", s.register)}
//     {/* <div className={s.login}>
//       <NavLink to="/auth">Log In</NavLink>
//     </div>
//     <div className={s.register}>
//       <NavLink to="/register">Register</NavLink>
//     </div> */}
//   </div>
// )}
