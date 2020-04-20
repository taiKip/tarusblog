import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import classes from './ToolBar.css'
import Toggle from '../ToggleButton/ToggleButton'
const toolBar =(props)=>(
    <header className={classes.ToolBar}>
     <Toggle clicked={props.toggle}/>
       <div className={classes.Logo}>
       <Logo/>
       </div>
        <nav className={classes.desktopOnly}>
        <NavigationItems/>
        </nav>

    </header>
)

export default toolBar;