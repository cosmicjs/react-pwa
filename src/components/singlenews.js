import React, { Component } from 'react';
import newsData from './../services/news';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import { Form} from 'reactstrap';

class singlenews extends Component {
    // singleNewsData = [];
    constructor(props) {
        super(props);
        this.state = {
            newsId: '',
            allNews: '',
            singleNewsData: [],
            name: '',
            comment: '',
            message: '',
            allComments: [],
            
        };
        // this.singleNews = this.singleNews.bind(this);
    };

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);

    }

    // getting single news
    singleNews()
    {
        newsData.getNews()
        .then((result)=>{
            console.log(result.data.objects);
            var allData = result.data.objects;
            // this.setState({allNews: result.data.objects})

            var singleNewsFilteredData = allData.filter((
                news) => news._id === this.state.newsId);
                this.setState({singleNewsData: singleNewsFilteredData[0]})
                console.log(this.state.singleNewsData.metadata.date)              
              })        
    }

    // fetching all comments
    allComments()
    {
        newsData.allComments()
        .then((result)=>
        {
            console.log(result.data.objects);
            var allData = result.data.objects;
            if(allData){
            // this.setState({allComments:result.data.objects})

               
                    var singleNewsFilteredData = allData.filter((
                        comment) => comment.content === this.state.newsId);
                        this.setState({allComments: singleNewsFilteredData})
                        // console.log(singleNewsFilteredData)     
                     
                }     
                      })  
                    
                }




    // submitting comment
    submitComment = (e) =>
    {
        e.preventDefault();
        this.setState({message: "Posting comment..."})
        newsData.submitComment(this.state.name, this.state.comment, this.state.newsId)
        .then((result)=>{
            console.log(result);
            this.setState({message: ""});
            this.allComments();
        })
    }

    

    render() {
        return (
            <div>             
       <div><Link to="/"><button type="submit" className="btn btn-success" >
            Back
          </button></Link> </div>
         <h1 className="blog-title">
         {this.state.singleNewsData.title}      
      </h1> 

      <div>
      {ReactHtmlParser(this.state.singleNewsData.content)}                  
      </div>

      <hr/>

{/* comments */}
<div>
    <h4>Comments:</h4>
{this.state.allComments.map(newsData =>
<div>
<p><b>{newsData.title}</b></p>
<p>{newsData.metadata.comment}</p>
<hr/>
</div>
)}
</div>

      {/* comment box */}
      <div className="margin-top">
   <Form onSubmit={this.submitComment}>
   
   <label>Name</label>
   <div className="form-group">
              <input type="textarea" className="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Enter name" id="commentName"/>
              </div>

              <label>Comment</label>
              <div className="form-group">
              <input type="textarea" className="form-control" name="comment" value={this.state.comment} onChange={this.onChange} placeholder="Enter comment" id="commentBody" />
              </div>
              <input type="submit" className="" value="Comment" id="comment-button" />
            <span>{this.state.message}</span>

       </Form> 
       </div>
              
    
            </div>
        );
    }

    componentDidMount() {

        console.log(this.props.match.params.id);
        this.setState({newsId: this.props.match.params.id});
        this.singleNews();
        this.allComments();
    }

}

export default singlenews;