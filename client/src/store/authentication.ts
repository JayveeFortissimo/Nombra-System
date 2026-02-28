import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthenticationState } from "@/interfaces/Authentication";

const initialState: AuthenticationState = {
  isSubmittedLoading: false,
  authToken: null
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAccesToken: (state, action:PayloadAction<string>) =>{
      state.authToken = action.payload;
    }
  },
});


export const { setAccesToken } = authenticationSlice.actions;

export default authenticationSlice.reducer;