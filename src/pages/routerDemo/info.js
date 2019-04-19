import React, { Component} from 'react';

export default class Info extends Component {
  render () {
    return (
      <div>
        动态路由id是: {this.props.match.params.id}
      </div>
    );
  }
}