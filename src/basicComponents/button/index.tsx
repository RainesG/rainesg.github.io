import { forwardRef, HTMLAttributes, RefObject } from "react";
import styles from "./button.module.scss";

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
      textAlign = "center",
    }: HTMLAttributes<HTMLButtonElement> & ButtonProps,
    ref
  ) => {
    return (
      <div className={className}>
        <button
          style={{
            borderRadius: borderRadius,
            backgroundColor: type === "transparent" ? "transparent" : "",
            textAlign,
          }}
          className={styles.button}
          onClick={onClick}
          ref={ref as RefObject<HTMLButtonElement>}
        >
          {label || "Button"}
        </button>
      </div>
    );
  }
);
