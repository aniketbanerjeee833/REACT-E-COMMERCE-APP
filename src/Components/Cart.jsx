import React from 'react'
import { useCartContext } from '../context/CartContext'
import "../Css/Cart.css";
import CartItems from './cartItems';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { NavLink } from 'react-router-dom';

export default function Cart() {

  const {cart,clearWholeCart,total_price,shippingFee} = useCartContext();
  console.log(cart,shippingFee,total_price)
  return (

    <div className='cart-container'>
      <div className='cart-heading grid-five-cols'>
        <p >Item</p>
        <p>Price</p>
        <p >Quantity</p>
        <p >SubTotal</p>
        <p>Remove</p>
      </div>
      <hr/>

     
      <div className='cart-item'>
       <Scrollbars>
          {cart?.map((curElem,index) => {
           
           
            return <CartItems key={index} {...curElem} />;
          })}
           </Scrollbars>
          </div>
          <hr/>
    <div className='continue-shopping'>
   
      <NavLink to="/products">
      <button className='continue-shopping-btn'>CONTINUE SHOPPING</button>
      </NavLink>
     
     <button className='clear-cart' onClick={()=>clearWholeCart()}>CLEAR CART</button>
    </div>
    <hr/>

    <div className='subtotal-div'>
      <p className='subtotal'>Subtotal: {total_price}
      </p>
      <p className='subtotal'>Shipping Fee:{shippingFee}
      </p>
      
      <p className='subtotal'>Order Total{total_price+shippingFee}</p>

    </div>
          
      </div>
   
  )
}
