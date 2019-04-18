import React from 'react';
import { PageTable as Table, InfinityTable, SumTable } from 'antd-table-infinity';
import './index.less';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];
export default class TableInfinity extends React.Component {
  state = {
    page: 1,
    data: [{
      key: '1', name: 'xh', age: 18, address: '上海'
    }],
    loading: false,
    sumData: [{key: "12", name: 'xh', age: 18, address: '上海'}]
  }
  handleFetch = () => {
    this.setState({
      loading: false,
      data: [...this.state.data, {key: this.state.data.length + 1, name: 'xh', age: 18, address: '上海'}]
    })
  }
  render() {
    const { page, data, sumData } = this.state;
    return (
      <div >
        <Table 
          style={{backgroundColor: '#fff'}}
          pagination={{
            position: 'bottom',
            defaultCurrent: 21,
            className: 'custom-classname-pagination',
          }}
          dataSource={[page, data]}
          columns={columns}
          onFetch={this.handleFetch}
          onClick={this.handleClick}
        />

        <InfinityTable
          style={{backgroundColor: '#fff', marginTop: 20}}
          onFetch={this.handleFetch}
          pageSize={10}
          columns={columns}
          dataSource={data}
          bordered
        />

        <SumTable
          style={{backgroundColor: '#fff', marginTop: 20}}
          pageSize={10}
          columns={columns}
          dataSource={data}
          sumData={sumData}
          bordered
        />
      </div>
    )
  }
}