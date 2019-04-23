import React, { Component } from 'react';
import './index.less';
import Header from '../../components/header';
import Footer from '../../components/footer';
import NavLeft from '../../components/navLeft';
import PropTypes from 'prop-types';

export default class Admin extends Component {
  static propTypes = {
    routeConfig: PropTypes.shape({
      title: PropTypes.string.isRequired,
      basePath: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
    children: PropTypes.element.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="nav-left">
          <NavLeft />
        </div>
        <div className="main">
          <Header routeConfig={this.props.routeConfig} history={this.props.history} />
          <div className="container">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
