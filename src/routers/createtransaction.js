import React, { Component } from 'react'
import uuid from "uuid";
import {connect} from 'react-redux';
import {ecreatetransaction} from './actions/transactionaction'
import {Redirect} from 'react-router-dom';
import Side from './side';
import DropdownButton from 'react-bootstrap/DropdownButton'
 class createtransaction extends Component {
  
  constructor(props){
      super(props);
     this.state={
         amount:'',
         status:'pending',
         key:'',
         type:''
     }
      this.handlechange=this.handlechange.bind(this);
      this.handlesubmit=this.handlesubmit.bind(this);
  }
  
  handlechange(e){
      this.setState({
          [e.target.id]:e.target.value
      })
  }
  




  handlesubmit(e){
e.preventDefault();
if(this.state.type=="buy"||this.state.type=="sell")
this.props.createtransaction(this.state)

else{
  alert("please enter valid value")
}
}
    render() {
      const auth=this.props.auth
      if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div>
        <Side/>
          <form onSubmit={this.handlesubmit}>
          <label>amount</label><br/>
     
        <input  type="text"  id="amount"onChange={this.handlechange}></input><br/>
        <label>write buy to buy and sell to sell in small leters its a confirmation</label>
        <input  type="text"  id="type"onChange={this.handlechange}></input><br/>

        <button>Login</button>
        </form>
      </div>
    )
  }
}
const mapstatetoprops =(state)=>{
  return{
    auth:state.firebase.auth
  }
}

const mapdispatchtoprops =(dispatch)=>{
  return{
    createtransaction:(transaction)=>dispatch(ecreatetransaction(transaction))
  }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(createtransaction)
