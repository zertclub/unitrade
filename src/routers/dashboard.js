import React from 'react';
import Transactionlist from './transactionlist';
import { connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import './dashboard.scss';
import Side from './side';
import Footer from './footer';



var buyarr=[]
var sellarr=[]
var buyverifiedarr=[]
var sellverifiedarr=[]
var pendingarr=[]
var verifiedarr=[]
class dashboard extends React.Component{


constructor(props){
super(props);
this.state={
    transaction:'',
    buy:[null]
}

setTimeout(
    function() {
        this.setState({
            transaction:this.props.transaction
            

        });


        const transaction=this.state.transaction;

        { transaction && transaction.map((transaction) => {
      
            if(transaction.type=='buy'){
             if((buyarr.includes(transaction.key))===false) buyarr.push(transaction);
            }
            if(transaction.type=='sell'){
              if(sellarr.includes(transaction)===false) sellarr.push(transaction)
            }
            if(transaction.type=='buy' && transaction.status=='Verified'){
              if(buyverifiedarr.includes(transaction)===false) buyverifiedarr.push(transaction)
            }
            if(transaction.type=='sell' && transaction.status=='Verified'){
              if(sellverifiedarr.includes(transaction)===false) sellverifiedarr.push(transaction)
            }
            if(transaction.status=='pending'){
              if(pendingarr.includes(transaction)===false) pendingarr.push(transaction)
            }
            if(transaction.status=='Verified'){
              if(verifiedarr.includes(transaction)===false) verifiedarr.push(transaction)
            }
            
            return (
                  
                <div></div>
              )
            })}  



    }
    .bind(this),
    3000
);
setTimeout(
    function() {
        console.log(buyarr,'buy');
        console.log(sellarr,'sell');
        console.log(buyverifiedarr,'bv');
        console.log(sellverifiedarr,'sv');
        console.log(pendingarr,'p');
        console.log(verifiedarr,'v');
    }
    .bind(this),
    4000
);

 this.onbtnall=this.onbtnall.bind(this);
 this.onbtnbuy=this.onbtnbuy.bind(this);
 this.onbtnbuyver=this.onbtnbuyver.bind(this);
 this.onbtnsell=this.onbtnsell.bind(this);
 this.onbtnsellver=this.onbtnsellver.bind(this);
 this.onbtnpending=this.onbtnpending.bind(this);
 this.onbtnverified=this.onbtnverified.bind(this);


}

onbtnbuy(){ 
    this.setState({
        transaction:buyarr
    });
}
onbtnsell(){ 
    this.setState({
        transaction:sellarr
    });
}
onbtnbuyver(){ 
    this.setState({
        transaction:buyverifiedarr
    });
}
onbtnsellver(){ 
    this.setState({
        transaction:sellverifiedarr
    });
}
onbtnpending(){ 
    this.setState({
        transaction:pendingarr
    });
}
onbtnverified(){ 
    this.setState({
        transaction:verifiedarr
    });
}
onbtnall(){ 
    this.setState({
        transaction:this.props.transaction
    });
}





render(){

    console.log(this.state)
    const transaction=this.state.transaction;
    const auth=this.props.auth;

    if(!auth.uid) return <Redirect to='/signin'/>
    console.log(transaction)
    console.log('.....')
    console.log(this.state)

    console.log(this.props)
    return(
<div className="" >
    <Side/>
    <div className="demailnamecontainer">
    <div className="dloginemail">
        <h1 className="dh1">You are login as <h2 className="dh2">{this.props.auth.email}   </h2> </h1>
    </div>
    <div className="dloginemail">
        <h1 className="dh1">Welcome <h2 className="dh2"> {this.props.user.firstName} {this.props.user.lastName}   </h2> </h1>
    </div>
    </div>
        <hr width="70%"/>

<div className="dfiltercontainer">

        <button className="dfilter" onClick={this.onbtnall}>All</button>   
        <button className="dfilter" onClick={this.onbtnbuy}>Buy</button>
        <button className="dfilter" onClick={this.onbtnsell}>Sell</button>
        <button className="dfilter" onClick={this.onbtnverified}>Verified</button>
        <button className="dfilter" onClick={this.onbtnpending}>Pending</button>
        <button className="dfilter" onClick={this.onbtnbuyver}>Buy/Verified</button>
        <button className="dfilter" onClick={this.onbtnsellver}>Sell/Verified</button>

</div>
    

    
    { transaction && transaction.map((transaction) => {
      
      return (
            
            
            <div key={transaction.key}>
          <Transactionlist transaction={transaction}/>
            </div>
        )
      })}  
      <Footer/>
      
    </div>

    );
}

}


const mapstatetoprops=(state)=>{
    console.log(state);
    return{
        transaction:state.firestore.ordered.transactions,
        auth:state.firebase.auth,
        user:state.firebase.profile
       

    }
     
    }


    export default compose(connect(mapstatetoprops),firestoreConnect((props)=>{
        return [
           
            {collection: 'transactions',
            where: [
                ['uniqid', '==', props.auth.uid]
              
            ]
        
       },

          {collection: 'users',
            where: [
               ['uniqid', '==', props.auth.uid]
            ]}





        ]
    }
        
       ) )(dashboard)


console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
