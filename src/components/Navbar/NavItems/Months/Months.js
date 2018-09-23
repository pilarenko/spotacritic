import React from 'react'

import classes from './Months.css';

const months = () => {
  return (
    <div className={classes.Months}>
      <span>Październik</span>
      <div className={classes.MonthsContent}>
        <p>Październik</p>
        <p>Listopad</p>
        <p>Grudzień</p>
      </div>
    </div>
  )
}

export default months
