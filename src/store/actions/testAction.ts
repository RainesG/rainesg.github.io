import { Dispatch } from "redux";
import { getImageList } from "@/apis/smmsApi";

const testAction = () => async (dispatch: Dispatch) => {
  try {
    const res = await getImageList();
    console.log(res);

    dispatch({
      type: "testAPI",
      payload: res,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default testAction;
