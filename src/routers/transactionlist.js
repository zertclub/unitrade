
import React, { Component } from 'react';
import './transactionlist.scss';


class transactionlist extends Component{


constructor(props){
super(props);
}

    render(){


        console.log(this.props);
        return(
            <div className="">
                <center>
            <div className="tlparent">
           
            <div className="tllabelcontainer">            
            <label className="tllabelheading">Amount</label>
<label className="tllabel">{this.props.transaction.amount} $USD </label><br/>
</div>


            <div className="tllabelcontainer">       
                   <label className="tllabelheading">Type</label>
          <label className="tllabel">{this.props.transaction.type}</label><br/>

</div>



            <div className="tllabelcontainer">          
                  <label className="tllabelheading">Status</label>
        <label className="tllabel">{this.props.transaction.status}</label><br/> 

</div>


            <div className="tllabelcontainer">          
                   <label className="tllabelheading">Date</label>
       <label className="tllabel">{this.props.transaction.time}</label><br/> 

</div>
<div className="tllabelcontainer">

<label className="tllabelheading">Amount in PKR</label>

            <label className="tllabel">{this.props.transaction.amntinpkr} PKR</label><br/> 
            </div>
            <div className="tllabelcontainer">

<label className="tllabelheading">Uniqe ID</label>

            <label className="tllabel">{this.props.transaction.key}</label><br/> 
            </div>
            </div>
            </center>
          </div>
        );
    }
}

export default transactionlist




