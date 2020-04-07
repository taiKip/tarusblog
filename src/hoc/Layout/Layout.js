import React, { Component } from 'react'
import Aux from '../Auxillary'
import ToolBar from '../../components/ToolBar/ToolBar'
import Footer from '../../components/Footer/Footer'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
        showSideDrawer:false
    }
    toggleSideDrawerHandler=()=>{
       this.setState({showSideDrawer:!this.state.showSideDrawer})
    }

    render(){
        return(
            <Aux>
    <SideDrawer toggle={this.toggleSideDrawerHandler} show={this.state.showSideDrawer}/>
            <ToolBar toggle={this.toggleSideDrawerHandler}/>
            <main>
                {this.props.children}
            </main>
         
           <Footer/>
        </Aux>
        )
    }
}
export default Layout;