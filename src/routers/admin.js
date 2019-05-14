import React from 'react';
import Exchange from './exchange';
import { type } from 'os';
class admin extends React.Component{


constructor(props){
    super(props);
    this.state={
        buyp:122,
        sellp:142
    }
    this.updatebp=this.updatebp.bind(this);
    this.updatesp=this.updatesp.bind(this);
    this.setprice=this.setprice.bind(this);
    
}

setprice(e){
    e.preventDefault()
this.setState({
   buyp:document.getElementById('buyp').value,
   sellp:document.getElementById('sellp').value
})
console.log(this.state);
}


updatebp(e){
    
}


updatesp(e){
    
}



render(){


    console.log(this.state)
   
    
    return(


<div>
   <form>
        <input type="text" id="buyp"  onChange={this.updatebp}>
        </input>
        <br/><br/><br/>
        <input type="text" id="sellp"  onChange={this.updatesp}>
        </input>
        <br/><br/>
        <button onClick={this.setprice}>Set price</button>
   </form>
</div>

    );
}


}

export default admin;