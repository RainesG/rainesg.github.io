import { getButtonProps, getImageList } from '@/apis/smmsApi';
import {
  type ImageListType,
  type ImageItemType,
  ImageList,
  Upload,
} from 'raines-basic-components';
import { useState, useEffect } from 'react';
import styles from './content.module.scss';

const baseClass = `content`;

export const Content = () => {
  const [imageList, setImageList] = useState<ImageItemType[]>([]);

  useEffect(() => {
    getButtonProps().then((res) => {
      console.log(res);
    });

    getImageList().then((res) => {
      setImageList(res.data.data);
    });
  }, []);

  return (
    <div className={styles[`${baseClass}`]}>
      <Upload accept='image/*' />
      <ImageList imageList={imageList} row={3} />
    </div>
  );
};
