import React from 'react';
import {NavLink} from 'react-router-dom';
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
      <div className={this.state.navbtnstate} onClick={this.navdivclick}>
<nav>
   <ul>  <center>
      <li><NavLink to='./home' className="navlinks" style={{ textDecoration: 'none' }}>Home</NavLink></li>   
      <li><NavLink to="/exchnage" className="navlinks" style={{ textDecoration: 'none' }}>Exchange</NavLink></li>
      <li><NavLink to="/analyze" className="navlinks" style={{ textDecoration: 'none' }}>Analyze</NavLink></li>
      <li><NavLink to="/charts" className="navlinks" style={{ textDecoration: 'none' }}>Charts</NavLink></li>
      <li><NavLink to="/about" className="navlinks" style={{ textDecoration: 'none' }}>About</NavLink></li>
      <li><NavLink to="/policy" className="navlinks" style={{ textDecoration: 'none' }}>Policy</NavLink></li>
      </center>
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