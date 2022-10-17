import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Registration.module.css";
import { Navigate } from "react-router-dom";
import {
  authorizeSuccess,
  registerLoading,
} from "../../../redux/slices/authMe";
import RegisterForm from "./RegisterForm";
import { useEffect } from "react";

export const Registration = () => {
  const dispatch = useDispatch();
  const { isAuthorized, userAvatar, authorizeError } = useSelector(
    (state) => state.authMe.authorize
  );
  useEffect(() => {
    if (authorizeError) {
      setTimeout(() => {
        dispatch(authorizeSuccess());
      }, 3000);
    }
  }, [authorizeError, dispatch]);

  const onSubmit = (credentials) => {
    credentials.avatar = userAvatar;
    dispatch(registerLoading(credentials));
  };
  return (
    <div className={s.authContainer}>
      <div className={s.background}>
        <div className={s.shape}></div>
        <div className={s.shape}></div>
      </div>
      <div className={s.registration}>
        <RegisterForm
          authorizeError={authorizeError}
          isAuthorized={isAuthorized}
          onSubmit={onSubmit}
        />
      </div>
      <div>{isAuthorized && <Navigate to={"/posts"} />}</div>
    </div>
  );
};
export default Registration;
