import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from './authactions';
import './signup.scss';
import Side from './side';
import Footer from './footer';
import GoogleLogin from 'react-google-login';


 class signup extends Component {
  
  constructor(props){
      super(props);
     this.state={
         email:'',
         password:'',
         firstname:'',
         lastname:'',
         iban:'',
         bank:'',
         apnaerror:''
     }
      this.handlechange=this.handlechange.bind(this);
      this.handlesubmit=this.handlesubmit.bind(this);
      this.responseGoogle=this.responseGoogle.bind(this);

  }
  responseGoogle (response) {
    console.log(response);
    let email=response.w3.U3;
    let fname=response.w3.ofa;
    let lname=response.w3.wea;
  this.setState({
      email:email,
      firstname:fname,
      lastname:lname
  })
  
  }

  handlechange(e){
      this.setState({
          [e.target.id]:e.target.value
      })
  }
  
  handlesubmit(e){
     if(this.state.iban==''||(this.state.bank==''))
     {
      e.preventDefault();
      this.setState({
      apnaerror:'Please Enter a Valid IBAN and Bank'
    })
         }
     else{
      e.preventDefault();
      this.props.signUp(this.state);
      console.log(this.props);
      
  }

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
          <GoogleLogin 
    clientId="848915256384-br5ni0v07g8712baj02qjcm3uats3hi5.apps.googleusercontent.com"
    render={renderProps=> (<button onClick={renderProps.onClick} className="subtn">Verify Your Email</button>
    )}
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle} 
  />
        <br></br>
        <input placeholder="Email" value={this.state.email}  className="suinput" type="email" id="email"  readonly></input><br/>
        <input placeholder="Password"  className="suinput" type="password"  id="password"onChange={this.handlechange}></input><br/>
        <input placeholder="First Name" value={this.state.firstname} className="suinput" type="text"  id="firstname"></input><br/>
        <input placeholder="Last Name" value={this.state.lastname} className="suinput" type="text"  id="lastname"></input><br/>
        <input placeholder="IBAN" className="suinput" type="text"  id="iban"onChange={this.handlechange}></input><br/>
        <input placeholder="Bank Name" className="suinput" type="text"  id="bank"onChange={this.handlechange}></input><br/>
        <p>{authError}</p>
        <p>{this.state.apnaerror}</p>

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
