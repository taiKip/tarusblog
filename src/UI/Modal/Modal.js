import React from 'react'
import classes from './Modal.css'
const modal=( props)=>
{
    return(
        <div className={props.show ? classes.Modal : classes.NoDisplay} >
        {props.children}
            </div>
            )
        
}
    


export default modal;