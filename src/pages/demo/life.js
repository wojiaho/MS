import React from 'react';

export default class Life extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentWillMount() {
    
  }
  render() {
    return (
      <div>
        <p>生命周期</p>
      </div>
    );
  }
}