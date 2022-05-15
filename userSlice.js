import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
  userToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      (state.userName = action.payload.userName),
        (state.userEmail = action.payload.userEmail),
        (state.userToken = action.payload.userToken);
    },
    setLoggedUser: (state) => {
      (state.userName = null),
        (state.userEmail = null),
        (state.userToken = null);
    },
  },
});

export const { setActiveUser, setLoggedUser } = userSlice.actions;
export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserToken = (state) => state.user.userToken;

export default userSlice.reducer;
