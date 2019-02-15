import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import './side.scss';
import './navbar.scss';



var navbtnstate
class side extends React.Component
 {
 
constructor(props){
   super(props);
   this.navbtnclick=this.navbtnclick.bind(this);
   this.navdivclick=this.navdivclick.bind(this);

   this.state={
      navbtnstate:'sideopen'
      
   }
}

render()
{
   return(
      <div className="parent">
      <div className="maindiv">
      <header className="header">
      <nav className="navbar">
      <h1>UNI TRADE</h1>
      <img src="navbtn.png" className="navbtn" onClick={this.navbtnclick}/>
      </nav>    
      </header>
      </div>
      <div className={this.state.navbtnstate}>
<nav>
   <ul>  
      <li><img src="logo.png" className="navbtn" onClick={this.navbtnclick}/></li>
      <li><NavLink to='./home'>Home</NavLink></li>   
      <li><NavLink to="/exchnage">Exchange</NavLink></li>
      <li><NavLink to="/analyze">Analyze</NavLink></li>
      <li><NavLink to="/charts">Charts</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/policy">Policy</NavLink></li>

   </ul>
</nav>
      </div>

      </div>
   );
}

navbtnclick(){
   this.setState(()=>{
      return{
         navbtnstate:'side'
      };
   }) 
}



navdivclick(){
   this.setState({
      navbtnstate:'sideopen'
   });
}

}
export default side;