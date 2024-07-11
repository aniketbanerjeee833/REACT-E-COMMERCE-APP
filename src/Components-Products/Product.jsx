import React from 'react'
import FilterSection from './FilterSection'
import ProductList from './ProductList'
import Sort from './Sort'
 import "../Css/Product.css"

export default function Product() {
  return (
    <section>
      <div className='product-container'>
     
        <FilterSection/>
     

      <div className='product-view-container'>
        <div className='sort-products'>
          <Sort/>
        </div>

        <div className='main-products'>
         <ProductList/>
        </div>
      </div>
      </div>
    </section>
  )
}
