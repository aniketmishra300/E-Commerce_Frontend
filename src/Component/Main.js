import Slider from '../slider'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../App.css"
import {NavLink} from 'react-router-dom'



const Main = () => {

  const [item,setItem] = useState([])
    
  useEffect(() => {
      const fetchData = async () => {
      const response = await axios.get('http://localhost:5050/pages/')
      console.log(response.data)
      setItem(response.data)
      }
      fetchData()
  }, [])

  return (
    <div>
      <Slider/>
      <div className='Home_container'>
            {item.filter(item=>item.id % 4 === 2).map((data)=>{
            return(
                <>
                <div className='Inner_Container' key={data.id}>
                    <NavLink to={`/Dynamic/${data.id}`}>
                    <img className='Image_size' src={data.url} alt='not found'/>
                    <h5>{data.title.shortTitle}</h5>
                    <p>Price: ₹{data.price.cost}</p>
                    <p>MRP : <b className='mrp'>₹{data.price.mrp}</b></p>
                    </NavLink>
                    <button className='AddBtn'>Add to Cart</button>
                </div>
                </>
            )
        })}
        </div>
    </div>
  )
}

export default Main