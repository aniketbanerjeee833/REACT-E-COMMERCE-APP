import React, { useState } from 'react'
import "../Css/image.css";

 export default function MyImage({images=[{url:""}]}) {
   // console.log(images);
    const [mainImage,setMainImage]= useState (images[0]);
  return (
   <div className='image-container'>
    <div className='image-four-rows'>
        
        {
        images?.map((curElem,index)=>
        {
            return (
                
                <figure key={index}>
                    <img src={curElem.url}  alt={curElem.filename} className='box-images' onClick={()=>setMainImage(curElem)}></img>
                </figure>
    
            )
        })
        }

    </div>
    <div className='main-image-container'>
                   <img src={mainImage.url} alt={mainImage.filename} className='main-image'></img>
                   </div>
   </div>
  )
}
