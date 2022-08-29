import React, { useState, useEffect } from 'react'
import axios from 'axios'
function Ecom() {
  const [data, setdata] = useState([])

  useEffect(() => {
    let url = "https://fakestoreapi.com/products"
    axios.get(url).then((res) => {
      console.log(res.data);
      setdata(res.data)
    }).catch()
  }, [])
  const FilterItem=(catag)=>{
    let ans=[...data]
    const updateddata=ans.filter((e)=>{
         return e.category ===catag
    })
    setdata(updateddata)  
   
  }
  return (
    <div className='row'>
      <div className='col-2'>
        <div className='bg-dark vh-100 'style={{hight:"1000rem"}}>
          <div className='d-flex justify-content-center '
           onClick={()=>FilterItem("men's clothing")}><h4 className='text-white mt-5  border rounded p-2 w-75 py-2'>
          men's cloth</h4></div>
            <div className='d-flex justify-content-center'  onClick={()=>FilterItem("jewelery")}><h4 className='text-white  border rounded p-2 w-75 py-2'>
            jewelery</h4></div>
            <div className='d-flex justify-content-center' onClick={()=>FilterItem("electronics")}><h4 className='text-white  border rounded p-2 py-2 w-75'>
            electronics</h4></div>
            <div className='d-flex justify-content-center' onClick={()=>FilterItem("women's clothing")}><h4 className='text-white border rounded p-1 py-2 w-75 mx-1'>
            women's cloth</h4></div>
        </div>
      </div>
      <div className='col-10'>
      <div className='row bg-info'>
     
     {
       data.map((e,i)=>{
         return (
         <div className='col-4' style={{
           
         }}>
            <div className="card" style={{ width: "25rem"
            }}>
    <div className='d-flex justify-content-center '>
     <div className='my-2'>
      <b>{e.category}</b>
     <img style={{
       width:"8rem"
     }} src={e.image} className="card-img-top" alt="..." />
     </div>
    </div>
     <div className="card-body">
       <h5 className="card-title">{e.title}</h5>
       <p className="card-text">
       {e.description}
       </p>
     <div className='d-flex justify-content-between align-items-center '>
     <button className='btn btn-danger'>Add to cart</button>
      <h2> ${e.price}</h2>
      <h3>{e.rating.rate}</h3>
     </div>
     </div>
   </div>
         </div>
         )
       })
     }
      
     </div>
 
      </div>
    </div>

  )
}

export default Ecom