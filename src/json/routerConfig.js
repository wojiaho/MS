
import Login from '../pages/login';
import NoFound from '../pages/noFound';
import Home from '../pages/home';
import Button from '../pages/ui/buttons';
import Modal from '../pages/ui/modals';
import Loading from '../pages/ui/loadings';
import Notification from '../pages/ui/notification';
import Message from '../pages/ui/messages';
import Tab from '../pages/ui/tabs';
import FormLogin from '../pages/form/login';
import FormReg from '../pages/form/reg';
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
    title:'加载',
    basePath: '/admin',
    path:'/ui/loadings',
    component: Loading,
  },
  {
    title:'消息提醒',
    basePath: '/admin',
    path:'/ui/notification',
    component: Notification,
  },
  {
    title:'全局Message',
    basePath: '/admin',
    path:'/ui/messages',
    component: Message,
  },
  {
    title:'tab页签',
    basePath: '/admin',
    path:'/ui/tabs',
    component: Tab,
  },
  {
    title:'登录表单',
    basePath: '/admin',
    path:'/form/login',
    component: FormLogin,
  },
  {
    title:'注册表单',
    basePath: '/admin',
    path:'/form/reg',
    component: FormReg,
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