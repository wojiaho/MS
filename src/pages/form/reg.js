import React, {  Component } from 'react';
import { Card, Form, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, InputNumber }  from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const FromItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const { TextArea } = Input;
class FormRegister extends Component {
  handleRegister = () => {
    this.props.form.validateFields((error, values) => {
      console.log(this.props.form.getFieldsValue());
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    };
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    };
    const rowObject = {
      minRows: 5, 
      maxRows: 10
    };
    return (
      <div>
        <Card title="注册表单">
          <Form>
            <FromItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('userName', {
                  rules: [{
                    required: true,
                    message: '请输入用户名'
                  }],
                })(
                  <Input placeholder="请输入用户名"/>
                )
              }
            </FromItem>
            <FromItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('userPwd', {
                  rules: [{
                    required: true,
                    message: '请输入密码'
                  }],
                })(
                  <Input placeholder="请输入密码" type="password"/>
                )
              }
            </FromItem>
            <FromItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FromItem>
            <FromItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: 18
                })(
                  <InputNumber />
                )
              }
            </FromItem>
            <FromItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: '1'
                })(
                  <Select>
                    <Option value="1">我想发工资</Option>
                    <Option value="2">我想混吃等死</Option>
                    <Option value="3">我想一夜暴富</Option>
                    <Option value="4">我想发财</Option>
                  </Select>
                )
              }
            </FromItem>
            <FromItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('hobby', {
                  initialValue: []
                })(
                  <Select mode="multiple">
                    <Option value="1">打羽毛球</Option>
                    <Option value="2">徒步</Option>
                    <Option value="3">吃火锅</Option>
                    <Option value="4">吃串串</Option>
                    <Option value="5">吃烤鱼</Option>
                    <Option value="6">混吃等死</Option>
                  </Select>
                )
              }
            </FromItem>
            <FromItem label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch></Switch>
                )
              }
            </FromItem>
            <FromItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                })(
                  <DatePicker  format="YYYY-MM-DD" ></DatePicker>
                )
              }
            </FromItem>
            <FromItem label="地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                })(
                  <TextArea autosize={rowObject}></TextArea>
                )
              }
            </FromItem>
            <FromItem {...offsetLayout}>
              {
                getFieldDecorator('protocol', {
                })(
                  <Checkbox>我已经阅读改协议 <a href="#protocol">基础协议</a> </Checkbox>
                )
              }
            </FromItem>
            <FromItem style={{textAlign: 'center'}}>
              <Button type="primary" onClick={this.handleRegister}>注册</Button>
            </FromItem>
          </Form>
        </Card>
      </div>
    );
  }
} 
export default Form.create({name: 'FormRegister'})(FormRegister);