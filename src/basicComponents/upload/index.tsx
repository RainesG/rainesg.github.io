import { InputHTMLAttributes, useState } from "react";
import { Button } from "../button";
import { uploadImg } from "@/apis/smmsApi";
import styles from "./upload.module.scss";
import classNames from "classnames";

interface IUpload {
  buttonClassName?: string;
  confirmButton?: boolean;
  marginTop?: boolean;
}

const baseClass = `upload`;

export const Upload = ({
  multiple,
  accept,
  confirmButton,
  buttonClassName,
  marginTop = true,
}: InputHTMLAttributes<HTMLInputElement> & IUpload) => {
  const [uploadFile, setUploadFile] = useState<File>();
  const Upload = () => {
    uploadImg(uploadFile!).then((res) => {});
  };

  return (
    <div
      className={classNames(styles[`${baseClass}`], {
        [styles.marginTop]: marginTop,
      })}
    >
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        placeholder="upload"
        onChange={(e) => {
          setUploadFile(e.target.files?.[0] as File);
        }}
      />
      <p className={styles[`${baseClass}_textContent`]}>上传图片</p>
      {confirmButton && (
        <Button
          type={"transparent"}
          onClick={Upload}
          className={classNames(styles[`${baseClass}_button`], buttonClassName)}
        >
          UPLOAD
        </Button>
      )}
    </div>
  );
};
