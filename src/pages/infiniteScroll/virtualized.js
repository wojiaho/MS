import React from 'react';
import { List } from 'react-virtualized';
import './index.less';

const list = [
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  // And so on...
];
const rowRenderer = ({key, index, isScrolling, isVisible, style}) =>{
  return (
    <div
      key={key}
      style={style}
      className="list-item"
    >
      {list[index]}
    </div>
  )

}
export default class Virtualized extends React.Component {
  render() {
    return (
      <div>
        <List 
        width={500}
        height={100}
        rowCount={list.length}
        rowHeight={20}
        autoHeight={true}
        rowRenderer={rowRenderer}/>
      </div>
    )
  }
}