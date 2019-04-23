/**
 * reducer 数据处理 接受当前state，和一个action
 */
const initialState = {
  menuName: '首页',
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_MENU': return {
      ...state,
      menuName: action.menuName,
    };
    case 'IS_Login': return {
      ...state,
      isLogin: action.isLogin,
    };
    default: return state;
  }
};
