import { configureStore } from "@reduxjs/toolkit";
import txnReducer from "./features/TransactionSlice";

export const store = configureStore({
  reducer: {
    txnReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;