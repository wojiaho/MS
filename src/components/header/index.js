import React, { Component } from 'react';
import { Row, Col, Breadcrumb } from 'antd';
// import BMap from 'bmap'
import '../../style/common.less';
import './index.less';
import { connect } from 'react-redux';
// import { Login } from '../../mock';
// import axios from 'axios'
import PropTypes from 'prop-types';

const moment = require('moment');
// console.log(Login)

class Header extends Component {
  static propTypes = {
    menuName: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      date: moment().format('YYYY-MM-DD'),
    };
  }

  componentWillMount() {
    // this.getsCurrentPosition();
  }

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
              <Breadcrumb.Item>{this.props.menuName}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={4}>
            <span className="mr10">{this.state.date}</span>
            <span>多云转晴</span>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    menuName: state.menuName,
  };
};
export default connect(mapStateToProps)(Header);
