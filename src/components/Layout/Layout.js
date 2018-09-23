import React from 'react';

import Cards from './Cards/Cards';
import GenrePicker from './GenrePicker/GenrePicker';

import classes from './Layout.css';

const layout = (props) => {
  const albumList = props.albums;

  return (
    <div className={classes.Layout}>
      <GenrePicker />
      <Cards albums={albumList}/>
    </div>
  )
};

export default layout;