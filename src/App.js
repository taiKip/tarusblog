import React, { Component } from 'react';

import classes from  './App.css';
import Layout from './hoc/Layout/Layout'
import MainPage from './containers/MainPage/MainPage'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
   <Layout>
    <MainPage/>
    
   </Layout>
      </div>
    );
  }
}

export default App;
