import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = () => {
        // const response = 
        axios.post('http://localhost:5050/pages/register', { email, password })
            .then((res) => {
                console.log(res.data)

                if (res.data.msg === "email is already exist") {
                    // console.log(res.data.msg)
                    toast(res.data.msg, "! Please Login")
                    navigate("/login")
                }
            })
        // console.log(response.data)
        toast("user registered successfully")
        navigate('/login')

    }

    return (
        <div className='Login_Form'>
            <h1>Register</h1>
            <span className="Email_input">Name :
                <input type='text' placeholder='Enter Email' value={name} onChange={(e) => setName(e.target.value)} />
            </span>
            <span className="Email_input">Email :
                <input type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </span>
            <span>Password :
                <input type='text' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </span>
            <button className='Login_Btn' type='submit' onClick={handleRegister}>Register</button>
            <NavLink to='/login'>Already signup? Clik here to Login</NavLink>
            <ToastContainer />
        </div>
    )
}

export default Register