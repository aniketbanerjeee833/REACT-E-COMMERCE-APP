import React from 'react'

import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Product from './Components-Products/Product'
import Header from './Components/Header'
import SingleProduct from './Components/SingleProduct'
import "./App.css"
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import Cart from './Components/Cart'
import Footers from './Components/Footers'
export default function App() {



  return (

<BrowserRouter>
    <Header/>
<Routes>
<Route path ="/" element ={ <Home/> }/>
<Route path ="/about" element ={<About/>}/>
<Route path ="/products" element ={ <Product/> }/>
<Route path ="/contact" element ={<Contact/>}/>
<Route path ="/cart" element ={<Cart/>}/>
<Route path ="*" element ={ <Error/> }/>
<Route path ="/singleProduct/:id" element ={<SingleProduct/>}/>

</Routes>
<Footers/>
</BrowserRouter>
  )
}
