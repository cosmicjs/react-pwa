import React, { Component } from 'react';
import newsData from './../services/news';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

class news extends Component {
    data;
    constructor(props) {
        super(props);
        this.state = {
            newsArray: [],
        };
        this.loginCall = this.loginCall.bind(this);
        this.dashboardCall = this.dashboardCall.bind(this);
    };

    getNews()
    {
        if(navigator.onLine)
        {
        newsData.getNews()
        .then((result)=>{
            // console.log(result.data.objects);
            if(result.data.objects)
            {
            this.setState({newsArray: result.data.objects})
            localStorage.setItem('news', JSON.stringify(result.data.objects))
            // console.log(this.state.newsArray)
            }
            
    })
}
else
{
    this.setState({newsArray: JSON.parse(localStorage.getItem('news'))})
}
}

loginCall()
{
    this.props.history.push('/login');
}

dashboardCall()
{
    this.props.history.push('/dashboard');
}

    render() {
        return (
            <div className="blog">

<div>{this.data ? (
  <button className="btn btn-success button-right" onClick={this.dashboardCall}>Dashboard</button>
  ) : (
  <button className="btn btn-success button-right" onClick={this.loginCall}>Admin Login</button>
  )}</div> 


                {this.state.newsArray.map(newsData =>
    <ul>    
         <h1 className="blog-title" key={newsData.title}>
         {newsData.title}      
      </h1>     
      <div>    
      <p key={newsData.metadata.date}>Published: {newsData.metadata.date} </p>
      <div key={newsData.metadata.description}>    
      {/* {blogData.description}     */}
      {ReactHtmlParser(newsData.metadata.description)}                  
      </div>
      </div>
   <div> <Link to={`/singlenews/${newsData._id}`} className="btn btn-success" key={newsData._id}>Complete News..</Link></div>
   <hr/>
    </ul>
    )}
            </div>
        );
    }

    componentDidMount() {
        this.data = localStorage.getItem('currentUser');
        this.getNews();
       
    }

}

export default news;