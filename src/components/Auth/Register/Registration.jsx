import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from "./Registration.module.css";
import { Navigate } from "react-router-dom";
import { registerLoading } from "../../../redux/slices/authMe";
import validators from "../../../utils/validators/validators";
import RegisterForm from "./RegisterForm";

export const Registration = () => {
  const dispatch = useDispatch();
  const { isAuthorized, userAvatar } = useSelector((state) => {
    return {
      isAuthorized: state.authMe.authorize.isAuthorized,
      userAvatar: state.authMe.authorize.userAvatar,
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

  return (
    <div className={s.authContainer}>
      <div className={s.background}>
        <div className={s.shape}></div>
        <div className={s.shape}></div>
      </div>
      <div className={s.registration}>
        <RegisterForm formik={formik} />
      </div>
      <div>{isAuthorized && <Navigate to={"/posts"} />}</div>
    </div>
  );
};
export default Registration;
