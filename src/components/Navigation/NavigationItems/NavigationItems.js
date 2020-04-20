import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems =(props)=>(
    <ul className={classes.NavigationItems}>
       <NavigationItem clicked={props.clicked} Link="/">
          HOME
       </NavigationItem>
<NavigationItem clicked={props.clicked}  Link="/port">
   PORTFOLIO 
</NavigationItem>
<NavigationItem  clicked={props.clicked} Link="/about">
   ABOUT
</NavigationItem>
<NavigationItem clicked={props.clicked}  Link="/resume">
  RESUME
</NavigationItem>
<NavigationItem clicked={props.clicked} Link="/blog">
  BLOG
</NavigationItem>
<NavigationItem clicked={props.clicked}  Link="/projects">
   PROJECTS 
</NavigationItem>
    </ul>
)
export default navigationItems;