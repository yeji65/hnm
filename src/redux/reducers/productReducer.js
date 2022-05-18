let initalState = {
    productList:[],
    selectedItem: null,
}

function productReducer (state=initalState,action){
    let {type,payload} = action
    switch(type){
        case "get_product_success":
            return {...state,productList:payload.data}
        case "GET_SINGLE_PRODUCT_SUCCESS":
            return { ...state, selectedItem: payload.data };
        
        default :
            return {...state}
    }
}

export default productReducer;