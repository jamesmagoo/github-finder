import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
  GET_REPOS,
  GET_USER,
  CLEAR_USERS,
  REMOVE_ALERT
} from '../types'

const GithubState = (props) => {
  
  // initialise state
  const initialState ={
    users : [],
    user : {},
    repos : [],
    loading : false
  }

  // initialise reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // ACTIONS/METHODS
  
  // search users props function , notice async position in arrow function
  const searchUsers = async (text) => {
    // set loading to true before request is made
    setLoading();

    // make request to api using axios
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // dispatch to reducer
    dispatch({
      type: SEARCH_USERS,
      payload : res.data.items 
    })
  }
  // get user
  // getUser method for single user details request from github api
  const getUser = async (username) => {
    // set loading to true before request is made
    setLoading();

    // make request to api using axios
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // dispatch search response from axios to reducer
    dispatch({
      type: GET_USER,
      payload: res.data
    })

  }

  // get repos
  // get individual users repos 
  const getRepos = async (username) => {
    // set loading to true before request is made
    setLoading();

    // make request to api using axios
    const res = await axios.get(`https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    

    // dispatch response to reducer 
    dispatch({
      type: GET_REPOS,
      payload : res.data
    })
  }

  // clear users
  const clearUsers = () => dispatch({type : CLEAR_USERS});

  // set loading
  const setLoading = () => dispatch({type : SET_LOADING })

  // return provider for access to state & actions
  return(<GithubContext.Provider 
    value ={{
    users : state.users,
    user : state.user,
    repos : state.repos,
    loading : state.loading,
    searchUsers,
    clearUsers,
    getUser,
    getRepos
  }}
  >
    {props.children}
  </GithubContext.Provider>)

}

export default GithubState ;