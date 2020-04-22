import React from 'react'
import {IconContext} from 'react-icons'
import {MdContactMail,MdContactPhone} from 'react-icons/md'
import classes from './Contact.css'
const contact =(props)=>(

   <address className={props.show ? classes.Contact : classes.ContactGone}>
     <IconContext.Provider  value={{ size:'3rem',color:'#8979F2'}}>
      <div className={classes.Cdetail}>
           <MdContactMail/>
           <a href="mailto:victortarus6@gmail.com">victortarus6@gmail.com</a>
       </div>
       <div className={classes.Cdetail}>
        
           <MdContactPhone/>
<a href="tel:+358465814224">Call(358)465814224</a>
       </div>
       </IconContext.Provider>
   </address>
)

export default contact;