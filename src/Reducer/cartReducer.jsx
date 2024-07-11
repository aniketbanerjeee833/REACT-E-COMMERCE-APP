const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, quantity, product } = action.payload;

  
let existingProduct=state.cart?.find((curElem)=>curElem.id===id+color)
      console.log(existingProduct,product);
  
      if(existingProduct)
        {
          let updatedProduct=state.cart?.map((curElem)=>
          {
            ///console.log(curElem)
            if(curElem.id===id+color)
              {
                let newQuantity=curElem.quantity+quantity;
               if(newQuantity>=curElem.stock)
                {
                  newQuantity=curElem.stock;
                
                }
                  
                return{...curElem,quantity:newQuantity}  
               
              }

             
          //IF NOT DIFFERENT COLOR
       
                else{
                  console.log(curElem);
                  return curElem
                }
              
          
          })
          console.log(updatedProduct)
          return{...state,cart:updatedProduct}
        }

  
      else { let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        quantity,
        image: product.image[0].url,
        price: product.price,
        stock: product.stock,
        
      }
   
      console.log(cartProduct);
      return {
        ...state,cart: [...state.cart, cartProduct],
      }    // return {...state,cart:[state.cart , cartProduct]}
          
    }
  
       }
      
    

       if(action.type==="CLEAR_CART")
        {
        let updatedCart=state.cart?.filter((curElem)=>curElem.id!==action.payload)
         
            return{...state,cart:updatedCart}
     
        }

        if(action.type==="CLEAR_WHOLE_CART")
{
return{...state, cart:[]}
}


if(action.type==="SET_INCREMENT")
  {
    let updatedCart=state.cart?.map((curElem)=>
    {
      if(curElem.id===action.payload)
        {
          let increaseAmount=curElem.quantity+1;
          if(increaseAmount>=curElem.stock)
            {
              increaseAmount=curElem.stock
             
            }
            return{...curElem,quantity:increaseAmount}

        
        }
else 
{
  return curElem

  
}
})   
return{...state,cart:updatedCart} 
    }
 
  
  
if(action.type==="SET_DECREMENT")
  {
    let updatedCart=state.cart?.map((curElem)=>
    {
      if(curElem.id===action.payload)
        {
          let decreaseAmount=curElem.quantity-1;
          if(decreaseAmount<1)
            {
              decreaseAmount=1;
             
            }
            return{...curElem,quantity:decreaseAmount}
       

          
        }
        else 
        {
          return curElem
        }
     
    })
    return{...state,cart:updatedCart}
  }



  
  if (action.type === "CART_TOTAL_ITEMS") {
    let updatedCartQuantity = state.cart?.reduce((accum, curElem) => {
    console.log(curElem)
      let { quantity} = curElem;

      accum = accum + quantity;
      console.log(accum)
      return accum;
    }, 0);

    return {...state, total_items: updatedCartQuantity};
  }


 if (action.type === "CART_TOTAL_PRICE") {
    let updatedTotalPrice = state.cart?.reduce((accum, curElem) => {
      let { price, quantity } = curElem;

      accum= accum + (price * quantity);

      return accum;
    }, 0);

    return {...state,total_price:updatedTotalPrice};
  }
  return state
}
    export default cartReducer