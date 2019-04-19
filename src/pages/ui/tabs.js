import React, { Component } from 'react';
import { Card, Tabs, Icon } from 'antd';
import './index.less';

const TabPane = Tabs.TabPane;

export default class Tab extends Component {
  render() {
    return (
      <div>
        <Card className="card card-wrap" title="基本Tabs">
          <Tabs defaultActiveKey="1"> 
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card className="card card-wrap" title="禁用Tabs">
          <Tabs defaultActiveKey="1"> 
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" disabled  key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card className="card card-wrap" title="带icon的Tabs">
          <Tabs defaultActiveKey="1"> 
            <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" disabled  key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}