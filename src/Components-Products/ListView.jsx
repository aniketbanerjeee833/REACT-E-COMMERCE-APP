import React from 'react'
import "../Css/Product.css"

import { NavLink } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2'
export default function ListView({products}) {

  return (
  
  
        <div className='list-view-two-cols'>

            <Scrollbars>
            {products?.map((curElem)=>{
                
    
             
           const{name,id,category,price,description}=curElem;
          
       
           return(
          <>
           
                <div className='list-card-data'>
                <NavLink to={`/singleproduct/${id}`}>
                <div className='list-card-image'>
                <figure>
                    <img src={curElem.image} alt="image"/>
                    <figcaption className="category" >{category}</figcaption>
                </figure>
                </div>
               </NavLink>
                <div className="list-card-info">
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <p>{description.slice(0,77)}</p>
                    <NavLink to={`/singleproduct/${id}`} className="btn-read">
                  <button className="btn">Read More</button>
                </NavLink>

                </div>
                </div>
                
          </>

            )})}
            </Scrollbars>
        </div>
       
       
      )
  
}
