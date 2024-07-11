const productReducer=(state,action)=>
    {
        if(action.type==="SET_LOADING")
            {
                return{...state,isLoading:true}
            }


            if(action.type==="API_ERROR")
                {
                    return{...state,isLoading:false,isError:true}
                }

                if(action.type==="MY_API_PRODUCTS")
                    {
                      const featuredData=action.payload.filter((curElem)=>
                    {
                        return (curElem.featured===true)

                    });
                 
                    return{...state,isLoading:false, products:action.payload, featuredProducts:featuredData}
                    }


                    if(action.type==="SET_SINGLE_LOADING")
                        {
                            return{...state,isSingleLoading:true}
                        }
            
            
                        if(action.type==="SET_SINGLE_ERROR")
                            {
                                return{...state,isSingleLoading:false,isSingleError:true}
                            }
            
                            if(action.type==="SET_SINGLE_PRODUCTS")
                                {
                               
                             
                                return{...state,isSingleLoading:false, singleProduct:action.payload}
                                }
    }

    export default productReducer
