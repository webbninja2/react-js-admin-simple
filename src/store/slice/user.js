import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
    editUser: (state, action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    deleteUser: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
