import React from 'react';
import Side from './side';
import './home.scss';
import { Component } from 'react';
import Body from './body';





class home extends Component{

constructor(props){
   super(props);
   this.state={
      
   }
}


   render()
   {
      return(
            <div className="maindiv">
            <Side />
            <Body/>
            </div>
            
            
               );
            
      }
   }

export default home;
