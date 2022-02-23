import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className = {`${classes.item}`}>
        <NavLink to='/Profile' className={navData => navData.isActive ? classes.active : classes.item}> Profile </NavLink>
      </div>
      <div className = {`${classes.item}`}>
        <NavLink to='/Dialogs' className={navData => navData.isActive ? classes.active : classes.item}> Messages </NavLink>
      </div>
      <div className = {`${classes.item}`}>
        <a className={navData => navData.isActive ? classes.active : classes.item}> News </a>
      </div>
      <div className = {`${classes.item}`}>
        <a className={navData => navData.isActive ? classes.active : classes.item}> Music </a>
      </div>
      <div className = {`${classes.item}`}>
        <a className={navData => navData.isActive ? classes.active : classes.item}>Setting</a>
      </div>
    </nav>
  )
}

export default Navbar;