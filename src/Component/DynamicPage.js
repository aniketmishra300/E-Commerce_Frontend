import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../App.css'
import Footer from '../Routes/Footer'
import { ToastContainer, toast } from 'react-toastify'




const DynamicPage = () => {
    const [item, setItem] = useState([])


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

    const ParamId = useParams().id
    // console.log(ParamId)

    return (
        <div >
            {item.filter(item => item.id === (ParamId)).map((data) => {
                return (
                    <>
                        <div className='Dynamic_Main'>
                           <div className='Image_n_Btn'>
                           <img src={data.detailUrl} alt='not found' />
                           <button className='AddBtn' onClick={() => AddToCart(data)}>Add to Cart</button>

                           </div>

                            <div className='Details_Section'>
                                <h2>{data.title.longTitle}</h2>
                                <hr />
                                <div>
                                    <h3>Available Offers</h3>
                                    <h5>{data.offers.one}</h5>
                                    <h5>{data.offers.two}</h5>
                                    <h5>{data.offers.three}</h5>
                                    <h5>{data.offers.four}</h5>
                                </div>
                                <hr />
                                <h4>Delivery:  {data.offers.Delivery}</h4>
                                <hr />
                                <h4>Warranty : NA</h4>
                                <hr />
                                <h4>Description : {data.description}</h4>
                                <hr />
                            </div>
                        </div>
                    </>

                )
            })}

                <ToastContainer/>
            <Footer />
        </div>
    )
}

export default DynamicPage