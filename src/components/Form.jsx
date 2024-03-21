import React from 'react'
import img from "../assets/img1.jpg";
import { useForm } from 'react-hook-form';

const Form = () => {
const {register, handleSubmit, formState: { errors }} = useForm()
const login = (data) =>console.log(data)
  return (
    <>
      <section className='form-section'>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>Register and Enjoy the Service</span>
                <form id='form' className='flex flex-col'
                 onSubmit={handleSubmit(login)}>
                 <input type='text' 
                 {...register("username",{required:true})} 
                 placeholder="username"/>
                 <input type='text' 
                 {...register("password",{required:true})} 
                 placeholder="password"/>
                 <input type='text' 
                 {...register("confirmPwd",{required:true})} 
                 placeholder="confirm password"/>
                 <input type='number' 
                 {...register("mobile",{required:true, maxLength:10, minLength:10})} 
                 placeholder="mobile number"/>
                {errors.mobile?.type === "required" && "Mobile Number is required"}
                {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                {errors.mobile?.type === "minLength" && "Min 10 Length Required"}
                 <button className="btn">Sign In</button>
                </form>
            </div>
            <div className="col-2">
                <img src={img} alt='img1'/>
            </div>
        </div>
      </section>
    </>
  )
}

export default Form
