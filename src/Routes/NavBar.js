import React from 'react'
import {BrowserRouter, Routes,Route, NavLink} from 'react-router-dom'
import '../App.css'
import Main from '../Component/Main'
import Home from '../Component/Home'
import Mobile from '../Component/Mobile'
import Laptop from '../Component/Laptop'
import Accessories from '../Component/Accessories'
import DynamicPage from '../Component/DynamicPage'

const NavBar = () => {

  return (
    <div>
        <BrowserRouter>
          <span className='header'>
          <NavLink to='/'><img className='ecart_logo'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYRBl5TCPXQ9NfPrggrxEC8vmNGXQWH7SMjXqUkMXb-mwNELcU4q8I6YYGG9DoW-4GQ&usqp=CAU' alt='not found'/></NavLink>
            <span className='Loginicontab'>
              <input className='Search_box' placeholder='Search for items'/>
              <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg' alt='not found'/>
                <button className='Login_Button'>Login</button>
            </span>
          </span>
          <nav className='NavButton'>
              <NavLink to='home'>
                <span>
                  <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt='not found'/>
                  <h5>Home</h5>
                </span>
              </NavLink>
              <NavLink to='mobile'>
              <span>
                  <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt='not found'/>
                  <h5>Mobile</h5>
                </span>
              </NavLink>
              <NavLink to='laptop'>
                <span>
                  <img src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt='not found'/>
                  <h5>Laptop</h5>
                </span>
              </NavLink>
              <NavLink to='accessories'>
                <span>
                  <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" alt='Home'/>
                  <h5>Accessories</h5>
                </span>
              </NavLink>
          </nav>
        
        
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path='/mobile' element={<Mobile/>}/>
                <Route path='/laptop' element={<Laptop/>}/>
                <Route path='/accessories' element={<Accessories/>}/>
                <Route path='/Dynamic/:id' element={<DynamicPage/>}/>
            </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default NavBar