import classNames from "classnames";
import styles from "./imageList.module.scss";

const baseClass = `imageList`;

export interface IImage {
  width: number;
  height: number;
  filename: string;
  storename: string;
  size: number;
  path: string;
  hash: string;
  created_at: string;
  url: string;
  delete: string;
  page: string;
}

export interface IImageList {
  imageList: IImage[];
  marginTop?: boolean;
}

export const ImageList = ({ imageList, marginTop = true }: IImageList) => {
  console.log(imageList, "list");
  return (
    <div
      className={classNames(styles[baseClass], {
        [styles[`${baseClass}_marginTop`]]: marginTop,
      })}
    >
      {imageList.map(({ url }) => {
        return (
          <div className={styles[`${baseClass}_imageWrapper`]}>
            <img src={url} alt="" />
          </div>
        );
      })}
    </div>
  );
};
