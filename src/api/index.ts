import { request } from "../utils/request";

export const testAPI = async () => {
  try {
    console.log(await request.get("/"));

    return await request.get("/");
  } catch (e) {
    throw e;
  }
};
