import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import "../Css/Headers.css"
export default function Header() {
  return (
    <div className='header container'>
        <NavLink to="/">
         <img src="./logo.png" alt="logo"></img>   
        </NavLink>
        <Nav/>
    </div>
  )
}
