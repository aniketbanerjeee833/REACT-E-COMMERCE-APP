import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext=createContext();


const getLocalCartData = () => {
    let localCartData = JSON.parse(localStorage.getItem("thapaCart"));
   if(!Array.isArray(localCartData))
   {
    return []
   }else{
    return localCartData
   }
  };
  
  const initialState = {
   
    cart: getLocalCartData(),
    total_items: 0,
    total_price: 0,
    shippingFee: 50000,
  };
const CartProvider=({children})=>
    {

        const[state,dispatch]=useReducer(reducer,initialState);


        const addToCart= (id,color,quantity,product) =>
            {
             return dispatch
             ({
                type:"ADD_TO_CART",
             payload:{id,color,quantity,product}})
            }

            const clearCart=(id)=>
                {
                    return dispatch({
                        type:"CLEAR_CART",
                        payload:id,
                    
                       
                    })
                }

                const setIncrease=(id)=>
                    {
                        return dispatch({
                            type:"SET_INCREMENT",
                            payload:id,
                        
                           
                        })
                    }
                    const setDecrease=(id)=>
                        {
                            return dispatch({
                                type:"SET_DECREMENT",
                                payload:id,
                            
                               
                            })
                        }
                    

                const clearWholeCart=()=>
                    {
                        return dispatch({type:"CLEAR_WHOLE_CART"})
                    }

                    useEffect(() => {
                        dispatch({ type: "CART_TOTAL_ITEM" });
                        dispatch({ type: "CART_TOTAL_PRICE" });
                        // dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
                    
                        localStorage.setItem("thapaCart", JSON.stringify(state.cart));
                      }, [state.cart]);
                    

        return (<CartContext.Provider value={{...state, addToCart,clearCart,clearWholeCart,setIncrease,setDecrease}}>
            {children}
        </CartContext.Provider>)
    }

  

    const useCartContext=()=>
        {
           return useContext(CartContext);

        }
        export {useCartContext,CartProvider,CartContext}