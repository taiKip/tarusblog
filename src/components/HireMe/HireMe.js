import React from 'react'
import classes from './HireMe.css'
const hireMe =(props)=>(
    <div className={classes.HireMe} >
        <h1>ANDROID AND FRONTEND WEB DEVELOPER</h1>
        <button onClick={props.clicked}>HIRE ME TODAY</button>
    </div>
)

export default hireMe;