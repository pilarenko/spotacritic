import React from 'react';

import Card from './Card/Card';

import classes from './Cards.css';

const cards = (props) => {
  const cardsList = props.albums.map((album) => {
    return <Card header={album.header} subHeader={album.subHeader} content={album.content} key={album.header}/>
  });

  return (
    <div className={classes.Cards}>
      {cardsList}
    </div>
  )
}

export default cards
