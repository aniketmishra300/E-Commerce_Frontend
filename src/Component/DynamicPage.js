import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../App.css'


const DynamicPage = () => {
    const [item, setItem] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post('https://ecommerce-backend-b6ys.onrender.com/pages/AllData/pages/AllData')
            // console.log(response.data)
            setItem(response.data)
        }
        fetchData()
    }, [])

    const ParamId = useParams().id
    // console.log(ParamId)

    return (
        <div>
            {item.filter(item => item.id === (ParamId)).map((data) => {
                return (
                    <>
                        <div className='Dynamic_Main'>
                            <img src={data.url} alt='not found'/>
                            <div className='Details_Section'>
                                <h2>{data.title.longTitle}</h2>
                                <hr />
                                <div>
                                    <h3>Available Offers</h3>
                                    <p>{data.offers.one}</p>
                                    <p>{data.offers.two}</p>
                                    <p>{data.offers.three}</p>
                                    <p>{data.offers.four}</p>
                                </div>
                                <hr/>
                                <h4>Delivery:  {data.offers.Delivery}</h4>
                                <hr/>
                                <h4>Warranty : NA</h4>
                                <hr/>
                                <p>Description : {data.description}</p>
                                <hr/>
                            </div>
                        </div>
                    </>

                )
            })}
        </div>
    )
}

export default DynamicPage