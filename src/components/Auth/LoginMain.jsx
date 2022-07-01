import { useFormik } from "formik";
import React from "react";
import s from './style.module.css'
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { loginLoading } from "../../redux/slices/login";
import { Link, Navigate} from "react-router-dom";

const LoginForm = () => {

const dispatch = useDispatch()
const {isAuth} = useSelector(state => state.login)

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
		// console.log('values onSubmit=>', values)
		}
	})


return (
		<div className={s.containerPost}>
			<div className={s.background}>
				<div className={s.shape}></div>
				<div className={s.shape}></div>
			</div>
			<form onSubmit={formik.handleSubmit}>
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
					<Link to="/register" className={s.register}><p>Sign In</p></Link>
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