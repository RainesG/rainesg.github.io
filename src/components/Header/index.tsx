import { Button } from "../button";
import styles from "./index.module.scss";
// import Account from "@material-design-icons/svg/round/account_circle.svg";
const baseClass = `header`;

const PageHeader = () => {
  const buttonList = [
    { label: "我的", onClick: () => {} },
    { label: "我的", onClick: () => {} },
    { label: "我的", onClick: () => {} },
  ];

  return (
    <div>
      <div className={styles[baseClass]}>
        <div className={styles[`${baseClass}_left`]}>
          {buttonList.map(({ label, onClick }, index) => {
            return (
              <Button
                key={`${label}-${index}`}
                label={label}
                onClick={onClick}
                className={styles[`${baseClass}_button`]}
              />
            );
          })}
        </div>
        <div className={styles[`${baseClass}_icon`]}>{/* <Account /> */}</div>
        <div className={styles[`${baseClass}_right`]}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
