import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterGuard from './routerGuard';
import App from './App';
import routerConfig from './json/routerConfig'
import Admin from './pages/admin';

export default class MSRouter extends Component {
  render() {

    return (
      <Router>
        <App>
          <Switch>
            <RouterGuard config={routerConfig}/>
          </Switch>
        </App>
      </Router>
    )
  }
}