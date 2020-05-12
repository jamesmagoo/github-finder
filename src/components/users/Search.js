import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'



// component converted to function-based with use of hook and context for state
const Search = (props) => {
  // instantiate github context
  const githubContext = useContext(GithubContext);
  
  // destructuring
  const {showAlert} = props ;

  // initialise state using hook useState
  const [text, setText] = useState('');

  // onChange event function for search text input
  const onChange = (e) => setText(e.target.value) 

  // onSubmit event function for search text input
  const onSubmit = (e) => {
    e.preventDefault();
    // validate input & set alert if inadequate
    if(text === ''){
      // set alert
      showAlert('Please enter something' , 'light')
    } else {
    // props function to pass back to app.js
      githubContext.searchUsers(text);
      setText('');
    }
  }

    return (
      <div>
        <form onSubmit = {onSubmit} showAlert={showAlert}>
          <input type="text" 
          name="text" 
          placeholder="Search Github User..."
          value = {text}
          onChange = {onChange}
          />
          <input type="submit" 
          name="search" 
          value="Search" 
          placeholder="Search Github Users..."
          className ="btn btn-dark btn-block"
          />
        </form>
        {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick = {githubContext.clearUsers}>Clear Search</button> }
      </div>
    )
}

// prop types
Search.propTypes = {
  showAlert : PropTypes.func.isRequired,
}


export default Search
