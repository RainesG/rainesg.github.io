import { Button } from "../../basicComponents/button";
import styles from "./index.module.scss";
// import Account from "@material-design-icons/svg/round/account_circle.svg";
import { useRef, useState } from "react";
import useClickOutside from "../../utils/useClickOutside";
import { menuListType } from "@/types/menuList";
import { Menu } from "../menu";
import { useNavigate, useNavigation } from "react-router-dom";

const baseClass = `header`;

export type PageHeaderType = {
  headerList: menuListType[];
};

const PageHeader = ({ headerList }: PageHeaderType) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const excludeRef = useRef<HTMLDivElement>(null);
  const navigation = useNavigate();

  const menuRef = useClickOutside(() => {
    setMenuVisible(false);
  }, excludeRef);

  return (
    <div className={styles[baseClass]}>
      <div className={styles[`${baseClass}_navigation`]}>
        <div className={styles[`${baseClass}_left`]} ref={excludeRef}>
          {headerList.map(({ itemTitle, itemType, onClick, path }, index) => {
            return (
              <Button
                type="transparent"
                key={`${itemTitle}-${index}`}
                label={itemTitle}
                onClick={() => {
                  setActiveIndex(index);
                  itemType === "list" && setMenuVisible(true);
                  itemType === "button" && navigation(path!);
                  onClick?.();
                }}
                className={styles[`${baseClass}_button`]}
              >
                <img src={itemType === "list" ? "list" : "button"} alt="" />
              </Button>
            );
          })}
        </div>
        <div
          className={styles[`${baseClass}_logo`]}
          onClick={() => {
            navigation("/");
          }}
        >
          <img
            src="https://s2.loli.net/2024/09/29/mzJCAjK1nVFxd7p.png"
            alt=""
          />
        </div>
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
  );
};

export default PageHeader;
