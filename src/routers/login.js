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
            valueofemail:'',
            valueofpwd:''
        }
        this.signupsubmit=this.signupsubmit.bind(this);
        this.responseGoogle=this.responseGoogle.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
        this.handlechnage=this.handlechnage.bind(this);
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


handlechnage(e){
    this.setState({
        valueofpwd:e.target.value
    })
    console.log(this.state.valueofpwd);
}

handlesubmit(e) {

    e.preventDefault();
    console.log(this.state)

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
            <form onSubmit={this.handlesubmit}>
         <input className="emailinput" name="email" type="email" placeholder="Email"  width="100%" value={this.state.valueofemail} ></input><br/>

         <input className="passwordinput" name="password" type="password" placeholder="Password" onChange={this.handlechnage} value={this.state.valueofpwd}></input><br/>

        <button className="signup" type="submit">SignUp</button>
        </form>
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
