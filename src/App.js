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
import axios from 'axios';
import Alert from './components/layout/Alert';
import Repos from './components/users/Repos';


const App = () => {
  // initialise state with hooks
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  // search users props function , notice async position in arrow function
  const searchUsers = async (text) => {
    // set loading to true before request is made
    setLoading(true);

    // make request to api using axios
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // set state users to search response from axios
    setUsers(res.data.items);
    // set loading to false once data is fetched from api
    setLoading(false);
  }

  // getUser method for single user details request from github api
  const getUser = async (username) => {
    // set loading to true before request is made
    setLoading(true);

    // make request to api using axios
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // set state user to search response from axios
    setUser(res.data);
    // set loading to false once data is fetched from api
    setLoading(false);

  }
  // get individual users repos 
  const getRepos = async (username) => {
    // set loading to true before request is made
    setLoading(true);

    // make request to api using axios
    const res = await axios.get(`https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    

    // set state users to search response from axios
    setRepos(res.data);
    // set loading to false once data is fetched from api
    setLoading(false);
  }

  // clear users from state
  const clearUsers = () => {
    // set users state to empty array
    setUsers([]);
    // loading to false
    setLoading(false);
  }

  // set alert function
  const showAlert = (msg, type) => {

    setAlert({msg: msg, type : type});

    setTimeout(()=>{setAlert(null)}, 1500)

  }

    return (
      <Router>
      <div>
        <Navbar title ='James App'/>
        <div className="container">
        <Switch>
          <Route exact path='/' render={props => {
            return (
            <Fragment>
              <Alert alert = {alert}/>
              <Search searchUsers = {searchUsers} 
              clearUsers = {clearUsers} 
              showClear = {users.length > 0 ? true : false}
              showAlert = {showAlert}/>
              <Users loading = {loading} users = {users}/>
            </Fragment>
            )}}/>

          <Route exact path='/about' component={About}/>

          <Route exact path='/user/:login' render={props => (
            <Fragment>
            <User {...props} user={user} getUser={getUser} loading = {loading}/>
            <Repos {...props} getRepos={getRepos} loading={loading} repos={repos}/>
            </Fragment>
          )}/>
            
  
        </Switch>
        </div>
      </div>
      </Router>
    );
}


export default App;
