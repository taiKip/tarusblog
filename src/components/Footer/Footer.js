import React from 'react'
import classes from './Footer.css'
import {IconContext} from 'react-icons'
import { FaGithub ,FaInstagram,FaLinkedin} from "react-icons/fa";
const footer =()=>{
    const instagramHandler =()=>(
      window.open('https://www.instagram.com/t.a.r.u.s/','_blank')
    )
    const linkedInHandler =()=>(
        window.open('https://www.linkedin.com/in/victor-tarus-b05825116/','_blank')
      )
      const gitHubHandler =()=>(
        window.open('https://github.com/taiKip','_blank')
      )
    return (
    <div className={classes.Footer}>
        <div >
            <IconContext.Provider value={{color:'purple', size:'3rem'}}>
        <div className={classes.Icons}>
               <div >
                    <FaGithub  onClick={gitHubHandler}/>
              
               </div>
               <div>
               <FaInstagram  onClick={instagramHandler}/>
               </div>
               <div>
               <FaLinkedin onClick={linkedInHandler}/>
               </div>
             
           
           </div>
           </IconContext.Provider>
        </div>
            
     
        <p>@2020 -All Rights Reserved.Designed and Developed by Victor Tarus</p>
      
    </div>
)}
export default footer;