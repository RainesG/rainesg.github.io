export interface menuType {
  menuText?: string;
  subMenu?: menuType[];
  pagination?: {
    imgSrc?: string;
  };
}

/**
 * @description: menu列表
 * @param {string}itemTitle
 * @param {'list'|'button'}itemType
 * @param {menuType}baseMenu
 * @param {void}onClick
 */
export interface menuListType {
  itemTitle?: string;
  itemType?: "list" | "button";
  baseMenu?: menuType[];
  onClick?: () => {};
}
