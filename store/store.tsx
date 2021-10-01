import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import defaultSlice from "../src/components/default/default.slice";

export const store = configureStore({
  reducer: {
    default: defaultSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
