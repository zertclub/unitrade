import React from 'react';
import Side from './side';
import TradingViewWidget from 'react-tradingview-widget';
import commentBox from 'commentbox.io';
import './analysis.scss';




class analysis extends React.Component{

    componentDidMount() {

        this.removeCommentBox = commentBox('5764903193280512-proj');
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }

render(){
    return(


<div>
<Side />

<TradingViewWidget symbol="NASDAQ:AAPL" />

<div className="commentbox" />

</div>


    );
}




}
export default analysis