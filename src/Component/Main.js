import Slider from '../slider'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../App.css"
import { NavLink } from 'react-router-dom'
import Footer from '../Routes/Footer'
import { ToastContainer, toast } from 'react-toastify'

// import NavBar from '../Routes/NavBar'



const Main = () => {

  const [item, setItem] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post('http://localhost:5050/pages/AllData')
      // console.log(response.data)
      setItem(response.data)
    }
    fetchData()
  }, [])

  
  const AddToCart = async (data)=>{
    const token = localStorage.getItem("token")
       if(token){
         await axios.post("http://localhost:5050/pages/AddToCart",data)
         toast("item added")
       }else{
         toast("login First!")
       }
   }

  return (
    <div>

      <Slider />
      <div className='Home_container'>
        {item.filter(item => item.id % 4 === 2).map((data) => {
          return (
            <>
              <div className='Inner_Container' key={data.id}>
                <NavLink to={`/Dynamic/${data.id}`}>
                  <img className='Image_size' src={data.url} alt='not found' />
                  <h5>{data.title.shortTitle}</h5>
                  <p>Price: ₹{data.price.cost}</p>
                  <p>MRP : <b className='mrp'>₹{data.price.mrp}</b></p>
                </NavLink>
              <button className='AddBtn' onClick={()=>AddToCart(data)}>Add to Cart</button>
              </div>
            </>
          )
        })}
        {/* <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/08fe6e3ced211fe1.jpeg?q=20' alt='not found'/> */}
        <ToastContainer/>
        <Footer />
      </div>
    </div>
  )
}

export default Main