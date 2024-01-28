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
    return data.user;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    isLogin: false,
    user: {},
    error: null,
  },
  reducers: {
    setUser: (state, actoin) => {
      state.isLogin = true;
      state.user = actoin.payload;
      state.isLoading = false;
    },
    logOutUser: (state) => {
      state.user = {};
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.user = {};
      state.error = action.error;
    });
  },
});

export const { setUser, logOutUser } = usersSlice.actions;
export default usersSlice.reducer;
