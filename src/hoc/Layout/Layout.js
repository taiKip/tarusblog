import React, { useState} from 'react'
import Aux from '../Auxillary'
import ToolBar from '../../components/Navigation/ToolBar/ToolBar'
import Footer from '../../components/Footer/Footer'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


export default function Layout(props) {
    const [showSideDrawer,toggle]=useState(false)
   
    return (
        <Aux>
        <SideDrawer toggle={()=>toggle(!showSideDrawer)} show={showSideDrawer}/>
                <ToolBar toggle={()=>toggle(!showSideDrawer)}/>
               
                <main >
                    {props.children}
                </main>
             
               <Footer/>
            </Aux>
    )
}
