import React, { Component } from 'react';
import Proptypes from 'prop-types';

export default class About extends Component {
  static propTypes = {
    match: Proptypes.shape({
      params: Proptypes.shape({
        aboutId: Proptypes.string,
      }),
    }),
  }

  render() {
    return (
      <div>
        About:
        {this.props.match.params.aboutId}
      </div>
    );
  }
}
