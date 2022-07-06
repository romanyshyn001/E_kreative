import { useFormik } from "formik";
import React from "react";
import s from './style.module.css'
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Navigate } from "react-router-dom";
import { loginLoading } from "../../redux/slices/authMe";

const LoginForm = () => {

const dispatch = useDispatch()
const {isAuth} = useSelector(state => state.authMe)

	const formik = useFormik({
		initialValues: {
			password: '',
			email: '',
			rememberMe: false
		 },
		validationSchema: Yup.object({
			password: Yup.string()
				.max(15, 'Must be at least 20 char')
				.required('Required'),
			email: Yup.string()
				.email('Invalid Email')
				.required('*Required')
		}),
		onSubmit:(values) => {
			dispatch(loginLoading(values))
		}
	})

return (
		<div className={s.authContainer}>
			<div className={s.background}>
				<div className={s.shape}></div>
				<div className={s.shape}></div>
			</div>
			<form className={s.login} onSubmit={formik.handleSubmit}>
				<h3>Login Here</h3>

				<label 	htmlFor="email">Username</label>
				<input	className={s.text}
						type="email" 
						placeholder="Email or Phone" 
						id="email"
						name="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}/>

				<label 	htmlFor="password">Password</label>
				<input	className={s.text}
						type="password" 
						placeholder="Password" 
						id="password"
						name="password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}/>

				<label 	htmlFor="rememberMe">Remember me</label>
				<input	className={s.check}
						type="checkbox" 
						id="rememberMe"
						name="rememberMe"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}/>
				<div>		
					<button className={s.btn} type="submit">Log In</button>
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
export default LoginForm