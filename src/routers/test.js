import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './analysis.scss';
import Side from './side';
import commentBox from 'commentbox.io';





export default class test extends Component {
 
 
    componentDidMount() {

        this.removeCommentBox = commentBox('5764903193280512-proj');
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }

    render() {
    return (
        
      <div className="anaiframe">
          <Side/>
        <Iframe url="http://unitrade.zert.club/chart.html"
        width="100%"
        height="100%"
        id="myId"
        className="anaiframe1"
        display="initial"
        allow="fullscreen"
      frameBorder="0"
position="relative"/>
 <div className="commentbox" /> 
      </div>
    )
  }
}
