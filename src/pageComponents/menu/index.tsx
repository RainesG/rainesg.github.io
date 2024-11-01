import classNames from "classnames";
import styles from "./menu.module.scss";
import { menuType } from "types/menuList";
import { Button } from "../../basicComponents/button";
import { forwardRef, RefObject, useMemo, useState } from "react";

export type MenuProps = {
  visibility?: boolean;
  menuList: menuType[] | undefined;
  excludeRef?: RefObject<HTMLElement>;
  direction?: "left" | "top" | "bottom" | "right";
  menuWidth?: string | number;
  distance?: string | number;
  duration?: string | number;
  level?: number;
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
      menuWidth = "30%",
      duration = "0.6s",
      level = 1,
    }: MenuProps,
    ref
  ) => {
    const [subMenuVisible, setSubMenuVisible] = useState<boolean>(false);
    const isLandscape = direction === "left" || direction === "right";
    const [myLevel, setLevel] = useState<number>(level);
    const destinyPosition = useMemo(() => {
      if (typeof distance === "number") {
        return distance * (level - 1);
      } else {
        const numberPart = parseFloat(distance) * (level - 1);
        const unit = distance.slice(
          JSON.stringify(parseFloat(distance)).length
        );
        return `${numberPart}${unit}`;
      }
    }, [distance, level]);

    const menuStyle = Object.assign(
      {
        [!isLandscape ? "width" : "height"]: "100%",
        [isLandscape ? "width" : "height"]: [menuWidth],
        [direction]: `-${menuWidth}`,
        transition: `${direction} ${duration}`,
      },
      visibility
        ? {
            [direction]: destinyPosition,
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
            {menuList?.map(({ menuText, subMenu }, index) => {
              return (
                <div key={`${menuText}-${index}`}>
                  <Button
                    ref={excludeRef}
                    type={"transparent"}
                    label={menuText}
                    className={styles[`${baseClass}_button`]}
                    onClick={() => {
                      if (subMenu?.length) {
                        setSubMenuVisible(true);
                        setLevel(level + 1);
                      }
                    }}
                  />
                  {subMenu?.length && (
                    <Menu
                      menuList={subMenu}
                      visibility={subMenuVisible}
                      distance={destinyPosition}
                      level={myLevel}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={classNames(styles[`${baseClass}_layer`], {
            [styles[`${baseClass}_layerOn`]]: visibility || subMenuVisible,
          })}
        />
      </>
    );
  }
);
