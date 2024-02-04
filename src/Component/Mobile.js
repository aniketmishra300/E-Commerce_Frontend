import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
// import NavBar from '../Routes/NavBar'
import { useDispatch } from 'react-redux'
import {add} from "../Store/Action"
import Footer from '../Routes/Footer'



const Mobile = () => {

  const [item, setItem] = useState([])
  const dispatch = useDispatch()
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post('http://localhost:5050/pages/AllData')
      console.log(response.data)
      setItem(response.data)
    }
    fetchData()
  }, [])



  return (
    <div className='Main_Container'>
      {item.filter(item => item.category === "Mobile").map((data) => {
        return (
          <>
            <div className='Inner_Container' key={data.id}>
              <NavLink to={`/Dynamic/${data.id}`}>
                <img className='Image_size' src={data.url} alt='not found' />
                <h5>{data.title.shortTitle}</h5>
                <p>Price: ₹{data.price.cost}</p>
                <p>MRP : <b className='mrp'>₹{data.price.mrp}</b></p>
              </NavLink>
              <button className='AddBtn' onClick={()=>dispatch(add(data))}>Add to Cart</button>
            </div>
          </>
        )
      })}

      <Footer/>
    </div>
  )
}

export default Mobile