import React, { Component } from 'react'
import uuid from "uuid";
import {connect} from 'react-redux';
import {ecreatetransaction} from './actions/transactionaction'

 class createtransaction extends Component {
  
  constructor(props){
      super(props);
     this.state={
         amount:'',
         status:'pending',
         key:''
     }
      this.handlechange=this.handlechange.bind(this);
      this.handlesubmit=this.handlesubmit.bind(this);
  }
  
  handlechange(e){
      this.setState({
          [e.target.id]:e.target.value,
          key:uuid.v4()
      })
  }
  
  handlesubmit(e){
e.preventDefault();

this.props.createtransaction(this.state)
}
    render() {
    return (
      <div>
          <form onSubmit={this.handlesubmit}>
          <label>amount</label><br/>
     
        <input  type="text"  id="amount"onChange={this.handlechange}></input><br/>
        <label>{this.state.status}</label>
        <button>Login</button>
        </form>
      </div>
    )
  }
}


const mapdispatchtoprops =(dispatch)=>{
  return{
    createtransaction:(transaction)=>dispatch(ecreatetransaction(transaction))
  }
}

export default connect(null,mapdispatchtoprops)(createtransaction)
