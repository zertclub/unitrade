
const initstate={
    autherror:null
};
const authreducer=(state=initstate,action)=>{

switch(action.type){
    case 'LOGIN_ERROR':
    return{
        ...state,
        autherror:'login Failed'
    }
    case 'LOGIN_SUCCESS':
    return{
        ...state,
        autherror:null
    }
    case 'SIGNOUT_SUCCESS':
    console.log("signout");
    return state;
    case 'SIGNUP_SUCCESS':
    console.log("signup sucess")
    return{
        ...state,
        autherror:null
    } 
    case 'SIGNUP_NOT':
    console.log("error");
    return{
        ...state,
        autherror:action.err.message
    }
    default:
    return state
}






}; 


export default authreducer