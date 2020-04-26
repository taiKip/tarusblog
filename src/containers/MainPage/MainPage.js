import React, { useState} from 'react'
import classes from './MainPage.css'
import HireMe from '../../components/HireMe/HireMe'

import Profile from '../../assets/profile.jpg'
import Modal from '../../UI/Modal/Modal'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Contact from '../../components/Contact/Contact'


function MainPage() {
    const[showModal,toggleModal] = useState(false)
    const toggle=()=>{
        toggleModal(!showModal)
    }
    return (
        <div>
            <div className={classes.MainPage}>
                <HireMe clicked={()=>toggle()}/>
                <Backdrop show={showModal} hide={()=>toggle()}/>
                <Modal show={showModal}>
                    <Contact show={showModal}/>
                </Modal>
             </div>
             <div className={classes.MidSection}>
                 <div >
                 <img src={Profile} alt="victor tarus"/>
                 </div>
         <div >
             <h2>I can't promise that I am the best out there but I  give a hundred
                 percent to whatever task I agree to
             </h2>
         </div>
             </div>  
        </div>
    )
}



export default MainPage;