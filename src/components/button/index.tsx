import { forwardRef, HTMLAttributes, RefObject } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
interface ButtonProps {
  label?: string;
  borderRadius?: string | number;
  textAlign?: "left" | "center" | "right";
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
      textAlign = "left",
    }: HTMLAttributes<HTMLButtonElement> & ButtonProps,
    ref
  ) => {
    return (
      <div>
        <button
          style={{
            borderRadius: borderRadius,
            backgroundColor: type === "transparent" ? "transparent" : "",
            textAlign,
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
