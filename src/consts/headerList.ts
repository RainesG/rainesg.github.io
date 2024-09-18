interface menuType {
  menuText?: string;
  subMenu?: menuType[];
  pagination?: {
    imgSrc?: string;
  };
}

/**
 * @description: header列表
 * @param {string}itemTitle
 * @param {'list'|'button'}itemType
 * @param {menuType}baseMenu
 * @param {void}onClick
 */
export interface headerListType {
  itemTitle?: string;
  itemType?: "list" | "button";
  baseMenu?: menuType[];
  onClick?: () => {};
}

/**
 * @description: header配置
 * @param {*}
 */
const headerList: headerListType[] = [
  {
    itemTitle: "目录",
    itemType: "list",
    baseMenu: [
      {
        menuText: "节日甄礼",
        subMenu: [{ menuText: "节日甄礼", pagination: { imgSrc: "" } }],
      },
    ],
  },
];

export default headerList;
