import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Css/Product.css"
// import "../Css/GridView.css"

export default function GridView({products}) {
    console.log(products)
  return (
  
    <div className='grid-view-three-cols'>
        {products?.map((curElem)=>{
            

            //console.log(curElem)
       const{name,id,category,price}=curElem;
      
   
       return(
      
            <NavLink to={`/singleProduct/${id}`} className="grid-card-data-link" key={id}>
            <div className='grid-card-data'>
            <figure>
                <img src={curElem.image} alt="image"/>
                <figcaption className="category" >{category}</figcaption>
            </figure>
            <div className="grid-card-info">
                <p>{name}</p>
                <p>{price}</p>
            </div>
            </div>
        </NavLink>
        )})}
    </div>
   
  )
}
