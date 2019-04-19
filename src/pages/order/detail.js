import React from 'react';
import { Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import './index.less';

export default class OrderDetail extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      go: PropTypes.func.isRequired,
    }),
    location: PropTypes.shape({
      state: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        orderNo: PropTypes.string,
        state: PropTypes.string,
        address: PropTypes.string,
      })),
    }),
  }

  goBack = () => {
    const { history } = this.props;
    history.go(-1);
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    console.log(state);
    return (
      <div className="order-wrap">
        <Row>
          <Col span={20}>
            {
              state.map((item) => Object.keys(item).map((key, index) => <div className="detail-item" key={`state${index + 1}`}>{key} : {item[key]}</div>))
            }
          </Col>
          <Col span={4}>
            <Button className="back" type="primary" icon="arrow-left" onClick={this.goBack}>返回</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
