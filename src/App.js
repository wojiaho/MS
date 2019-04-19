import React, { Component } from 'react';
import Proptypes from 'prop-types';

class App extends Component {
  static propTypes = {
    children: Proptypes.element,
  }

  render() {
    return (
      <div >
        {this.props.children}
      </div>
    );
  }
}

export default App;
