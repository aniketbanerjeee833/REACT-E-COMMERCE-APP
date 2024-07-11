import React from 'react'
import  "../Css/FilterSection.css"
import { useFilterContext } from '../context/FilterContext'
import "../Css/Product.css";
import { FaCheck } from "react-icons/fa";
export default function FilterSection() {
  const {filters:{text,category,company,color,price,maxPrice,minPrice},updateFilterValue,allProducts,clearFilter} =useFilterContext();
console.log(allProducts);

let categoryData=allProducts.map((curElem)=>
{
  return curElem.category
})
categoryData=["All",...new Set(categoryData)];

console.log(categoryData)

let companyData=allProducts.map((curElem)=>
{
  return curElem.company;
})
companyData=["All",...new Set(companyData)];


// let newVal=allProducts.map((curColors)=>
//   {
//     console.log((curColors.colors))
//      return (curColors.colors.flat());
//   })
//  //console.log(colorsData)

//  const colorsData1 = ["All",...new Set(newVal)];
//   console.log(colorsData1);

const getUniqueData = (data, attr) => {
  let newVal = data.map((curElem) => {
    return curElem[attr];
  });

  if (attr === "colors") {
    // return (newVal = ["All", ...new Set([].concat(...newVal))]);
    newVal = newVal.flat();
  }

  return (newVal = ["all", ...new Set(newVal)]);
};
const colorsData = getUniqueData(allProducts, "colors");
console.log(colorsData)

  return (
    <div className='filter-products'>
      <div  className='filter-search'>
      <input type="text" name='text' value={text} autoComplete ="off" placeholder='SEARCH...' onChange={updateFilterValue}/>
      
    </div>
{/* name value filter */}
    <div className='filter-category'>
      <h3>Category</h3>
      {
        categoryData.map((curElem,index)=>
        {
          console.log(curElem)
          return(
          
            <button key={index}    type="button" name="category"  value={curElem} onClick={updateFilterValue}
            className={curElem===category? "category-buttons activeCat":"category-buttons"}>
              {curElem}
            </button>

          
        )})
      }


    </div>

    {/* COMPANY SECTION */}
    <div className='filter-company'>
      <h3>Company</h3>
      <select name="company" id="company" className='filter-company' onClick={updateFilterValue}>

      
      {
        companyData.map((curElem,index)=>
        {
          console.log(curElem)
          return(
          
           <option value={curElem} key={index}  name="company">{curElem}</option> 

          
        )})
      }

</select>


    </div>

    <div className="filter-colors ">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all"
                  onClick={updateFilterValue}>
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}>
                {color === curColor ? <FaCheck className="checkstyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className='filter-price'>
        <h3>Price</h3>
        <p>{price}</p>
        <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue}/>
      </div>
      <div className='filter-buttons'>
        <button className='clear-filter'type="button" onClick={clearFilter}>CLEAR FILTER</button>
      </div>
    
    </div>
  )
}
