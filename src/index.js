import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import news from './components/news';
import login from './components/login';
import 'bootstrap/dist/css/bootstrap.css';
import dashboard from './components/dashboard';
import addnews from './components/addnews';
import singlenews from './components/singlenews';


ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

ReactDOM.render(
    <Router>
          <div className="container">     
          
         <div>
         <div className="jumbotron center">React PWA in Cosmic JS</div>
         
         </div>
         
              <Route exact path='/' component={news} />
              <Route path='/dashboard' component={dashboard} />  
              <Route path='/login' component={login} />
              <Route path='/addnews' component={addnews} /> 
              <Route path='/singlenews/:id' component={singlenews} />            
              <div>
                  <p className="footer-center">Proudly Powered by <a href="https://cosmicjs.com/">Cosmic JS</a></p>
              </div>
  
          </div>
      </Router>,
      document.getElementById('root')
    );


serviceWorker.register();
