import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layout/Alert';


class App extends Component{

  

  // initialise state 
  state = {
    users : [],
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

  // clear users from state
  clearUsers = () => this.setState({ users : [], loading : false})

  // set alert function
  setAlert = (msg, type) => {
    console.log('hello');
    this.setState({alert : {msg: msg, type : type}})

    setTimeout(()=>{this.setState({alert : null})}, 1500)

  }


  render(){
    return (
      <div>
        <Navbar title ='James App'/>
        <div className="container">
        <Alert alert = {this.state.alert}/>
          <Search searchUsers = {this.searchUsers} 
          clearUsers = {this.clearUsers} 
          showClear = {this.state.users.length > 0 ? true : false}
          setAlert = {this.setAlert}/>
          <Users loading = {this.state.loading} users = {this.state.users}/>
        </div>
      </div>
    );
  }
}


export default App;
