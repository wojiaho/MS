import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NoFound from './pages/noFound';
import Admin from './pages/admin';
export default class Home extends Component {
  componentWillMount() {
  }
 	render() {
    const { location,config } = this.props;
    const { pathname } = location;
    const targetRouterConfig = config.find((v) => v.path === pathname);
    if(targetRouterConfig && targetRouterConfig.auth){
      return <Redirect to='/login' />
    }else if(!targetRouterConfig){
      return (<Route to='/noFound' component={NoFound}/>)
    } else if (targetRouterConfig.basePath){
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