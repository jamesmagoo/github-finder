import React, {Component, Fragment} from 'react';
import RepoItem from './RepoItem'
import PropTypes from 'prop-types'


class Repos extends Component{
  static propTypes ={
    getRepos : PropTypes.func.isRequired,
    repos : PropTypes.array.isRequired,
  }
  componentDidMount(){
    this.props.getRepos(this.props.match.params.login)
  }

  render (){
    const {repos} = this.props;

  return (
    <Fragment>
      <h1>Repositories</h1>
      {repos.map(repo =>(
        <RepoItem repo ={repo} key={repo.id}/>
        ))}
    </Fragment>
  )
  }
}

export default Repos
