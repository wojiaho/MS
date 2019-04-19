import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less';
import  menuJson from '../../json/menuList';
import { connect } from 'react-redux';
import { switchMenu } from '../../redux/action';
const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
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
        </SubMenu>);
      } 
      return (<Menu.Item key={item.key} title={item.title}><NavLink to={item.key}><span> {item.title}</span> </NavLink></Menu.Item>);
    });
    
  }
  handleClick = ({ item, key, keyPath }) => {
    const { dispatch } = this.props;
    dispatch(switchMenu(item.props.title));
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
          <span>后台管理系统</span>
        </div>
        <Menu mode="inline" theme="dark" onClick={this.handleClick}>
          {this.state.menuList}
        </Menu>
      </div>
    );
  }
}

export default connect()(NavLeft);
