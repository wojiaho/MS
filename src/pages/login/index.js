import React, { Component } from 'react';
import { Form, Icon, Button, Input, message } from 'antd';
import { registerApi, loginApi } from '../../axios/api';
import { connect } from 'react-redux';
import { toggleLogin } from '../../redux/action';
import Proptypes from 'prop-types';
import './index.less';

const FromItem = Form.Item;
class Login extends Component {
  static propTypes = {
    form: Proptypes.shape({
      validateFields: Proptypes.func,
      getFieldDecorator: Proptypes.func,
    }),
    history: Proptypes.shape({
      push: Proptypes.func,
    }),
    dispatch: Proptypes.func.isRequired,
  }

  state = {
    isLogin: true,
  }

  handleClick = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  }

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.state.isLogin) {
          loginApi(values, this.successCallback);
        } else {
          registerApi(values, this.successCallback);
        }
      }
    });
  }

  successCallback = () => {
    const { dispatch } = this.props;
    dispatch(toggleLogin(true));
    message.success(`恭喜，${this.state.isLogin ? '登录' : '注册'}成功！`);
    const { history } = this.props;
    history.push('/home');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrap">
        <Form className="login-form">
          <FromItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名！' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" size="large" />
            )}
          </FromItem>
          <FromItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入秘密！' }],
            })(
              <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" size="large" />
            )}
          </FromItem>
          <FromItem>
            <Button type="primary" block onClick={this.handleSubmit}>{ this.state.isLogin ? '登录' : '注册'} </Button>
          </FromItem>
        </Form>
        <div className="reg-btn" onClick={this.handleClick}>{ this.state.isLogin ? '没有账号？点击注册' : '返回登录'}</div>
      </div>
    );
  }
}

export default connect()(Form.create()(Login));
