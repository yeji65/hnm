let initalState={
    id:"",
    password:"",
    authenticate:false
}

function authenticateReducer(state=initalState,action){
    let {type,payload} = action
    switch(type){
        case "login_success":
            console.log("login_success reducer")
            return {...state,id:payload.id,password:payload.password,authenticate:true}
        default :
            return {...state}
    }

}
export default authenticateReducer