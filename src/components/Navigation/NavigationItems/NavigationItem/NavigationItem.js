import React from 'react'

import classes from './NavigationItem.css'
import {NavLink as Link} from 'react-router-dom'
const navigationItem=(props)=>{
   
    return(
<li className={classes.NavigationItem}>
      <Link onClick={props.clicked} activeStyle={{color:'purple'}} to={props.Link}>{props.children}</Link> 
    </li>
    )
}
    


export default navigationItem;