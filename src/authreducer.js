
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
    
    default:
    return state
}






}; 


export default authreducer