import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NoFound from './pages/noFound';
import Admin from './pages/admin';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';

export default class RouterGuard extends Component {
  static propTypes = {
    location: PropTypes.shape({ pathname: PropTypes.string.isRequired }),
    config: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      basePath: PropTypes.string,
      path: PropTypes.string.isRequired,
    })),
  }

  componentWillMount() {
  }

  render() {
    const { location, config } = this.props;
    const { pathname } = location;
    const targetRouterConfig = config.find((v) => v.path === pathname);
    const loadingComponent = Loadable({
      loader: () => import(`./pages${targetRouterConfig.path}`),
      loading: () => '',
    });
    if (targetRouterConfig && targetRouterConfig.auth) {
      return <Route to="/login" component={loadingComponent} />;
    } else if (!targetRouterConfig) {
      return (<Route to="/noFound" component={NoFound} />);
    } else if (targetRouterConfig.basePath) {
      return (
        <Admin routeConfig={targetRouterConfig}>
          <Route path={targetRouterConfig.path} component={loadingComponent} />
        </Admin>
      );
    } else {
      return (<Route path={targetRouterConfig.path} component={loadingComponent} />);
    }
  }
}
