import React, { Component } from 'react'
import { Card, Spin, Alert, Icon }  from 'antd'
import './index.less'

export default class Home extends Component {
 	render() {
    const loadingIcon = <Icon type="loading" style={{ fontSize: 24 }} />;
     return (
      <div>
        <Card  className="card card-wrap" title="Spin">
          <Spin />
          <Spin indicator={loadingIcon}/>
        </Card>
        <Card  className="card card-wrap" title="遮罩spin">
          <Spin tip="loading" >
            <Alert message="小可爱" description="谁还不是小可爱了" type="info" style={{marginBottom: 10}}/>
          </Spin>
          <Spin indicator={loadingIcon}>
            <Alert message="小可爱" description="谁还不是小可爱了" type="info"/>
          </Spin>
        </Card>
      </div>
     )
  }
}