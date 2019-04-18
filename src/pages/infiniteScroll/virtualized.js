import React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import './index.less';

export default class Virtualized extends React.Component {

  state = {
    height: 10,
    list: [
      
    ]
  }

  componentWillMount() {
    let list = [];
    for(let i = 0; i < 50; i++){
      list.push(`row is ${i}`);
    }
    this.setState({ list });
  }
  handleClick = () => {
    console.log(this.state.height);
  }
  rowRenderer = ({key, index, isScrolling, isVisible, style}) =>{
    console.log(isScrolling, isVisible)
    return (
      <div
        key={key}
        style={style}
        className="list-item"
      >
        {this.state.list[index]}
      </div>
    )
  
  }
  onScroll = ({ clientHeight, scrollHeight, scrollTop }) => {
    if (this.state.list.length < 999) {
      this.setState({
        list: [...this.state.list, `row is ${this.state.list.length}` ]
      })
    }
    
  }
  
  render() {
    return (
      <AutoSizer onClick={this.handleClick}>
        {({width}) => (
          <List 
          width={width}
          height={500}
          rowCount={this.state.list.length}
          estimatedRowSize={this.state.height}
          className="list-wrap"
          noRowsRenderer= {() => <div>没有数据</div>}
          overscanRowCount={1000}
          rowHeight={30}
          scrollToAlignment="start"
          tabIndex={1000}
          onRowsRendered = {({ overscanStartIndex, overscanStopIndex, startIndex, stopIndex }) => { console.log(overscanStartIndex, overscanStopIndex, startIndex, stopIndex)}}
          onScroll={this.onScroll}
          rowRenderer={this.rowRenderer}/>
        )}
      </AutoSizer>
    )
  }
}