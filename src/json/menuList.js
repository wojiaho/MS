const menuList = [
    {
        title:'首页',
        key:'/home',
        component: 'Home'
    },
    {
        title:'UI',
        key:'/ui',
        children:[
            {
                title:'按钮',
                key:'/ui/buttons',
                component: 'Buttons'
            },
            {
                title:'弹框',
                key:'/ui/modals',
                component: 'Modals'
            },
            {
                title:'Loading',
                key:'/ui/loadings',
                component: 'Loadings'
            },
            {
                title:'通知提醒',
                key:'/ui/notification',
                component: 'Notification'
            },
            {
                title:'全局Message',
                key:'/ui/messages',
                component: 'Messages'
            },
            {
                title:'Tab页签',
                key:'/ui/tabs',
                component: 'Tabs'
            },
            {
                title:'图片画廊',
                key:'/ui/gallery',
                component: 'Gallery'
            },
            {
                title:'轮播图',
                key:'/ui/carousel',
                component: 'Carousel'
            }
        ]
    },
    {
        title:'表单',
        key:'/form',
        children:[
            {
                title:'登录',
                key:'/form/login',
                component: 'Login'
            },
            {
                title:'注册',
                key:'/form/reg',
                component: 'Reg'
            }
        ]
    },
    {
        title:'表格',
        key:'/table',
        children:[
            {
                title:'基础表格',
                key:'/table/basic',
                component: 'Basic'
            },
            {
                title:'高级表格',
                key:'/table/high',
                component: 'High'
            }
        ]
    },
    {
        title:'富文本',
        key:'/editor',
        component: 'Editor'
    },
    {
        title:'订单管理',
        key:'/order',
        children:[
            {
                title:'订单列表',
                key:'/order/list',
                component: 'OrderList'
            }
        ]
    },
    {
        title:'员工管理',
        key:'/user',
        component: 'User'
    },
    {
        title:'车辆地图',
        key:'/bikeMap',
        component: 'BikeMap'
    },
    {
        title:'图表',
        key:'/charts',
        children:[
            {
                title:'柱形图',
                key:'/charts/bar',
                component: 'Bar'
            },
            {
                title:'饼图',
                key:'/charts/pie',
                component: 'Pie'
            },
            {
                title:'折线图',
                key:'/charts/line',
                component: 'Line'
            },
        ]
    }
];
export default menuList;