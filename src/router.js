import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouterGuard from './routerGuard';
import App from './App';
import routerConfig from './json/routerConfig';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

export default class MSRouter extends Component {
  render() {
    return (
      <Router>
        <LocaleProvider locale={zh_CN}>
          <App>
            <Switch>
              <Route render={
                ({ location, history }) => (<RouterGuard
                  location={location}
                  config={routerConfig}
                  history={history}
                />)}
              />
            </Switch>
          </App>
        </LocaleProvider>
      </Router>
    );
  }
}
