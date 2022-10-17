import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import s from "./LoginMain.module.css";
import { authorizeSuccess, loginLoading } from "../../../redux/slices/authMe";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import validators from "../../../utils/validators/validators";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginMain = () => {
  const dispatch = useDispatch();
  const { isAuthorized, authorizeError } = useSelector(
    (state) => state.authMe.authorize
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validators.validationLogin) });

  const onSubmit = (credentials) => {
    dispatch(loginLoading(credentials));
  };

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
      <form className={s.login} onSubmit={handleSubmit(onSubmit)}>
        <h3>Login Here</h3>

        <label htmlFor="Mail">Email</label>
        <input
          className={s.text}
          placeholder="Email"
          {...register("email", { required: "Email Address is required" })}
          // aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className={s.ErrorMessage} role="alert">
            {errors.email.message}
          </p>
        )}
        <label htmlFor="password">Password</label>
        <input
          type={"password"}
          className={s.text}
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.passwordConfirm && (
          <p className={s.ErrorMessage} role="alert">
            {errors.passwordConfirm.message}
          </p>
        )}

        {authorizeError && (
          <div className={s.ErrorMessage}>Invalid mail or password</div>
        )}
        <button type="submit" className={s.btn}>
          Login
        </button>
      </form>
      <div>{isAuthorized && <Navigate to={"/posts"} />}</div>
    </div>
  );
};
export default LoginMain;
