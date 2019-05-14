
import React, { Component } from 'react';



class transactionlist extends Component{


constructor(props){
super(props);
}

    render(){


        console.log(this.props);
        return(
            <div>
            <label>{this.props.transaction.amount}</label><br/>
            <label>{this.props.transaction.key}</label><br/>
            <label>{this.props.transaction.status}</label><br/> 
          </div>
        );
    }
}

export default transactionlist




