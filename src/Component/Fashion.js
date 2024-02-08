import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import Footer from '../Routes/Footer';

const Fashion = (props) => {

  // const [item, setItem] = useState([])

  // const [data] = useLocation().state
    const data = props.value

  console.log(data);

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
      <div className='Main_Container'>
      {data.map((data) => {
        return (
          <>
            <div className='Inner_Container' key={data.id}>
              <NavLink to={`/Dynamic/${data.id}`}>
                <img className='Image_size' src={data.url} alt='not found'/>
                <h5>{data.title.shortTitle}</h5>
                <p>Price: ₹{data.price.cost}</p>
                <p>MRP : <b className='mrp'>₹{data.price.mrp}</b></p>
              </NavLink>
              <button className='AddBtn' onClick={()=>AddToCart(data)}>Add to Cart</button>

            </div>
          </>
        )
      })}

      <ToastContainer/>
      <Footer/>
    </div>
   
  )
}

export default Fashion