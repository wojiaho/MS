import React from 'react';
import {Table, Button, message } from 'antd'
import './index.less';

export default class OrderList extends React.Component {
  state = {
    data: [
      {
        key: '1',
        orderNo: 'DD0001112222',
        state: '受理中',
        address: 'New York No. 1 Lake Park',
      }
    ],
    selectedRows: []
  }

  getOrderDetail = () => {
    let { history } = this.props;
    const { selectedRows } = this.state;
    if(selectedRows.length < 1) {
      message.error('请选择一条订单！')
      return false;
    }
    history.push({
      pathname: '/order/detail',
      state: this.state.selectedRows
    });
  }
  render() {
    const rowSelection = {
      type: 'radio',
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRows
        })
      }
    }
    const columns = [{
      title: '订单号',
      dataIndex: 'orderNo',
      render: text => <span>{text}</span>,
    }, {
      title: '订单状态',
      dataIndex: 'state',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    return (
      <div className="order-wrap">
        <Button className="btn" type="primary" onClick={this.getOrderDetail}>查看详情</Button>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} bordered/>
      </div>
    )
  }
}