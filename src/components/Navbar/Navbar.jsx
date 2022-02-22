import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className = {`${classes.item} ${classes.active}`}>
        <a href='/Profile'> Profile </a>
      </div>
      <div className = {`${classes.item} ${classes.active}`}>
        <a href='/Dialogs'> Messages </a>
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