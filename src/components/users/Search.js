import React, { Component } from 'react'

// this component is class-based because it has forms which need component level state
class Search extends Component {

  // initialise state 
  state = {
    text : ''
  }

  // onChange event function for search text input
  onChange = (e) => this.setState( { [e.target.name] : e.target.value} ) 


  // onSubmit event function for search text input
  onSubmit = (e) => {
    e.preventDefault();
    // props function to pass back to app.js
    this.props.searchUsers(this.state.text);
    this.setState({ text:''});
  }


  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit}>
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
      </div>
    )
  }
}

export default Search
