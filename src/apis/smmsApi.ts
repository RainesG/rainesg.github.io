import axios from "axios";

export const uploadImg = (arg: File[]) => {
  return new Promise((resolve, reject) =>
    axios
      .post(
        `api/upload`,
        { smfile: arg },
        {
          headers: { Authorization: "jv7HmuFxQ3oJ4W2nF2b6MsMsIpPTkHQu" },
        }
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  );
};

export const testExpress = axios.get("/api");
