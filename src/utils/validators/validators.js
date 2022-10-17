import * as Yup from "yup";

export const validators = {
  validationLogin: Yup.object({
    password: Yup.string()
      .max(15, "*Must contain 15 characters")
      .required("*Required"),
    email: Yup.string().email("*Invalid Email").required("*Required"),
  }).required(),
  validationRegister: Yup.object({
    password: Yup.string()
      .max(15, "*Must contain 15 characters")
      .required("*Required"),
    email: Yup.string().email("*Invalid Email").required("*Required"),
    firstname: Yup.string().required("*Required"),
    lastname: Yup.string().required("*Required"),
    age: Yup.string().required("*Required"),
    cpassword: Yup.string()
      .required("*Required")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
    avatar: Yup.string(),
  }).required(),
};
export default validators;
