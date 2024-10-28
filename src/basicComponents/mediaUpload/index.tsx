import { InputHTMLAttributes, ReactNode, useCallback, useState } from "react";
import styles from "./index.modules.less";
import classNames from "classnames";
import OSS from "ali-oss";
import axios from "axios";

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
  const [result, setResult] = useState<OSS.PutObjectResult>();
  const [displayList, setDisplayList] = useState<string[]>(exsistValue || []);

  const uploadToOSS = useCallback(
    async (files: FileList) => {
      const {
        data: { accessid, dir, host, token, secret, expire, filename },
      } = await axios.get("/oss/aliyun/policy_GET");
      const client = new OSS({
        // yourRegion填写Bucket所在地域。以华东1（杭州）为例，yourRegion填写为oss-cn-hangzhou。
        region: "oss-cn-hangzhou",
        // 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
        accessKeyId: accessid,
        accessKeySecret: secret,
        // 从STS服务获取的安全令牌（SecurityToken）。
        stsToken: token,
        // 填写Bucket名称。
        bucket: "mwhoe",
      });
      /** 判断返回的存储路径桶是否以 / 结尾，如果不是手动补一个 */
      const hasSuffix = /\/$/.test(dir);
      const baseDir = hasSuffix ? dir : `${dir}/`;

      const reader = new FileReader();
      for (const file of files) {
        reader.readAsArrayBuffer(file);
        reader.onload = async (event) => {
          if (typeof event.target?.result === "object") {
            if (!event.target.result) return;

            client
              .put(`${baseDir}${filename}.png`, new Blob([event.target.result]))
              .then((res: { url: string }) => {
                setResult(result);
                setDisplayList([...displayList, res.url]);
                finish?.(displayList);
              });
          }
        };
      }
    },
    [displayList, finish, result]
  );

  const deleteIndex = useCallback(() => {}, []);

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
                  uploadToOSS(event.target.files);
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
