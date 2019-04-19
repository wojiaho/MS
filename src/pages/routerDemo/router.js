import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Main from './main';
import Info from './info';
import NoFound from './noFound';

export default class MRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about/:aboutId" component={About} />
            <Route
              path="/main"
              render={() => (
                <Main>
                  <Route exact path="/main/:id" component={Info} />
                </Main>
              )
              }
            />
            <Route component={NoFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
