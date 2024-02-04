import React from 'react'
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer_Box_First'>
            <span className='Footer_Siren'>
                {/* <h4 className='The'>The</h4> */}
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9Gc
                TSYRBl5TCPXQ9NfPrggrxEC8vmNGXQWH7SMjXqUkMXb-mwNELcU4q8I6YYGG9DoW-4GQ&usqp=CAU' alt='not found'
                className='siren'/>
            </span>
            <br/>
            <hr/>
            <br/>
            <h2>Contact No. : +91 7800802528</h2>
            <h3>Email : aniketmishra300@gmail.com</h3>
            <h3>Add - Deoria , Uttar Pradesh</h3>
            <span className='nav_logo'>
                <img src='https://cdn-icons-png.flaticon.com/128/733/733547.png' alt='not Found'/>
                <img src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' alt='not Found'/>
                <img src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png' alt='not Found'/>
            </span>

        </div>
        <div className='Footer_Box_Second'>
            <h1>Know More</h1>
            <br/>
            <hr/>
            <br/>
            <p>"E-Commerce is your ultimate online shopping destination, offering a curated selection of 
              high-quality products. With a user-friendly interface, seamless navigation, and a 
              wide range of categories, makes shopping a breeze.
               Explore the best deals, discover trending items, and experience convenience like never before. "
            </p>
        </div>
        <div className='Footer_Box_Third'>
            <h1>Quick Links</h1>
            <br/>
            <hr/>
            <br/>
            <span className='Quick_links'>
                <ul type='none'>
                    <li><NavLink style={({isActive}) => ({color : isActive ? "green" : "white"})} to='/home'>Home</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color : isActive ? "green" : "white"})} to='/mobile'>Mobile</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color : isActive ? "green" : "white"})} to='/laptop'>Laptop</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color : isActive ? "green" : "white"})} to='/accessories'>accessories</NavLink></li>
                </ul>
            </span>
        </div>
    </div>
  )
}

export default Footer