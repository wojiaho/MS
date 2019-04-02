
import Login from '../pages/login';
import NoFound from '../pages/noFound';
import Home from '../pages/home';
import Button from '../pages/ui/buttons';
import Modal from '../pages/ui/modals';
const routerConfig = [
  {
    title:'首页',
    basePath: '/admin',
    path:'/home',
    component: Home,
  },
  {
    title:'按钮',
    basePath: '/admin',
    path:'/ui/buttons',
    component: Button,
  },
  {
    title:'弹窗',
    basePath: '/admin',
    path:'/ui/modals',
    component: Modal,
  },
  {
    title:'test',
    path:'/test',
    component: Home,
    auth: true
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