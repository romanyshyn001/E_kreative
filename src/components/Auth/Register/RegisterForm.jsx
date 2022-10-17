import React from "react";
import createFormField from "../../Common/FormControl";
import Avatars from "../../UserAvatars/Avatars";
import s from "./Registration.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validators from "../../../utils/validators/validators";

const RegisterForm = ({ authorizeError, onSubmit, isAuthorized }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validators.validationRegister) });

  return (
    <form className={s.login} onSubmit={handleSubmit(onSubmit)}>
      <h3>Register Here</h3>
      <div className={s.name}>
        <label htmlFor="firstname">First name</label>
        <input
          type={"text"}
          className={s.text}
          name="firstname"
          placeholder="First name"
          {...register("firstname", { required: "First name is required" })}
        />
        {errors.firstName && (
          <p className={s.ErrorMessage} role="alert">
            {errors.firstName.message}
          </p>
        )}
        <label htmlFor="lastname">Last name</label>
        <input
          type={"text"}
          className={s.text}
          name="lasttname"
          placeholder="Last name"
          {...register("lastname", { required: "Last name is required" })}
        />
        {errors.lasttName && (
          <p className={s.ErrorMessage} role="alert">
            {errors.lasttName.message}
          </p>
        )}
        <label htmlFor="Mail">Email</label>
        <input
          type={"email"}
          className={s.text}
          placeholder="Email"
          name="email"
          {...register("email", { required: "Email Address is required" })}
        />
        {errors.email && (
          <p className={s.ErrorMessage} role="alert">
            {errors.email.message}
          </p>
        )}
        <label  htmlFor="password">Password</label>

        <input
          type={"password"}
          className={s.text}
          name="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className={s.ErrorMessage} role="alert">
            {errors.password.message}
          </p>
        )}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type={"password"}
          className={s.text}
          name="cpassword"
          placeholder="Password"
          {...register("cpassword", {
            required: "Confirm password is required",
          })}
        />
        {errors.cpassword && (
          <p className={s.ErrorMessage} role="alert">
            {errors.cpassword.message}
          </p>
        )}
        <label htmlFor="age">Age</label>

        <input
          type={"number"}
          className={s.text}
          name="age"
          placeholder="age"
          {...register("age", { required: "Age is required" })}
        />
        {errors.cpassword && (
          <p className={s.ErrorMessage} role="alert">
            {errors.cpassword.message}
          </p>
        )}
        <label htmlFor="avatar">Avatar</label>
        <Avatars />
        {authorizeError && (
          <div className={s.ErrorMessage}>*Something went wrong. </div>
        )}
        <button type="submit" className={s.btnreg}>
          Register
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
