import React, { Component } from 'react'
import {connect} from 'react-redux';
import {signIn} from './authactions';
import Side from './side';
import {Redirect} from 'react-router-dom';
 class signin extends Component {
  




  
  constructor(props){
    
      super(props);
     this.state={
         email:'',
         password:''
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
console.log(this.state);
this.props.signin(this.state);      }
    render() {
      const {authError,auth}=this.props
      if(auth.uid) return <Redirect to='/'/>
      return (
        
      <div>
        <Side/>

          <div>
            
          </div>



          <form onSubmit={this.handlesubmit}>
          <label>Email</label><br/>
       
        <input  type="email" id="email" onChange={this.handlechange}></input><br/>
        <label>Email</label><br/>
        <input  type="password"  id="password"onChange={this.handlechange}></input><br/>
        
        
        <button>Login</button>

        {authError?<p>there is an authentication error</p>:null}

        </form>
      </div>
    )
  }
}


const mapstatetoptops=(state)=>{
return{
  authError:state.auth.autherror,
  auth:state.firebase.auth
}
}

const mapdispatchtoprops =(dispatch)=>{
  return{
    signin:(creds)=>dispatch(signIn(creds))
  }
}

export default connect(mapstatetoptops,mapdispatchtoprops)(signin)
