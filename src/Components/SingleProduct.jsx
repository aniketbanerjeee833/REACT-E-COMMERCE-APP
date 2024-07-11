import React, { useEffect } from 'react'
// import { useProductContext } from './context/Context';
import { NavLink, useParams } from 'react-router-dom';
import MyImage from './MyImage';
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import "../Css/SingleProduct.css"
import { useProductContext } from '../context/Context';

import AddToCart from './AddToCart';


const API="https://api.pujakaitem.com/api/products";;

export default function SingleProduct() {

  const {id}=useParams();
  const{getSingleProduct,singleProduct,isSingleLoading}=useProductContext()
console.log(singleProduct)

const{name,id:alias,company,description ,price,category,colors,reviews,stars,stock,image}=singleProduct;

  useEffect(()=>
  {
getSingleProduct(`${API}?id=${id}`)
  },[])

  if(isSingleLoading)
    {
      return(
        <div>Loading.....</div>
      )
    }
  
  return (
  
   <div className='single-container'>
    <div className='single single-two-cols'>
      <MyImage images={image} />
   
    <div className='product-data'>
      <h2>{name}</h2>
      <p className='stars'>Stars:{stars}</p>
      <p>{reviews} customer reviews</p>
      <p className='product-data-price'>
        MRP: 
        <del>
          <span>{ price }</span>
          </del>

      </p>
      <p className='product-data-deal'>
       Deal of the Day:
     
          <span>{price}</span>
   
      </p>
      <p className='description'>
        {description}
      </p>
      <div className='product-warranty-icons'>
        <div className='icons1'>
        <TbTruckDelivery className='warranty-icon'/>
        <p>Free Delivery</p>
        </div>

        <div className='icons1'>
        <TbReplace className='warranty-icon' />
        <p>30 days Replacement</p>
        </div>
        <div className='icons1'>
        <TbTruckDelivery className='warranty-icon' />
        <p>Thapa Delivered</p>
        </div>
        <div className='icons1'>
        <MdOutlineSecurity className='warranty-icon' />
        <p>2 Year Warranty</p>
        </div>
      </div>
      <hr/>
      <div className='product-data-info'>
        <span>Available:{stock>0?"In stock":"Not Available"}</span>
        <p>
          ID:{alias}
        </p>
        <p>
          Brand:{company}
        </p>
      </div>
      <hr/>
        {stock>0 &&<AddToCart product={singleProduct} />}
       
        <hr/>
    </div>
    </div>
    
   </div>
  )
}
