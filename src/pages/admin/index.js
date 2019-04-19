import React, { Component } from 'react';
import './index.less';
import Header from '../../components/header';
import Footer from '../../components/footer';
import NavLeft from '../../components/navLeft';

export default class Admin extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div className="nav-left">
          <NavLeft />
        </div>
        <div className="main">
          <Header routeConfig={this.props.routeConfig} />
          <div className="container">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
