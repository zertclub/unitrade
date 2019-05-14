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
      <li className="li1"><NavLink to="/exchnage" className="navlinks" style={{ textDecoration: 'none' }}>Exchange</NavLink></li>
      <li className="li1"><NavLink to="/analysis" className="navlinks" style={{ textDecoration: 'none' }}>Analyze</NavLink></li>
      <li className="li1"><NavLink to="/charts" className="navlinks" style={{ textDecoration: 'none' }}>Charts</NavLink></li>
      <li className="li1"><NavLink to="/about" className="navlinks" style={{ textDecoration: 'none' }}>About</NavLink></li>
      <li className="li1"><NavLink to="/policy" className="navlinks" style={{ textDecoration: 'none' }}>Policy</NavLink></li>
      <li className="li1"><NavLink to="/login" className="navlinks" style={{ textDecoration: 'none' }}>SignUp</NavLink></li>
      <li className="li1"><NavLink to="/signin" className="navlinks" style={{ textDecoration: 'none' }}>Login</NavLink></li>

      </center>
   </ul>
</nav>
            </div>
        );

    }
}
export default notsignedinlinks