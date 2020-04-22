import React, { Component } from 'react'
import classes from './MainPage.css'
import HireMe from '../../components/HireMe/HireMe'

import Profile from '../../assets/profile.jpg'
import Modal from '../../UI/Modal/Modal'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Contact from '../../components/Contact/Contact'
class MainPage extends Component{
    state={
        showModal:false
    }
    toggleModal=()=>{
        this.setState({showModal:!this.state.showModal})
    }
    render(){
        return(
            <div>
         <div className={classes.MainPage}>
                <HireMe clicked={this.toggleModal}/>
                <Backdrop show={this.state.showModal} hide={this.toggleModal}/>
                <Modal show={this.state.showModal}>
                    <Contact show={this.state.showModal}/>
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
}


export default MainPage;