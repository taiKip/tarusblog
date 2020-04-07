import React from 'react'
import classes from './Footer.css'
import { FaGithub ,FaInstagram,FaLinkedin} from "react-icons/fa";
const footer =()=>(
    <div className={classes.Footer}>
        <div className={classes.Icons}>
        <ul>
               <li>
               <FaGithub color='purple' size='5rem'/>
               </li>
               <li>
               <FaInstagram color='purple' size='5rem'/>
               </li>
               <li>
               <FaLinkedin color='purple' size='5rem'/>
               </li>
             
           
           </ul>
        </div>
            
     
        <p>@2019 -All Rights Reserved.Designed and Developed by VictorTarus</p>
        <button>BACK TO TOP</button>
    </div>
)
export default footer;