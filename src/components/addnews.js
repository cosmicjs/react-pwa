import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './../CSS/addnews.css';
import newsData from './../services/news';
import { Link } from 'react-router-dom';

class addnews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            newsbody: '',   
            message: '',
            date: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this)  
    };

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleChange(value) {
        this.setState({ newsbody: value })
      }

      handleChange2(value) {
        this.setState({ description: value })
      }

      todayDate()
      {
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        // console.log(date)
        this.setState({date: date});

      }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ message: "Please wait..." });
        newsData.addnews(this.state.title, this.state.description, this.state.newsbody, this.state.date)
        .then((result)=>{
            console.log(result)
            this.setState({ message: "News published successfully" });
            this.timeout();
        })

    }

     //timeout function to null the message
     timeout()
     {
       setTimeout(
         function() {
             this.setState({message: ""});
         }
         .bind(this),
         5000
     );
     }


    render() {
        return (
            <div>
            <div><Link to="/dashboard"><button type="submit" className="btn btn-success" >
            Back
          </button></Link> </div>

            <div className="row">
             
        <div className="offset-md-3 col-md-6 form-back mb-5">
        <div><h3>Publish News: </h3></div>
    <br/><form onSubmit={this.onSubmit}>
    <div className="form-group">
              <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Enter title for news" id="news-title"/>
              </div>

              <div className="form-group ">
              <ReactQuill name="description" value={this.state.description} 
                  onChange={this.handleChange2} placeholder="Enter description (Min 200 words)"/>
                </div>

              <div className="form-group ">
              <ReactQuill name="newsbody" value={this.state.newsbody} className="ql-container" 
                  onChange={this.handleChange} placeholder="Enter body..."/>
                </div>

                <div className="form-group margin-up">
                <button type="submit" className="btn btn-success margin-up">Publish</button>
              </div>
    
    <p>{this.state.message}</p>
    </form>    
</div></div></div>
        );
    }

    componentDidMount() {
        this.todayDate();
    }

}

export default addnews;