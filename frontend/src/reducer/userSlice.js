import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../config/axiosDefault";

//get user from backend

export const fetchUser = createAsyncThunk("user/fetchUser", async (token) => {
  try {
    const { data } = await instance.get("/api/user/myprofile", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(`My profile fetch error ${{ error }}`);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLogin: false,
    user: {},
  },
  reducers: {
    setUser: (state, actoin) => {
      state.user = actoin.payload;
      state.isLogin = true;
    },
    logOutUser: (state) => {
      state.user = {};
      state.isLogin = false;
    },
  },
  // extraReducers: {
  //   getUser: (builder) => {},
  // },
});

export const { setUser, logOutUser } = usersSlice.actions;
export default usersSlice.reducer;
