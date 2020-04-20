import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/LinkedPages/About/About'
import classes from  './App.css';
import Layout from './hoc/Layout/Layout'
import MainPage from './containers/MainPage/MainPage'
import PortFolio from './components/LinkedPages/PortFolio/PortFolio'
import Resume from './components/LinkedPages/Resume/Resume'
import Projects from './components/LinkedPages/Projects/Projects'
class App extends Component {
  render() {
    return (
      <Router>
      <div className={classes.App}>
        
        <Layout>
<Switch>
<Route path="/"  exact component ={MainPage}/>
<Route path="/port"  component ={PortFolio}/>
<Route path="/about"component ={About}/>
<Route path="/resume"  component ={Resume}/>
<Route path="/projects"  component ={Projects}/>
</Switch>

    
   </Layout>
       
  
      </div>
      </Router>
    );
  }
}

export default App;
