const previousState = "";

const testReducer = (
  state = previousState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "testAPI":
      return action.payload;
    default:
      return state;
  }
};

export default testReducer;
