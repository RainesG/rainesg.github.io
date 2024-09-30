import { getImageList } from "@/apis/smmsApi";
import { IImage, ImageList } from "@/basicComponents/imageList";
import { Upload } from "@/basicComponents/upload";
import { useState, useEffect } from "react";
import styles from "./content.module.scss";
const baseClass = `content`;

export const Content = () => {
  const [imageList, setImageList] = useState<IImage[]>([]);

  useEffect(() => {
    getImageList().then((res) => {
      setImageList(res.data.data);
    });
  }, []);

  return (
    <div className={styles[baseClass]}>
      <Upload accept="image/*" confirmButton={true} />
      <ImageList imageList={imageList} />
    </div>
  );
};
