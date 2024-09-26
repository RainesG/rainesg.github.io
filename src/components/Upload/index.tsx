import { InputHTMLAttributes, useState } from "react";
import { Button } from "../Button";
import { uploadImg } from "@/apis/smmsApi";

interface IUpload {}

export const Upload = ({
  multiple,
  accept,
}: InputHTMLAttributes<HTMLInputElement> & IUpload) => {
  const [fileList, setFileList] = useState<File[]>([]);
  const Upload = () => {
    uploadImg(fileList).then(() => {});
  };

  return (
    <>
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        placeholder="upload"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Button type={"transparent"} onClick={Upload}>
        UPLOAD
      </Button>
    </>
  );
};
