import React, { Component } from 'react'
import './exchange.scss';
import './login.scss';
import Footer from './footer';
import Side from './side';
import {firestoreConnect} from 'react-redux-firebase';
import {NavLink} from 'react-router-dom';


import { connect} from 'react-redux';
import {compose} from 'redux';



export class exchange extends Component {
 
 
 
    constructor(props){
        super(props);
        this.state={
            buyp:'000',
            sellp:'000',
            ref:false
        }
       
       
        this.handlechange=this.handlechange.bind(this);


        setInterval(() => {
            this.setState({ 
            buyp:this.props.price.price.buy,
            sellp:this.props.price.price.sell    
            });
           

          }, 1000);
    }




    handlechange(){
    
    }
    

    
    render() {
        
        
    return (
      <div className="exeparent">
          <Side/>
       <center>
        <ul className="">
            <li className="exeimageli">
        <img src="./payoneer.png" height="150px" width="400px"></img>
            </li>
        </ul>
        </center>
        <div className="exebs">
        <NavLink to="./createtransaction">
            <li className="exeli">
           
           <div className="exebuy">
               <h1 className="exeheading">Buy</h1>
           </div>
           </li>
           </NavLink>
                <li className="exelisell">
                    <NavLink to='./createtransaction' className="exeheading">
                <div className="exesell">
            <h1 className="exeheading">Sell</h1>

                </div>
                </NavLink>
                </li>
              
       
            
        </div>
        <div className="exebs">
   
   <li className="exelip">
       <form>
       <input className="emailinput" name="buyp"  value={this.state.buyp+" "+"PKR/$"} type="text"  onChange={this.handlechange}  ></input>
      </form>
       </li>
       <li className="exelisellp">
       <form>
       <input className="emailinput" name="sellp" value={this.state.sellp+" "+"PKR/$"} type="text" onChange={this.handlechange}   ></input>
       </form>
       </li>
       

   
</div>
<Footer/>
      </div>
    )
  }
}

const mapstatetoprops=(state)=>{
    console.log(state);
    return{
        price:state.firestore.data.price
    } 
    }

export default compose(connect(mapstatetoprops),firestoreConnect((props)=>{
    return [
        {collection: 'price'}
    ]
}
    
   ) )(exchange)