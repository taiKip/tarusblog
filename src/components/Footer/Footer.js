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
        <div className={classes.Icons}>
            <IconContext.Provider value={{color:'purple', size:'5rem'}}>
        <ul>
               <li>
                    <FaGithub onClick={gitHubHandler}/>
              
               </li>
               <li>
               <FaInstagram onClick={instagramHandler}/>
               </li>
               <li>
               <FaLinkedin onClick={linkedInHandler}/>
               </li>
             
           
           </ul>
           </IconContext.Provider>
        </div>
            
     
        <p>@2019 -All Rights Reserved.Designed and Developed by VictorTarus</p>
        <button>BACK TO TOP</button>
    </div>
)}
export default footer;