import React from 'react'
import { BsFillGridFill } from "react-icons/bs"
import { BsList } from "react-icons/bs"
import "../Css/Product.css"
import { useFilterContext } from '../context/FilterContext'

export default function Sort() {
  const{useGridView,useListView,gridView,filterProducts,sorting}=useFilterContext();
  console.log(filterProducts)
  return (
    <>
      <div className='grid-buttons'>
        <button className={gridView?"sort-grid active-grid":"sort-grid"} onClick={useGridView}>
        <BsFillGridFill  className="grid-icons"/>
        </button>
        <button className={gridView?"sort-grid ":"sort-grid active-grid"} onClick={useListView}>
        <BsList  className="grid-icons"/>
          </button>
      </div>

<div className='products-total'>
  <p> {` ${filterProducts .length}`}Products available</p>
</div>
      <div className='sort-selection'>
        <select name="sort" id="sort" className='sort-select-style' onClick={sorting}>
      
          <option value="lowest">Price(lowest)</option>
          <option value="#" disabled></option>
          <option value="highest">Price(highest)</option>
          <option value="#" disabled></option>
          <option value="a-z">Name(a-z)</option>
          <option value="#" disabled></option>
          <option value="z-a">Name(z-a)</option>
          <option value="#" disabled></option>
        </select>
      </div>
      </>
  )
}
