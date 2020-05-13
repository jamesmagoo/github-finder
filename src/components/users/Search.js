import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'



// component converted to function-based with use of hook and context for state
const Search = (props) => {
  // instantiate github context
  const githubContext = useContext(GithubContext);

  // instantiate alert context
  const alertContext = useContext(AlertContext);
  
  // destructuring
  const {setAlert} = alertContext ;

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
      setAlert('Please enter something' , 'light')
    } else {
    // props function to pass back to app.js
      githubContext.searchUsers(text);
      setText('');
    }
  }

    return (
      <div>
        <form onSubmit = {onSubmit} setAlert={setAlert}>
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



export default Search
