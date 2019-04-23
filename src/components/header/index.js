import React, { Component } from 'react';
import { Row, Col, Breadcrumb } from 'antd';
import '../../style/common.less';
import './index.less';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleLogin } from '../../redux/action';

const moment = require('moment');

class Header extends Component {
  static propTypes = {
    menuName: PropTypes.string,
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
    dispatch(toggleLogin(false));
    history.push('/login');
  }

  render() {
    return (
      <div className="header">
        <div className="header-user">
          <span className="mr10">欢迎，徐慧</span>
          <span className="quit" onClick={this.handleClick}>退出</span>
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
