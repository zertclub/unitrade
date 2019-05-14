
const initstate={
    transactions:[
        {
        id:'1',    
        amount:'200',
         status:'pending',
        key:'aklnsef83n889f3f983hf983hf98'},
        
        {
            id:'2',
            amount:'300',
         status:'pending',
        key:'aklnsef83n889f3f983hf983hu'},
        
        {
            id:'3',
            amount:'500',
         status:'pending',
        key:'aklnsef83n889f3f983hf983hf97'},
        
        {id:'4',
        amount:'100',
         status:'pending',
        key:'aklnsef83n889f3f983hf9834'}
        
    ]
};
const transactionreducer=(state=initstate,action)=>{


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