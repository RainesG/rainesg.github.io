import classNames from "classnames";
import styles from "./index.module.scss";
import { menuType } from "@/types/menuList";
import { Button } from "../Button";
import { forwardRef, RefObject } from "react";

export type MenuProps = {
  visibility?: boolean;
  menuList: menuType[] | undefined;
  excludeRef?: RefObject<HTMLElement>;
  direction?: "left" | "top" | "bottom" | "right";
  distance?: string | number;
  duration?: string | number;
};

const baseClass = `menu`;

export const Menu = forwardRef(
  (
    {
      visibility = false,
      excludeRef,
      menuList,
      direction = "left",
      distance = "30%",
      duration = "0.6s",
    }: MenuProps,
    ref
  ) => {
    const isLandscape = direction === "left" || direction === "right";
    const menuStyle = Object.assign(
      {
        [!isLandscape ? "width" : "height"]: "100%",
        [isLandscape ? "width" : "height"]: [distance],
        [direction]: `-${distance}`,
        transition: `${direction} ${duration}`,
      },
      visibility
        ? {
            [direction]: 0,
            transition: `${direction} ${duration}`,
          }
        : {}
    );

    return (
      <>
        <div
          className={styles[`${baseClass}`]}
          style={menuStyle}
          ref={ref as RefObject<HTMLDivElement>}
        >
          <div className={styles[`${baseClass}_menuWrapper`]}>
            {menuList?.map((menuItem, index) => {
              return (
                <Button
                  ref={excludeRef}
                  type={"transparent"}
                  label={menuItem.menuText}
                  key={`${menuItem.menuText}-${index}`}
                  className={styles[`${baseClass}_button`]}
                />
              );
            })}
          </div>
        </div>
        <div
          className={classNames(styles[`${baseClass}_layer`], {
            [styles[`${baseClass}_layerOn`]]: visibility,
          })}
        />
      </>
    );
  }
);
