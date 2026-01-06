import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    setUsers(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    addUser(state, action) {
      state.users.push(action.payload);
    },
  },
});

export const { startLoading, setUsers, addUser } = userSlice.actions;
export default userSlice.reducer;
