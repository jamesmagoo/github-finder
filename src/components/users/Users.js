import React, { useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'



const Users = () => {
  // initialise github context
  const githubContext = useContext(GithubContext);

  // destrucutre context values
  const { loading, users} = githubContext ;

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


const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap : '1rem'
}


export default Users
