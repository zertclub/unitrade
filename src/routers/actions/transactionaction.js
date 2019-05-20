export const ecreatetransaction=(transaction)=>{
return(dispatch,getState,{getFirebase,getFirestore})=>{
     
    const firestore=getFirestore();
    const uid=getState().firebase.auth.uid;
    firestore.collection('transactions').add({

        amount:transaction.amount,
        key:uid,
        status:transaction.status,
        type:transaction.type,
        time:new Date()


    }).then(()=>{
        dispatch({type:'ADD_TRANSACTION' ,transaction:transaction});
    }).catch((err)=>{
        dispatch({type:'ADD_TRANSACTION_ERROR' ,err});
    })


    
}
};