import React, { useState } from 'react'
import "../Css/AddToCart.css";
import { FaCheck } from "react-icons/fa"
import CardAmountToggle from './CardAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export default function AddToCart({product}) {

    const {addToCart} =useCartContext();

   const {id,colors,stock} =product;

const[color,setColor]=useState(colors[0])
const[quantity,setQuantity]=useState(1);

const setDecrease=()=>
    {
        quantity>1?setQuantity(quantity-1):setQuantity(1)
    }
    const setIncrease=()=>
        {
            quantity<stock?setQuantity(quantity+1):setQuantity(stock)
        }
  return (
    <>
    <div className='colors'>
        <p>
            Colors:
            {
                colors.map((curColor,index)=>
                {
                    return(
                        <button key={index}   style={{backgroundColor: curColor}} className={color===curColor?"colors-btn active" :"colors-btn"}
                        onClick={()=>setColor(curColor)}>  
                        {color === curColor ? <FaCheck className='tick' /> : null}
        
                        </button> 

                        
                    )
                })
            }
        </p>
    </div>
    <CardAmountToggle quantity={quantity} setDecrease={setDecrease} setIncrease={setIncrease}/>

    <NavLink className="cart" to="/cart" onClick={()=>addToCart(id,color,quantity,product)}>
          <button className='add-to-cart-btn'>Add To Cart</button>

        </NavLink>
    </>
  )
}
