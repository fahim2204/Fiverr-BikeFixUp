import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: "",
    token: "",
  },
  reducers: {
    SetAuthProfile(state, action) {
      const { phone, email, name, type } = action.payload?.user;
      state.user = { phone, email, name, type };
      state.token = action.payload.token;
    },
    LogoutProfile(state, action) {
      console.log("logging out..")
      state.token = "";
      state.user = "";
    },
  },
});

export const { SetAuthProfile, LogoutProfile } = profileSlice.actions;
export const GetProfile = (state) => state;
export default profileSlice.reducer;
