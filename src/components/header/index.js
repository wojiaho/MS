import React, { Component } from 'react';
import { Row, Col, Breadcrumb, Modal } from 'antd';
import '../../style/common.less';
import './index.less';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleLogin } from '../../redux/action';
import { logoutApi } from '../../axios/api';

const moment = require('moment');

const { confirm } = Modal;

class Header extends Component {
  static propTypes = {
    menuName: PropTypes.string,
    isLogin: PropTypes.bool,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
    dispatch: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      date: moment().format('YYYY-MM-DD'),
    };
  }

  componentWillMount() {
  }

  handleClick = () => {
    const { history, dispatch } = this.props;
    confirm({
      title: '退出',
      content: '确定要退出吗？',
      onOk() {
        logoutApi(() => {
          localStorage.removeItem('username');
          dispatch(toggleLogin(false));
          history.push('/login');
        });
      },
    });
  }

  render() {
    return (
      <div className="header">
        <div className="header-user">
          <span className="mr10">欢迎，{localStorage.getItem('username') || ''}</span>
          <span className="quit" onClick={this.handleClick}>{this.props.isLogin ? '退出' : ''}</span>
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
    isLogin: state.isLogin,
  };
};
export default connect(mapStateToProps)(Header);
