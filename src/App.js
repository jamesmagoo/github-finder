import React, {Fragment, useState } from 'react';
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


const App = () => {
  // initialise state with hooks
  const [alert, setAlert] = useState(null);


  // set alert function
  const showAlert = (msg, type) => {

    setAlert({msg: msg, type : type});

    setTimeout(()=>{setAlert(null)}, 1500)

  }

    return (
      <GithubState>
      <Router>
      <div>
        <Navbar title ='James App'/>
        <div className="container">
        <Switch>
          <Route exact path='/' render={props => {
            return (
            <Fragment>
              <Alert alert = {alert}/>
              <Search  
              showAlert = {showAlert}/>
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
      </GithubState>
    );
}


export default App;
