export const ecreatetransaction=(transaction)=>{
return(dispatch,getState,{getFirebase,getFirestore})=>{
     
    const firestore=getFirestore();
    const uid=getState().firebase.auth.uid;
    firestore.collection('transactions').add({

        amount:transaction.amount,
        key:transaction.key,
        status:transaction.status,
        type:transaction.type,
        time:new Date().toLocaleDateString(),
        uniqid:uid,
        amntinpkr:transaction.amntinpkr,
        bank:transaction.bank

    }).then(()=>{                          
   dispatch({type:'ADD_TRANSACTION' ,transaction:transaction});
}).catch((err)=>{
 dispatch({type:'ADD_TRANSACTION_ERROR' ,err});
  })
                          
}
};