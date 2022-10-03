import { useFormik } from "formik";
import React, { useEffect } from "react";
import s from "./LoginMain.module.css";
import { Navigate } from "react-router-dom";
import { authorizeSuccess, loginLoading } from "../../../redux/slices/authMe";
import validators from "../../../utils/validators/validators";
import { useDispatch, useSelector } from "react-redux";
import createFormField from "../../Common/FormControl";

const LoginMain = (props) => {
  const dispatch = useDispatch();
  const { isAuthorized, authorizeError } = useSelector(
    (state) => state.authMe.authorize
  );

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      rememberMe: false,
    },
    validationSchema: validators.validationLogin,
    onSubmit: (credentials) => {
      dispatch(loginLoading(credentials));
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
      <form className={s.login} onSubmit={formik.handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="email">Username</label>

        {createFormField(
          "email",
          "Email or Phone",
          "email",
          "email",
          formik.handleChange,
          formik.handleBlur,
          formik.values.email,
          s.text
        )}
        {formik.touched.email && formik.errors.email && (
          <div className={s.ErrorMessage}>{formik.errors.email}</div>
        )}

        <label htmlFor="password">Password</label>
        {createFormField(
          "password",
          "Password",
          "password",
          "password",
          formik.handleChange,
          formik.handleBlur,
          formik.values.password,
          s.text
        )}

        {formik.touched.password && formik.errors.password && (
          <div className={s.ErrorMessage}>{formik.errors.password}</div>
        )}
        {authorizeError && (
          <div className={s.ErrorMessage}>Invalid mail or password</div>
        )}
        <label htmlFor="rememberMe">Remember me</label>
        {createFormField(
          "rememberMe",
          "",
          "rememberMe",
          "checkbox",
          formik.handleChange,
          formik.handleBlur,
          null,
          s.check
        )}
        <div>
          <button className={s.btn} type="submit">
            Log In
          </button>
        </div>
      </form>
      <div>{isAuthorized && <Navigate to={"/posts"} />}</div>
    </div>
  );
};
export default LoginMain;
