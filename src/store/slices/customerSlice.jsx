import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  customer: null,
};
const CustomerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    setCustomer(state, action) {
      const data = action.payload;
      state.customer = data;
    },
  },
});

export const { setCustomer } = CustomerSlice.actions;
export const CustomerReducer = CustomerSlice.reducer;
