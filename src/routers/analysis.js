import React from 'react';
import Side from './side';
import TradingViewWidget from 'react-tradingview-widget';




class analysis extends React.Component{



render(){
    return(


<div>
<Side />

<TradingViewWidget symbol="NASDAQ:AAPL" />
</div>


    );
}




}
export default analysis