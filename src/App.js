import React, { Component, Fragment } from 'react';
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


class App extends Component{

  // initialise state 
  state = {
    users : [],
    user : {},
    repos : [],
    loading : false,
    alert : null
  };

  // // use the lifescycle method with asnchronous js to set state from an axios request
  // async componentDidMount () {

  //   // set loading to true before request is made
  //   this.setState({loading : true})

  //   // make request to api using axios
  //   const res = await axios.get(`https://api.github.com/users?
  //   client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //   &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   // set state users to response from axios
  //   this.setState({users : res.data, loading : false});
  // }

  // search users props function , notice async position in arrow function
  searchUsers = async (text) => {
    // set loading to true before request is made
    this.setState({loading : true})

    // make request to api using axios
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // set state users to search response from axios
    this.setState({users : res.data.items, loading : false});
  }

  // getUser method for single user details request from github api
  getUser = async (username) => {
    // set loading to true before request is made
    this.setState({loading : true})

    // make request to api using axios
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // set state users to search response from axios
    this.setState({user : res.data , loading : false});

  }
  // get individual users repos 
  getRepos = async (username) => {
    // set loading to true before request is made
    this.setState({loading : true})

    // make request to api using axios
    const res = await axios.get(`https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    console.log('getrepos fired');
    console.log(res.data);
    // set state users to search response from axios
    this.setState({repos : res.data , loading : false});
  }

  // clear users from state
  clearUsers = () => this.setState({ users : [], loading : false})

  // set alert function
  setalert = (msg, type) => {

    this.setState({alert : {msg: msg, type : type}})

    setTimeout(()=>{this.setState({alert : null})}, 1500)

  }


  render(){
    return (
      <Router>
      <div>
        <Navbar title ='James App'/>
        <div className="container">
        <Switch>
          <Route exact path='/' render={props => {
            return (
            <Fragment>
              <Alert alert = {this.state.alert}/>
              <Search searchUsers = {this.searchUsers} 
              clearUsers = {this.clearUsers} 
              showClear = {this.state.users.length > 0 ? true : false}
              setalert = {this.setalert}/>
              <Users loading = {this.state.loading} users = {this.state.users}/>
            </Fragment>
            )}}/>

          <Route exact path='/about' component={About}/>

          <Route exact path='/user/:login' render={props => (
            <Fragment>
            <User {...props} user={this.state.user} getUser={this.getUser} loading = {this.state.loading}/>
            <Repos {...props} getRepos={this.getRepos} loading={this.state.loading} repos={this.state.repos}/>
            </Fragment>
          )}/>
            
  
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}


export default App;
