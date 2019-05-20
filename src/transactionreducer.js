
const transactionreducer=(state={},action)=>{


switch(action.type){
    case 'ADD_TRANSACTION':
    console.log("created project",action.transaction);
    return state;
    case 'ADD_TRANSACTION_ERROR':
    console.log('error',action.err);
    default:
    return state;
}
}; 


export default transactionreducer