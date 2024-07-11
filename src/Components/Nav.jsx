import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import { useCartContext } from '../context/CartContext';

export default function Nav() {
    const {cart}=useCartContext();

        let updatedCartQuantity = cart?.reduce((accum, curElem) => {
       
              let { quantity} = curElem;
        
              accum = accum + quantity;
              console.log(accum)
              return accum;
            }, 0);

            console.log(updatedCartQuantity)
    


  return (
    <div className='navbar'>
        <ul className="navbar-lists">
            <li>
                <NavLink to="/" className="navbar-link">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="navbar-link">ABOUT</NavLink>
            </li>
            <li>
                <NavLink to="/products" className="navbar-link">PRODUCTS</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="navbar-link">CONTACTS</NavLink>
            </li>
           
            <li>
                <NavLink to="/cart" className="navbar-link cart-trolley-item">
                <CiShoppingCart className='cart-trolley' />
                <span className='cart-total-items'>{updatedCartQuantity}</span>
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
