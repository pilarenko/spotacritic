import React from 'react'

import classes from './Card.css';

const card = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Header}>
        {props.header}
      </div>
      <div className={classes.SubHeader}>
        {props.subHeader}
      </div>
      <div className={classes.Content}>
        <p>{props.content}</p>
      </div>
      <button>Inject</button>
    </div>
  )
}

export default card
