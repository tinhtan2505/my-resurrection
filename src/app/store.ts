import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/core/components/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // add reducers tại đây
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
