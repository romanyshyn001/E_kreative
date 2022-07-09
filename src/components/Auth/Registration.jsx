import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux/es/exports";
import s from './style.module.css'
import { Navigate } from "react-router-dom";
import { registerLoading } from "../../redux/slices/authMe";

const Register = () => {

const dispatch = useDispatch()
const {isAuth} = useSelector(state => state.authMe)

const formik = useFormik({
   initialValues: {
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: '',
      age: 0,
      avatar: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
      email: '',
      },
   validationSchema: Yup.object({
      password: Yup.string()
         .max(15, 'Must contain at least 20 char')
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
         .oneOf([Yup.ref("password")], "Passwords do not match")   
         
   }),
   onSubmit:(values) => {
      dispatch(registerLoading(values))
   }
})
   return (
      <div className={s.authContainer}>
      <div className={s.background}>
         <div className={s.shape}></div>
         <div className={s.shape}></div>
      </div>
      <form  className={s.registration} onSubmit={formik.handleSubmit}>
         <div></div>
         <h3>Register Here</h3>
{/* ............BLOCK INFO............... */}
      <div className={s.name}>
         <label htmlFor="Name">First Name</label>
         <input className={s.text}
               type="text" 
               placeholder="Name" 
               id="firstName"
               name="firstName"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.firstName  }/>
         
               {  formik.touched.firstName  && formik.errors.firstName 
               ? ( <div className={s.firstName }>{formik.errors.firstName}</div> )
               : null
               }       

         <label htmlFor="Last Name">Last name</label>
         <input className={s.text}
               type="text" 
               placeholder="Last name" 
               id="lastName"
               name="lastName"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.lastName }/>

               {  formik.touched.lastName  && formik.errors.lastName 
               ? ( <div className={s.lastName }>{formik.errors.lastName}</div> )
               : null
               }  
</div>
{/* ...............BLOCK CREDENTIALS.................. */}
         <label htmlFor="email">Username</label>
         <input className={s.text}
               type="email" 
               placeholder="Email or Phone" 
               id="email"
               name="email"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.email}/>

               {  formik.touched.email && formik.errors.email 
               ? ( <div className={s.email}>{formik.errors.email}</div> )
               : null
               } 

         <label htmlFor="password">Password</label>
         <input className={s.text}
               type="password" 
               placeholder="Password" 
               id="password"
               name="password"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.password}/>
         
               {  formik.touched.password && formik.errors.password 
               ? ( <div className={s.password}>{formik.errors.password}</div> )
               : null
               } 
      
         <label htmlFor="passwordConfirm">Confirm password</label>
         <input className={s.text}
               type="password" 
               placeholder="Confirm password" 
               id="passwordConfirm"
               name="passwordConfirm"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.passwordConfirm}/>

               {  formik.touched.passwordConfirm && formik.errors.passwordConfirm 
               ? ( <div className={s.passwordConfirm}>{formik.errors.passwordConfirm}</div> )
               : null
               } 
            

         <label htmlFor="Age">Age</label>
         <input className={s.text}
               type="number" 
               placeholder="Age" 
               id="age"
               name="age"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.age}
               max={120}/>

               {  formik.touched.age && formik.errors.age 
               ? ( <div className={s.age}>{formik.errors.age}</div> )
               : null
               } 

         <div>		
            <button className={s.btnreg} type="submit">Register</button>
         </div>	
         
      </form>
      <div>
            { isAuth 
					? <Navigate to={'/article'}/>
					: null
				}
      </div>
   </div>
      
      )
}
export default Register





