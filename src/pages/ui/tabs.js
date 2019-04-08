import React, { Component } from 'react';
import { Card, Button, Tabs } from 'antd';
import './index.less';

const TabPane = Tabs.TabPane;

export default class Tab extends Component {
  render() {
    return (
      <div>
        <Card lassName="card card-wrap" title="基本Tabs">
          <Tabs defaultActiveKey="1"> 
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}