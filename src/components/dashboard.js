import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../CSS/dashboard.css';


class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.logout = this.logout.bind(this);
    };

    //logout function
    logout()
    {
        localStorage.removeItem('currentUser');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div>
    <ul id="ul_top_hypers">
    
        <li> <Link to="/"><button type="submit" className="btn btn-success" >
            Home
          </button></Link> 
          </li>
          <li> <Link to="/addnews"><button type="submit" className="btn btn-success" >
            Add News
          </button></Link> 
          </li>
      <li>  <button type="submit" className="btn btn-success" onClick={this.logout}>
          Logout
        </button></li>
    </ul>                
  </div>
  <div className="text-center"><h1>Hey Admin, Welcome to Dashboard!</h1></div>

            </div>
        );
    }

    componentDidMount() {
        if(!localStorage.getItem('currentUser'))
        {
            this.props.history.push('/');
        }
    }

}

export default dashboard;