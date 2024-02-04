import React, { useState } from 'react'
import "../App.css";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = ()=>{
        // const response = 
        axios.post('https://ecommerce-backend-b6ys.onrender.com/pages/login',{email,password})
        .then((res)=>{
            console.log(res.data)

            if(res.data.msg === "User logged in successfully"){
                toast(res.data.msg,"login success")
                navigate("/")
            }else{
                localStorage.setItem("token",res.data.token)
            }
        })
        // console.log(response.data)
    }

  return (
      <div className='Login_Form'>
        <h1>Login</h1>
        <span className="Email_input">Email : 
        <input type='text' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </span>
        <span>Password :
            <input type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </span>
        <button className='Login_Btn' type='submit' onClick={handleLogin}>Login</button>
        <NavLink to='/register'>New to Ecommerce? Register First</NavLink>
        <ToastContainer/>
    </div>
  )
}

export default Login