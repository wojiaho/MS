### react生命周期
 - getDefaultProps
 - getInitialState
 - componentWillMount
 - render
 - componentDidMount
 - componentWillReceiveProps
 - shouldComponentUpdate
 - componentWillUpdate
 - componentDidUpdate
 - componentWillUnmount


 ### react-router 4.0
vue中我们可以使用router.beforeEach做路由拦截，但是在react-router 4.0中取消了这种API，因为作者希望react-router更加灵活，所以我们需要自己去实现路由拦截

首先有我们要有一个路由配置,auto代表是否需要登录拦截,basePath表示当前路由是一个二级路由，他的跟路由(不需要可以去掉),path表示当前路由
```

import Login from '../pages/login';
import NoFound from '../pages/noFound';
import Home from '../pages/home';
const routerConfig = [
  {
    title:'首页',
    basePath: '/admin',
    path:'/home',
    component: Home,
  },
  {
    title:'登录',
    path:'/login',
    component: Login
  },
  {
    title:'noFound',
    path:'/noFound',
    component: NoFound
  },
];
export default routerConfig;
```

router.js
```
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouterGuard from './routerGuard';
import App from './App';
import routerConfig from './json/routerConfig'

export default class MSRouter extends Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <RouterGuard config={routerConfig}/>
          </Switch>
        </App>
      </Router>
    )
  }
}
```
真正的路由拦截逻辑实在RouterGuard中实现
```
// RouterGuard.js
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NoFound from './pages/noFound';
import Admin from './pages/admin';
export default class Home extends Component {
  render() {
      const { location,config } = this.props;
      const { pathname } = location;
      const targetRouterConfig = config.find((v) => v.path === pathname);
      // 当前路径需要登录，跳转到登陆页面
      if(targetRouterConfig && targetRouterConfig.auth){
        return <Redirect to='/login' />
      }else if(!targetRouterConfig){ // 路由表中没有配置当前路由路径，跳转到404页面
        return (<Route to='/noFound' component={NoFound}/>)
      } else if (targetRouterConfig.basePath){ // 当前路由有basePath，表示是嵌套路由
        return ( 
          <Admin>
            <Route path={targetRouterConfig.path} component={targetRouterConfig.component}/> 
          </Admin> 
        )
      } else {
        return (<Route path={targetRouterConfig.path} component={targetRouterConfig.component} />)
      }
  }
}
```
RouterGuard.js中的判断逻辑并不全，比如当前路径需要登录，我直接跳转到登录页面了，实际应该再去判断一下有没有登录，如果没有登录才应该跳转。这只是一个路由拦截的demo，真正的拦截逻辑可以根据实际情况修改
<br>
总结：react-router 4.0并不提供直接如vue那样的api，我们自己封装路由拦截，其实就是多了一层组件去包了一下，在这层组件中，写自己的判断逻辑跳转相应的页面


