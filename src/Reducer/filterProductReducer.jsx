const filterProductReducer=(state,action)=>
    {
        if(action.type==="LOAD_FILTER_PRODUCTS")
            {
                let priceArr=action.payload.map((curElem)=>curElem.price)
               let maxPrice= Math.max(...priceArr);
                return{...state,filterProducts:[...action.payload],allProducts:[...action.payload],filters: { ...state.filters, maxPrice:maxPrice, price: maxPrice }}

                
            }

            if(action.type==="SET_GRID_VIEW")
                {
                    return{...state,gridView:true}
    
                    
                }

                if(action.type==="SET_LIST_VIEW")
                    {
                        return{...state,gridView:false}
        
                        
                    }

                    if(action.type==="GET_SORTED_PRODUCTS")
                        {
                            return{...state, sortingValue: action.payload}
                        }
                
                        if(action.type==="SORTING_PRODUCTS")
                            {
                                let newSortData;
                                let tempSortData=[...action.payload];

                              if(state.sortingValue==="a-z")
                                {
                                    newSortData=tempSortData.sort((a,b)=>
                                        {
                                                return(a.name.localeCompare(b.name))
                                        })
                                    
                                }
                                if(state.sortingValue==="z-a")
                                    {
                                        newSortData=tempSortData.sort((a,b)=>
                                            {
                                                    return(b.name.localeCompare(a.name))
                                            })
                                        
                                    }
                                    if(state.sortingValue==="lowest")
                                        {
                                            newSortData=tempSortData.sort((a,b)=>
                                                {
                                                        return(a.price-b.price)
                                                })
                                            
                                        }

                                        if(state.sortingValue==="highest")
                                            {
                                                newSortData=tempSortData.sort((a,b)=>
                                                    {
                                                            return(b.price-a.price)
                                                    })
                                                
                                            }

                                return{...state, filterProducts:newSortData}
                            }
/*ALL PUT IN FILTER PRODUCTS*/
                            if(action.type==="UPDATE_FILTER_VALUE")
                                {
                                   const{name,value}=action.payload;
                                   return{...state,filters:{...state.filters,[name]:value}}
                                }

                                if(action.type==="FILTER_SEARCH")
                                    {
                                        let{allProducts}=state;
                                        let tempFilterData=[... allProducts];
                                        const{text,category,company,price,color}=state.filters;

                                       
                                        if(text)
                                            {
                                                tempFilterData=tempFilterData.filter((curElem)=>curElem.name.toLowerCase().startsWith(text))
                                                
                                            }

                                            if (category !== "All") {
                                                tempFilterData = tempFilterData.filter((curElem) => curElem.category === category);
                                              
                                            } 
                                              if (company !== "All") {
                                                tempFilterData = tempFilterData.filter((curElem) => curElem.company.toLowerCase() === company.toLowerCase());
                                                
                                              }

                                              if (color !=="all") {
                                                tempFilterData = tempFilterData.filter((curElem) =>
                                                    {
                                                       return ( curElem.colors.includes(color))
                                                    })
                                              }


                                              if(price)
                                                {
                                                    tempFilterData = tempFilterData.filter((curElem)=>
                                                        {
                                                           return( curElem.price<=price)
                                                        })
                                                }
                                                if(price===0)
                                                    {
                                                        tempFilterData = tempFilterData.filter((curElem)=>
                                                            {
                                                                return(curElem.price===price)
                                                            })  
                                                    }


                                        return{...state,filterProducts:tempFilterData}
                                    }

                                    if(action.type==="CLEAR_FILTER")
                                        {
                                            return{...state,filters:
                                                {
                                                    ...state.filters,
                                                    text:"",
                                                    category:"All",
                                                    company:"All",
                                                    maxPrice: state.filters.maxPrice,
                                            price:state.filters.maxPrice,
                                            minPrice: state.filters.minPrice,
                                                    color:"all"
                                                }}
                                        }
                        

return state
    }

    export default filterProductReducer