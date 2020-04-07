import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems =()=>(
    <ul className={classes.NavigationItems}>
<NavigationItem>
   PORTFOLIO 
</NavigationItem>
<NavigationItem>
   ABOUT
</NavigationItem>
<NavigationItem>
  RESUME
</NavigationItem>
<NavigationItem>
  BLOG
</NavigationItem>
<NavigationItem>
   PROJECTS 
</NavigationItem>
    </ul>
)
export default navigationItems;