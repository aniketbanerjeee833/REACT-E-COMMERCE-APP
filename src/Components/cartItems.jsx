import React, { useState } from 'react'
import CardAmountToggle from './CardAmountToggle'
import { FaTrash } from "react-icons/fa"
import { useCartContext } from '../context/CartContext';
// import { NavLink } from 'react-router-dom';
export default function CartItems({id,name,image,price,quantity,color,stock}) {

  //console.log(cart)
  //const[quantity,setQuantity]=useState(1);


  const{clearCart,setIncrease,setDecrease}=useCartContext();

  return (
   
   
   <div className='grid-five-cols'>
      <div className="image">
        <figure>
          <img src={image} alt={image}/>
        </figure>
       
        <div className='color-div'>
        <span className='name'>{name}</span>
          <p className='color'>Color:
          <div className='color-style' style={{backgroundColor:color}}>
          </div>
          </p>
        </div>
        </div>
     
        <div className='cart-price'>
          <p>{price}</p>
        </div>
        <div className='quantity'>
        <CardAmountToggle quantity={quantity} setDecrease={()=>setDecrease(id)} setIncrease={()=>setIncrease(id)}/>
        </div>
        <div className='cart-subTotal'>
          <p>{price*quantity}</p>
        </div>

        <div className='remove-icons'>
        <FaTrash className='trash-icon' onClick={()=>
          
          {clearCart(id)}
          } />
        </div>

    </div>
    
  

    
    
  )
}
