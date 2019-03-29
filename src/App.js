import React, { Component } from 'react';
import './App.less';
import Header from './components/header';
import Footer from './components/footer';
import NavLeft from './components/navLeft';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div  className="nav-left">
          <NavLeft/>
        </div>
        <div className="main">
          <Header/>
          <div className="container">
            <Home/>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
