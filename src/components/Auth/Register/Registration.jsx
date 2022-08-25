import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from "./Registration.module.css";
import { Navigate } from "react-router-dom";
import {
  authorizeSuccess,
  registerLoading,
} from "../../../redux/slices/authMe";
import validators from "../../../utils/validators/validators";
import RegisterForm from "./RegisterForm";
import { useEffect } from "react";

export const Registration = () => {
  const dispatch = useDispatch();
  const { isAuthorized, userAvatar, authorizeError } = useSelector((state) => {
    return {
      isAuthorized: state.authMe.authorize.isAuthorized,
      userAvatar: state.authMe.authorize.userAvatar,
      authorizeError: state.authMe.authorize.authorizeError,
    };
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
      firstName: "",
      lastName: "",
      age: 0,
      avatar: "",
      email: "",
    },
    validationSchema: validators.validationRegister,
    onSubmit: (setCredentials) => {
      const credentials = Object.assign(setCredentials, { avatar: userAvatar });
      dispatch(registerLoading(credentials));
    },
  });

  useEffect(() => {
    if (authorizeError) {
      setTimeout(() => {
        dispatch(authorizeSuccess());
      }, 3000);
    }
  }, [authorizeError, dispatch]);

  return (
    <div className={s.authContainer}>
      <div className={s.background}>
        <div className={s.shape}></div>
        <div className={s.shape}></div>
      </div>
      <div className={s.registration}>
        <RegisterForm formik={formik} authorizeError={authorizeError} />
      </div>
      <div>{isAuthorized && <Navigate to={"/posts"} />}</div>
    </div>
  );
};
export default Registration;
