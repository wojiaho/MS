import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Main extends Component {
  render() {
    return (
      <div>
        <Link to="/home">home</Link>
        <br/>
        <Link to="/about">about</Link>
        <br/>
        <Link to="/main">main</Link>
        <br/>
        <Link to="/main/123">main123</Link>
        <br/>
        <Link to="/main/234">main234</Link>
        {this.props.children}
      </div>
    )
  }
}