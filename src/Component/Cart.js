import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from "../Store/Action"



const Cart = () => {

    const dispatch = useDispatch()

    // const handleCart = ()=>{
        
    //     alert("item Added Successfully")
    // }

    const value2 = useSelector((state) => state.state)
    const value = value2.cart
    console.log(value)

    return (
        <div className='Main_Container'>
            
            {value.map((item) => {
                return (
                    <div className='Inner_Container' key={item.id}>
                        <img className='Image_size' src={item.url} alt='not found' />
                        <h5>{item.title.shortTitle}</h5>
                        <p>Price: ₹{item.price.cost}</p>
                        <p>MRP : <b className='mrp'>₹{item.price.mrp}</b></p>
                        <button onClick={() =>dispatch(remove(item)) }>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart