import React from 'react'
import classes from './Logo.css'
import MyLogo from '../../assets/mainlogo.png'

const logo =()=>(
    <div className={classes.Logo} >
        <img  src={MyLogo} alt="Victor Tarus"/>
    </div>
)
export default logo;