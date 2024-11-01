import { forwardRef, HTMLAttributes, RefObject } from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  label?: string;
  borderRadius?: string | number;
  type?: 'default' | 'primary' | 'secondary' | 'disabled' | 'link';
  linkDestination?: string;
  disableElevation?: boolean
}

const baseClass = `button`;

export const Button = forwardRef(
  (
    {
      variant = 'text',
      onClick,
      label,
      className,
      borderRadius,
      type = 'default',
      linkDestination,
      disableElevation = false
    }: HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & ButtonProps,
    ref
  ) => {
    return (
      <div className={className}>
        {type == 'link' ? (
          <a
            href={linkDestination}
            className={classNames(
              styles[`${baseClass}`],
              styles[`${baseClass}_primary`]
            )}
            style={{
              borderRadius: borderRadius || 5,
              boxShadow: disableElevation ? 'unset' : undefined
            }}
            ref={ref as RefObject<HTMLAnchorElement>}
          >
            {label || 'BUTTON'}
          </a>
        ) : (
          <button
            style={{
              borderRadius: borderRadius || 5,
              boxShadow: disableElevation ? 'unset' : undefined
            }}
            disabled={type == 'disabled'}
            className={classNames(
              styles[`${baseClass}`],
              styles[`${baseClass}_${type}`]
            )}
            onClick={onClick}
            ref={ref as RefObject<HTMLButtonElement>}
          >
            {label || 'BUTTON'}
          </button>
        )}
      </div>
    );
  }
);
