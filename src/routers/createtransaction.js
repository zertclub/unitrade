import React, { Component } from 'react'
import uuid from "uuid";
import {connect} from 'react-redux';
import {ecreatetransaction} from './actions/transactionaction'
import {Redirect} from 'react-router-dom';
import Side from './side';
import './createtransaction.scss';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Footer from './footer';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';


 class createtransaction extends Component {
  
  constructor(props){
      super(props);
     this.state={
         amount:'',
         status:'pending',
         key:uuid(),
         type:'',
         amntinpkr:'',
         bank:''

     }
      this.handlechange=this.handlechange.bind(this);
      this.handlesubmit=this.handlesubmit.bind(this);
  }
  
  handlechange(e){
      this.setState({
          [e.target.id]:e.target.value
      })
      setInterval(function(){
        if(this.state.type=='buy'){
          this.setState({
            amntinpkr:this.state.amount*this.props.price.price.buy
          })  
        }
        if(this.state.type=='sell'){
          this.setState({
            amntinpkr:this.state.amount*this.props.price.price.sell
  
          })
  
        }
      }.bind(this), 50)
    
    
      }
    
     
  
  




  handlesubmit(e){
e.preventDefault();
if(this.state.type=="buy"||this.state.type=="sell")
this.props.createtransaction(this.state)

else{
  alert("please enter valid value")
}

this.props.history.push(`/`)
}
    render() {
      const auth=this.props.auth
      if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div>
        <Side/>
          <center>
        <div className="ctdiv">

          <form onSubmit={this.handlesubmit} >
     
          <input  type="text" className="ctinput" placeholder="'buy' for buying and 'sell' for selling" id="type"onChange={this.handlechange}></input><br/><br/>

        <input  type="text" className="ctinput" placeholder="Amount" id="amount"onChange={this.handlechange}></input><br/><br/>
        <input  type="text" className="ctinput" placeholder="Bank or Payoneer Details" id="bank"onChange={this.handlechange}></input><br/><br/>

        <input  type="text" className="ctinput" value={this.state.amntinpkr} placeholder="Amount in PKR" id="receiveamnt"  onChange={this.handlechange}></input><br/><br/>
        <input  type="text" className="ctinput" value={this.state.key} placeholder="Id to send in Memo" id="uniqid"  onChange={this.handlechange}></input><br/><br/>

        <button className="ctbtn">Exchange</button>
        </form>
        </div>

        </center>
        <Footer/>
      </div>
    )
  }
}
const mapstatetoprops =(state)=>{
  return{
    auth:state.firebase.auth,
    price:state.firestore.data.price
  }
}

const mapdispatchtoprops =(dispatch)=>{
  return{
    createtransaction:(transaction)=>dispatch(ecreatetransaction(transaction))
  }
}


export default compose(connect(mapstatetoprops,mapdispatchtoprops),firestoreConnect((props)=>{
  return [
      {collection: 'price'}
  ]
}
  
 ) )(createtransaction)