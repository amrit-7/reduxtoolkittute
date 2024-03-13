import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  accessToken: "",
  companyDetails: {},
};
const CurrentUserSlice = createSlice({
  name: "currentUser",
  initialState: initialState,
  reducers: {
    setCurrentUser(state, action) {
      const data = action.payload;
      state.currentUser = data;
    },
  },
});

export const { setCurrentUser } =
  CurrentUserSlice.actions;
export const CurrentUserReducer = CurrentUserSlice.reducer;
