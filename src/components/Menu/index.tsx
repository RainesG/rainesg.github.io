import classNames from "classnames";
import styles from "./index.module.scss";
import { menuListType } from "@/types/menuList";
import { Button } from "../button";
import { RefObject } from "react";

export type MenuProps = {
  menuVisible?: boolean;
  menuList: menuListType[];
  excludeRef?: RefObject<HTMLElement>;
};

const baseClass = `menu`;

export const Menu = ({ menuVisible, excludeRef, menuList }: MenuProps) => {
  return (
    <div
      className={classNames(styles[`${baseClass}_menu`], {
        [styles[`${baseClass}_showAnimation`]]: menuVisible,
      })}
    >
      {menuList
        .filter((item) => {
          return item.itemType === "list";
        })
        .map((menuItem, index) => {
          return (
            <Button
              ref={excludeRef}
              type={"transparent"}
              key={`${menuItem.itemType}-${index}`}
            >
              {menuItem.itemTitle}
            </Button>
          );
        })}
    </div>
  );
};
