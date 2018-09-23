import React from 'react'

import Login from './Login/Login';
import Months from './Months/Months';

import classes from './NavItems.css';

const navItems = () => {
  return (
    <div className={classes.NavItems}>
      <h1>Spotacritic</h1>
      <ul>
        <li><a><Months /></a></li>
        <li><a><Login /></a></li>
      </ul>
    </div>
  )
}

export default navItems
