import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from './authactions';
 class signup extends Component {
  
  constructor(props){
      super(props);
     this.state={
         email:'',
         password:'',
         firstname:'',
         lastname:'',
         iban:'',
         bank:''
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
this.props.signUp(this.state);
console.log(this.props);

}
    render() {
      const auth=this.props.auth;
      const authError=this.props.authError;
      if(auth.uid) return <Redirect to='/'/>
     
    return (
      <div>
          <form onSubmit={this.handlesubmit}>
          <label>Email</label><br/>
     
        <input  type="email" id="email" onChange={this.handlechange}></input><br/>
        <label>Email</label><br/>
        <input  type="password"  id="password"onChange={this.handlechange}></input><br/>
        <label>1st Name</label><br/>
        <input  type="text"  id="firstname"onChange={this.handlechange}></input><br/>
        <label>Last Name</label><br/>
        <input  type="text"  id="lastname"onChange={this.handlechange}></input><br/>
        <label>IBAN</label><br/>
        <input  type="text"  id="iban"onChange={this.handlechange}></input><br/>
        <label>Bank Name</label><br/>
        <input  type="text"  id="bank"onChange={this.handlechange}></input><br/>
        <p>{authError}</p>
        <button>Login</button>
        </form>
      </div>
    )
  }
}

const mapstatetoptops=(state)=>{
  return{
    auth:state.firebase.auth,
    authError: state.auth.autherror
  }
}



const mapdispatchtoprops=(dispatch)=>{
  return{
    signUp:(newUser)=>dispatch(signUp(newUser))
  };
};

export default connect(mapstatetoptops,mapdispatchtoprops)(signup)
