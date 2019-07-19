import React from 'react';
import {NavLink} from 'react-router-dom';
import './side.scss';
import './navbar.scss';
 class notsignedinlinks extends React.Component{


    render(){
        return(


            <div>
<nav>
   <ul className="ul1">  <center>
      <li className="li1"><NavLink to='./home' className="navlinks" style={{ textDecoration: 'none' }}>Home</NavLink></li>   
      <li className="li1"><NavLink to="/exchange" className="navlinks" style={{ textDecoration: 'none' }}>Exchange</NavLink></li>
      <li className="li1"><NavLink to="/analysis" className="navlinks" style={{ textDecoration: 'none' }}>Analyze</NavLink></li>
      <li className="li1"><NavLink to="/trade" className="navlinks" style={{ textDecoration: 'none' }}>Trade</NavLink></li>
      <li className="li1"><NavLink to="/heatmap" className="navlinks" style={{ textDecoration: 'none' }}>Heatmap</NavLink></li>
      <li className="li1"><NavLink to="/crossrates" className="navlinks" style={{ textDecoration: 'none' }}>Crossrates</NavLink></li>
      <li className="li1"><NavLink to="/crypto" className="navlinks" style={{ textDecoration: 'none' }}>Crypto</NavLink></li>
      <li className="li1"><NavLink to="/scanner" className="navlinks" style={{ textDecoration: 'none' }}>Scanner</NavLink></li>
      <li className="li1"><NavLink to="/callender" className="navlinks" style={{ textDecoration: 'none' }}>Callender</NavLink></li>
      <li className="li1"><NavLink to="/signin" className="navlinks" style={{ textDecoration: 'none' }}>Login</NavLink></li>
      <li className="li1"><NavLink to="/signup" className="navlinks" style={{ textDecoration: 'none' }}>Sign Up</NavLink></li>
      
      </center>
   </ul>
</nav>
            </div>
        );

    }
}
export default notsignedinlinks