import React, { Component } from 'react';
import { Card, Button, Icon, Radio } from 'antd';
import './index.less';

export default class Buttons extends Component {
  state = {
    isLoading: true,
    size: 'default',
  }

  componentWillMount() {
  }

  // 切换loading
  toggleLoading = () => {
    this.setState({ isLoading: !this.state.isLoading });
  }

  handleSize = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    return (
      <div>
        <Card className="card card-wrap" title="按钮">
          <Button type="primary">按钮</Button>
          <Button disabled>禁用</Button>
        </Card>
        <Card className="card card-wrap" title="图形按钮">
          <Button icon="plus">按钮</Button>
          <Button shape="circle" icon="search" />
        </Card>
        <Card className="card card-wrap" title="loading按钮">
          <Button type="primary" loading={this.state.isLoading}>确定</Button>
          <Button onClick={this.toggleLoading}>{this.state.isLoading ? '关闭' : '打开'}</Button>
        </Card>
        <Card className="card" title="按钮组">
          <Button.Group>
            <Button type="primary"><Icon type="left" /> 返回</Button>
            <Button type="primary">前进 <Icon type="right" /></Button>
          </Button.Group>
        </Card>
        <Card className="card card-wrap" title="loading按钮">
          <Radio.Group value={this.state.size} onChange={this.handleSize}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>按钮</Button>
          <Button disabled size={this.state.size}>禁用</Button>
        </Card>
      </div>
    );
  }
}
