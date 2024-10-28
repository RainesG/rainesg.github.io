import { combineReducers } from "redux";
import testReducer from "./testReducer";

const RootReducer = combineReducers(testReducer);

export default RootReducer;
