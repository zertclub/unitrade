import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './trade.scss';
import Side from './side';
export class crossrates extends Component {
  render() {
    return (
      <div>
          <Side/>
          <div className="tradeparent">
        <Iframe url="http://unitrade.zert.club/heatmap.html"
        width="100%"
        height="100%"
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
export default crossrates
