function login(id,password){
    return (dispatch,getState)=>{
        console.log("login_success action")
        dispatch({type:"login_success",payload:{id,password}})
    }
}
export const authenticateAction={login}