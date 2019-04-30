import React from 'react';
import './body.scss';
import './login.scss';
import Cut from  './cut.png';
import Gbtn from './btn.png';
import Side from './side';
import GoogleLogin from 'react-google-login';





class login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            valueofemail:''
        }
        this.signupsubmit=this.signupsubmit.bind(this);
        this.responseGoogle=this.responseGoogle.bind(this);
    }
    
    signupsubmit(){
        alert('hello');
    }



    responseGoogle (response) {
  let email=response.w3.U3;
this.setState({
    valueofemail:email
})

}
    

    
    render()
    {
        return(
            <div >
            <Side/>
            <div className="parent1">



            
            <div className="loginform">
            <center><img src={Cut} height="5%" width="5%"></img></center>
            <br/><hr width="50%"/>
            </div>
            <div>
            <GoogleLogin 
    clientId="848915256384-br5ni0v07g8712baj02qjcm3uats3hi5.apps.googleusercontent.com"
    render={renderProps=> ( <center><img src={Gbtn} onClick={renderProps.onClick} height="20%" width="20%" /></center>)}
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
  />
  </div>    

<div>
        <center>
         <input className="emailinput" name="email" type="email" placeholder="Email"  width="100%" value={this.state.valueofemail}></input><br/>

         <input className="passwordinput" name="password" type="password" placeholder="Password"></input><br/>

        <button className="signup" onClick={this.signupsubmit}>SignUp</button>
        </center>   
</div>


            <div className="loginform">
           <hr width="50%"/> <br/>
            <center><img src={Cut} height="5%" width="5%"></img></center>
            
            </div>


            
            
            </div>
            </div>
        );
    }
}
export default login;
//<button onClick={renderProps.onClick} className="gbtn">Login With Google</button>