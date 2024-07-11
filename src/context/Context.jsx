import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
 import reducer from"../Reducer/productReducer"
import SingleProduct from '../Components/SingleProduct'

const AppContext=createContext();

const API="https://api.pujakaitem.com/api/products"; 

const initialstate=
{
    isLoading:false,
    isSingleLoading:false,
    isError:true,
    isSingleError:true,
    featuredProducts:[],
    products:[],
    singleProduct:{},
}
  const AppProvider=({children})=>
    {
   

const[state,dispatch]=useReducer(reducer,initialstate)
const getProducts=async(url)=>
    {
        dispatch({type:"SET_LOADING"})
        try{
            const response=await axios.get(url);
            const products=await response.data;
            //console.log(products);
            dispatch({
                type:"MY_API_PRODUCTS",
                payload:products,
            });
        }
        catch(error)
        {
            dispatch({type:"API_ERROR"})
            console.log(error);
        }
    }


    const getSingleProduct=async(url)=>
        {
            dispatch({type:"SET_SINGLE_LOADING"})
            try{
                const response=await axios.get(url);
                const singleproducts=await response.data;
                //console.log(singleproducts);
                dispatch({
                    type:"SET_SINGLE_PRODUCTS",
                    payload:singleproducts,
                });
            }
            catch(error)
            {
                dispatch({type:"SET_SINGLE_ERROR"})
                console.log(error);
            }
        }


    
    useEffect(()=>
    {
        getProducts(API);
    },[])
  return (
 <AppContext.Provider value={{...state,getSingleProduct}}>
    {children}
 </AppContext.Provider>
  )
    }

   const useProductContext=()=>
        {
            return useContext(AppContext)
        }

export  {AppContext,AppProvider,useProductContext}