import React, { Component } from 'react'
import Side from './side';
import Footer from './footer';
import Iframe from 'react-iframe';
import './trade.scss'


export class trade extends Component {
  render() {
    return (
      <div>
                  <Side/>

          <div className="tradeparent">
        <Iframe url="https://app.tradebytrade.com/exchange-one#"
        width="50%"
        height="50%"
        id="myId"
        className=""
        display="initial"
        allow="fullscreen"
      frameBorder="0"
position="relative"/>
 <Iframe url="https://en.bithumb.com/u2/tradeStatus/XMR"
        width="50%"
        height="50%"
        id="myId"
        className=""
        display="initial"
        allow="fullscreen"
      frameBorder="0"
position="relative"/>
 <Iframe url="http://vlogears.com"
        width="50%"
        height="50%"
        id="myId"
        className=""
        display="initial"
        allow="fullscreen"
      frameBorder="0"
position="relative"/>
 <Iframe url="https://www.catex.io/trading/ETH/BTC"
        width="50%"
        height="50%"
        id="myId"
        className=""
        display="initial"
        allow="fullscreen"
      frameBorder="0"
position="relative"/>
      </div>
      </div>
    )
  }
}

export default trade
