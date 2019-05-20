export const priceaction=(price)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
         
        const firestore=getFirestore();
        firestore.collection('price').doc('price').set({
            buy:price.buy,
            sell:price.sell
    
        }).then(()=>{
            dispatch({type:'UPDATE_RATE' ,price:price});
        }).catch((err)=>{
            dispatch({type:'UPDATE_ERROR' ,err});
        })
    
    
        
    }
    };
    export const updatestatus=(updationid)=>{
        return(dispatch,getState,{getFirebase,getFirestore})=>{
             
            const firestore=getFirestore();
            firestore.collection('transactions').doc(updationid).update({
             status:'Verified'
        
            }).then(()=>{
                dispatch({type:'UPDATE_STATUS' ,updationid:updationid});
            }).catch((err)=>{
                dispatch({type:'UPDATE_ERROR' ,err});
            })
        
        
            
        }
        };
    
    
        


