import React, { Component } from 'react'
import Iframe from 'react-iframe'


export class ticker extends Component {
  render() {
    return (
      <div>
        <Iframe url="http://unitrade.zert.club/Testing%20only.html"
        width="100%"
        height="600px"
        id="myId"
        className="myClassname"
        display="initial"
        allow="fullscreen"
      frameBorder="0"
position="relative"/>
      </div>
    )
  }
}

export default ticker
