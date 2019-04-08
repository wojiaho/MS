import React, { Component } from 'react'
import { Card, Button,  message}  from 'antd'
import './index.less'

export default class Message extends Component {

  handleOpen = (type) => {
    message[type]('恭喜你，成为百万富翁!');
  }
 	render() {
     return (
      <div>
        <Card  className="card card-wrap" title="全局提示框">
          <Button type="primary" onClick={() => {this.handleOpen('success')}}>success</Button>
          <Button type="primary" onClick={() => {this.handleOpen('info')}}>info</Button>
          <Button type="primary" onClick={() => {this.handleOpen('warning')}}>warning</Button>
          <Button type="primary" onClick={() => {this.handleOpen('error')}}>error</Button>
        </Card>
      </div>
     )
  }


  
}