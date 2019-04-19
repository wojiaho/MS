import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

export default class Main extends Component {
  static propTypes = {
    children: Proptypes.element.isRequired,
  }

  render() {
    return (
      <div>
        <Link to="/home">home</Link>
        <br />
        <Link to="/about">about</Link>
        <br />
        <Link to="/main">main</Link>
        <br />
        <Link to="/main/123">main123</Link>
        <br />
        <Link to="/main/234">main234</Link>
        {this.props.children}
      </div>
    );
  }
}
