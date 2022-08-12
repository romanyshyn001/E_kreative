import * as Yup from 'yup';

export const validators = {
    validationLogin: Yup.object({
        password: Yup.string()
           .max(15, 'Must contain at least 20 char')
           .required('*Required'),
        email: Yup.string()
           .email('Invalid Email')
           .required('*Required')
    }),
    validationRegister: Yup.object({
        password: Yup.string()
            .max(5, 'Must contain at least 20 char')
            .required('*Required'),
        email: Yup.string()
            .email('Invalid Email')
            .required('*Required'),
        firstName: Yup.string()
            .required('*Required'),
        lastName: Yup.string()
            .required('*Required'),
        age: Yup.string()
            .required('*Required'),
        passwordConfirm: Yup.string()
            .required('*Required')
            .oneOf([Yup.ref("password")], "Passwords do not match"),
        avatar: Yup.string()   
    })
} 
export default validators
