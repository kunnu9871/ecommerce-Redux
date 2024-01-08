import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userDetail: null,
};



const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    signUp: (state, actions) => {
      state.status = true;
      state.userDetail = actions.payload;

      console.log(actions.payload);
      console.log(state.userDetail);
    },

    logOut: (state) => {
      state.status = false;
      state.userDetail = null;
    },
  },
});

export default authSlice.reducer;
export const { signUp, logOut } = authSlice.actions;
