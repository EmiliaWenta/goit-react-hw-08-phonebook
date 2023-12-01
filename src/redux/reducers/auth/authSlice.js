import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, currentUser } from '../auth/operations';

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      });
  },
});

export const authReducer = authSlice.reducer;
