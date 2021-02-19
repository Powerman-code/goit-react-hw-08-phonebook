import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  errorLogin: null,
  errorRegister: null,
  isLoggedIn: false,
  IsFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      //   будем писать через иммер, мутируя стейт
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.register.rejected]: (state, action) => {
      state.errorRegister = 'Registration error. Please try again';
      // console.log(action.errorRegister);
    },

    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.logIn.rejected]: (state, action) => {
      state.errorLogin =
        'Login error. Please check email or password, and try again';
      console.log(state.errorLogin);
    },

    [authOperations.logOut.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.pending]: (state, _) => {
      state.IsFetchingCurrentUser = true;
    },

    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.IsFetchingCurrentUser = false;
    },

    [authOperations.fetchCurrentUser.rejected]: (state, action) => {
      state.IsFetchingCurrentUser = false;
      state.error = action.error.message;
    },
  },
});

export default authSlice.reducer;
