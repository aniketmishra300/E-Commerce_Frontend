import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

// import context from '../Store/DataB'
import axios from 'axios'


const Home = () => {

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
        <div className='Main_Container'>
            {item.filter(item=>item.id % 4 === 3).map((data)=>{
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
    )
}

export default Home