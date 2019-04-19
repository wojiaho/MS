import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouterGuard from './routerGuard';
import App from './App';
import routerConfig from './json/routerConfig';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

export default class MSRouter extends Component {
  render() {
    return (
      <Router>
        <LocaleProvider  locale={zh_CN}>
          <App>
            <Switch>
              <RouterGuard config={routerConfig}/>
            </Switch>
          </App>
        </LocaleProvider>
      </Router>
    );
  }
}