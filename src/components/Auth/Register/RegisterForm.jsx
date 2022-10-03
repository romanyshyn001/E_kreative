import React from "react";
import createFormField from "../../Common/FormControl";
import Avatars from "../../UserAvatars/Avatars";
import s from "./Registration.module.css";

const RegisterForm = (props) => {
  const formik = props.formik;

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Register Here</h3>
      <div className={s.name}>
        <label htmlFor="Name">First Name</label>
        {createFormField(
          "firstName",
          "Name",
          "firstName",
          "text",
          formik.handleChange,
          formik.handleBlur,
          formik.values.firstName,
          s.text
        )}

        {formik.touched.firstName && formik.errors.firstName && (
          <div className={s.ErrorMessage}>{formik.errors.firstName}</div>
        )}

        <label htmlFor="Last Name">Last name</label>
        {createFormField(
          "lastName",
          "Last name",
          "lastName",
          "text",
          formik.handleChange,
          formik.handleBlur,
          formik.values.lastName,
          s.text
        )}

        {formik.touched.lastName && formik.errors.lastName && (
          <div className={s.ErrorMessage}>{formik.errors.lastName}</div>
        )}
      </div>
      <label htmlFor="email">Username</label>
      {createFormField(
        "email",
        "Email",
        "email",
        "email",
        formik.handleChange,
        formik.handleBlur,
        formik.values.email,
        s.text
      )}

      {props.authorizeError && (
        <div className={s.ErrorMessage}>Email already exist.</div>
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

      <label htmlFor="passwordConfirm">Confirm password</label>
      {createFormField(
        "passwordConfirm",
        "Confirm password",
        "passwordConfirm",
        "password",
        formik.handleChange,
        formik.handleBlur,
        formik.values.passwordConfirm,
        s.text
      )}

      {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
        <div className={s.ErrorMessage}>{formik.errors.passwordConfirm}</div>
      )}

      <label htmlFor="Age">Age</label>
      {createFormField(
        "age",
        "Age",
        "age",
        "number",
        formik.handleChange,
        formik.handleBlur,
        formik.values.age,
        s.text
      )}

      {formik.touched.age && formik.errors.age && (
        <div className={s.ErrorMessage}>{formik.errors.age}</div>
      )}

      <label htmlFor="avatar">Avatar</label>
      <Avatars />
      <div>
        <button className={s.btnreg} type="submit">
          Register
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
