import { menuListType } from "@/types/menuList";

/**
 * @description: header配置
 * @param {*}
 */
const headerList: menuListType[] = [
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
