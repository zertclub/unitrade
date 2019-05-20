import React, { Component } from 'react'
import axios from 'axios';
import Axios from 'axios';

export class news extends Component {


constructor(props){
    super(props);
    this.state={
        newsapi:''
    }
}

  render() {


Axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bb0bf9d54b704b1faad0d12aaa4d1735').then(res=>{
    this.setState({
        newsapi:res.data.articles
    })
        
   
})
const newsdata=this.state.newsapi;

    return (
      <div>
          { newsdata && newsdata.map((newsdata) => {
       
       return (
            
            <div key={newsdata.id}>
          <img src={newsdata.urlToImage} height="100px" width="100px"></img>
          <label>{newsdata.title}</label><br/><br/>
          <label>{newsdata.content}</label><br/><br/>
          <label>{newsdata.publishedAt}</label><br/><br/>
          <label>{newsdata.url}</label><br/><br/>
           
            </div>
        )
      })}  
      </div>
    )
  }
}



export default news
