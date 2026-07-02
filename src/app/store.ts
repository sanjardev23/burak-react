import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { ThunkAction, Action } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";

const placeholderSlice = createSlice({
  name: "placeholder",
  initialState: {},
  reducers: {},
});

export const store = configureStore({
  reducer: {
    placeholder: placeholderSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
