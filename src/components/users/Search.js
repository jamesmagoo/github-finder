import React, { useState } from 'react'
import PropTypes from 'prop-types'


// component converted to function-based with use of hook and context for state
const Search = (props) => {
  // destructuring
  const {searchUsers, clearUsers, showAlert, showClear} = props ;

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
      searchUsers(text);
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
        {showClear && <button className="btn btn-light btn-block" onClick = {clearUsers}>Clear Search</button> }
      </div>
    )
}

// prop types
Search.propTypes = {
  searchUsers : PropTypes.func.isRequired,
  clearUsers : PropTypes.func.isRequired,
  showAlert : PropTypes.func.isRequired,
  showClear : PropTypes.bool.isRequired,
}


export default Search
