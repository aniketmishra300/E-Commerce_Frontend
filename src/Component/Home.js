import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Routes/Footer'
import { ToastContainer, toast } from 'react-toastify'



const Home = () => {


    const [item, setItem] = useState([])
  

    // const isUserLoggedIn = useSelector((state) => state.state.isLoggedIn);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post('https://ecommerce-backend-b6ys.onrender.com/pages/AllData')
            // console.log(response.data)
            setItem(response.data)
        }
        fetchData()
    }, [])

    
    const AddToCart = async (data)=>{
        const token = localStorage.getItem("token")
           if(token){
             await axios.post("https://ecommerce-backend-b6ys.onrender.com/pages/AddToCart",data)
             toast("item added")
           }else{
             toast("login First!")
           }
       }
     


    return (
        <div className='Main_Container'>
            {item.filter(item => item.id % 4 === 3).map((data) => {
                return (
                    <>
                        <div className='Inner_Container' key={data.id}>
                            <NavLink to={`/Dynamic/${data.id}`}>
                                <img className='Image_size' src={data.url} alt='not found' />
                                <h5>{data.title.shortTitle}</h5>
                                <p>Price: ₹{data.price.cost}</p>
                                <p>MRP : <b className='mrp'>₹{data.price.mrp}</b></p>
                            </NavLink>
                            <button className='AddBtn' onClick={() => AddToCart(data)}>Add to Cart</button>
                        </div>
                    </>
                )
            })}

            <ToastContainer />
            <Footer />
        </div>
    )
}

export default Home