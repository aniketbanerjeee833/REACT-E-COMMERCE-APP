import React from 'react'
import "../Css/CardAmountToggle.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
export default function CardAmountToggle({quantity,setDecrease,setIncrease}) {


  console.log(quantity)
  return (
    <div className='product-amount-container'>
      <button className="product-amount-button" onClick={()=>setDecrease()}><FaMinus /></button>
      <p>{quantity}</p>
      <button className="product-amount-button" onClick={()=>setIncrease()}><FaPlus /></button>
    </div>
  )
}




