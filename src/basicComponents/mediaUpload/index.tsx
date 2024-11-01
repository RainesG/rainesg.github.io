import { InputHTMLAttributes, ReactNode, useCallback, useState } from "react";
import styles from "./index.modules.less";
import classNames from "classnames";

interface IMediaUpload {
  children?: ReactNode;
  type?: "image" | "video";
  finish?: (arg: string[]) => void;
  onClick?: (event: any) => void;
  className?: string;
  count?: number;
  maxSize?: number;
  showCount?: boolean;
  exsistValue?: string[];
  tipsContent?: string[];
  scrollX?: boolean;
  deleteButton?: boolean;
  name?: string;
}

const baseClass = `mediaUpload`;

export const MediaUpload = ({
  children,
  onClick,
  className,
  type,
  finish,
  count = 1,
  maxSize = 15,
  showCount = false,
  exsistValue,
  scrollX = true,
  deleteButton = false,
  name,
}: IMediaUpload & InputHTMLAttributes<HTMLDivElement>) => {
  const [displayList] = useState<string[]>(exsistValue || []);

  const deleteIndex = useCallback(() => { }, []);

  return (
    <>
      <div className={classNames(styles[`${baseClass}`], className)}>
        <div
          className={classNames(styles[`${baseClass}_scrollView`], {
            [styles[`${baseClass}_scroll`]]: scrollX,
          })}
        >
          <div className={styles[`${baseClass}_displayArea`]}>
            {displayList.map((value, index) => {
              return (
                <div
                  className={styles[`${baseClass}_imageWrapper`]}
                  key={`${value}-${index}`}
                >
                  <img
                    src={value}
                    alt=""
                    className={styles[`${baseClass}_image`]}
                  />
                  {deleteButton && (
                    <img
                      src={""}
                      alt=""
                      className={styles[`${baseClass}_delete`]}
                      onClick={() => deleteIndex()}
                    />
                  )}
                </div>
              );
            })}
            <div className={styles[`${baseClass}_upload`]}>
              <input
                className={styles[`${baseClass}_input`]}
                type="file"
                accept={`${type}/*`}
                id="uploadInput"
                onChange={(event) => {
                  finish?.(["e"]);
                  if (!event.target.files?.length) return;
                }}
              />
              <label
                className={styles[`${baseClass}_label`]}
                htmlFor="uploadInput"
                onClick={onClick}
              >
                {children ||
                  (displayList.length < count && (
                    <div className={styles[`${baseClass}_addContent`]}>
                      <img
                        src={""}
                        alt=""
                        className={styles[`${baseClass}_picIcon`]}
                      />
                      {showCount && (
                        <div className={styles[`${baseClass}_addText`]}>
                          ({displayList.length}/{count})
                        </div>
                      )}
                    </div>
                  ))}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
