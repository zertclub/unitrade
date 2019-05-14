import React, { Component } from 'react'

 class signup extends Component {
  
  constructor(props){
      super(props);
     this.state={
         email:'',
         pass:'',
         fname:'',
         lname:''
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
      }
    render() {
    return (
      <div>
          <form onSubmit={this.handlesubmit}>
          <label>Email</label><br/>
     
        <input  type="email" id="email" onChange={this.handlechange}></input><br/>
        <label>Email</label><br/>
        <input  type="password"  id="pass"onChange={this.handlechange}></input><br/>
        <label>1st Name</label><br/>
        <input  type="text"  id="fname"onChange={this.handlechange}></input><br/>
        <label>Last Name</label><br/>
        <input  type="text"  id="lname"onChange={this.handlechange}></input><br/>
        
        <button>Login</button>
        </form>
      </div>
    )
  }
}

export default signup
