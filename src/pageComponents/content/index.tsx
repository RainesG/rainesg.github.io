import { getImageList } from "@/apis/smmsApi";
import { type ImageListType, ImageList } from "raines-basic-components";
import { Upload } from "@/basicComponents/upload";
import { useState, useEffect } from "react";
import styles from "./content.module.scss";
const baseClass = `content`;

export const Content = () => {
  const [imageList, setImageList] = useState<ImageListType[]>([]);

  useEffect(() => {
    getImageList().then((res) => {
      setImageList(res.data.data);
    });
  }, []);

  return (
    <div className={styles[baseClass]}>
      <Upload accept="image/*" confirmButton={true} />
      <ImageList imageList={imageList} row={3} />
    </div>
  );
};
