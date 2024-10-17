import { menuListType } from "@/types/menuList";

/**
 * @description: header配置
 * @param {*}
 */

const menuList: menuListType[] = [
  {
    itemTitle: "MOVIE",
    itemType: "list",
    baseMenu: [
      {
        menuText: "Action | Crime",
        subMenu: [{ menuText: "节日甄礼", pagination: { imgSrc: "" } }],
      },
      { menuText: "Comedy" },
      { menuText: "Drama | Romance" },
      { menuText: "Drama | War" },
      {
        menuText: "Comedy | Drama | Romance",
      },
      { menuText: "Comedy | Horror" },
      { menuText: "Drama" },
    ],
  },
  {
    itemTitle: "GALLERY",
    itemType: "button",
    onClick: () => {
      console.log("test");
    },
  },
  {
    itemTitle: "GALLERY",
    itemType: "button",
    onClick: () => {
      console.log("test");
    },
  },
  {
    itemTitle: "GALLERY",
    itemType: "button",
    onClick: () => {
      console.log("test");
    },
  },
];

export default menuList;
