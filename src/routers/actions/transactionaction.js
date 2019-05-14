export const ecreatetransaction=(transaction)=>{
return(dispatch,getState,{getFirebase,getFirestore})=>{
     
    const firestore=getFirestore();
    firestore.collection('transactions').add({

        amount:transaction.amount,
        key:transaction.key,
        status:transaction.status,
        time:new Date()


    }).then(()=>{
        dispatch({type:'ADD_TRANSACTION' ,transaction:transaction});
    }).catch((err)=>{
        dispatch({type:'ADD_TRANSACTION_ERROR' ,err});
    })


    
}
};