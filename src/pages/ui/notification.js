import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';
import './index.less';

export default class Notifications extends Component {
  handleOpen = (type, position) => {
    notification[type]({
      message: '今天要发工资啦！',
      description: '今天是15号，公司准时发工资了，赶快查收吧٩(๑❛ᴗ❛๑)۶',
      placement: position || 'topRight',
    });
  }

  render() {
    return (
      <div>
        <Card className="card card-wrap" title="消息提醒">
          <Button type="primary" onClick={() => { this.handleOpen('success'); }}>success</Button>
          <Button type="primary" onClick={() => { this.handleOpen('info'); }}>info</Button>
          <Button type="primary" onClick={() => { this.handleOpen('warning'); }}>warning</Button>
          <Button type="primary" onClick={() => { this.handleOpen('error'); }}>error</Button>
        </Card>
        <Card className="card card-wrap" title="不同位置消息提醒">
          <Button type="primary" onClick={() => { this.handleOpen('success', 'topLeft'); }}>topLeft</Button>
          <Button type="primary" onClick={() => { this.handleOpen('info', 'topRight'); }}>topRight</Button>
          <Button type="primary" onClick={() => { this.handleOpen('warning', 'bottomLeft'); }}>bottomLeft</Button>
          <Button type="primary" onClick={() => { this.handleOpen('error', 'bottomRight'); }}>bottomRight</Button>
        </Card>
      </div>
    );
  }
}
