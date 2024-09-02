import { HTMLAttributes } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
interface ButtonProps {
  label?: string;
}

export const Button = ({
  onClick,
  label,
  className,
}: HTMLAttributes<HTMLButtonElement> & ButtonProps) => {
  return (
    <div>
      <button
        className={classNames(styles.button, className)}
        onClick={onClick}
      >
        {label || "Button"}
      </button>
    </div>
  );
};
