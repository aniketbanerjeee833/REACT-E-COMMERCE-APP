import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Css/HeroSection.css"
export default function HeroSection({data}) {
const {name}=data;

  return (
    <div className='container-hero'>
        <div className='grid grid-two-cols'>
            <div className='hero-section-data'>
                <p className='welcome-to'>Welcome To </p>
                <h2>{name} Shop</h2>
                    <p>You will get  a wide range of products here <br/> from mobiles to everything</p>
                <NavLink>
                <button className='shop-now'>SHOP NOW</button>
                </NavLink>
                </div>
                <div className='hero-section-image'>

                    <figure>
                        <img src="./hero.jpg" className='hero-image'></img>
                    </figure>

                    </div>

          
        </div>
    </div>
  )
}
