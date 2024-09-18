import { Button } from "../button";
import styles from "./index.module.scss";
// import Account from "@material-design-icons/svg/round/account_circle.svg";
import { headerListType } from "../../consts/headerList";
import { useRef, useState } from "react";
import classNames from "classnames";
import useClickOutside from "../../utils/useClickOutside";

const baseClass = `header`;

export type PageHeaderType = {
  headerList: headerListType[];
};

const PageHeader = ({ headerList }: PageHeaderType) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const excludeRef = useRef<HTMLElement>(null);

  const menuRef = useClickOutside(() => {
    setMenuVisible(false);
  }, excludeRef);

  return (
    <div>
      <div className={styles[baseClass]} ref={menuRef}>
        <div className={styles[`${baseClass}_navigation`]}>
          <div className={styles[`${baseClass}_left`]}>
            {headerList.map(({ itemTitle, itemType, onClick }, index) => {
              return (
                <Button
                  type="transparent"
                  key={`${itemTitle}-${index}`}
                  label={itemTitle}
                  onClick={() => {
                    itemType === "list" && setMenuVisible(!menuVisible);
                    onClick?.();
                  }}
                  className={styles[`${baseClass}_button`]}
                >
                  <img src={itemType === "list" ? "list" : "button"} alt="" />
                </Button>
              );
            })}
          </div>
          <div className={styles[`${baseClass}_icon`]}>{/* <Account /> */}</div>
          <div className={styles[`${baseClass}_right`]}>
            <img src="" alt="" />
          </div>
        </div>
        <div
          className={classNames(styles[`${baseClass}_menu`], {
            [styles[`${baseClass}_showAnimation`]]: menuVisible,
          })}
        >
          {headerList
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
        <div
          className={classNames(styles[`${baseClass}_layer`], {
            [styles[`${baseClass}_layerOn`]]: menuVisible,
          })}
        ></div>
      </div>
    </div>
  );
};

export default PageHeader;
