import { Button } from "../button";
import styles from "./index.module.scss";
// import Account from "@material-design-icons/svg/round/account_circle.svg";
import { useRef, useState } from "react";
import useClickOutside from "../../utils/useClickOutside";
import { menuListType } from "@/types/menuList";
import { Menu } from "../Menu";

const baseClass = `header`;

export type PageHeaderType = {
  headerList: menuListType[];
};

const PageHeader = ({ headerList }: PageHeaderType) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const excludeRef = useRef<HTMLElement>(null);

  const menuRef = useClickOutside(() => {
    setMenuVisible(false);
  }, excludeRef);

  return (
    <div>
      <div className={styles[baseClass]}>
        <div className={styles[`${baseClass}_navigation`]}>
          <div className={styles[`${baseClass}_left`]}>
            {headerList.map(({ itemTitle, itemType, onClick }, index) => {
              return (
                <Button
                  ref={excludeRef}
                  type="transparent"
                  key={`${itemTitle}-${index}`}
                  label={itemTitle}
                  onClick={() => {
                    setActiveIndex(index);
                    itemType === "list" && setMenuVisible((prev) => !prev);
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
        <Menu
          menuList={headerList[activeIndex].baseMenu}
          visibility={menuVisible}
          ref={menuRef}
        />
      </div>
    </div>
  );
};

export default PageHeader;
