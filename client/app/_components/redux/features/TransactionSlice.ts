import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TxnState = {
  value: string | null;
};

const initialState = {
  value: null,
} as TxnState;

export const txn = createSlice({
  name: "txn",
  initialState,
  reducers: {
    reset: () => initialState,
    setCurrentTxn: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {
  setCurrentTxn,
  reset,
} = txn.actions;
export default txn.reducer;
