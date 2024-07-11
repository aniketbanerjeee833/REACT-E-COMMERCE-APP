import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Context";
import reducer from "../Reducer/filterProductReducer"
const FilterContext=createContext();

const initialState=
{
   
  
    filterProducts:[],
    allProducts:[],
    gridView:true,
    sortingValue:"lowest",

    filters:
    {
        text:"",
        category:"All",
        company:"All",
        price:0,
        minPrice:0,
        maxPrice:0,
        color:"all"
    }
}
const FilterContextProvider=({children})=>
    {
        const {products}=useProductContext();
        //console.log(products);


        const[state,dispatch]=useReducer(reducer,initialState);

        const useListView=()=>
            {
                return dispatch
                ({
                    type:"SET_LIST_VIEW",

                })
            }
        const useGridView=()=>
            {
                return dispatch
                ({
                    type:"SET_GRID_VIEW",

                })
            }

            const sorting=(event)=>
               
                {
                   let userValue=event.target.value;
                   console.log(userValue)
                    return dispatch
                    ({
                        type:"GET_SORTED_PRODUCTS",
                        payload:userValue,
    
                    })
                }

                const updateFilterValue=(event)=>
                    {
                            let name=event.target.name;
                            let value=event.target.value;
                            return dispatch
                            ({
                                type:"UPDATE_FILTER_VALUE",
                                payload:{name,value},
            
                            })
                    }

                    const clearFilter=()=>
                        {
                            return dispatch
                            ({
                                type:"CLEAR_FILTER",
            
                            })
                        }
            

        useEffect(()=>
        {
            dispatch
            ({
                type:"LOAD_FILTER_PRODUCTS",
                payload:products,
            
            })

        },[products]);

        
        useEffect(()=>
            {
                
                dispatch
                ({
                    type:"SORTING_PRODUCTS",
                    payload:products,
                
                })
    
            },[products,state.sortingValue]);

    useEffect(()=>
    {
        dispatch
                ({

                    type:"FILTER_SEARCH",
                })

    },[products,state.filters])

    return (
        <FilterContext.Provider value={{...state,useGridView,useListView,sorting,updateFilterValue,clearFilter}}>
           {children}
        </FilterContext.Provider>
         )

        }

    const useFilterContext=()=>
        {
            return useContext(FilterContext);

        }

        export  {FilterContext,FilterContextProvider,useFilterContext}