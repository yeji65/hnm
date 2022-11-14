import {productActions} from "../reducers/productReducer"

function getProducts(searchQuery){
    return async(dispatch,getState)=>{
        let url = `https://my-json-server.typicode.com/yeji65/hnm/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        // dispatch({type:"get_product_success",payload:{data}})
        dispatch(productActions.getAllProducts({data}))
    }
}

function getProductDetail(id){
    return async(dispatch)=>{
    let url = `https://my-json-server.typicode.com/yeji65/hnm/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log("detail",data)
    // dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
    dispatch(productActions.getSingleProduct({data}))
}
}

export const productAction={getProducts,getProductDetail}