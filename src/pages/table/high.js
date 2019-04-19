import React from 'react';
import { Table }  from 'antd';
import './index.less';

export default class HightTable extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left',
        filters: [
          { text: 'Edrward 0', value: 'Edrward 0' },
          { text: 'Edrward 1', value: 'Edrward 1' },
        ],
        onFilter: (value, record) => record.name.includes(value),
        filteredValue: filteredInfo.name || null,
      },
      {
        title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      },
      {
        title: 'Column 1', dataIndex: 'address', key: '1', width: 150,
      },
      {
        title: 'Column 2', dataIndex: 'address', key: '2', width: 150,
      },
      {
        title: 'Column 3', dataIndex: 'address', key: '3', width: 150,
      },
      {
        title: 'Column 4', dataIndex: 'address', key: '4', width: 150,
      },
      {
        title: 'Column 5', dataIndex: 'address', key: '5', width: 150,
      },
      {
        title: 'Column 6', dataIndex: 'address', key: '6', width: 150,
      },
      {
        title: 'Column 7', dataIndex: 'address', key: '7', width: 150,
      },
      { title: 'Column 8', dataIndex: 'address', key: '8' },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <span>action</span>,
      },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i,
        address: `London Park no. ${i}`,
        description: '哈哈哈哈'
      });
    }
    return (
      <div style={{backgroundColor: '#fff'}}>
        <Table columns={columns} dataSource={data} 
          expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
          onChange={this.handleChange}/>
      </div>
      
    );
  }
}