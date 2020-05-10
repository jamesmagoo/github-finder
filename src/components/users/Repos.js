import React, {Fragment, useEffect} from 'react';
import RepoItem from './RepoItem'
import PropTypes from 'prop-types'


const Repos = (props) => {
  // destructure props
  const {match, repos, getRepos} = props ;

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

Repos.propTypes ={
  getRepos : PropTypes.func.isRequired,
  repos : PropTypes.array.isRequired,
}

export default Repos
