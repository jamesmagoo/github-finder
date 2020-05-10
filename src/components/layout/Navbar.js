import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  // destructuring 
  // const  title = props.title;
  // const icon = props.icon ;

  // neater destructuring, can also destructure in the function argument e.g const Navbar = ({icon,title}) => {...}
  const {icon, title} = props ;

    return (
      <nav className = 'navbar bg-primary'>
        <h1>
        <Link to='/'><i className={icon}/> {title}</Link>
        </h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    )
}

Navbar.defaultProps = {
  title : 'GithubFinder',
  icon : 'fab fa-github-square'
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired ,
  icon : PropTypes.string.isRequired
}

export default Navbar ;
