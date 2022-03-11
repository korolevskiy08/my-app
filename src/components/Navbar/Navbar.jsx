import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
const renderIsActive = navData => navData.isActive ? classes.active : classes.item

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className = {`${classes.item}`}>
        <NavLink to='/Profile' className={ renderIsActive }> Profile </NavLink>
      </div>
      <div className = {`${classes.item}`}>
        <NavLink to='/Dialogs' className={ renderIsActive }> Messages </NavLink>
      </div>
      <div className = {`${classes.item}`}>
      <NavLink to='/News' className={ renderIsActive }> News </NavLink>
      </div>
      <div className = {`${classes.item}`}>
      <NavLink to='/Music' className={ renderIsActive }> Music </NavLink>
      </div>
      <div className = {`${classes.item}`}>
      <NavLink to='/Setting' className={ renderIsActive }> Setting </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;