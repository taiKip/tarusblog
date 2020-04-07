import React from 'react'
import classes from './MainPage.css'
import HireMe from '../../components/HireMe/HireMe'

import Profile from '../../assets/profile.jpg'
const mainPage=()=>(
   <div>
<div className={classes.MainPage}>
       <HireMe/>
    </div>
    <div className={classes.MidSection}>
        <div className={classes.gridItem}>
        <img src={Profile} alt="victor tarus"/>
        </div>
<div className={classes.gridItem}>
    <h2>Teach Me Something New And I will Forever be Grateful</h2>
</div>
    </div>
   </div>
 
  
   
   
)

export default mainPage;