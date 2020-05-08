import React, { Component } from 'react'

class User extends Component {

  componentDidMount(){
    this.props.getUser(this.props.match.params.login)
  }

  render() {
    return (
      <div>
        <h1>{this.props.user.login}</h1>
      </div>
    )
  }
}

export default User
