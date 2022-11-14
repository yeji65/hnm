import {createSlice} from '@reduxjs/toolkit' 

let initialState = {
    productList:[],
    selectedItem: null,
}

// function productReducer (state=initalState,action){
//     let {type,payload} = action
//     switch(type){
//         case "get_product_success":
//             return {...state,productList:payload.data}
//         case "GET_SINGLE_PRODUCT_SUCCESS":
//             return { ...state, selectedItem: payload.data };
        
//         default :
//             return {...state}
//     }
// }

// export default productReducer;

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        getAllProducts(state,action){
           state.productList = action.payload.data;
        },
        getSingleProduct(state,action){
            state.selectedItem = action.payload.data;
        }
    }
})

console.log("yyy",productSlice)

export const productActions = productSlice.actions
export default productSlice.reducer