import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import NavLeft from './components/navLeft';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div  className="nav-left">
          <NavLeft/>
        </div>
        <div className="main">
          <Header/>
          <div>container</div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
