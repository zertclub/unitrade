import React from 'react';
import { type } from 'os';
import {priceaction,updatestatus} from './actions/priceaction';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import './admin.scss';
import './side.scss';
import './navbar.scss';
import Side from './side';
import Footer from './footer';

var arraylist = require("arraylist");


class admin extends React.Component{

constructor(props){
    super(props);
    this.state={
        buy:'',
        sell:'',
        updatemodalclass:'updatemodaldivhidden',
        navbtnstate:'sideopen',
        updatedamount:'',
        updatedtime:'',
        updatedkey:'',
        updatedstatus:'',
        updatedtype:'',
        id:''

    }
   this.handlechange=this.handlechange.bind(this);
   this.handlesubmit=this.handlesubmit.bind(this);
   this.handlestatus=this.handlestatus.bind(this);
   
   this.navbtnclick=this.navbtnclick.bind(this);
   this.navdivclick=this.navdivclick.bind(this);
   this.handleupdate=this.handleupdate.bind(this);

   


}




handleupdate(e){
e.preventDefault()
this.setState({
    id:e.target.value

})
setTimeout(
    function() {
        this.props.updatestatus(this.state.id)
    }
    .bind(this),
    0
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

handlechange(e){
    this.setState({
        [e.target.id]:e.target.value
    })
}


handlestatus(){

};


handlesubmit(e){
    e.preventDefault();
    this.props.updateprice(this.state)
alert('Rates Updated');     

}



render(){

    const transaction=this.props.transaction;
    var list=new arraylist;

    console.log(transaction)
    return(     
<div>      
    <Side/>
   <form>
       <center>
        <input className="tllabel" type="text" id="buy" placeholder="Buy Price in PKR" onChange={this.handlechange}>
        </input>
        <br/><br/>
        <input className="tllabel" type="text" id="sell" placeholder="Sell Price in PKR" onChange={this.handlechange}>
        </input>
        <br/><br/>
        <button className="adbtn" onClick={this.handlesubmit}>Set price</button>
        <h1 className="adh1">Pending Transactions</h1>
        </center>
   </form>  
<div >
    
    { transaction && transaction.map((transaction) => {
       
  
       return (
            
            <div key={transaction.id}>
           
           <center>
            <div className="tlparent">
           
            <div className="tllabelcontainer">            
            <label className="tllabelheading">Amount</label>
<label className="tllabel">{transaction.amount} $USD </label><br/>
</div>


            <div className="tllabelcontainer">       
                   <label className="tllabelheading">Type</label>
          <label className="tllabel">{transaction.type}</label><br/>

</div>



            <div className="tllabelcontainer">          
                  <label className="tllabelheading">Status</label>
        <label className="tllabel">{transaction.status}</label><br/> 

</div>


            <div className="tllabelcontainer">          
                   <label className="tllabelheading">Date</label>
       <label className="tllabel">{transaction.time}</label><br/> 

</div>
<div className="tllabelcontainer">

<label className="tllabelheading">Amount in PKR</label>

            <label className="tllabel">{transaction.amntinpkr} PKR</label><br/> 
            </div>
            <div className="tllabelcontainer">

<label className="tllabelheading">Uniqe ID</label>

            <label className="tllabel">{transaction.key}</label><br/> 
            </div>
            <center>
            <button className="adbtn" onClick={this.handleupdate} id={transaction.id} value={transaction.id}>Update Status</button>
            </center>
            </div>

            </center>
           
           
           
           
           
            {/* <form>
        <input type="text" id="updatedamount"  onChange={this.handlechange}>
        </input>
        <br/><br/><br/>
        <input type="text" id="updatedstatus"  onChange={this.handlechange}>
        </input>
        <br/><br/>
        <input type="text" id="updatedkey"  onChange={this.handlechange}>
        </input>
        <br/><br/>
        <button onClick={this.handleupdate} id={transaction.id} value={transaction.id}>Update Status</button>
   </form> */}
           
            </div>
        )
      })}  
    </div>
      <div>
          
          </div>
          <Footer/>
</div>






);



}


}



  
  const mapdispatchtoprops =(dispatch)=>{
    return{
      updateprice:(price)=>dispatch(priceaction(price)),
      updatestatus:(updationid)=>dispatch(updatestatus(updationid))


    }
  }


  const mapstatetoprops=(state)=>{
    console.log(state);
    return{
        transaction:state.firestore.ordered.transactions,
    } 
    }

  
  export default compose(connect(mapstatetoprops,mapdispatchtoprops),firestoreConnect((props)=>{
    return [
        {collection: 'transactions',
        where: [
           ['status', '==', 'pending']
        ]
    }
    ]
}
    
   ) )(admin)

