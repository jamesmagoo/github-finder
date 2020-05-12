import React, {Fragment, useEffect, useContext} from 'react';
import RepoItem from './RepoItem'
import GithubContext from '../../context/github/githubContext'


const Repos = (props) => {
  // instantiate github context
  const githubContext = useContext(GithubContext);
  // destructure
  const {repos, getRepos} = githubContext ;
  // destructure props
  const {match} = props ;

  // useEffect hook instead of componentDidMount() used in the class-based component
  useEffect(() => {
    getRepos(match.params.login)
    //eslint-disable-next-line
  }, [])


  return (
    <Fragment>
      <h1>Repositories</h1>
      {repos.map(repo =>(
        <RepoItem repo ={repo} key={repo.id}/>
        ))}
    </Fragment>
  )
}


export default Repos
