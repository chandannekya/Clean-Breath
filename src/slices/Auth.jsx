import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  signupData: null,
  loading: false,
  islogin: localStorage.getItem("token") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setIslogin(state, action) {
      state.islogin = action.payload;
    },
  },
});

export const { setToken, setUser, setSignupData, setLoading, setIslogin } =
  authSlice.actions;
export default authSlice.reducer;
