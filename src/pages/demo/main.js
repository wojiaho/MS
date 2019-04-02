import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './home'
import About from './about'
import Life from './life'

export default class Main extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/life/">Life</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/life/" component={Life} />
        </div>
      </Router>
    )
  }
}