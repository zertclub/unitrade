import React from 'react';
import renderHTML from 'react-render-html';
var __html=require('./tic.html');
var tic ={__html: __html};

class ticker extends React.Component{
  constructor(props){
     super(props);
     this.state={      
     }
  }
    render()
     {
        return(
               <div dangerouslySetInnerHTML={tic}/>
         
              
              
                 );
              
        }
     }
  
  export default ticker;