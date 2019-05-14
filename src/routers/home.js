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
//     constructor(props){
//         super();
//         this.state={
//            buy:'4',
//            sell:'4'
//         }
//         this.rateupdate=this.rateupdate.bind(this);
//      }

//      rateupdate(buy,sell){
//         this.setState({
//             buy:buy,
//             sell:sell
//         })
//     }
    
// render(){
//     return(
// <div className="pdiv">
// <center>
// <br/>
// <img src={Payoneer} height="30%" width="30%"></img><br></br><br/>
// <div className="labeldiv">
//     I want to
// <br/><br/>
// </div>
// <div className="buysell">
// <div className="ebs">Buy<br/><div className="erate">@{this.state.buy}</div></div>
// <div className="ebs">Sell<br/><div className="erate">@{this.state.sell}</div></div>
// <Admin rateupdate="hello"/>
// </div>
// </center>
// </div>
//  );