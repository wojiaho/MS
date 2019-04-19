import React, { Component } from 'react';
import { Card, Form, Input, Button, Message, Checkbox } from 'antd';
import Proptypes from 'prop-types';
import '../ui/index.less';

const FormItem = Form.Item;
class FormLogin extends Component {
  static propTypes = {
    form: Proptypes.shape({
      validateFields: Proptypes.func,
      getFieldDecorator: Proptypes.func,
    }),
  }

  handleLogin = () => {
    this.props.form.validateFields((errors, values) => {
      console.log(values);
      if (!errors) {
        Message.success(`登录成功，用户名为：${values.userName},密码：${values.password}`);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card className="card card-wrap" title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card className="card card-wrap" title="登录水平表单">
          <Form style={{ width: 300 }}>
            <FormItem>
              {
                getFieldDecorator('userName', {
                  rules: [{
                    required: true,
                    message: '请输入用户名',
                  }],
                })(
                  <Input placeholder="请输入用户名" />
                )
              }

            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [{
                    required: true,
                    message: '请输入密码',
                  }],
                })(
                  <Input placeholder="请输入密码" type="password" />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleLogin}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create({ name: 'FormLogin' })(FormLogin);
