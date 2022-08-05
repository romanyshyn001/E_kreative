import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from './Registration.module.css'
import { Navigate } from "react-router-dom";
import { registerLoading } from "../../../redux/slices/authMe";
import Avatars from "../../UserAvatars/Avatars";
import validationSchema from '../../../utils/validators/validators'
import RegisterForm from "./RegisterForm";

export const Registration = () => {
   const dispatch = useDispatch()
   const {isAuth, userAva} = useSelector((state) => { return { isAuth:state.authMe.isAuth, userAva:state.authMe.userAva}})

const formik = useFormik({
   initialValues: {
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: '',
      age: 0,
      avatar: '' ,
      email: '',
      },
   validationSchema,
   onSubmit:(setCredentials) => {
      const credentials = Object.assign(setCredentials, {avatar: userAva})
      dispatch(registerLoading(credentials))
   }
})

   return (
      <div className={s.authContainer}>
      <div className={s.background}>
         <div className={s.shape}></div>
         <div className={s.shape}></div>
      </div>
      <div className={s.registration}>
         <RegisterForm formik={formik}/>
         <Avatars/>
      </div>
      <div>
         { 
            isAuth && <Navigate to={'/posts'}/>
         }
      </div>
   </div>
      
      )
}
export default Registration





