import { useFormik } from "formik";
import React from "react";
import s from "./LoginMain.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Navigate } from "react-router-dom";
import { loginLoading } from "../../../redux/slices/authMe";
import validators from "../../../utils/validators/validators";

const LoginMain = () => {
  const dispatch = useDispatch();
  const { isAuthorized,  authorizeError } = useSelector((state) => {
    return {
      isAuthorized: state.authMe.authorize.isAuthorized,
      authorizeError: state.authMe.authorize.authorizeError,
    };
  });
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

  return (
    <div className={s.authContainer}>
      <div className={s.background}>
        <div className={s.shape}></div>
        <div className={s.shape}></div>
      </div>
      <form className={s.login} onSubmit={formik.handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="email">Username</label>
        <input
          className={s.text}
          type="email"
          placeholder="Email or Phone"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className={s.ErrorMessage}>{formik.errors.email}</div>
        )}

        <label htmlFor="password">Password</label>
        <input
          className={s.text}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className={s.ErrorMessage}>{formik.errors.password}</div>
        )}
        { authorizeError && (
          <div className={s.ErrorMessage}>Invalid mail or password</div>
        )}
        <label htmlFor="rememberMe">Remember me</label>
        <input
          className={s.check}
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
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
