import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import NoFound from './pages/noFound';
import Admin from './pages/admin';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleLogin } from './redux/action';

class RouterGuard extends Component {
  static propTypes = {
    location: PropTypes.shape({ pathname: PropTypes.string.isRequired }),
    config: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      basePath: PropTypes.string,
      path: PropTypes.string.isRequired,
    })),
    history: PropTypes.shape({ push: PropTypes.func.isRequired }),
    dispatch: PropTypes.func.isRequired,
    isLogin: PropTypes.bool,
  }

  componentWillMount() {
    const { isLogin } = this.props;
    window.onbeforeunload = () => {
      sessionStorage.setItem('isLogin', isLogin);
    };
    const { dispatch } = this.props;
    dispatch(toggleLogin(!(isLogin || sessionStorage.getItem('isLogin') === 'false')));
  }

  render() {
    const { location, config, history } = this.props;
    const { pathname } = location;
    const targetRouterConfig = config.find((v) => v.path === pathname);
    const loadingComponent = Loadable({
      loader: () => import(`./pages${targetRouterConfig.path}`),
      loading: () => '',
    });
    if (targetRouterConfig && targetRouterConfig.auth) {
      return <Redirect to="/login" component={Login} />;
    } else if (!targetRouterConfig) {
      return (<Redirect to="/noFound" component={NoFound} />);
    } else if (targetRouterConfig.basePath) {
      return (
        <Admin routeConfig={targetRouterConfig} history={history}>
          <Route path={targetRouterConfig.path} component={loadingComponent} />
        </Admin>
      );
    } else {
      return (<Route path={targetRouterConfig.path} component={loadingComponent} />);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};
export default connect(mapStateToProps)(RouterGuard);
