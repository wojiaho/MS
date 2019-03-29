import React, { Component } from 'react'
import { Menu } from 'antd';
import './index.less'
import  menuJson from '../../json/menuList';
const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component {
  state = {
    menuList: []
  }
  componentWillMount() {
    let menuList = this.getMenuList(menuJson);
    this.setState({menuList});
  }
  // 获取菜单列表
  getMenuList = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (<SubMenu key={item.key} title={item.title}>
          { this.getMenuList(item.children) }
        </SubMenu>)
      } 
      return (<Menu.Item key={item.key} title={item.title}><span>{item.title}</span></Menu.Item>)
    })
    
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
          <span>后台管理系统</span>
        </div>
        <Menu mode="inline" theme="dark">
          {this.state.menuList}
        </Menu>
      </div>
    )
  }
}
