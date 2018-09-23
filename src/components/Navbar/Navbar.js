import React from 'react'

import NavItems from './NavItems/NavItems';

import classes from './Navbar.css';

const navbar = () => {
  return (
    <div className={classes.Navbar}>
      <NavItems />
    </div>
  )
}

export default navbar
