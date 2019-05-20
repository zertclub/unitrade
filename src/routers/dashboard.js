import React from 'react';
import Transactionlist from './transactionlist';
import { connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
class dashboard extends React.Component{

render(){


    const transaction=this.props.transaction;
    const auth=this.props.auth;

    if(!auth.uid) return <Redirect to='/signin'/>
    
    return(
<div >
    
    { transaction && transaction.map((transaction) => {
        return (
            
            <div key={transaction.id}>
          <Transactionlist transaction={transaction}/>
            </div>
        )
      })}  
    </div>

    );

}

}


const mapstatetoprops=(state)=>{
    console.log(state);
    return{
        transaction:state.firestore.ordered.transactions,
        auth:state.firebase.auth
    } 
    }


    export default compose(connect(mapstatetoprops),firestoreConnect((props)=>{
        return [
            {collection: 'transactions',
            where: [
               ['key', '==', props.auth.uid]
            ]
        }
        ]
    }
        
       ) )(dashboard)


// export default compose(connect(mapstatetoprops),firestoreConnect([{collection:'transactions'}]))(dashboard)