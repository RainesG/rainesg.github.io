import { forwardRef, HTMLAttributes, RefObject } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
interface ButtonProps {
  label?: string;
  borderRadius?: string | number;
  type: "transparent";
}

export const Button = forwardRef(
  (
    {
      onClick,
      label,
      className,
      borderRadius,
      type,
    }: HTMLAttributes<HTMLButtonElement> & ButtonProps,
    ref
  ) => {
    return (
      <div>
        <button
          style={{
            borderRadius: borderRadius,
            backgroundColor: type === "transparent" ? "transparent" : "",
          }}
          className={classNames(styles.button, className)}
          onClick={onClick}
          ref={ref as RefObject<HTMLButtonElement>}
        >
          {label || "Button"}
        </button>
      </div>
    );
  }
);
