import { Dispatch } from "redux";
import { testAPI } from "../../api";

const testAction = () => async (dispatch: Dispatch) => {
  try {
    const res = await testAPI();
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
