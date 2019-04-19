import React, { Component } from 'react';
import Proptypes from 'prop-types';

export default class Info extends Component {
  static propTypes = {
    match: Proptypes.shape({
      params: Proptypes.shape({
        id: Proptypes.string,
      }),
    }),
  }

  render() {
    return (
      <div>
        动态路由id是: {this.props.match.params.id}
      </div>
    );
  }
}
