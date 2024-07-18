import { persistReducer } from "redux-persist";
import RootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};
const myPersistReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: myPersistReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
