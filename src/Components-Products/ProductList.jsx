import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import GridView from './GridView';
import ListView from './ListView';

export default function ProductList() {

    const {filterProducts,gridView}=useFilterContext();
    //console.log(filterProducts);
    //console.log(gridView)

    if(gridView===true)
        {
            return (
                <GridView products={filterProducts}/>
              )
        }
        if(gridView===false)
            {
                return (
                    <ListView products={filterProducts}/>
                  )
            }

}
