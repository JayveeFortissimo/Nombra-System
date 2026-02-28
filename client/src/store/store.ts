import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authentication";

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

