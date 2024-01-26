import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    getUser(state) {},
  },
});

export const { getUser } = usersSlice.actions;
export default usersSlice.reducer;
