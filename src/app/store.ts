import { Action, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/core/components/counterSlice";
import thunk, { ThunkAction } from "redux-thunk";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppStore = typeof store;
