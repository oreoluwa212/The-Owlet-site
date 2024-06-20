import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loggedInUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    try {
      const response = await axios.post(
        `https://theowletapp.com/server/api/v1/users/auth/login`,
        userData
      );
      // Assuming response.data contains the data you need
      const responseData = response.data.data;

      localStorage.setItem("token", responseData.accessToken);
      return responseData;
    } catch (error) {
      throw error; // Let the error propagate to be caught in .rejected
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loggedInUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loggedInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loggedInUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message; // Set error message from action
      });
  },
});

export default userSlice.reducer;
