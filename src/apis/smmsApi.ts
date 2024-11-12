import { AxiosResponse } from 'axios';
import instance from './instance';

export const uploadImg = (arg: File) => {
  return new Promise<AxiosResponse>((resolve, reject) => {
    instance
      .post(
        `apis/upload`,
        { smfile: arg },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .then((res) => {
        resolve({ ...res });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getImageList = () => {
  return new Promise<AxiosResponse>((resolve, reject) => {
    instance
      .get(`apis/upload_history`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getButtonProps = () => {
  return new Promise<AxiosResponse>((resolve, reject) => {
    instance
      .get(`strapi/api/buttons`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
