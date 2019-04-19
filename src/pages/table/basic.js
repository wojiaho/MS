import React from 'react';
import { Table, Tag, Divider }  from 'antd';
import './index.less';

export default class BasicTable extends React.Component {
  state = {
    selectedRowKeys: ['0'],
    selectedItem: {}
  }
  onRowClick = (record, index) => {
    let selectKey = [index + ''];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
  }
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <span>{text}</span>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
          })}
        </span>
      ),
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <span>Invite {record.name}</span>
          <Divider type="vertical" />
          <span>Delete</span>
        </span>
      ),
    }];
    
    const data = [{
      key: '0',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    }, {
      key: '1',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    }, {
      key: '2',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    }];
    const rowSelection = {
      type: 'radio',
      selectedRowKeys: this.state.selectedRowKeys,
      onSelect: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys: [selectedRowKeys.key]
        });
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    return (
      <div className="table-wrap">
        <Table bordered rowSelection={rowSelection} columns={columns} dataSource={data} onRow={ (record, index) => {
          return {
            onClick: () => {this.onRowClick(record, index)},       // 点击行
          };
        }}/>
      </div>
    );
  }
}