import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import Repos from './components/users/Repos';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


const App = () => {
  

    return (
      <GithubState>
        <AlertState>
      <Router>
      <div>
        <Navbar title ='James App'/>
        <div className="container">
        <Switch>
          <Route exact path='/' render={props => {
            return (
            <Fragment>
              <Alert/>
              <Search/>
              <Users />
            </Fragment>
            )}}/>

          <Route exact path='/about' component={About}/>

          <Route exact path='/user/:login' render={props => (
            <Fragment>
            <User {...props}/>
            <Repos {...props} />
            </Fragment>
          )}/>
            
  
        </Switch>
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}


export default App;
