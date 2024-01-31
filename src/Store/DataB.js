// import React, { createContext, useEffect, useState } from 'react'
// import axios from 'axios'


// export const context = createContext()

// const DataB = (props) => {

//     const [data,setData]=useState([])

//     useEffect(()=>{
//         const fetchData = async ()=>{
//             const response = await axios.get('http://localhost:5050/pages/')
//             setData(response.data)
//         }
//         fetchData()
//     },[])

//   return (
    
//         <context.Provider value={[data,setData]}>
//             {props.children}
//         </context.Provider>
    
//   )
// }

// export default DataB