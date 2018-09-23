import React from 'react'

import classes from './GenrePicker.css';

const genrePicker = (props) => {
  const genres = ["Rap", "Rock", "Metal", "Pop", "Grunge"];
  const dataListElements = genres.map((genre) => {
    return <option value={genre} key={genre} className={classes.Option}/>
  });

  return (
      <div className={classes.GenrePicker} >
        <input id="genrePicker" type="text" list="genre" name="genrePicker" placeholder="Genre"/>
        <datalist id="genre">
          {dataListElements}
        </datalist>
      </div>
  )
}

export default genrePicker;
