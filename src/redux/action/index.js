/**
* Action 类型
*/
export const TYPE = {
  SWITCH_MENU: 'SWITCH_MENU',
  IS_Login: 'IS_Login',
};

const switchMenu = (menuName) => {
  return {
    type: TYPE.SWITCH_MENU,
    menuName,
  };
};

const toggleLogin = (isLogin) => {
  return {
    type: TYPE.IS_Login,
    isLogin,
  };
};

export {
  switchMenu,
  toggleLogin,
};

