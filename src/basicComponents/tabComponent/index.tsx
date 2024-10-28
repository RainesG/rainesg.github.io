import { ReactNode, useState } from "react";
import styles from "./tabComponent.module.scss";
import classNames from "classnames";
import { useClientRect } from "@/hooks/useMeasure";
interface ITabComponent {
  tabs: { title: string; onClick?: () => void; children?: ReactNode | null }[];
}
const baseClass = `tabComponent`;
const TabComponent = ({ tabs }: ITabComponent) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [measureRect, measureRef] = useClientRect();

  return (
    <div className={styles[baseClass]}>
      <ul className={styles[`${baseClass}_titles`]}>
        {tabs.map(({ title, onClick }, index) => {
          return (
            <li
              className={classNames({
                [styles[`${baseClass}_titleActive`]]: activeIndex === index,
              })}
              onClick={() => {
                setActiveIndex(index);
                onClick?.();
              }}
              key={`${title}-${index}`}
            >
              <p>{title}</p>
            </li>
          );
        })}
      </ul>
      {tabs[activeIndex].children && (
        <div ref={measureRef}>{tabs[activeIndex].children}</div>
      )}
    </div>
  );
};

export default TabComponent;
