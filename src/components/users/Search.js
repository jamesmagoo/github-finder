import React, { Component } from 'react'
import PropTypes from 'prop-types'


// this component is class-based because it has forms which need component level state
class Search extends Component {

  // initialise input state 
  state = {
    text : ''
  }

  // onChange event function for search text input
  onChange = (e) => this.setState( { [e.target.name] : e.target.value} ) 


  // onSubmit event function for search text input
  onSubmit = (e) => {
    e.preventDefault();
    // validate input & set alert if inadequate
    if(this.state.text === ''){
      // set alert
      this.props.setalert('Please enter something' , 'light')
    } else {
    // props function to pass back to app.js
      this.props.searchUsers(this.state.text);
      this.setState({ text:''});
    }
  }


  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit} setalert={this.setalert}>
          <input type="text" 
          name="text" 
          placeholder="Search Github User..."
          value = {this.state.text}
          onChange = {this.onChange}
          />
          <input type="submit" 
          name="search" 
          value="Search" 
          placeholder="Search Github Users..."
          className ="btn btn-dark btn-block"
          />
        </form>
        {this.props.showClear && <button className="btn btn-light btn-block" onClick = {this.props.clearUsers}>Clear Search</button> }
      </div>
    )
  }
}

// prop types
Search.propTypes = {
  searchUsers : PropTypes.func.isRequired,
  clearUsers : PropTypes.func.isRequired,
  setalert : PropTypes.func.isRequired,
  showClear : PropTypes.bool.isRequired,
}


export default Search
