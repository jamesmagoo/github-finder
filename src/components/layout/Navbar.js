import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  // destructuring 
  // const  title = props.title;
  // const icon = props.icon ;

  // neater destructuring, can also destructure in the function argument e.g const Navbar = ({icon,title}) => {...}
  const {icon, title} = props ;

    return (
      <nav className = 'navbar bg-primary'>
        <h1>
        <i className={icon}/> {title}
        </h1>
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
