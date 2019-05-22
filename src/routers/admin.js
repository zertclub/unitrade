import React from 'react';
import { type } from 'os';
import {priceaction,updatestatus} from './actions/priceaction';
import {connect} from 'react-redux';
import Transactionlist from './transactionlist';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import './admin.scss';
import  Updatetransactionmodal from './updatetransactionmodal';
import './side.scss';
import './navbar.scss';
import SignedinLinks from './signedinLinks';
import Notsignedinlinks from './notsignedinLinks';
var arraylist = require("arraylist");


class admin extends React.Component{

constructor(props){
    super(props);
    this.state={
        buy:'',
        sell:'',
        updatemodalclass:'updatemodaldivhidden',
        navbtnstate:'sideopen',
        updatedamount:'',
        updatedtime:'',
        updatedkey:'',
        updatedstatus:'',
        updatedtype:'',
        id:''

    }
   this.handlechange=this.handlechange.bind(this);
   this.handlesubmit=this.handlesubmit.bind(this);
   this.handlestatus=this.handlestatus.bind(this);
   
   this.navbtnclick=this.navbtnclick.bind(this);
   this.navdivclick=this.navdivclick.bind(this);
   this.handleupdate=this.handleupdate.bind(this);

   


}




handleupdate(e){
e.preventDefault()
this.setState({
    id:e.target.value

})
setTimeout(
    function() {
        this.props.updatestatus(this.state.id)
    }
    .bind(this),
    0
);
}






navbtnclick(){
    this.setState(()=>{
       return{
          navbtnstate:'side'
       };
    }) 
 }
 
 
 
 navdivclick(){
    this.setState({
       navbtnstate:'sideopen'
    });
 }

handlechange(e){
    this.setState({
        [e.target.id]:e.target.value
    })
}


handlestatus(){

};


handlesubmit(e){
    e.preventDefault();
    this.props.updateprice(this.state)
        }



render(){

    const transaction=this.props.transaction;
    var list=new arraylist;

    console.log(transaction)
    return(     
<div>      
   <form>
        <input type="text" id="buy"  onChange={this.handlechange}>
        </input>
        <br/><br/><br/>
        <input type="text" id="sell"  onChange={this.handlechange}>
        </input>
        <br/><br/>
        <button onClick={this.handlesubmit}>Set price</button>
   </form>
<div >
    
    { transaction && transaction.map((transaction) => {
       
  
       return (
            
            <div key={transaction.id}>
            <form>
        <input type="text" id="updatedamount"  onChange={this.handlechange}>
        </input>
        <br/><br/><br/>
        <input type="text" id="updatedstatus"  onChange={this.handlechange}>
        </input>
        <br/><br/>
        <input type="text" id="updatedkey"  onChange={this.handlechange}>
        </input>
        <br/><br/>
        <button onClick={this.handleupdate} id={transaction.id} value={transaction.id}>Update Status</button>
   </form>
           
            </div>
        )
      })}  
    </div>
      <div>
          
          </div>
</div>






);



}


}



  
  const mapdispatchtoprops =(dispatch)=>{
    return{
      updateprice:(price)=>dispatch(priceaction(price)),
      updatestatus:(updationid)=>dispatch(updatestatus(updationid))


    }
  }


  const mapstatetoprops=(state)=>{
    console.log(state);
    return{
        transaction:state.firestore.ordered.transactions,
    } 
    }

  
  export default compose(connect(mapstatetoprops,mapdispatchtoprops),firestoreConnect((props)=>{
    return [
        {collection: 'transactions',
        where: [
           ['status', '==', 'pending']
        ]
    }
    ]
}
    
   ) )(admin)

