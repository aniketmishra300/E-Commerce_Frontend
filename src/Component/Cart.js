import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { add, remove } from "../Store/Action"
import Footer from '../Routes/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../App.css'



const Cart = () => {

    const [value, setValue] = useState([])
    const Navigate = useNavigate()
    // const arr = []


//    const totalVal = arr.reduce((total,current)=>total+=current,0)
    // const [lessq, setLessq] = useState('')

    const addbtn = (data) => {
        
           axios.post("http://localhost:5050/pages/increamentQuantity",data)
            .then(()=>{

                axios.get('http://localhost:5050/pages/getCartData')
             .then((res) => {
                 setValue(res.data)
             })
            })
    }

    const minusbtn = (data) => {
        axios.post("http://localhost:5050/pages/decreamentQuantity",data)
            .then(()=>{

                axios.get('http://localhost:5050/pages/getCartData')
             .then((res) => {
                 setValue(res.data)
             })
            })
    }


    useEffect(() => {
        try {
            axios.get('http://localhost:5050/pages/getCartData')
                .then((res) => {
                    setValue(res.data)
                })
        } catch (err) {
            console.log(err)
        }
    }, [])

    const RemoveItems = async (data) => {
        await axios.post("http://localhost:5050/pages/RemoveItem", data)

        setValue(value.filter((item) => item.id !== data.id))

        // console.log(value)
    }

    
    const CartEmpty = async (data) => {
        await axios.post("http://localhost:5050/pages/checkout")

        // setValue(value.filter((item) => item.id !== data.id))
        Navigate("/chekout")
        // console.log(value)
    }


    return (
        <div className='Main_Container'>

            {value.map((item) => {
                return (
                    <div className='Cart_Container' key={item.id}>
                        <img className='Image_size' src={item.url} alt='not found' />
                        <div>
                            <h5>{item.title.shortTitle}</h5>
                            <p>Price: ₹{item.price.cost*item.quantity}</p>
                            {/* <p>MRP : <b className='mrp'>₹{item.price.mrp}</b></p> */}
                        </div>
                        <div>
                            <button onClick={()=>addbtn(item)}>+</button>
                            <h2>{item.quantity}</h2>
                            <button onClick={() => minusbtn(item)}>-</button>
                        </div>
                        <button onClick={() => RemoveItems(item)}>Remove</button>
                        {/* {arr.push(item.quantity)} */}
                        <button className='CheckoutBtn' onClick={CartEmpty}>CheckOut</button>
                    </div>
                )
            })}
            {/* <h1 className='Total_sum'>Total Amount : {totalVal} </h1> */}
            <Footer />
        </div>
    )
}

export default Cart