/**
* Action 类型
*/
export const TYPE = {
  SWITCH_MENU: 'SWITCH_MENU'
}

export function switchMenu(menuName) {
  return {
    type: TYPE.SWITCH_MENU,
    menuName
  }
}