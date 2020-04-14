import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import About from './components/About/About'
import classes from  './App.css';
import Layout from './hoc/Layout/Layout'
import MainPage from './containers/MainPage/MainPage'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
   <Layout>
<Switch>
<Route path="/" exact component ={MainPage}/>
     <Route path="/about" component ={About}/>
</Switch>
  
    
   </Layout>
      </div>
    );
  }
}

export default App;
