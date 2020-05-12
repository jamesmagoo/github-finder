import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'


const User = ({match}) => {
  // instantiate githib context
  const githubContext = useContext(GithubContext);
  // destructure context object
  const { getUser, user, loading } = githubContext ;
  // destructure props from object
  const {
    name,
    avatar_url,
    location,
    bio,
    login,
    html_url,
    company,
    blog,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user ;

  

  // useEffect hook instead of componentDidMount() method in class-based component
  useEffect(() => {
    getUser(match.params.login);
  }, [])
   
    // if(this.props.loading === true){
    //   return(<Spinner/>)
    // } else {
    // return (
    //   <div>
    //     <h1>{this.props.user.login}</h1>
    //   </div>
    // )
    // }


    // or this way ...
    if (loading) return <Spinner/>;

    return (
    
    <Fragment>
      <Link to="/" className="btn btn-dark">
        Back to Search
      </Link>
      Available for Hire : {'  '} 
      {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>}
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} alt="" className="round-img" style ={{width : '150px'}}/>
          {name === null ? <h1>{login}</h1> : <h1>{name}</h1>}
          <p>{location}</p>
        </div>
        <div>
          {bio && (<Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
            </Fragment>)}
          <a href={html_url} className="btn btn-dark my-1">Github Profile</a>
          <ul>
            <li>
          <strong>Username: </strong> {login}
            </li>
            <li>
              {company && <Fragment>
                <strong>Company: </strong> {company}
                </Fragment>}
            </li>
            <li>
              {blog && <Fragment>
              <strong>Blog: </strong> <a href={blog} className="text-dark">{blog}</a>
                </Fragment>}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
              <div className="badge badge-primary">Followers: {followers}</div>
              <div className="badge badge-success">Following: {following}</div>
              <div className="badge badge-light">Repos: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
      </div>
    </Fragment>
    )
}


export default User
