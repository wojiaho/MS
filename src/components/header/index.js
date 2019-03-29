import React, { Component } from 'react'
import { Row, Col, Breadcrumb } from 'antd'
// import BMap from 'BMap'
import '../../style/common.less'
import './index.less'
// import axios from 'axios'
const moment = require('moment');


export default class Header extends Component {
  state = {
    date: moment().format('YYYY-MM-DD')
  }
  componentWillMount() {
    console.log(this.state)
    // this.getsCurrentPosition();
  }
  // getsCurrentPosition () {
  //   // 百度地图API功能
  // 	var geolocation = new BMap.Geolocation();
  //   geolocation.getCurrentPosition(function(r){
  //     if(this.getStatus() === 0){
  //       axios.get('http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=E4805d16520de693a3fe707cdc962045')
  //       .then(data => {
  //         console.log(data);
  //       });
  //     }
          
  //   },{enableHighAccuracy: true})
  // }
  render() {
    return (
      <div className="header">
        <div className="header-user">
          <span className="mr10">欢迎，徐慧</span>
          <span className="quit">退出</span>
        </div>
        <Row className="header-info">
          <Col span={20}>
            <Breadcrumb className="bread-crumb">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item><a href="#center">Application Center</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="#list">Application List</a></Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={4}>
            <span className="mr10">{this.state.date}</span>
            <span>多云转晴</span>
          </Col>
        </Row>
      </div>
    )
  }
}
