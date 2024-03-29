import React, { useEffect, useState } from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import '../App.css'
import Main from '../Component/Main'
import Home from '../Component/Home'
import Mobile from '../Component/Mobile'
import Laptop from '../Component/Laptop'
import Accessories from '../Component/Accessories'
import DynamicPage from '../Component/DynamicPage'
import Login from '../Component/Login'
import Cart from '../Component/Cart'
import Register from '../Component/Register'
import axios from 'axios'
import Fashion from '../Component/Fashion'
import Payment from '../Component/Payment'

const NavBar = () => {



  const [query, setQuery] = useState('')
  const [count, setCount] = useState("")
  const [search, setSearch] = useState([])
  const Navigate = useNavigate()

     console.log(search);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5050/pages/AllData');
        const result = response.data.filter((item) => {
          return item.title.shortTitle.toLowerCase().includes(query.toLowerCase());
          // Use includes() and compare case-insensitively
        });
        console.log(result);
        setSearch(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function

  }, [query]);
  // console.log(query)



  const token = localStorage.getItem("token")
  useEffect(() => {
    setCount(token)
    // console.log("token")
  }, [token])

  const handleLogout = () => {
    setCount("")
    localStorage.removeItem("token")
    Navigate('/login')
  }



  const Login_Navi = () => {
    Navigate('/login')
    // console.log("data")
  }

  // const handlesearchedData = () => {
  //   //  return <Fashion value={search}/>

  //   Navigate('/fashion')
  // }


  return (
    <div>
      {/* <BrowserRouter> */}
      <span className='header'>
        <NavLink to='/'><img className='ecart_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYRBl5TCPXQ9NfPrggrxEC8vmNGXQWH7SMjXqUkMXb-mwNELcU4q8I6YYGG9DoW-4GQ&usqp=CAU' alt='not found' /></NavLink>
        <span className='Loginicontab'>
          <span>
            <input className='Search_box' placeholder='Search for Products' value={query} onChange={(e) => setQuery(e.target.value)} />
            {/* <button className='Login_Button' onClick={handlesearchedData}>Search</button> */}
          </span>
          <NavLink to='/cart'><img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg' alt='not found' /></NavLink>
          {count ? (
            <button className='Login_Button' onClick={handleLogout}>Logout</button>) : (
            <NavLink to='login'><button className='Login_Button' onClick={Login_Navi}>Login</button></NavLink>)
          }

        </span>
      </span>
      <nav className='NavButton'>
        <NavLink style={({ isActive }) => ({ color: isActive ? "blue" : "Green" })} to='/home'>
          <span>
            <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt='not found' />
            <h5>Home</h5>
          </span>
        </NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive ? "blue" : "Green" })} to='/mobile'>
          <span>
            <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt='not found' />
            <h5>Mobile</h5>
          </span>
        </NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive ? "blue" : "Green" })} to='/laptop'>
          <span>
            <img src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt='not found' />
            <h5>Laptop</h5>
          </span>
        </NavLink>
        <NavLink style={({ isActive }) => ({ color: isActive ? "blue" : "Green" })} to='/accessories'>
          <span>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" alt='Home' />
            <h5>Accessories</h5>
          </span>
        </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path='/mobile' element={<Mobile />} />
        <Route path='/laptop' element={<Laptop />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/Dynamic/:id' element={<DynamicPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/chekout' element={<Payment />} />
      </Routes>

      {/* </BrowserRouter> */}
      {/* <Fashion value={search}/> */}
    </div>
  )
}

export default NavBar