import React from 'react'

import {FaWrench,FaHammer} from 'react-icons/fa'
import classes from './Projects.css'
const projects=()=>(
    <div className={classes.Projects}>
        <div>
        <FaHammer color='black' size='3rem'/>
            <FaWrench color='black' size="3rem"/>
          
        </div>
    </div>
)

export default projects;