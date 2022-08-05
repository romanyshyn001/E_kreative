import React from "react"
import s from './Registration.module.css'


const RegisterForm = (props) => {

    const formik = props.formik

    return (
        <form   onSubmit={formik.handleSubmit}>
         <div></div>
         <h3>Register Here</h3>
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
         
               {  
                  formik.touched.firstName  && formik.errors.firstName 
                  && ( <div className={s.firstName }>{formik.errors.firstName}</div> )
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

               {  
                  formik.touched.lastName  && formik.errors.lastName 
                  && ( <div className={s.lastName }>{formik.errors.lastName}</div> )
               }  
      </div>
         <label htmlFor="email">Username</label>
         <input className={s.text}
               type="email" 
               placeholder="Email or Phone" 
               id="email"
               name="email"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.email}/>

               {  
                  formik.touched.email && formik.errors.email 
                  && ( <div className={s.email}>{formik.errors.email}</div> )
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
         
               {  
                  formik.touched.password && formik.errors.password 
                  && ( <div className={s.password}>{formik.errors.password}</div> )
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

               {  
                  formik.touched.passwordConfirm && formik.errors.passwordConfirm 
                  && ( <div className={s.passwordConfirm}>{formik.errors.passwordConfirm}</div> )
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

               {  
                  formik.touched.age && formik.errors.age 
                  && ( <div className={s.age}>{formik.errors.age}</div> )
               } 
               
         <label htmlFor="Avatar">Avatar</label>
         <div>		
            <button className={s.btnreg} type="submit">Register</button>
         </div>	
         
      </form>
    )
}
export default RegisterForm 