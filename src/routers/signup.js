import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from './authactions';
import './signup.scss';
import Side from './side';
import Footer from './footer';

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
        <Side/>
        <center>
        <div className="suparent">
          <form onSubmit={this.handlesubmit}>
     
        <input placeholder="Email" className="suinput" type="email" id="email" onChange={this.handlechange}></input><br/>
        <input placeholder="Password" className="suinput" type="password"  id="password"onChange={this.handlechange}></input><br/>
        <input placeholder="First Name" className="suinput" type="text"  id="firstname"onChange={this.handlechange}></input><br/>
        <input placeholder="Last Name" className="suinput" type="text"  id="lastname"onChange={this.handlechange}></input><br/>
        <input placeholder="IBAN" className="suinput" type="text"  id="iban"onChange={this.handlechange}></input><br/>
        <input placeholder="Bank Name" className="suinput" type="text"  id="bank"onChange={this.handlechange}></input><br/>
        <p>{authError}</p>
        <button className="subtn">Sign Up</button>
        </form>
        </div>
        </center>

        <Footer/>
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
