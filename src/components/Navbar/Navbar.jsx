import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className = {`${classes.item} ${classes.active}`}>
        <Link to='/Profile'> Profile </Link>
      </div>
      <div className = {`${classes.item} ${classes.active}`}>
        <Link to='/Dialogs'> Messages </Link>
      </div>
      <div className = {`${classes.item} ${classes.active}`}>
        <a> News </a>
      </div>
      <div className = {`${classes.item} ${classes.active}`}>
        <a> Music </a>
      </div>
      <div className = {`${classes.item} ${classes.active}`}>
        <a>Setting</a>
      </div>
    </nav>
  )
}

export default Navbar;