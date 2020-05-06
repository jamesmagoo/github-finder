import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';


class App extends Component{

  // initialise state 
  state = {
    users : [],
    loading : false
  };

  // use the lifescycle method with asnchronous js to set state from an axios request
  async componentDidMount () {

    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    // set loading to true before request is made
    this.setState({loading : true})

    // make request to api using axios
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // set state users to response from axios
    this.setState({users : res.data, loading : false});
  }



  render(){
    return (
      <div>
        <Navbar title ='James App'/>
        <div className="container">
          <Users loading = {this.state.loading} users = {this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
