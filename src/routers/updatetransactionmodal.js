import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import './side.scss';
import './navbar.scss';
import SignedinLinks from './signedinLinks';
import Notsignedinlinks from './notsignedinLinks';



var navbtnstate
class side extends React.Component
 {
 
constructor(props){
   super(props);
   this.navbtnclick=this.navbtnclick.bind(this);
   this.navdivclick=this.navdivclick.bind(this);

   this.state={
      navbtnstate:'side'
      
   }
}
render()

{


   const links = this.props.auth.uid ? <SignedinLinks/> : <Notsignedinlinks/>;
   return(
      
      <div className="parent">
      <div className="maindiv">
      </div>
      <div className={this.state.navbtnstate} onClick={this.navdivclick}>

{links}
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

const mapstatetoprops=(state)=>{
   console.log(state);

   return{
auth:state.firebase.auth
   }
}
export default connect(mapstatetoprops)(side)