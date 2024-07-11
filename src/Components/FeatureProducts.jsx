import React from 'react'
// import  {useProductContext} from '../context/Context'
import { NavLink } from 'react-router-dom';
import "../Css/FeatureProducts.css";
import { useProductContext } from '../context/Context';
export default function FeatureProducts() {
    
    const{isLoading,featuredProducts}=useProductContext();
    // const featuredData=featuredProducts.map((curElem)=>
    // {
       
    //    return  curElem;
    // })
    // console.log(featuredData);
  
   

    if(isLoading)
        {
            return <div>....Loading</div>
        }
  return (
<div className='container-feature'>
    <div className='feature-data'>
        <p>CHECK NOW</p>
        <h2>Our Feature Services</h2>
    </div>

    <div className='card-section'>
    {featuredProducts.map((curElem)=>
    {
      

            //console.log(curElem)
       const{name,id,category,price}=curElem;
      
   
       return(
      
            <NavLink to={`/singleProduct/${id}`} className="card-data-link" key={id}>
            <div className='card-data'>
            <figure>
                <img src={curElem.image} alt="image"/>
                <figcaption className="category" >{category}</figcaption>
            </figure>
            <div className="card-info">
                <p>{name}</p>
                <p>{price}</p>
            </div>
            </div>
        </NavLink>
        
        
          
           
       )
    })}
    </div>

    
</div>
   
  )
}
