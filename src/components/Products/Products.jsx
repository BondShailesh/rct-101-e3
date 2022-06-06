import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
function Products() {
  const [product,setProduct] = useState([])
  useEffect(()=>{
  const data0 = async ()=>{
    const res =await axios.get("http://localhost:8080/products");
    // console.log(res.data);
    setProduct(res.data);
  }
  data0()
  },[])
  console.log(product);
  return (
    <div>
      Something
     {product.map((el)=>(
       <div key={el.id}>
         <Link to={`/products/${el.id}`}>Product</Link>
       </div>
     ))}
    </div>
  )
}

export default Products
