import React, { Component } from 'react'
import { Card, Button, Modal }  from 'antd'
import './index.less'

export default class Home extends Component {
  state = {
    showModal: false,
    showModa2: false,
    showModa3: false,
    showModa4: false,
  }
  handleOpen = (type) => {
    this.setState({[type]: true})
  }
  handleCancel = (type) => {
    this.setState({[type]: false})
  }
  handleOk = (type) => {
    this.setState({[type]: false})
  }
  handleConfirm = (type) => {
    Modal[type]({
      title: type,
      content: '我是小可爱吗？',
      okText: '是',
      cancelText: '否',
      onOk: () => {
        console.log('(￣▽￣)~*')
      },
      onCancel: () => {
        console.log('(▼ヘ▼#)')
      }
    })
  }
 	render() {
     return (
      <div>
        <Card  className="card card-wrap" title="基础模态框">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
        </Card>
        <Card  className="card card-wrap" title="信息确认框">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>warning</Button>
        </Card>
        <Modal title="React" visible={this.state.showModal1} onCancel={() => this.handleCancel('showModal1')} onOk={() => this.handleOk('showModal1')}>
          <p>欢迎！！！</p>
        </Modal>
        <Modal title="自定义页脚" visible={this.state.showModal2} okText="确认" cancelText="取消" onCancel={() => this.handleCancel('showModal2')} onOk={() => this.handleOk('showModal2')}>
          <p>欢迎！！！</p>
        </Modal>
      </div>
     )
  }
}