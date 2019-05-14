import React from 'react';
import Transactionlist from './transactionlist';
import { connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class dashboard extends React.Component{

render(){


    const transaction=this.props.transaction
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
        transaction:state.firestore.ordered.transactions
    }
    }

export default compose(connect(mapstatetoprops),firestoreConnect([{collection:'transactions'}]))(dashboard)