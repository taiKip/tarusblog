import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Aux from '../../../hoc/Auxillary'
import Backdrop from '../../../UI/Backdrop/Backdrop'

const sideDrawer =(props)=>{
    let sideDrawerToggle=[classes.SideDrawer, classes.Close]
    if(props.show){
        sideDrawerToggle=[classes.SideDrawer, classes.Open]
    }
    return(

        <Aux>
            <Backdrop hide={props.toggle}show={props.show}/>
<div className={sideDrawerToggle.join(' ')}>
 
    <div className={classes.Logo}>
    <Logo />
    </div>
  
    <nav>
        <NavigationItems clicked={props.toggle}/>
    </nav>
</div>
        </Aux>


    );
}
export default sideDrawer;
