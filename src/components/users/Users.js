import React from 'react'
import UserItem from './UserItem'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'


const Users = (props) => {
   const {loading , users} = props ;

   if(loading === true){
     // return loading spinner
     return <Spinner/>

   } else {
    // return users
    return (
      <div style ={userStyle}>
        {users.map(user =>(
        <UserItem user = {user} key={user.id}/>
        ))}
      </div>
    )
   }
    
}

Users.propTypes = {
  users : PropTypes.array.isRequired,
  loading : PropTypes.bool.isRequired,
}

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap : '1rem'
}


export default Users
